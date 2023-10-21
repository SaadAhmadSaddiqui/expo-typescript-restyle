import React, { useMemo } from "react";
import { Text, TextStyle } from "react-native";

import { useTheme } from "@ergenekonyigit/restyle";
import { Theme } from "@theme";

const Something = () => {
	const theme = useTheme<Theme>();
	const textStyle: TextStyle = useMemo(() => ({ color: theme.colors.white }), [theme]);
	return <Text style={textStyle}>Something</Text>;
};

export default Something;
