import { View } from "react-native";
import { PropsWithChildren } from "react";
import cn from "@/utils/cn";

interface ContainerProps extends PropsWithChildren {
  className?: string;
  style?: any;
}

const Container = ({ className, style, children }: ContainerProps) => {
  return (
    <View style={style} className={cn("px-8 flex-1 bg-background", className)}>
      {children}
    </View>
  );
};

export default Container;
