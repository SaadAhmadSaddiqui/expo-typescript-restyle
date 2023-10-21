import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const SvgShoppingBagCancel = (props: SvgProps) => (
	<Svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
		<Path
			d="m17.41 5.088.073.412h2.5a2.5 2.5 0 0 1 2.495 2.342l.093 1.462a9.453 9.453 0 0 0-5.135-1.794 1.765 1.765 0 0 0-.261-.008A9.5 9.5 0 0 0 10.072 23.5H3.195A2.5 2.5 0 0 1 .7 20.842l.821-13A2.5 2.5 0 0 1 4.016 5.5h2.5l.073-.412C7.06 2.472 9.31.5 12 .5c2.691 0 4.94 1.972 5.41 4.588Zm-2.076.412h.679l-.202-.648C15.29 3.182 13.76 2 11.999 2c-1.76 0-3.292 1.182-3.81 2.852l-.203.648h7.348Zm-8.584 2a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5ZM23.5 17a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-7.732-3.525a1.621 1.621 0 1 0-2.293 2.293L14.707 17l-1.232 1.232a1.621 1.621 0 1 0 2.293 2.293L17 19.293l1.232 1.232a1.621 1.621 0 1 0 2.293-2.293L19.293 17l1.232-1.232a1.621 1.621 0 1 0-2.293-2.293L17 14.707l-1.232-1.232Z"
			fill={props?.fill ?? "#273142"}
			stroke={props?.fill ?? "#273142"}
		/>
	</Svg>
);

export default SvgShoppingBagCancel;
