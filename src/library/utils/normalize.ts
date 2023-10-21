import { Dimensions, PixelRatio } from "react-native";
import { widthPercentageToDP as wp2dp, heightPercentageToDP as hp2dp } from "react-native-responsive-screen";
const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");
const scale = deviceWidth / 375;

export const normalizeFont = (size: number) => {
	return Math.round(PixelRatio.roundToNearestPixel(size * scale));
};
/**
 * Width-Percentage
 * Converts width dimension to percentage
 * 360, 760 - design were made using this scale
 * @param dimension directly taken from design wireframes
 * @returns {string} percentage string e.g. '25%'
 */
export const normalizeWidth = (dimension: number) => {
	return wp2dp((dimension / deviceWidth) * 100 + "%");
};

/**
 * Height-Percentage
 * Converts width dimension to percentage
 * * 360, 760 - design were made using this scale
 * @param dimension directly taken from design wireframes
 * @returns {string} percentage string e.g. '25%'
 */
export const normalizeHeight = (dimension: number) => {
	return hp2dp((dimension / deviceHeight) * 100 + "%");
};
