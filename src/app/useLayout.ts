"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export const useLayout = () => {
  const { t, i18n } = useTranslation();
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [currentLang, setCurrentLang] = useState("he");

  useEffect(() => {
    const storedLang = localStorage.getItem("currentLang") || "he";
    setCurrentLang(storedLang);
    i18n.changeLanguage(storedLang);

    // Set document direction and language
    document.documentElement.dir = storedLang === "he" ? "rtl" : "ltr";
    document.documentElement.lang = storedLang;
  }, [i18n]);

  // Listen for language changes
  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      setCurrentLang(lng);
      document.documentElement.dir = lng === "he" ? "rtl" : "ltr";
      document.documentElement.lang = lng;
    };

    i18n.on("languageChanged", handleLanguageChange);
    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n]);

  const navItems = [
    { label: t("NAVIGATION_HOME"), href: "#home" },
    { label: t("NAVIGATION_ABOUT"), href: "#about" },
    { label: t("NAVIGATION_PROJECTS"), href: "#projects" },
    { label: t("NAVIGATION_CONTACT"), href: "#contact" },
    { label: t("NAVIGATION_PRICING"), href: "#pricing" },
    { label: t("NAVIGATION_TESTIMONIALS"), href: "#testimonials" },
    { label: t("NAVIGATION_FAQ"), href: "#faq" },
  ];

  return {
    showRegisterModal,
    setShowRegisterModal,
    currentLang,
    navItems,
  };
};
