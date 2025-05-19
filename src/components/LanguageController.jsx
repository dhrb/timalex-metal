import { createContext, useState, useContext } from "react";
import en from "../locales/en.json";
import sk from "../locales/sk.json";

const translations = { en, sk };

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const translate = (key) => {
    return (
      key
        .split(".")
        .reduce((obj, part) => obj?.[part], translations[language]) || key
    );
  };
  const switchLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "sk" : "en"));
  };
  return (
    <LanguageContext.Provider value={{ language, switchLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);
