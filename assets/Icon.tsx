import React from "react";
import { SvgProps } from "react-native-svg";
import useColor from "@/utils/hooks/useColor";
import rect from "./icons/rect.svg";
import arrow from "./icons/arrow.svg";
import home from "./icons/home.svg";
import lang from "./icons/lang.svg";
import hufflepuff from "./icons/hufflepuff.svg";
import sun from "./icons/sun.svg";
import gryffindor from "./icons/gryffindor.svg";
import ravenclaw from "./icons/ravenclaw.svg";
import moon from "./icons/moon.svg";
import slytherin from "./icons/slytherin.svg";

const ICONS = {
  rect,
  arrow,
  home,
  lang,
  hufflepuff,
  sun,
  gryffindor,
  ravenclaw,
  moon,
  slytherin,
};

export type IconType = keyof typeof ICONS;

interface IconProps extends SvgProps {
  name: IconType;
  noStroke?: boolean;
  className?: string;
}

const AppIcon = ({ name, noStroke, ...props }: IconProps) => {
  const CurrentIcon = ICONS[name];
  const color = useColor("beta");

  return <CurrentIcon {...props} stroke={noStroke ? "none" : color} />;
};

export const Icon = React.memo(AppIcon);
