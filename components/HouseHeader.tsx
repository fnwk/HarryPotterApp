import { Icon } from "@/assets/Icon";
import useThemeStore from "@/stores/theme";
import { View } from "react-native";

const HouseHeader = () => {
  const hogwartsTheme = useThemeStore((state) => state.hogwartsTheme);
  return (
    <View className={"bg-primary py-6 items-center rounded-b-3xl"}>
      <Icon name={hogwartsTheme ?? "gryffindor"} noStroke />
    </View>
  );
};

export default HouseHeader;
