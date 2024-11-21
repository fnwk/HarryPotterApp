import { Icon } from "@/assets/Icon";
import useThemeStore from "@/stores/theme.store";
import { Pressable, View } from "react-native";
import { router } from "expo-router";

const HouseHeader = () => {
  const { hogwartsTheme, setThemedBoundaries } = useThemeStore(
    (state) => state,
  );

  const handlePress = () => {
    setThemedBoundaries(false);
    router.replace("/chooseHouse");
  };

  return (
    <Pressable onPress={handlePress}>
      <View className={"bg-primary py-6 items-center rounded-b-3xl"}>
        <Icon name={hogwartsTheme ?? "gryffindor"} noStroke />
      </View>
    </Pressable>
  );
};

export default HouseHeader;
