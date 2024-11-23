import { Text, View } from "react-native";
import { Icon, IconType } from "@/assets/Icon";
import ThemedText from "@/components/common/ThemedText";
import AppBtn from "@/components/common/AppBtn";
import cn from "@/utils/cn";
import { useT } from "@/i18n/useTranslation";

export interface IMenuItem {
  bgColor: string;
  icon: IconType;
  label: string;
  title: string;
  onPress: () => void;
}

const MenuItem = ({ bgColor, icon, title, label, onPress }: IMenuItem) => {
  const { t } = useT();

  return (
    <View className={"flex-row h-[150px] my-4"}>
      <View
        className={cn(
          "w-[40%] h-full rounded-3xl items-center justify-center",
          bgColor,
        )}
      >
        <Icon name={icon} noStroke />
      </View>
      <View className={"flex-1 px-4"}>
        <Text className={"text-md text-input font-medium"}>{label}</Text>
        <ThemedText className={"text-md font-semibold mb-auto"}>
          {title}
        </ThemedText>
        <AppBtn text={t("next")} icon={"arrow2"} onPress={onPress} />
      </View>
    </View>
  );
};

export default MenuItem;
