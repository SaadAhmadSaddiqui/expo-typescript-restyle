export type BreakPointType = "phone" | "longPhone" | "tablet" | "largeTablet";

export const breakpoints = {
	phone: 0,
	longPhone: {
		width: 0,
		height: 812,
	},
	tablet: 768,
	largeTablet: 1024,
};
