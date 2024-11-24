import { TouchableOpacity, View } from "react-native";
import { HogwartsHouse } from "@/models/theme.model";
import { Icon } from "@/assets/Icon";
import ThemedText from "@/components/common/ThemedText";
import capitalizeFirstLetter from "@/utils/capitalizeFirstLetter";
import { colors } from "@/utils/themes";
import { router } from "expo-router";
import useThemeStore from "@/stores/theme.store";

interface HouseBtnProps {
  name: HogwartsHouse;
}

const HouseBtn = ({ name }: HouseBtnProps) => {
  const { setHogwartsTheme } = useThemeStore((state) => state);

  const handlePress = () => {
    setHogwartsTheme(name);
    router.replace("/(tabs)");
  };

  return (
    <TouchableOpacity className={"mb-12"} onPress={handlePress}>
      <View
        style={{ backgroundColor: colors[name]["light"].primary }}
        className={
          "w-3/4 mx-auto bg-red-500 h-32 rounded-2xl items-center justify-center"
        }
      >
        <Icon name={name} noStroke />
      </View>
      <ThemedText className={"font-bold text-lg mx-auto mt-4 text-center"}>
        {capitalizeFirstLetter(name)}
      </ThemedText>
    </TouchableOpacity>
  );
};

export default HouseBtn;
