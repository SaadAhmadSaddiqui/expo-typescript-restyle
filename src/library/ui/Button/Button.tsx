import React, { useCallback } from "react";
import { ColorValue, Pressable } from "react-native";

import {
	backgroundColor,
	border,
	createRestyleComponent,
	createVariant,
	layout,
	LayoutProps,
	spacing,
	spacingShorthand,
	SpacingProps,
	SpacingShorthandProps,
	VariantProps,
	useResponsiveProp,
} from "@ergenekonyigit/restyle";
import { Theme } from "@theme";

import { useIsPressed } from "./hooks";
import { variantColorSelector } from "./utils";
import Box from "../Box";
import Icon from "../Icon/Icon";
import { IconNameType } from "../Icon/types";
import Text, { TextVariants } from "../Text";

type ButtonProps = React.ComponentProps<typeof Box> &
	React.ComponentProps<typeof Pressable> & {
		children?: React.ReactNode;
		onPress?: () => void;
		label?: string;
		tintColor?: ColorValue;
		icon?: IconNameType | null;
		disabled?: boolean;
		isPressed?: boolean;
		filled?: boolean;
		size?: VariantProps<Theme, "buttonSizeVariants">["variant"];
		kind?: VariantProps<Theme, "buttonKindVariants">["variant"];
		variant?: VariantProps<Theme, "buttonVariants">["variant"];
	};

const sizeVariant = createVariant<Theme, "buttonSizeVariants", "size">({
	property: "size",
	themeKey: "buttonSizeVariants",
});

const kindVariant = createVariant<Theme, "buttonKindVariants", "kind">({
	property: "kind",
	themeKey: "buttonKindVariants",
});

const variantVariant = createVariant<Theme, "buttonVariants", "variant">({
	property: "variant",
	themeKey: "buttonVariants",
});

const ButtonContainer = createRestyleComponent<
	ButtonProps & VariantProps<Theme, "buttonSizeVariants"> & VariantProps<Theme, "buttonKindVariants"> & VariantProps<Theme, "buttonVariants">,
	Theme
>([layout, spacing, border, backgroundColor, sizeVariant, kindVariant, variantVariant], Box);

type PressableProps = React.ComponentProps<typeof Pressable> & LayoutProps<Theme> & SpacingProps<Theme> & SpacingShorthandProps<Theme>;

const PressableContainer = createRestyleComponent<PressableProps, Theme>([layout, spacing, spacingShorthand], Pressable);

const Button = ({
	size = "m",
	kind = "default",
	variant = "primary",
	icon,
	label,
	tintColor,
	disabled = false,
	filled = false,
	...rest
}: ButtonProps) => {
	const { pressableProps, isPressed } = useIsPressed(rest.isPressed);

	/* istanbul ignore next */
	const onPressIn = useCallback(() => pressableProps.onPressIn(), [pressableProps]);
	/* istanbul ignore next */
	const onPressOut = useCallback(() => pressableProps.onPressOut(), [pressableProps]);

	const buttonHorizontalPadding = useResponsiveProp(size);

	const textVariant: TextVariants = (
		{
			s: "subtitle3Medium",
			m: "subtitle3Medium",
			l: "subtitle2Medium",
		} as const
	)[size as string];

	const variantColors = variantColorSelector({
		variant,
		kind,
		isPressed,
		disabled,
	});

	const typeColor = disabled ? "neutralLighter" : isPressed && variant !== "tertiary" ? "neutralFull" : variantColors.color;

	const iconView = React.useMemo(() => {
		if (!icon) {
			return null;
		}
		if (variant === "transparent") {
			return <Icon name={icon} size="s" color={tintColor} testID="button-icon" />;
		}
		return <Icon name={icon} size="s" color={typeColor} testID="button-icon" />;
	}, [icon, typeColor, tintColor, variant]);

	const labelView = React.useMemo(() => {
		if (!label) {
			return null;
		}
		return (
			<Text variant={textVariant} color={typeColor} marginLeft={icon ? "2xs" : "none"} testID="button-text">
				{label}
			</Text>
		);
	}, [icon, label, textVariant, typeColor]);

	return (
		<PressableContainer onPressIn={onPressIn} onPressOut={onPressOut} disabled={disabled} {...rest}>
			<ButtonContainer
				size={size}
				kind={kind}
				// @ts-ignore
				variant={variant as string}
				paddingHorizontal={buttonHorizontalPadding}
				flexDirection="row"
				alignItems="center"
				justifyContent="center"
				alignSelf={filled ? "stretch" : "flex-start"}
				{...variantColors}
			>
				{iconView}
				{labelView}
			</ButtonContainer>
		</PressableContainer>
	);
};

export default Button;
