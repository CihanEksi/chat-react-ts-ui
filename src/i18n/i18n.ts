import i18next from "i18next";
import en from "./languages/en.json";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  fallbackLng: "en",
  resources: {
    en: {
      translation: en,
    },
  },
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
