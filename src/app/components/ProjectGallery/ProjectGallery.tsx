"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "./ProjectGallery.css";

interface ProjectGalleryProps {
  images: string[];
  projectTitle: string;
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  images,
  projectTitle,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  if (images.length === 0) return null;

  return (
    <div className="project-gallery">
      <div className="gallery-header">
        <h3 className="gallery-title">Project Gallery</h3>
        <button
          className={`autoplay-toggle ${isAutoPlaying ? "active" : ""}`}
          onClick={toggleAutoPlay}
          title={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          <svg
            className="autoplay-icon"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            {isAutoPlaying ? (
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            ) : (
              <path d="M8 5v14l11-7z" />
            )}
          </svg>
        </button>
      </div>

      <div className="gallery-container">
        <button
          className="gallery-nav gallery-prev"
          onClick={goToPrevious}
          aria-label="Previous image"
        >
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div className="gallery-slide-container">
          <div
            className="gallery-slides"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="gallery-slide">
                <Image
                  src={image}
                  alt={`${projectTitle} - Image ${index + 1}`}
                  fill
                  className="gallery-image"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          className="gallery-nav gallery-next"
          onClick={goToNext}
          aria-label="Next image"
        >
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <div className="gallery-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`gallery-indicator ${
              index === currentIndex ? "active" : ""
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      <div className="gallery-counter">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default ProjectGallery;
