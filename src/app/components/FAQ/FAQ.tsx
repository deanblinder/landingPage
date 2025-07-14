"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./FAQ.css";

const FAQ: React.FC = () => {
  const { t } = useTranslation("common");
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="faq-section" id="faq">
      <h2 className="faq-title">{t("FAQ_TITLE")}</h2>
      <div className="faq-list">
        <div className={`faq-item${open === 0 ? " open" : ""}`}>
          <button
            className="faq-question"
            aria-expanded={open === 0}
            aria-controls="faq-answer-0"
            onClick={() => setOpen(open === 0 ? null : 0)}
          >
            {t("FAQ_QUESTION_1")}
            <span className="faq-arrow">{open === 0 ? "▲" : "▼"}</span>
          </button>
          <div
            className="faq-answer"
            id="faq-answer-0"
            style={{ display: open === 0 ? "block" : "none" }}
          >
            {t("FAQ_ANSWER_1")}
          </div>
        </div>

        <div className={`faq-item${open === 1 ? " open" : ""}`}>
          <button
            className="faq-question"
            aria-expanded={open === 1}
            aria-controls="faq-answer-1"
            onClick={() => setOpen(open === 1 ? null : 1)}
          >
            {t("FAQ_QUESTION_2")}
            <span className="faq-arrow">{open === 1 ? "▲" : "▼"}</span>
          </button>
          <div
            className="faq-answer"
            id="faq-answer-1"
            style={{ display: open === 1 ? "block" : "none" }}
          >
            {t("FAQ_ANSWER_2")}
          </div>
        </div>

        <div className={`faq-item${open === 2 ? " open" : ""}`}>
          <button
            className="faq-question"
            aria-expanded={open === 2}
            aria-controls="faq-answer-2"
            onClick={() => setOpen(open === 2 ? null : 2)}
          >
            {t("FAQ_QUESTION_3")}
            <span className="faq-arrow">{open === 2 ? "▲" : "▼"}</span>
          </button>
          <div
            className="faq-answer"
            id="faq-answer-2"
            style={{ display: open === 2 ? "block" : "none" }}
          >
            {t("FAQ_ANSWER_3")}
          </div>
        </div>

        <div className={`faq-item${open === 3 ? " open" : ""}`}>
          <button
            className="faq-question"
            aria-expanded={open === 3}
            aria-controls="faq-answer-3"
            onClick={() => setOpen(open === 3 ? null : 3)}
          >
            {t("FAQ_QUESTION_4")}
            <span className="faq-arrow">{open === 3 ? "▲" : "▼"}</span>
          </button>
          <div
            className="faq-answer"
            id="faq-answer-3"
            style={{ display: open === 3 ? "block" : "none" }}
          >
            {t("FAQ_ANSWER_4")}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
