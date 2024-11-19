import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { Character } from "@/models/characters.model";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "@/assets/Icon";

const CharacterCard = ({ id, attributes }: Character) => {
  return (
    <View
      className={
        "w-full h-[200px] rounded-2xl bg-gamma mb-8 overflow-hidden p-4"
      }
    >
      <View className={"flex-row mt-auto z-30"}>
        <View className={"flex-1"}>
          <Text className={"text-white font-black text-md"}>
            {attributes?.name}
          </Text>
          {attributes.house && (
            <Text className={"text-white"}>{attributes.house}</Text>
          )}
        </View>
        <TouchableOpacity
          className={
            "w-10 h-10 rounded-full bg-white items-center justify-center"
          }
        >
          <Icon name={"arrow2"} />
        </TouchableOpacity>
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
      <ImageBackground
        className={"absolute top-0 left-0 right-0 bottom-0 z-10"}
        source={
          attributes?.image
            ? { uri: attributes?.image }
            : require("@/assets/images/no-image.png")
        }
      />
    </View>
  );
};

export default CharacterCard;
