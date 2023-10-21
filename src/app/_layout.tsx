import { useEffect, useMemo } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { ThemeModeProvider, useThemeMode } from "@contexts/theme-mode";
import { ThemeProvider } from "@ergenekonyigit/restyle";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import type { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import theme, { darkTheme } from "@theme";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
	initialRouteName: "index",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
	const [loaded, error] = useFonts({
		...FontAwesome.font,
	});

	// Expo Router uses Error Boundaries to catch errors in the navigation tree.
	useEffect(() => {
		if (error) {
			throw error;
		}
	}, [error]);

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		// ThemeModeProvider is a custom context provider that allows us to set and get the current theme mode.
		// That's why we wrap the entire app in it.
		<ThemeModeProvider>
			<RootLayoutNav />
		</ThemeModeProvider>
	);
};

export default RootLayout;

const RootLayoutNav = () => {
	const [darkMode] = useThemeMode();

	const options: { [key: string]: NativeStackNavigationOptions } = useMemo(
		() => ({
			tabs: {
				headerShown: false,
			},
			modal: { presentation: "modal" },
		}),
		[],
	);

	return (
		<ThemeProvider theme={darkMode ? darkTheme : theme}>
			<SafeAreaProvider>
				<Stack>
					<Stack.Screen name="index" options={options.tabs} />
				</Stack>
			</SafeAreaProvider>
		</ThemeProvider>
	);
};
