import React from "react";
import Image from "next/image";
import "./FullWidthImages.css";

const images = [
  // "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80",
  // "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80",
  // "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
  // "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
];

const FullWidthImages: React.FC = () => (
  <section className="fullwidthimages-section">
    <h2 className="fullwidthimages-title">Full Width Gallery</h2>
    <div className="fullwidthimages-row">
      {images.map((src, idx) => (
        <Image
          src={src}
          alt={`Full width ${idx + 1}`}
          className="fullwidthimages-img"
          key={idx}
          width={1920}
          height={400}
          priority={idx === 0}
        />
      ))}
    </div>
  </section>
);

export default FullWidthImages;
