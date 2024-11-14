import { Text } from "react-native";
import cn from "@/utils/cn";
import { ComponentProps } from "react";

const ThemedText = ({
  className,
  children,
  ...props
}: ComponentProps<typeof Text>) => (
  <Text className={cn("text-beta", className || "")} {...props}>
    {children}
  </Text>
);

export default ThemedText;
