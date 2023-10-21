import React from "react";

import { getHelpText, getTextColor } from "./utils";
import Box from "../Box";
import Text from "../Text";

export const InputHelpText = React.memo(
	({
		helpText,
		successState,
		errorState,
		errorText,
		successText,
	}: {
		helpText?: string | null;
		errorState: boolean;
		errorText?: string | null;
		successState: boolean;
		successText?: string | null;
	}): React.JSX.Element | null => {
		if (!helpText && !errorText && !successText) {
			return null;
		}

		const textColor = getTextColor({ errorState, successState });

		const content = getHelpText({
			helpText,
			errorText,
			successText,
			errorState,
			successState,
		});

		return content ? (
			<Box mt="3xs" ml="m">
				<Text variant="subtitle4Regular" color={textColor}>
					{content}
				</Text>
			</Box>
		) : null;
	},
);
