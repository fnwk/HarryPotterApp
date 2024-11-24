import { TouchableOpacity } from "react-native";
import { Icon } from "@/assets/Icon";
import { router } from "expo-router";

const GoBackBtn = () => {
  return (
    <TouchableOpacity className={"rotate-180"} onPress={() => router.back()}>
      <Icon name={"arrow2"} width={16} height={16} />
    </TouchableOpacity>
  );
};

export default GoBackBtn;
