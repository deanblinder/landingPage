"use client";
import React, { useState } from "react";
import "./FAQ.css";

const faqs = [
  {
    q: "What is MyApp?",
    a: "MyApp is a modern platform to help you launch your next project quickly and beautifully, with all the tools you need built in.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes! We offer a free plan with basic features so you can get started at no cost.",
  },
  {
    q: "Can I upgrade or downgrade my plan?",
    a: "Absolutely. You can change your plan at any time from your account dashboard.",
  },
  {
    q: "How do I get support?",
    a: "You can reach out via our contact form or use the chat widget for instant help.",
  },
];

const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="faq-section" id="faq">
      <h2 className="faq-title">Frequently Asked Questions</h2>
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