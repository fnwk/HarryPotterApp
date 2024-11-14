import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import commonPL from "@/locales/pl/common.json";
import housesPL from "@/locales/pl/houses.json";

import commonEN from "@/locales/en/common.json";
import housesEN from "@/locales/en/houses.json";

export const resources = {
  pl: {
    common: commonPL,
    houses: housesPL,
  },
  en: {
    common: commonEN,
    houses: housesEN,
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
  lng: "pl",
  interpolation: {
    escapeValue: false,
  },
});
