"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import "./AboutMe.css";

const AboutMe: React.FC = () => {
  const { t } = useTranslation("common");

  return (
    <section id="about" className="aboutme-section">
      <Image
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=facearea&w=256&h=256&q=80"
        alt="Avatar"
        className="aboutme-avatar"
        width={96}
        height={96}
        priority
      />
      <h2 className="aboutme-title">{t("ABOUT_TITLE")}</h2>
      <p className="aboutme-text">{t("ABOUT_DESCRIPTION")}</p>
    </section>
  );
};

export default AboutMe;
