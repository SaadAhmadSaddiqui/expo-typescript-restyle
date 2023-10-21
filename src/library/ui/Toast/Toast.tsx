import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import theme from "@theme";

import { useKeyboard } from "./hooks";
import ToastView from "./ToastView";
import { ShowMethodParams, ToastDataWithId, TostDurations } from "./types";
import { uuid } from "./utils";
import Box from "../Box";

interface ToastProps {
	ignoreKeyboard?: boolean;
	extraPaddingBottom?: number;
}

type ToastType = React.FC<ToastProps> & {
	show: (params: ShowMethodParams) => void;
};

// @ts-ignore
const Toast: ToastType = React.memo(({ ignoreKeyboard = false, extraPaddingBottom: extraMarginBottom = 0 }: ToastProps) => {
	const [data, setData] = React.useState<ToastDataWithId | null>(null);
	const insets = useSafeAreaInsets();
	const { keyboardHeight, isKeyboardVisible } = useKeyboard();

	React.useEffect(() => {
		Toast.show = (params: ShowMethodParams) => {
			setData({
				id: uuid(16),
				variant: params.variant,
				text: params.text,
				duration: params.duration ?? TostDurations.SHORT,
				action: params.action!,
				actionText: params.actionText!,
				bottomOffset: params.bottomOffset ?? 0,
			});
		};
	}, []);

	const paddingBottom = React.useMemo(() => {
		if (ignoreKeyboard || !isKeyboardVisible) {
			return {
				paddingBottom: insets.bottom * 3 + extraMarginBottom + data?.bottomOffset!,
			};
		}
		return {
			paddingBottom: theme.spacing["2xs"] + keyboardHeight + extraMarginBottom + data?.bottomOffset!,
		};
	}, [ignoreKeyboard, extraMarginBottom, insets.bottom, isKeyboardVisible, keyboardHeight, data?.bottomOffset]);

	const onDisappeared = React.useCallback(() => setData(null), []);

	const toastView = React.useMemo(() => {
		return (
			<ToastView
				key={data?.id}
				variant={data?.variant}
				text={data?.text}
				onDisappeared={onDisappeared}
				duration={data?.duration!}
				action={data?.action}
				actionText={data?.actionText}
			/>
		);
	}, [data?.action, data?.actionText, data?.duration, data?.id, data?.text, data?.variant, onDisappeared]);

	if (!data) {
		return <></>;
	}

	return (
		<Box
			position="absolute"
			pointerEvents="box-none"
			testID="toast-wrapper"
			accessibilityLabel="toast-wrapper"
			width="100%"
			px="xl"
			bottom={0}
			style={paddingBottom}
		>
			{toastView}
		</Box>
	);
});

Toast.show = () => {
	// eslint-disable-next-line no-console
	console.warn("Please add <Toast/> to your root view");
};

export default Toast;
