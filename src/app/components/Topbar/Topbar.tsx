"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import "./Topbar.css";

interface TopbarProps {
  onBurgerClick?: () => void;
}

const Topbar: React.FC<TopbarProps> = ({ onBurgerClick }) => {
  const { t } = useTranslation("common");

  return (
    <header className="topbar landing-topbar">
      <div className="logo">{t("NAVIGATION_LOGO")}</div>
      <nav className="nav-desktop">
        <a href="#features">{t("NAVIGATION_FEATURES")}</a>
        <a href="#pricing">{t("NAVIGATION_PRICING")}</a>
        <a href="#about">{t("NAVIGATION_ABOUT")}</a>
        <a href="#contact">{t("NAVIGATION_CONTACT")}</a>
      </nav>
      <button
        className="burger"
        aria-label={t("NAVIGATION_OPEN_MENU")}
        onClick={onBurgerClick}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
};

export default Topbar;
