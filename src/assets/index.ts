import { ImageSourcePropType } from "react-native";

export const images = {
	appLogo: require("./images/icon.png") as ImageSourcePropType,
};

export type ImagesType = typeof images;

export type ImagesKeys = keyof ImagesType;
