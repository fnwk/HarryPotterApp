import { Icon } from "@/assets/Icon";
import useThemeStore from "@/stores/theme.store";
import { Pressable, View } from "react-native";
import { router } from "expo-router";
import cn from "@/utils/cn";

const HouseHeader = () => {
  const { hogwartsTheme, setThemedBoundaries, roundedHeader } = useThemeStore(
    (state) => state,
  );

  const handlePress = () => {
    setThemedBoundaries(false);
    router.replace("/chooseHouse");
  };

  return (
    <Pressable onPress={handlePress}>
      <View
        className={cn(
          "bg-primary py-6 items-center",
          roundedHeader && "rounded-b-3xl",
        )}
      >
        <Icon name={hogwartsTheme ?? "gryffindor"} noStroke />
      </View>
    </Pressable>
  );
};

export default HouseHeader;
