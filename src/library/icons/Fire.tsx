import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const SvgFire = (props: SvgProps) => (
	<Svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
		<Path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M15.513 20.657c-.953.875-2.214 1.351-3.554 1.343h-.002c-1.338-.011-2.591-.508-3.528-1.397-1.928-1.827-1.902-4.78.058-6.58l3.09-2.844a.697.697 0 0 1 .479-.179c.178.001.35.067.474.186l3.041 2.889c1.928 1.828 1.902 4.78-.058 6.582ZM13.046.393c-.56-.522-1.495-.522-2.076-.02a1.274 1.274 0 0 0-.453 1.05c.013.187.013.37.013.568 0 3.41-.943 5.425-1.463 5.924-.222-.221-.624-.803-.963-1.99-.132-.465-.528-.829-1.037-.954a1.578 1.578 0 0 0-1.425.35L4.199 6.644c-4.27 3.956-4.264 10.402.011 14.363 2.073 1.928 4.835 2.99 7.778 2.992H12c2.947 0 5.715-1.061 7.794-2.99 4.28-3.963 4.273-10.409-.012-14.362L13.046.394Z"
			fill={props?.fill ?? "#273142"}
		/>
	</Svg>
);

export default SvgFire;
