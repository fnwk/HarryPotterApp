import { TextInput, View } from "react-native";
import { Icon, IconType } from "@/assets/Icon";
import cn from "@/utils/cn";
import useColor from "@/utils/hooks/useColor";
import { colors, tailwindColors } from "@/utils/themes";

interface ThemedTextInputProps {
  placeholder?: string;
  iconName?: IconType;
  className?: string;
  onChangeText?: (text: string) => void;
}

const ThemedTextInput = ({
  placeholder,
  onChangeText,
  className,
  iconName,
}: ThemedTextInputProps) => {
  return (
    <View
      className={cn(
        "flex-row items-center w-full bg-gamma rounded-lg px-4",
        className,
      )}
    >
      <TextInput
        className={"flex-1 py-3 text-input"}
        placeholderTextColor={tailwindColors.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
      {iconName && <Icon name={iconName} style={{ marginRight: 10 }} />}
    </View>
  );
};

export default ThemedTextInput;
