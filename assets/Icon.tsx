import React from "react";
import { SvgProps } from "react-native-svg";
import useColor from "@/utils/hooks/useColor";
import rect from "./icons/rect.svg";
import grid from "./icons/grid.svg";
import search from "./icons/search.svg";
import arrow2 from "./icons/arrow2.svg";
import arrow from "./icons/arrow.svg";
import home from "./icons/home.svg";
import en from "./icons/en.svg";
import pl from "./icons/pl.svg";
import check from "./icons/check.svg";
import lang from "./icons/lang.svg";
import favorites from "./icons/favorites.svg";
import hufflepuff from "./icons/hufflepuff.svg";
import sun from "./icons/sun.svg";
import gryffindor from "./icons/gryffindor.svg";
import ravenclaw from "./icons/ravenclaw.svg";
import sort from "./icons/sort.svg";
import head from "./icons/head.svg";
import moon from "./icons/moon.svg";
import heart from "./icons/heart.svg";
import slytherin from "./icons/slytherin.svg";

const ICONS = {
  rect,
  grid,
  search,
  arrow2,
  arrow,
  home,
  en,
  pl,
  check,
  lang,
  favorites,
  hufflepuff,
  sun,
  gryffindor,
  ravenclaw,
  sort,
  head,
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
  stroke?: string;
  fill?: string;
}

const AppIcon = ({
  name,
  noStroke,
  stroke,
  fill,
  fillDefault,
  ...props
}: IconProps) => {
  const CurrentIcon = ICONS[name];
  const color = useColor("beta");

  return (
    <CurrentIcon
      {...props}
      stroke={noStroke ? "none" : stroke || color}
      fill={fillDefault ? fill || color : "none"}
    />
  );
};

export const Icon = React.memo(AppIcon);
