"use client";
import React, { useState, useEffect } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    quote: "This app made launching my project a breeze. The design is beautiful and the experience is seamless!",
    author: "Alice Smith",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote: "I love how easy it was to get started. The support was fantastic and the features are top-notch.",
    author: "Bob Johnson",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    quote: "A truly modern web experience. Fast, reliable, and looks amazing on every device.",
    author: "Carol Lee",
    avatar: "https://randomuser.me/api/portraits/women/46.jpg",
  },
  {
    quote: "The best investment I made for my business this year. Highly recommended!",
    author: "David Kim",
    avatar: "https://randomuser.me/api/portraits/men/47.jpg",
  },
  {
    quote: "Support was quick and helpful. The app is intuitive and powerful.",
    author: "Eva Green",
    avatar: "https://randomuser.me/api/portraits/women/48.jpg",
  },
];

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 700);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile;
}

const Testimonials: React.FC = () => {
  const isMobile = useIsMobile();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!isMobile) setIndex(0);
  }, [isMobile]);

  const maxIndex = testimonials.length - 3;
  const safeIndex = Math.min(index, maxIndex >= 0 ? maxIndex : 0);
  const show = testimonials.slice(safeIndex, safeIndex + 3);

  const prev = () => setIndex((i) => (i <= 0 ? maxIndex >= 0 ? maxIndex : 0 : i - 1));
  const next = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1));

  return (
    <section className="testimonials-section" id="testimonials">
      <h2 className="testimonials-title">Testimonials</h2>
      {isMobile ? (
        <div className="testimonial-scroll">
          {testimonials.map((t, idx) => (
            <div className="testimonial-card" key={idx}>
              <img src={t.avatar} alt={t.author} className="testimonial-avatar" />
              <blockquote className="testimonial-quote">“{t.quote}”</blockquote>
              <div className="testimonial-author">{t.author}</div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="testimonial-carousel">
            <button className="carousel-btn prev" onClick={prev} aria-label="Previous testimonial">&#8592;</button>
            <div className="testimonial-cards-group">
              {show.map((t, idx) => (
                <div className="testimonial-card" key={safeIndex + idx}>
                  <img src={t.avatar} alt={t.author} className="testimonial-avatar" />
                  <blockquote className="testimonial-quote">“{t.quote}”</blockquote>
                  <div className="testimonial-author">{t.author}</div>
                </div>
              ))}
            </div>
            <button className="carousel-btn next" onClick={next} aria-label="Next testimonial">&#8594;</button>
          </div>
          <div className="carousel-dots">
            {Array.from({ length: testimonials.length - 3 + 1 }, (_, i) => (
              <span
                key={i}
                className={`carousel-dot${i === safeIndex ? " active" : ""}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Testimonials; 