import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const SvgFinanceAccounting = (props: SvgProps) => (
	<Svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
		<Path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M3 0a3 3 0 0 0-3 3v8h11V0H3Zm10 0v11h11V3a3 3 0 0 0-3-3h-8Zm11 13H13v11h8a3 3 0 0 0 3-3v-8ZM11 24V13H0v8a3 3 0 0 0 3 3h8ZM5.5 2.5a.682.682 0 0 0-.682.682v1.636H3.182a.682.682 0 1 0 0 1.364h1.636v1.636a.682.682 0 1 0 1.364 0V6.182h1.636a.682.682 0 1 0 0-1.364H6.182V3.182A.682.682 0 0 0 5.5 2.5Zm1.246 13.715a.734.734 0 1 1 1.039 1.04L6.539 18.5l1.246 1.246a.734.734 0 1 1-1.039 1.039L5.5 19.539l-1.246 1.246a.735.735 0 0 1-1.039-1.039L4.462 18.5l-1.247-1.246a.734.734 0 1 1 1.039-1.039L5.5 17.462l1.246-1.247Zm9.436-10.033a.682.682 0 0 1 0-1.364h4.636a.682.682 0 0 1 0 1.364h-4.636Zm1.604 9.825c0-.395.32-.717.714-.717a.717.717 0 0 1 0 1.434.717.717 0 0 1-.714-.717Zm0 4.983c0-.394.32-.72.714-.72a.72.72 0 0 1 .715.72.72.72 0 0 1-.715.72.72.72 0 0 1-.714-.72ZM15.5 18.5a.7.7 0 0 1 .7-.7h4.6a.7.7 0 1 1 0 1.4h-4.6a.7.7 0 0 1-.7-.7Z"
			fill={props?.fill ?? "#273142"}
		/>
	</Svg>
);

export default SvgFinanceAccounting;
