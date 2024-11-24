import { Pressable, View } from "react-native";
import ThemedText from "@/components/common/ThemedText";
import { useT } from "@/i18n/useTranslation";
import { Icon, IconType } from "@/assets/Icon";
import cn from "@/utils/cn";

interface AppBtnProps {
  className?: string;
  text: string;
  icon: IconType;
  onPress: () => void;
}

const AppBtn = ({ className, text, icon, onPress }: AppBtnProps) => (
  <Pressable onPress={onPress}>
    <View
      className={cn(
        "flex-row justify-between items-center px-6 py-3 bg-gamma rounded-full",
        className,
      )}
    >
      <ThemedText className={"text-md font-bold"}>{text}</ThemedText>
      <Icon name={icon} width={16} height={16} />
    </View>
  </Pressable>
);

export default AppBtn;
