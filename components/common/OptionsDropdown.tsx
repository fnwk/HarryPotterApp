import { TouchableOpacity, View } from "react-native";
import { Icon, IconType } from "@/assets/Icon";
import { useState } from "react";
import cn from "@/utils/cn";
import ThemedText from "@/components/common/ThemedText";

interface IOption {
  label: string;
  value: string;
  iconName?: IconType;
}

interface OptionDropdownProps {
  options: IOption[];
  iconName?: IconType;
  value: string;
  onChange: (value: string) => void;
}

const OptionsDropdown = ({
  options,
  value,
  iconName,
  onChange,
}: OptionDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionChange = (value: string) => {
    onChange(value);
    setIsOpen(false);
  };

  return (
    <View
      className={cn(
        isOpen && "bg-gamma rounded-lg",
        "w-32 p-3 mt-3 mr-2 relative",
      )}
    >
      <TouchableOpacity
        className={"flex-row items-center"}
        onPress={() => setIsOpen((prev) => !prev)}
      >
        <View className={"w-6"}>
          <Icon
            name={
              iconName ||
              options.find((opt) => opt.value === value)?.iconName ||
              iconName ||
              "rect"
            }
          />
        </View>

        <ThemedText className={"ml-2"}>
          {options.find((opt) => opt.value === value)?.label ?? ""}
        </ThemedText>

        <Icon
          name={"arrow"}
          width={12}
          height={12}
          style={{ marginLeft: "auto" }}
        />
      </TouchableOpacity>
      {isOpen && (
        <View
          className={"w-32 absolute top-full bg-gamma p-3 rounded-b-xl -z-10"}
        >
          {options
            .filter((opt) => opt.value !== value)
            .map((option) => (
              <TouchableOpacity
                className={"mt-1 flex-row items-center pt-3"}
                onPress={() => handleOptionChange(option.value)}
              >
                <View className={"w-6 h-full items-center"}>
                  {option.iconName && <Icon name={option.iconName} />}
                </View>
                <ThemedText className={"ml-2"}>{option.label}</ThemedText>
              </TouchableOpacity>
            ))}
        </View>
      )}
    </View>
  );
};

export default OptionsDropdown;
