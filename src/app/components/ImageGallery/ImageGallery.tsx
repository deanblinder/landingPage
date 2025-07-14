"use client";
import React from "react";
import Image from "next/image";
import "./ImageGallery.css";
import { useTranslation } from "react-i18next";

const images = [
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
];

const ImageGallery: React.FC = () => {
  const { t } = useTranslation("common");

  return (
    <section className="imagegallery-section" id="gallery">
      <h2 className="imagegallery-title">{t("GALLERY_TITLE")}</h2>
      <div className="imagegallery-list">
        {images.map((src, idx) => (
          <Image
            src={src}
            alt={`Gallery ${idx + 1}`}
            className="imagegallery-img"
            key={idx}
            width={400}
            height={280}
            style={{ cursor: "pointer" }}
            priority={idx === 0}
          />
        ))}
      </div>
    </section>
  );
};

export default ImageGallery;
