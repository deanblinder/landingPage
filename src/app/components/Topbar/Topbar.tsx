"use client";
import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import "./Topbar.css";

interface TopbarProps {
  onBurgerClick?: () => void;
}

const Topbar: React.FC<TopbarProps> = ({ onBurgerClick }) => {
  const { t } = useTranslation("common");

  return (
    <header className="topbar landing-topbar">
      <Link href="/" className="logo">
        {t("NAVIGATION_LOGO")}
      </Link>

      <nav className="nav-desktop">
        <Link href="/#features">{t("NAVIGATION_FEATURES")}</Link>
        <Link href="/#pricing">{t("NAVIGATION_PRICING")}</Link>
        <Link href="/#about">{t("NAVIGATION_ABOUT")}</Link>
        <Link href="/#contact">{t("NAVIGATION_CONTACT")}</Link>
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
