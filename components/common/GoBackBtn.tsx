import { TouchableOpacity } from "react-native";
import { Icon } from "@/assets/Icon";
import { router } from "expo-router";
import useColor from "@/utils/hooks/useColor";

const GoBackBtn = () => {
  const strokeColor = useColor("beta");

  return (
    <TouchableOpacity className={"rotate-180"} onPress={() => router.back()}>
      <Icon name={"arrow2"} width={16} height={16} stroke={"#f0f"} />
    </TouchableOpacity>
  );
};

export default GoBackBtn;
