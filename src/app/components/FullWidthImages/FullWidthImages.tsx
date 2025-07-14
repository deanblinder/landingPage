"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import "./FullWidthImages.css";

const FullWidthImages: React.FC = () => {
  const { t } = useTranslation("common");

  const images = [
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80",
  ];

  return (
    <section className="fullwidthimages-section">
      <h2 className="fullwidthimages-title">{t("FULL_WIDTH_GALLERY_TITLE")}</h2>
      <div className="fullwidthimages-list">
        {images.map((src, idx) => (
          <Image
            src={src}
            alt={`Full width image ${idx + 1}`}
            className="fullwidthimages-img"
            key={idx}
            width={1200}
            height={600}
            priority={idx === 0}
          />
        ))}
      </div>
    </section>
  );
};

export default FullWidthImages;
