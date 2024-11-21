import React from "react";
import { SvgProps } from "react-native-svg";
import useColor from "@/utils/hooks/useColor";
import rect from "./icons/rect.svg";
import search from "./icons/search.svg";
import arrow2 from "./icons/arrow2.svg";
import arrow from "./icons/arrow.svg";
import home from "./icons/home.svg";
import en from "./icons/en.svg";
import pl from "./icons/pl.svg";
import lang from "./icons/lang.svg";
import hufflepuff from "./icons/hufflepuff.svg";
import sun from "./icons/sun.svg";
import gryffindor from "./icons/gryffindor.svg";
import ravenclaw from "./icons/ravenclaw.svg";
import sort from "./icons/sort.svg";
import moon from "./icons/moon.svg";
import heart from "./icons/heart.svg";
import slytherin from "./icons/slytherin.svg";

const ICONS = {
  rect,
  search,
  arrow2,
  arrow,
  home,
  en,
  pl,
  lang,
  hufflepuff,
  sun,
  gryffindor,
  ravenclaw,
  sort,
  moon,
  heart,
  slytherin,
};

export type IconType = keyof typeof ICONS;

interface IconProps extends SvgProps {
  name: IconType;
  noStroke?: boolean;
  fillDefault?: boolean;
  className?: string;
}

const AppIcon = ({ name, noStroke, fillDefault, ...props }: IconProps) => {
  const CurrentIcon = ICONS[name];
  const color = useColor("beta");

  return (
    <CurrentIcon
      {...props}
      stroke={props.stroke || (noStroke ? "none" : color)}
      fill={fillDefault ? color : "none"}
    />
  );
};

export const Icon = React.memo(AppIcon);
