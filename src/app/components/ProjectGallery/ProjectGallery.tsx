"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import "./ProjectGallery.css";

interface ProjectGalleryProps {
  images: string[];
  projectTitle: string;
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  images,
  projectTitle,
}) => {
  const { t } = useTranslation("common");
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="project-gallery">
      <h3 className="gallery-title">{t("PROJECT_GALLERY_TITLE")}</h3>

      <div className="gallery-main">
        <button
          className="gallery-nav-btn gallery-prev"
          onClick={prevImage}
          aria-label="Previous image"
        >
          ‹
        </button>

        <div className="gallery-main-image">
          <Image
            src={images[currentIndex]}
            alt={`${projectTitle} - Image ${currentIndex + 1}`}
            fill
            className="gallery-image"
            priority
          />
        </div>

        <button
          className="gallery-nav-btn gallery-next"
          onClick={nextImage}
          aria-label="Next image"
        >
          ›
        </button>
      </div>

      {images.length > 1 && (
        <div className="gallery-thumbnails">
          {images.map((image, index) => (
            <button
              key={index}
              className={`gallery-thumbnail ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => goToImage(index)}
              aria-label={`Go to image ${index + 1}`}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="thumbnail-image"
              />
            </button>
          ))}
        </div>
      )}

      <div className="gallery-counter">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default ProjectGallery;
