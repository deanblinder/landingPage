import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translation files
import enTranslations from "../../public/locales/en/common.json";
import heTranslations from "../../public/locales/he/common.json";

const storedLang =
  typeof window !== "undefined"
    ? localStorage.getItem("currentLang") || "he"
    : "he";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: enTranslations },
      he: { common: heTranslations },
    },
    lng: storedLang,
    fallbackLng: "en",
    debug: process.env.NODE_ENV === "development",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
