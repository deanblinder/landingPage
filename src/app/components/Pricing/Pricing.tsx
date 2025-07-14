"use client";
import React from "react";
import "./Pricing.css";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/mo",
    features: ["Basic features", "Email support", "Community access"],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/mo",
    features: [
      "All Free features",
      "Advanced analytics",
      "Priority support",
      "Custom domains",
    ],
    cta: "Upgrade Now",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Contact",
    period: "",
    features: [
      "All Pro features",
      "Dedicated manager",
      "Custom integrations",
      "SLA & onboarding",
    ],
    cta: "Contact Us",
    highlight: false,
  },
];

const Pricing: React.FC = () => {
  return (
    <section className="pricing-section" id="pricing">
      <h2 className="pricing-title">Pricing</h2>
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
