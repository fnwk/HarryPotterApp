import { vars } from "nativewind";
import {
  Colors,
  Color,
  HogwartsHouses,
  TransformedHogwartsColors,
} from "@/models/theme.model";
import config from "../tailwind.config";

type TransformedTheme = {
  [key: `--color-${string}`]: string;
};

export const colors: HogwartsHouses = {
  gryffindor: {
    light: {
      primary: "#EF233C",
      background: "#EDF2F4",
      loading: "#F6F0F0",
      alpha: "#fff",
      beta: "#2B2D42",
      gamma: "#fff",
    },
    dark: {
      primary: "#EF233C",
      background: "#2B2D42",
      loading: "#33354D",
      alpha: "#2B2D42",
      beta: "#fff",
      gamma: "#1B1C2A",
    },
  },
  hufflepuff: {
    light: {
      primary: "#FFC300",
      background: "#EDF2F4",
      loading: "#F6F0F0",
      alpha: "#fff",
      beta: "#2B2D42",
      gamma: "#fff",
    },
    dark: {
      primary: "#FFC300",
      background: "#2B2D42",
      loading: "#33354D",
      alpha: "#2B2D42",
      beta: "#fff",
      gamma: "#1B1C2A",
    },
  },
  ravenclaw: {
    light: {
      primary: "#006AFF",
      background: "#EDF2F4",
      loading: "#F6F0F0",
      alpha: "#fff",
      beta: "#2B2D42",
      gamma: "#fff",
    },
    dark: {
      primary: "#006AFF",
      background: "#2B2D42",
      loading: "#33354D",
      alpha: "#2B2D42",
      beta: "#fff",
      gamma: "#1B1C2A",
    },
  },
  slytherin: {
    light: {
      primary: "#38B000",
      background: "#EDF2F4",
      loading: "#F6F0F0",
      alpha: "#fff",
      beta: "#2B2D42",
      gamma: "#fff",
    },
    dark: {
      primary: "#38B000",
      background: "#2B2D42",
      loading: "#33354D",
      alpha: "#2B2D42",
      beta: "#fff",
      gamma: "#1B1C2A",
    },
  },
};

function transformTheme(theme: Colors): TransformedTheme {
  const transformedTheme: TransformedTheme = {};
  for (const key in theme) {
    transformedTheme[`--color-${key}`] = theme[key as Color];
  }
  return transformedTheme;
}

function transformColors(input: HogwartsHouses): TransformedHogwartsColors {
  const output = {} as TransformedHogwartsColors;

  for (const house in input) {
    output[house as keyof HogwartsHouses] = {
      light: vars(transformTheme(input[house as keyof HogwartsHouses].light)),
      dark: vars(transformTheme(input[house as keyof HogwartsHouses].dark)),
    };
  }

  return output;
}

export const tailwindColors = config.theme.extend.colors;

export const themes = transformColors(colors);
