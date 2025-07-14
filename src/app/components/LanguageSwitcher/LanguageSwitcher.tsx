"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "he" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("currentLang", newLang);

    // Update document direction for RTL support
    document.documentElement.dir = newLang === "he" ? "rtl" : "ltr";
    document.documentElement.lang = newLang;
  };

  return (
    <button
      className="language-switcher"
      onClick={toggleLanguage}
      aria-label={`Switch to ${i18n.language === "en" ? "Hebrew" : "English"}`}
    >
      {i18n.language === "en" ? "עברית" : "English"}
    </button>
  );
};

export default LanguageSwitcher;
