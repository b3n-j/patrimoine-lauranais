import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { TranslationEN } from "./src/en";
import { TranslationFR } from "./src/fr";

export enum Language {
  FR = "fr",
  EN = "en",
}

let defaultLanguage = Language.FR;

/* Translation files */
const resources = {
  en: {
    translation: TranslationEN
  },
  fr: {
    translation: TranslationFR
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: defaultLanguage,
    debug: true,
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  }, (err, t) => {
    if (err) return console.log('Something went wrong with i18n loading :\n', err);
    t('key');
  });

export default i18n;