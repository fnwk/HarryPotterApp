import { Color } from "@/models/theme.model";
import useThemeStore from "@/stores/theme";
import { colors } from "@/utils/themes";

const useColor = (color: Color) => {
  const { theme, hogwartsTheme } = useThemeStore((state) => state);

  return colors
    ? colors[hogwartsTheme ?? "gryffindor"][theme ?? "light"][color]
    : "#000";
};

export default useColor;
