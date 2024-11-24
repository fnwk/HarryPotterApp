import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import commonPL from "@/locales/pl/common.json";
import housesPL from "@/locales/pl/houses.json";
import homePL from "@/locales/pl/home.json";
import characterPL from "@/locales/pl/character.json";
import favoritesPL from "@/locales/pl/favorites.json";
import menuPL from "@/locales/pl/menu.json";

import commonEN from "@/locales/en/common.json";
import housesEN from "@/locales/en/houses.json";
import homeEN from "@/locales/en/home.json";
import characterEN from "@/locales/en/character.json";
import favoritesEN from "@/locales/en/favorites.json";
import menuEN from "@/locales/en/menu.json";

export const resources = {
  pl: {
    common: commonPL,
    houses: housesPL,
    home: homePL,
    character: characterPL,
    favorites: favoritesPL,
    menu: menuPL,
  },
  en: {
    common: commonEN,
    houses: housesEN,
    home: homeEN,
    character: characterEN,
    favorites: favoritesEN,
    menu: menuEN,
  },
};

export const defaultNS = "common";

const ns = ["common"] as const;

i18n.use(initReactI18next).init({
  debug: true,
  compatibilityJSON: "v3",
  ns: ns,
  resources,
  defaultNS: defaultNS,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});
