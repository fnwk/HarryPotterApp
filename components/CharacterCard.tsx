import { Pressable, Text, View } from "react-native";
import { Character } from "@/models/characters.model";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "@/assets/Icon";
import { router } from "expo-router";
import AppImage from "@/components/common/AppImage";

const CharacterCard = (characterData: Character) => {
  const { id, attributes } = characterData;

  return (
    <Pressable
      onPress={() =>
        router.push({ pathname: "/(tabs)/character/[id]", params: { id } })
      }
    >
      <View
        className={
          "width-full h-[200px] rounded-2xl bg-gamma mb-8 overflow-hidden"
        }
      >
        <View className={"flex-row mt-auto z-30 p-4"}>
          <View className={"flex-1"}>
            <Text className={"text-white font-black text-md"}>
              {attributes?.name}
            </Text>
            {attributes.house && (
              <Text className={"text-white"}>{attributes.house}</Text>
            )}
          </View>
          <View
            className={
              "w-10 h-10 rounded-full bg-white items-center justify-center"
            }
          >
            <Icon name={"arrow2"} />
          </View>
        </View>

        <LinearGradient
          start={[0, 1]}
          end={[0, 0]}
          colors={["black", "transparent"]}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 20,
          }}
        />
        <View className={"absolute w-full h-full z-10"}>
          <AppImage
            className={"w-full h-full"}
            source={
              attributes?.image
                ? { uri: attributes?.image }
                : require("@/assets/images/no-image.png")
            }
          />
        </View>
      </View>
    </Pressable>
  );
};

export default CharacterCard;
