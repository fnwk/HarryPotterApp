import i18next from "i18next";
import { AppLanguage } from "./language";

export function changeLanguage(lang: AppLanguage) {
  return i18next.changeLanguage(lang);
}
