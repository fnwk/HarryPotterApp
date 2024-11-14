import { View } from "react-native";
import { PropsWithChildren } from "react";

const Container = ({ children }: PropsWithChildren) => {
  return <View className={"px-8 pt-10 flex-1 bg-background"}>{children}</View>;
};

export default Container;
