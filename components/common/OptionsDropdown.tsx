import { LayoutRectangle, TouchableOpacity, View } from "react-native";
import { Icon, IconType } from "@/assets/Icon";
import { useState } from "react";
import cn from "@/utils/cn";
import ThemedText from "@/components/common/ThemedText";

export interface DropdownOption {
  label: string;
  value: string;
  iconName?: IconType;
}

interface OptionDropdownProps {
  options: DropdownOption[];
  iconName?: IconType;
  value?: string;
  inputColor?: boolean;
  onlyIcons?: boolean;
  noIcons?: boolean;
  showBg?: boolean;
  onChange: (value: string) => void;
  zIndex?: number;
}

const OptionsDropdown = ({
  options,
  value,
  iconName,
  inputColor,
  onlyIcons,
  noIcons,
  showBg,
  onChange,
  zIndex,
}: OptionDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [layout, setLayout] = useState<LayoutRectangle>();

  const handleOptionChange = (value: string) => {
    onChange(value);
    setIsOpen(false);
  };

  return (
    <View
      style={{ zIndex: zIndex || 50 }}
      onLayout={(event) => setLayout(event.nativeEvent.layout)}
      className={cn(
        (isOpen || showBg) && "bg-gamma rounded-lg",
        "p-3 mt-3 mr-2 relative",
      )}
    >
      <TouchableOpacity
        style={{ zIndex: zIndex || 50 }}
        className={"flex-row items-center "}
        onPress={() => setIsOpen((prev) => !prev)}
      >
        {!noIcons && (
          <View className={"w-6"}>
            <Icon
              name={
                iconName ||
                options.find((opt) => opt.value === value)?.iconName ||
                "rect"
              }
              noStroke={onlyIcons}
              fillDefault={onlyIcons}
            />
          </View>
        )}

        {!onlyIcons && (
          <ThemedText className={cn(inputColor && "text-input", "ml-2")}>
            {options.find((opt) => opt.value === value)?.label}
          </ThemedText>
        )}

        <Icon
          name={"arrow"}
          width={12}
          height={12}
          style={{ marginLeft: 10 }}
        />
      </TouchableOpacity>
      {isOpen && (
        <View
          style={{ width: layout?.width, zIndex: zIndex ? zIndex - 10 : 40 }}
          className={cn("absolute top-[20px] bg-gamma p-3 rounded-b-xl")}
        >
          {options
            .filter((opt) => opt.value !== value)
            .map((option) => (
              <TouchableOpacity
                key={option.value}
                className={"mt-1 flex-row items-center pt-3"}
                onPress={() => handleOptionChange(option.value)}
              >
                {!noIcons && (
                  <View className={"w-6 h-full items-center"}>
                    {option.iconName && (
                      <Icon
                        name={option.iconName}
                        noStroke={onlyIcons}
                        fillDefault={onlyIcons}
                      />
                    )}
                  </View>
                )}

                {!onlyIcons && (
                  <ThemedText
                    className={cn(inputColor && "text-input", "ml-2")}
                  >
                    {option.label}
                  </ThemedText>
                )}
              </TouchableOpacity>
            ))}
        </View>
      )}
    </View>
  );
};

export default OptionsDropdown;
