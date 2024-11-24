import { PropsWithChildren } from "react";
import { View } from "react-native";
import { themes } from "@/utils/themes";
import useThemeStore from "@/stores/theme.store";

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const { theme, hogwartsTheme } = useThemeStore((state) => state);

  return (
    <View
      className={"flex-1"}
      style={themes[hogwartsTheme ?? "gryffindor"][theme ?? "light"]}
    >
      {children}
    </View>
  );
};

export default ThemeProvider;
