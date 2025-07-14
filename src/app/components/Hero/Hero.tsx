"use client";
import React from "react";
import "./Hero.css";
import { useTranslation } from "react-i18next";

const Hero: React.FC = () => {
  const { t } = useTranslation("common");
  return (
    <section className="hero-section" id="features">
      <h1 className="hero-title">{t("HERO_TITLE")}</h1>
      <p className="hero-subtitle">{t("HERO_SUBTITLE")}</p>
      {/* Uncomment if you want the CTA button here:
    <a href="#features" className="hero-cta">{t("HERO_CTA")}</a>
    */}
    </section>
  );
};

export default Hero;
