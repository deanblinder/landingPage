"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import "./Pricing.css";

const Pricing: React.FC = () => {
  const { t } = useTranslation("common");

  const plans = [
    {
      name: t("PRICING_BASIC"),
      price: "$0",
      period: "/mo",
      features: [
        t("PRICING_FEATURE_BASIC"),
        t("PRICING_FEATURE_EMAIL_SUPPORT"),
        t("PRICING_FEATURE_COMMUNITY"),
      ],
      cta: t("PRICING_GET_STARTED"),
      highlight: false,
    },
    {
      name: t("PRICING_PRO"),
      price: "$19",
      period: "/mo",
      features: [
        t("PRICING_FEATURE_ALL_FREE"),
        t("PRICING_FEATURE_ANALYTICS"),
        t("PRICING_FEATURE_PRIORITY"),
        t("PRICING_FEATURE_DOMAINS"),
      ],
      cta: t("PRICING_UPGRADE_NOW"),
      highlight: true,
    },
    {
      name: t("PRICING_ENTERPRISE"),
      price: "Contact",
      period: "",
      features: [
        t("PRICING_FEATURE_ALL_PRO"),
        t("PRICING_FEATURE_MANAGER"),
        t("PRICING_FEATURE_INTEGRATIONS"),
        t("PRICING_FEATURE_SLA"),
      ],
      cta: t("PRICING_CONTACT_US"),
      highlight: false,
    },
  ];

  return (
    <section className="pricing-section" id="pricing">
      <h2 className="pricing-title">{t("PRICING_TITLE")}</h2>
      <div className="pricing-container">
        {plans.map((plan, idx) => (
          <div
            className={`pricing-card ${plan.highlight ? "highlight" : ""}`}
            key={idx}
          >
            <div className="pricing-name">{plan.name}</div>
            <div className="pricing-price">
              <span className="pricing-amount">{plan.price}</span>
              <span className="pricing-period">{plan.period}</span>
            </div>
            <ul className="pricing-features">
              {plan.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            {/* <button className="pricing-cta">{plan.cta}</button> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
