import { Dimensions } from "react-native";

import { Scaler } from "@utils/lightOrDark";

const DOCUMENT_WIDTH = 380;
const scaler = new Scaler(DOCUMENT_WIDTH);

export const measurements = {
	gutter: scaler.getScaledValue(10),
	isTablet: Dimensions.get("window").width / Dimensions.get("window").height > 0.6,
	fontSizes: {
		s: scaler.getScaledValue(7),
		r: scaler.getScaledValue(8),
		m: scaler.getScaledValue(10),
		l: scaler.getScaledValue(14),
		xl: scaler.getScaledValue(18),
	},
	scaler: scaler,
	window: {
		w: Dimensions.get("window").width,
		h: Dimensions.get("window").height,
	},
	sizes: {
		s: scaler.getScaledValue(7),
		r: scaler.getScaledValue(8),
		m: scaler.getScaledValue(10),
		l: scaler.getScaledValue(14),
		xl: scaler.getScaledValue(18),
	},
};
export type Measurements = typeof measurements;
