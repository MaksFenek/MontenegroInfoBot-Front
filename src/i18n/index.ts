import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Cookies from "js-cookie";
import en from "./langs/en.json";
import ru from "./langs/ru.json";
import dayjs from "dayjs";

import "dayjs/locale/ru";
import "dayjs/locale/en";

if (!Cookies.get("language")) {
  Cookies.set(
    "language",
    Telegram.WebApp.initDataUnsafe.user?.language_code || "en"
  );
}

dayjs.locale(Cookies.get("language"));

i18n.use(initReactI18next).init({
  resources: {
    en,
    ru,
  },
  lng: Cookies.get("language") || "en",
  fallbackLng: Cookies.get("language") || "en",
  debug: false,
  ns: ["translations"],
  defaultNS: "translations",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
    formatSeparator: ",",
  },
  react: {
    bindI18n: "languageChanged loaded",
    nsMode: "default",
    bindI18nStore: "added removed",
  },
});
