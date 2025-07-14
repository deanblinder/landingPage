"use client";
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import "./Testimonials.css";

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
  const { t } = useTranslation("common");
  const isMobile = useIsMobile();
  const [index, setIndex] = useState(0);

  // Use useMemo to ensure testimonials update when translations change
  const testimonials = useMemo(
    () => [
      {
        quote: t("TESTIMONIAL_1_QUOTE"),
        author: t("TESTIMONIAL_1_AUTHOR"),
        avatar:
          "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=128&h=128&q=80",
      },
      {
        quote: t("TESTIMONIAL_2_QUOTE"),
        author: t("TESTIMONIAL_2_AUTHOR"),
        avatar:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=128&h=128&q=80",
      },
      {
        quote: t("TESTIMONIAL_3_QUOTE"),
        author: t("TESTIMONIAL_3_AUTHOR"),
        avatar:
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=128&h=128&q=80",
      },
      {
        quote: t("TESTIMONIAL_4_QUOTE"),
        author: t("TESTIMONIAL_4_AUTHOR"),
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&w=128&h=128&q=80",
      },
      {
        quote: t("TESTIMONIAL_5_QUOTE"),
        author: t("TESTIMONIAL_5_AUTHOR"),
        avatar:
          "https://images.unsplash.com/photo-1519340333755-c1aa5571fd46?auto=format&fit=facearea&w=128&h=128&q=80",
      },
    ],
    [t]
  );

  useEffect(() => {
    if (!isMobile) setIndex(0);
  }, [isMobile]);

  const maxIndex = testimonials.length - 3;
  const safeIndex = Math.min(index, maxIndex >= 0 ? maxIndex : 0);
  const show = testimonials.slice(safeIndex, safeIndex + 3);

  const prev = () =>
    setIndex((i) => (i <= 0 ? (maxIndex >= 0 ? maxIndex : 0) : i - 1));
  const next = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1));

  return (
    <section className="testimonials-section" id="testimonials">
      <h2 className="testimonials-title">{t("TESTIMONIALS_TITLE")}</h2>
      {isMobile ? (
        <div className="testimonial-scroll">
          {testimonials.map((t, idx) => (
            <div className="testimonial-card" key={idx}>
              <Image
                src={t.avatar}
                alt={t.author}
                className="testimonial-avatar"
                width={64}
                height={64}
                priority={idx === 0}
              />
              <blockquote className="testimonial-quote">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="testimonial-author">{t.author}</div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="testimonial-carousel">
            <button
              className="carousel-btn prev"
              onClick={prev}
              aria-label="Previous testimonial"
            >
              &#8592;
            </button>
            <div className="testimonial-cards-group">
              {show.map((t, idx) => (
                <div className="testimonial-card" key={safeIndex + idx}>
                  <Image
                    src={t.avatar}
                    alt={t.author}
                    className="testimonial-avatar"
                    width={64}
                    height={64}
                    priority={safeIndex + idx === 0}
                  />
                  <blockquote className="testimonial-quote">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  <div className="testimonial-author">{t.author}</div>
                </div>
              ))}
            </div>
            <button
              className="carousel-btn next"
              onClick={next}
              aria-label="Next testimonial"
            >
              &#8594;
            </button>
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
