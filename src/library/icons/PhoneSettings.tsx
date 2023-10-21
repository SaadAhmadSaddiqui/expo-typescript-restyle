import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const SvgPhoneSettings = (props: SvgProps) => (
	<Svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
		<Path
			d="M21.518 14.776a13.8 13.8 0 0 1-3.09-.768 2.888 2.888 0 0 0-3.034.654l-1.149 1.147A17.669 17.669 0 0 1 8.167 9.74l1.15-1.147a2.878 2.878 0 0 0 .643-3.017 13.682 13.682 0 0 1-.77-3.11A2.913 2.913 0 0 0 6.318 0H2.87A2.9 2.9 0 0 0 .154 1.96 2.887 2.887 0 0 0 .01 3.132 23.473 23.473 0 0 0 3.63 13.33a22.962 22.962 0 0 0 7.065 7.055A23.414 23.414 0 0 0 20.863 24h.264a2.875 2.875 0 0 0 2.657-1.779c.144-.349.217-.723.216-1.1v-3.442a2.877 2.877 0 0 0-2.482-2.903Z"
			fill={props?.fill ?? "#273142"}
		/>
		<Path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M16.728.296c.19-.19.447-.296.715-.296h1.162a1.005 1.005 0 0 1 .953 1.042v.656a.2.2 0 0 0 .132.175c.04.018.083.028.126.03a.192.192 0 0 0 .12-.049l.462-.463a.995.995 0 0 1 .713-.295.973.973 0 0 1 .707.295l.803.807a.995.995 0 0 1 0 1.427l-.461.463a.205.205 0 0 0 0 .223c.036.09.096.163.18.163h.653c.267 0 .523.106.712.296.189.19.295.447.295.715v1.138a1.014 1.014 0 0 1-.983.976h-.653a.21.21 0 0 0-.174.138.205.205 0 0 0 0 .223l.461.463a1.007 1.007 0 0 1 0 1.427l-.803.807a.984.984 0 0 1-.707.295.992.992 0 0 1-.713-.295l-.456-.463a.166.166 0 0 0-.126-.049.246.246 0 0 0-.096 0c-.09.043-.156.103-.156.187v.656a1.02 1.02 0 0 1-.298.716 1.01 1.01 0 0 1-.715.296H17.45c-.268 0-.524-.107-.713-.296a1.014 1.014 0 0 1-.294-.716v-.656a.2.2 0 0 0-.132-.174.31.31 0 0 0-.126 0 .185.185 0 0 0-.12.042l-.462.463a.995.995 0 0 1-.713.295.973.973 0 0 1-.707-.295l-.803-.806a1 1 0 0 1-.3-.717c.003-.269.11-.526.3-.717l.461-.457a.205.205 0 0 0 0-.223c-.036-.09-.096-.162-.18-.162h-.653a1.003 1.003 0 0 1-.93-.625A1.014 1.014 0 0 1 12 6.57V5.431c.002-.267.108-.523.297-.711.189-.189.444-.295.71-.295h.653a.21.21 0 0 0 .174-.138.23.23 0 0 0 0-.247l-.461-.463a1.007 1.007 0 0 1 0-1.427l.803-.807a.983.983 0 0 1 .707-.295.991.991 0 0 1 .713.295l.456.463a.167.167 0 0 0 .126.048.245.245 0 0 0 .096 0c.09-.042.156-.102.156-.186v-.656a1.02 1.02 0 0 1 .298-.716ZM20 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
			fill={props?.fill ?? "#273142"}
		/>
	</Svg>
);

export default SvgPhoneSettings;
