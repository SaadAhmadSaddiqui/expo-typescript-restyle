import React, { useMemo } from "react";
import { ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Something from "@components/Something";
import { useThemeMode } from "@contexts/theme-mode";
import Box from "@ui/Box";
import Switch from "@ui/Switch";
import Text from "@ui/Text";

const App = () => {
	const [darkMode, setDarkMode] = useThemeMode();
	const safeAreaInsets = useSafeAreaInsets();
	const viewStyle: ViewStyle = useMemo(() => ({ paddingTop: safeAreaInsets.top, paddingBottom: safeAreaInsets.bottom }), [safeAreaInsets]);

	return (
		<Box backgroundColor={""} style={viewStyle} flex={1} padding={"-5xl"}>
			<Box width={"100%"} style={viewStyle} justifyContent={"flex-end"} alignItems="flex-end" position={"absolute"}>
				<Switch label="Dark Mode" value={darkMode} onValueChange={setDarkMode} />
			</Box>
			<Something></Something>
			<Text>App</Text>
		</Box>
	);
};

export default App;
