import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import tr from "./locales/tr/translation.json";
import en from "./locales/en/translation.json";

i18n
  .use(initReactI18next) // i18n'i React'e bağla
  .init({
    resources: {
      tr: { translation: tr }, // Türkçe çeviriler
      en: { translation: en }, // İngilizce çeviriler
    },
    lng: "tr", // varsayılan dil Türkçe
    fallbackLng: "en", // Türkçe bulunamazsa İngilizce göster
    interpolation: {
      escapeValue: false, // React zaten XSS koruması yapıyor
    },
  });

export default i18n;
