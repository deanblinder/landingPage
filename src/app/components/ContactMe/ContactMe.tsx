"use client";
import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "./ContactMe.css";
import emailjs from "@emailjs/browser";

const ContactMe: React.FC = () => {
  const { t } = useTranslation("common");
  const [submitted, setSubmitted] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    if (!form.current) return;

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // ← Copy from EmailJS dashboard
        "YOUR_TEMPLATE_ID", // ← Copy from EmailJS dashboard
        form.current,
        "YOUR_PUBLIC_KEY" // ← Copy from EmailJS dashboard (API key)
      )
      .then(
        (result) => {
          console.log("✅ Message sent:", result.text);
          alert("Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          console.log("❌ Failed:", error.text);
          alert("Failed to send message. Please try again.");
        }
      )
      .finally(() => {
        setSubmitted(false);
      });
  };

  return (
    <section className="contactme-section" id="contact">
      <h2 className="contactme-title">{t("CONTACT_TITLE")}</h2>
      <p className="contactme-subtitle">{t("CONTACT_SUBTITLE")}</p>
      <form className="contactme-form" onSubmit={handleSubmit} ref={form}>
        <input
          type="text"
          name="name"
          placeholder={t("CONTACT_NAME")}
          required
          className="contactme-input"
        />
        <input
          type="email"
          name="email"
          placeholder={t("CONTACT_EMAIL")}
          required
          className="contactme-input"
        />
        <textarea
          name="message"
          placeholder={t("CONTACT_MESSAGE")}
          required
          className="contactme-textarea"
          rows={4}
        />
        <button type="submit" className="contactme-btn" disabled={submitted}>
          {submitted ? t("CONTACT_THANK_YOU") : t("CONTACT_SEND")}
        </button>
      </form>
      <div className="contactme-socials">
        <a
          href="mailto:john.doe@email.com"
          className="contactme-social"
          aria-label={t("SOCIAL_EMAIL")}
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="#0070f3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <polyline points="3 7 12 13 21 7" />
          </svg>
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener"
          className="contactme-social"
          aria-label={t("SOCIAL_GITHUB")}
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="#0070f3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.12 2.51.35 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.74c0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
          </svg>
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener"
          className="contactme-social"
          aria-label={t("SOCIAL_LINKEDIN")}
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="#0070f3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <path d="M16 8a6 6 0 0 1 6 6v6M2 9h4v12H2zM6 9h4v12H6z" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default ContactMe;
