"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./FAQ.css";

const FAQ: React.FC = () => {
  const { t } = useTranslation("common");
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: t("FAQ_QUESTION_1"),
      a: t("FAQ_ANSWER_1"),
    },
    {
      q: t("FAQ_QUESTION_2"),
      a: t("FAQ_ANSWER_2"),
    },
    {
      q: t("FAQ_QUESTION_3"),
      a: t("FAQ_ANSWER_3"),
    },
    {
      q: t("FAQ_QUESTION_4"),
      a: t("FAQ_ANSWER_4"),
    },
  ];

  return (
    <section className="faq-section" id="faq">
      <h2 className="faq-title">{t("FAQ_TITLE")}</h2>
      <div className="faq-list">
        {faqs.map((item, idx) => (
          <div className={`faq-item${open === idx ? " open" : ""}`} key={idx}>
            <button
              className="faq-question"
              aria-expanded={open === idx}
              aria-controls={`faq-answer-${idx}`}
              onClick={() => setOpen(open === idx ? null : idx)}
            >
              {item.q}
              <span className="faq-arrow">{open === idx ? "▲" : "▼"}</span>
            </button>
            <div
              className="faq-answer"
              id={`faq-answer-${idx}`}
              style={{ display: open === idx ? "block" : "none" }}
            >
              {item.a}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
