import createFastContext from "@utils/createFastContext";

export const { StoreProvider: ThemeModeProvider, useStore: useThemeMode } = createFastContext(true, "ThemeMode");
