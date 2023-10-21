import React from "react";
import { Animated, LayoutChangeEvent, LayoutRectangle, PanResponder, StyleSheet, TouchableOpacity, useWindowDimensions } from "react-native";

import { createRestyleComponent, createVariant, VariantProps } from "@ergenekonyigit/restyle";
import { Theme } from "@theme";

import { TostDurations } from "./types";
import { capitalizeFirstLetter, getFirstNChar, pauseableTimer } from "./utils";
import Box from "../Box";
import Text from "../Text";

type ToastViewProps = React.ComponentProps<typeof Animated.View> & {
	variant?: VariantProps<Theme, "toastVariants">["variant"];
	text?: string;
	onDisappeared?: () => void;
	duration?: number;
	action?: (close: () => void) => void;
	actionText?: string;
};

const variantVariant = createVariant<Theme, "toastVariants", "variant">({
	property: "variant",
	themeKey: "toastVariants",
});

const ToastViewContainer = createRestyleComponent<ToastViewProps & VariantProps<Theme, "toastVariants">, Theme>([variantVariant], Animated.View);

export type ToastViewRef = {
	show: () => void;
	hide: () => void;
};

const ToastView = React.forwardRef<ToastViewRef, ToastViewProps>(
	({ variant = "default", text, duration = TostDurations.SHORT, onDisappeared, action, actionText, ...rest }, ref) => {
		const dims = useWindowDimensions();
		const anim = React.useRef(new Animated.Value(dims.height / 2)).current;
		const layoutSizesRef = React.useRef<LayoutRectangle>();
		const timerRef = React.useRef(
			pauseableTimer(() => {
				playHideAnim();
			}, duration),
		);

		const panResponderRef = React.useRef(
			PanResponder.create({
				onStartShouldSetPanResponderCapture: (e, gestureState) => {
					return !action || !(gestureState.dx === 0 && gestureState.dy === 0);
				},
				onMoveShouldSetPanResponder: () => true,
				onPanResponderGrant: () => {
					timerRef.current.pause();
				},
				onPanResponderMove: (e, gestureState) => {
					if (gestureState.dy >= 0) {
						Animated.event([null, { dy: anim }], { useNativeDriver: false })(e, gestureState);
					}
				},
				onPanResponderRelease: (e, gestureState) => {
					if (gestureState.dy > (layoutSizesRef.current?.height ?? 0) || gestureState.vy > 0.05) {
						playHideAnim();
					} else {
						playShowAnim();
						timerRef.current.resume(2000);
					}
				},
			}),
		);

		React.useImperativeHandle(ref, () => ({
			show() {
				playShowAnim();
			},
			hide() {
				playHideAnim();
			},
		}));

		const playShowAnim = React.useCallback(() => {
			Animated.timing(anim, {
				toValue: 0,
				duration: 333,
				useNativeDriver: true,
			}).start();
		}, [anim]);

		const playHideAnim = React.useCallback(() => {
			Animated.timing(anim, {
				toValue: dims.height / 2,
				duration: 333,
				useNativeDriver: true,
			}).start(onDisappeared);
		}, [anim, dims.height, onDisappeared]);

		React.useEffect(() => {
			playShowAnim();
			return () => {
				timerRef!.current.kill();
			};
		}, [playShowAnim, timerRef]);

		const onLayout = React.useCallback((event: LayoutChangeEvent) => {
			layoutSizesRef.current = event.nativeEvent.layout;
		}, []);

		const actionView = React.useMemo(() => {
			if (!action) {
				return null;
			}
			return (
				// eslint-disable-next-line react-perf/jsx-no-new-function-as-prop
				<TouchableOpacity onPress={() => action(playHideAnim)} testID="toast-action" accessibilityLabel="toast-action">
					<Text variant="subtitle3Medium" color="neutralDarker" testID="toast-action-text" accessibilityLabel="toast-action-text" p="2xs">
						{capitalizeFirstLetter(actionText)}
					</Text>
				</TouchableOpacity>
			);
		}, [action, actionText, playHideAnim]);

		const styles = StyleSheet.create({
			toastViewContainer: { transform: [{ translateY: anim }] },
		});

		return (
			<ToastViewContainer
				{...panResponderRef.current.panHandlers}
				variant={variant}
				onLayout={onLayout}
				testID="toast-container"
				accessibilityLabel="toast-container"
				style={styles.toastViewContainer}
				{...rest}
			>
				<Box flex={1} shadowRadius={30}>
					<Text variant="body2" color="neutralDarker" testID="toast-text" accessibilityLabel="toast-text" textAlign="left">
						{getFirstNChar(text!, 110, "...")}
					</Text>
				</Box>
				{actionView}
			</ToastViewContainer>
		);
	},
);

export default ToastView;
