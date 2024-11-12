import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import commonPL from "../locales/pl/common.json";

export const resources = {
  pl: {
    common: commonPL,
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
