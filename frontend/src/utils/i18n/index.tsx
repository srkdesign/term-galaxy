import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import EN from "./locales/en/translation.json";
import RU from "./locales/ru/translation.json";
import AZ from "./locales/az/translation.json";

const resources = {
  en: {
    translation: EN,
  },
  ru: {
    translation: RU,
  },
  az: {
    translation: AZ,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    // lng: getLang(),
    detection: {
      caches: ["localStorage"],
      lookupLocalStorage: "language",
      order: ["localStorage", "navigator"],
    },
    interpolation: { escapeValue: false },
  });

i18n.on("languageChanged", (lng) => {
  localStorage.setItem("language", lng);
});

export default i18n;
