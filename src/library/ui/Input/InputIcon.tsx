import React from "react";
import { Pressable } from "react-native";

import { getIconColor } from "./utils";
import Icon from "../Icon/Icon";
import { IconNameType } from "../Icon/types";

interface InputIconProps {
	secureTextEntry: boolean;
	icon?: IconNameType | null;
	variantIconName: string | null;
	focused: boolean;
	successState: boolean;
	errorState: boolean;
	passwordVisibilityIcon: IconNameType;
	handlePasswordVisibility: () => void;
}

export const InputIcon = React.memo(
	({
		secureTextEntry,
		icon,
		variantIconName,
		focused,
		successState,
		errorState,
		passwordVisibilityIcon,
		handlePasswordVisibility,
	}: InputIconProps): React.JSX.Element | null => {
		if (secureTextEntry) {
			return (
				<Pressable testID="password-visibility-button" onPress={handlePasswordVisibility}>
					<Icon name={passwordVisibilityIcon} size="s" color="neutralLight" testID="secure-input-icon" />
				</Pressable>
			);
		}

		const iconColor = getIconColor({
			focused,
			errorState,
			successState,
		});

		if (!icon && !variantIconName) {
			return null;
		}

		return <Icon name={(variantIconName as IconNameType) ?? icon} size="s" color={iconColor} testID="input-icon" />;
	},
);
