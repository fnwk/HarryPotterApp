import { Pressable, Text, View } from "react-native";
import cn from "@/utils/cn";

interface AnswerBtnProps {
  className?: string;
  selected: boolean;
  index: number;
  answer: string;
  isGoodAnswer: boolean | undefined;
  onPress: () => void;
}

const AnswerBtn = ({
  className,
  selected,
  index,
  answer,
  isGoodAnswer,
  onPress,
}: AnswerBtnProps) => {
  return (
    <Pressable onPress={onPress}>
      <View
        className={cn(
          "flex-row rounded-full p-3 items-center my-3",
          isGoodAnswer
            ? "bg-green-400"
            : selected
              ? isGoodAnswer === false
                ? "bg-red-400"
                : "bg-dark"
              : "bg-white",
        )}
      >
        <View
          className={cn(
            "w-8 h-8 justify-center items-center mr-4 rounded-full",
            selected ? "bg-white" : "bg-dark",
          )}
        >
          <Text className={cn(selected ? "text-dark" : "text-white")}>
            {["A", "B", "C", "D"][index]}
          </Text>
        </View>
        <Text
          className={cn(
            "flex-1 text-lg font-medium",
            selected ? "text-white" : "text-dark",
          )}
        >
          {answer}
        </Text>
      </View>
    </Pressable>
  );
};

export default AnswerBtn;
