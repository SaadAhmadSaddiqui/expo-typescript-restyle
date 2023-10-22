import { createTheme } from "@ergenekonyigit/restyle";

import { breakpoints } from "./breakpoints";
import { colors } from "./colors";

const theme = createTheme({
	breakpoints,
	colors: {
		...colors,
		primaryForeground: colors.neutralSemi,
		primaryBackground: colors.neutralFull,
		defaultColor: colors.primaryColor,
		defaultHover: colors.primaryHover,
		neutralColor: colors.secondaryColor,
		neutralHover: colors.secondaryHover,
	},
	spacing: {
		"-6xl": -80,
		"-5xl": -64,
		"-4xl": -48,
		"-3xl": -40,
		"-2xl": -32,
		"-xl": -24,
		"-l": -20,
		"-m": -16,
		"-s": -14,
		"-xs": -12,
		"-2xs": -8,
		"-3xs": -4,
		"-4xs": -2,
		none: 0,
		"4xs": 2,
		"3xs": 4,
		"2xs": 8,
		xs: 12,
		s: 14,
		m: 16,
		l: 20,
		xl: 24,
		"2xl": 32,
		"3xl": 40,
		"4xl": 48,
		"5xl": 64,
		"6xl": 80,
	},
	zIndices: {
		layer_0: 0,
		layer_1: 1,
		layer_2: 2,
		layer_3: 3,
	},
	borderRadii: {
		none: 0,
		xs: 2,
		s: 4,
		m: 6,
		l: 8,
		half: "50%",
		full: 999,
	},
	fonts: {
		light: "System",
		regular: "System",
		medium: "System",
		semiBold: "System",
		bold: "System",
	},
	textVariants: {
		defaults: {
			fontSize: 14,
			fontFamily: "regular",
			color: "primaryForeground",
		},
		// Heading
		heading1: {
			fontSize: 30,
			fontWeight: "400",
			fontFamily: "regular",
			lineHeight: 36,
		},
		heading2: {
			fontSize: 28,
			fontWeight: "400",
			fontFamily: "regular",
			lineHeight: 32,
		},
		heading3: {
			fontSize: 24,
			fontWeight: "400",
			fontFamily: "regular",
			lineHeight: 28,
		},
		heading1Medium: {
			fontSize: 30,
			fontWeight: "500",
			fontFamily: "medium",
			lineHeight: 36,
		},
		heading2Medium: {
			fontSize: 28,
			fontWeight: "500",
			fontFamily: "medium",
			lineHeight: 32,
		},
		heading3Medium: {
			fontSize: 24,
			fontWeight: "500",
			fontFamily: "medium",
			lineHeight: 28,
		},
		heading1Semibold: {
			fontSize: 30,
			fontWeight: "500",
			fontFamily: "semiBold",
			lineHeight: 36,
		},
		heading2Semibold: {
			fontSize: 28,
			fontWeight: "500",
			fontFamily: "semiBold",
			lineHeight: 32,
		},
		heading3Semibold: {
			fontSize: 24,
			fontWeight: "500",
			fontFamily: "semiBold",
			lineHeight: 28,
		},
		heading1Bold: {
			fontSize: 30,
			fontWeight: "700",
			fontFamily: "bold",
			lineHeight: 36,
		},
		heading2Bold: {
			fontSize: 28,
			fontWeight: "700",
			fontFamily: "bold",
			lineHeight: 32,
		},
		heading3Bold: {
			fontSize: 24,
			fontWeight: "700",
			fontFamily: "bold",
			lineHeight: 28,
		},
		// Subtitle1
		subtitle1Regular: {
			fontSize: 20,
			fontWeight: "400",
			fontFamily: "regular",
			lineHeight: 24,
		},
		subtitle1Medium: {
			fontSize: 20,
			fontWeight: "500",
			fontFamily: "medium",
			lineHeight: 24,
		},
		subtitle1Semibold: {
			fontSize: 20,
			fontWeight: "600",
			fontFamily: "semiBold",
			lineHeight: 24,
		},
		subtitle1Bold: {
			fontSize: 20,
			fontWeight: "700",
			fontFamily: "bold",
			lineHeight: 24,
		},
		// Subtitle1
		subtitle2Regular: {
			fontSize: 16,
			fontWeight: "400",
			fontFamily: "regular",
			lineHeight: 20,
		},
		subtitle2Medium: {
			fontSize: 16,
			fontWeight: "500",
			fontFamily: "medium",
			lineHeight: 20,
		},
		subtitle2Semibold: {
			fontSize: 16,
			fontWeight: "600",
			fontFamily: "semiBold",
			lineHeight: 20,
		},
		subtitle2Bold: {
			fontSize: 16,
			fontWeight: "700",
			fontFamily: "bold",
			lineHeight: 20,
		},
		// Subtitle3
		subtitle3Regular: {
			fontSize: 14,
			fontWeight: "400",
			fontFamily: "regular",
			lineHeight: 16,
		},
		subtitle3Medium: {
			fontSize: 14,
			fontWeight: "500",
			fontFamily: "medium",
			lineHeight: 16,
		},
		subtitle3Semibold: {
			fontSize: 14,
			fontWeight: "600",
			fontFamily: "semiBold",
			lineHeight: 16,
		},
		subtitle3Bold: {
			fontSize: 14,
			fontWeight: "700",
			fontFamily: "bold",
			lineHeight: 16,
		},
		// Subtitle4
		subtitle4Regular: {
			fontSize: 12,
			fontWeight: "400",
			fontFamily: "regular",
			lineHeight: 14,
		},
		subtitle4Medium: {
			fontSize: 12,
			fontWeight: "500",
			fontFamily: "medium",
			lineHeight: 14,
		},
		subtitle4Semibold: {
			fontSize: 12,
			fontWeight: "600",
			fontFamily: "semiBold",
			lineHeight: 14,
		},
		subtitle4Bold: {
			fontSize: 12,
			fontWeight: "700",
			fontFamily: "bold",
			lineHeight: 14,
		},
		// Body
		body1: {
			fontSize: 16,
			fontWeight: "400",
			fontFamily: "regular",
			lineHeight: 18,
		},
		body2: {
			fontSize: 14,
			fontWeight: "400",
			fontFamily: "regular",
			lineHeight: 16,
		},
		body3: {
			fontSize: 12,
			fontWeight: "400",
			fontFamily: "regular",
			lineHeight: 14,
		},
		/**
		 * @deprecated This variant name will be removed
		 */
		bodyUnderline: {
			fontSize: 14,
			fontWeight: "400",
			fontFamily: "regular",
			lineHeight: 16,
			textDecorationLine: "underline",
		},
		/**
		 * @deprecated This variant name will be removed
		 */
		bodyTextLink: {
			fontSize: 14,
			fontWeight: "500",
			fontFamily: "medium",
			lineHeight: 16,
			textDecorationLine: "underline",
		},
		/**
		 * @deprecated This variant name will be removed
		 */
		bodyLongText: {
			fontSize: 14,
			fontWeight: "400",
			fontFamily: "regular",
			lineHeight: 16,
		},
		// Caption
		caption: {
			fontSize: 12,
			fontWeight: "500",
			fontFamily: "regular",
			lineHeight: 14,
		},
		/**
		 * @deprecated This variant name will be removed
		 */
		captionText: {
			fontSize: 12,
			fontWeight: "500",
			fontFamily: "regular",
			lineHeight: 14,
		},
		/**
		 * @deprecated This variant name will be removed
		 */
		captionMedium: {
			fontSize: 12,
			fontWeight: "500",
			fontFamily: "medium",
			lineHeight: 12,
		},
		/**
		 * @deprecated This variant name will be removed
		 */
		captionLongText: {
			fontSize: 12,
			fontWeight: "400",
			fontFamily: "regular",
			lineHeight: 12,
		},
		/**
		 * @deprecated This variant name will be removed
		 */
		captionTextLink: {
			fontSize: 12,
			fontWeight: "500",
			fontFamily: "medium",
			lineHeight: 12,
			textDecorationLine: "underline",
		},
	},
	iconSizeVariants: {
		"4xs": 8,
		"3xs": 10,
		"2xs": 12,
		xs: 14,
		s: 16,
		m: 20,
		l: 24,
		xl: 32,
	},
	buttonSizeVariants: {
		defaults: {
			height: 40,
		},
		s: {
			height: 32,
		},
		m: {
			height: 40,
		},
		l: {
			height: 48,
		},
	},
	buttonKindVariants: {
		defaults: {
			backgroundColor: "primaryKey",
		},
		default: {
			backgroundColor: "primaryKey",
		},
		neutral: {
			backgroundColor: "neutralDarker",
		},
		success: {
			backgroundColor: "successKey",
		},
		danger: {
			backgroundColor: "dangerKey",
		},
	},
	buttonVariants: {
		defaults: {
			borderWidth: 1,
			borderRadius: "m",
		},
		primary: {},
		secondary: {},
		tertiary: {},
		transparent: {
			backgroundColor: "transparent",
			borderWidth: 0,
		},
	},
	inputSizeVariants: {
		defaults: {},
		small: {
			height: 32,
		},
		medium: {
			height: 40,
		},
		large: {
			height: 48,
		},
	},
	alertVariants: {
		defaults: {
			borderWidth: 1,
			borderRadius: "l",
			backgroundColor: "accentBackground",
			borderColor: "primaryColor",
		},
		info: {
			backgroundColor: "accentBackground",
			borderColor: "primaryColor",
		},
		warning: {
			backgroundColor: "warningBackground",
			borderColor: "warningColor",
		},
		success: {
			backgroundColor: "successBackground",
			borderColor: "successColor",
		},
		danger: {
			backgroundColor: "alertBackground",
			borderColor: "dangerColor",
		},
	},
	toastVariants: {
		defaults: {
			borderWidth: 1,
			borderRadius: "m",
			backgroundColor: "accentBackground",
			borderColor: "primaryColor",
			flexDirection: "row",
			minHeight: 40,
			paddingHorizontal: "xs",
			paddingVertical: "2xs",
			alignItems: "center",

			shadowColor: "black",
			shadowOffset: {
				width: 0,
				height: 5,
			},
			shadowOpacity: 0.25,
			shadowRadius: 10,

			elevation: 5,
		},
		default: {
			backgroundColor: "accentBackground",
			borderColor: "primaryColor",
		},
		success: {
			backgroundColor: "successBackground",
			borderColor: "successColor",
		},
		error: {
			backgroundColor: "alertBackground",
			borderColor: "dangerColor",
		},
		warning: {
			backgroundColor: "warningBackground",
			borderColor: "warningColor",
		},
	},
	checkboxVariants: {
		defaults: {
			borderWidth: 1,
			borderRadius: "xs",
			backgroundColor: "white",
			borderColor: "neutralLighter",
			height: 16,
			width: 16,
			justifyContent: "center",
			alignItems: "center",
		},
		unchecked: {
			backgroundColor: "white",
			borderColor: "neutralLighter",
		},
		checked: {
			backgroundColor: "primaryColor",
			borderColor: "primaryColor",
		},
		disabledChecked: {
			backgroundColor: "primaryBackground",
			borderColor: "primaryBackground",
		},
		disabledUnchecked: {
			backgroundColor: "primaryBackground",
		},
	},
	badgeVariants: {
		defaults: {
			backgroundColor: "primaryContrast",
			color: "primaryKey",
			position: "absolute",
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
		default: {
			backgroundColor: "primaryContrast",
			color: "primaryKey",
		},
		neutral: {
			backgroundColor: "neutralLightest",
			color: "neutralDarker",
		},
		success: {
			backgroundColor: "successContrast",
			color: "successKey",
		},
		warning: {
			backgroundColor: "warningContrast",
			color: "warningKey",
		},
		danger: {
			backgroundColor: "dangerContrast",
			color: "dangerKey",
		},
		transparent: {
			color: "primaryKey",
		},
	},
	badgeSizeVariants: {
		defaults: {
			paddingHorizontal: "3xs",
			paddingVertical: "3xs",
			fontSize: 12,
		},
		small: {
			paddingHorizontal: "3xs",
			paddingVertical: "4xs",
			fontSize: 10,
		},
		medium: {
			paddingHorizontal: "3xs",
			paddingVertical: "3xs",
			fontSize: 12,
		},
		large: {
			paddingHorizontal: "2xs",
			paddingVertical: "2xs",
			fontSize: 14,
		},
	},
});

export const darkTheme: Theme = {
	...theme,
	colors: {
		...theme.colors,
		primaryForeground: colors.neutralLightest,
		primaryBackground: colors.neutralDarkest,
		defaultColor: colors.primaryColor,
		defaultHover: colors.primaryHover,
		neutralColor: colors.secondaryColor,
		neutralHover: colors.secondaryHover,
	},
};

export type Theme = typeof theme;

export default theme;
