"use client"
import React, { useState } from "react";
import "./ImageGallery.css";

const images = [
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
];

const ImageGallery: React.FC = () => {
  const [modalImg, setModalImg] = useState<string | null>(null);

  return (
    <section className="imagegallery-section" id="gallery">
      <h2 className="imagegallery-title">Gallery</h2>
      <div className="imagegallery-list">
        {images.map((src, idx) => (
          <img
            src={src}
            alt={`Gallery ${idx + 1}`}
            className="imagegallery-img"
            key={idx}
            onClick={() => setModalImg(src)}
            style={{ cursor: "pointer" }}
          />
        ))}
      </div>
      {modalImg && (
        <div className="imagegallery-modal" onClick={() => setModalImg(null)}>
          <img src={modalImg} alt="Large preview" className="imagegallery-modal-img" />
          <button className="imagegallery-modal-close" onClick={e => { e.stopPropagation(); setModalImg(null); }}>&times;</button>
        </div>
      )}
    </section>
  );
};

export default ImageGallery; 