import { vars } from "nativewind";

export interface Colors {
  primary: string;
  background: string;
  alpha: string;
  beta: string;
  gamma: string;
}

export type Color = keyof Colors;

export interface HouseThemes {
  light: Colors;
  dark: Colors;
}

export type Theme = keyof HouseThemes;

export interface HogwartsHouses {
  gryffindor: HouseThemes;
  hufflepuff: HouseThemes;
  ravenclaw: HouseThemes;
  slytherin: HouseThemes;
}

export type HogwartsHouse = keyof HogwartsHouses;

export interface TransformedHouseThemes {
  light: ReturnType<typeof vars>;
  dark: ReturnType<typeof vars>;
}

export type TransformedHogwartsColors = {
  [house in keyof HogwartsHouses]: TransformedHouseThemes;
};
