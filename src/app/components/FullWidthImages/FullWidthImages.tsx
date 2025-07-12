import React from "react";
import "./FullWidthImages.css";

const images = [
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=1200&q=80",
];

const FullWidthImages: React.FC = () => (
  <section className="fullwidthimages-section">
    <div className="fullwidthimages-row">
    <h2 className="imagegallery-title">Gallery</h2>
    {images.map((src, idx) => (
        <img src={src} alt={`Full width ${idx + 1}`} className="fullwidthimages-img" key={idx} />
      ))}
    </div>
  </section>
);

export default FullWidthImages; 