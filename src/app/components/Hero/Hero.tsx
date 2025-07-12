import React from "react";
import "./Hero.css";

const Hero: React.FC = () => (
  <section className="hero-section" id="features">
    <h1 className="hero-title">
      Hello, Im Dean
    </h1>
    <p className="hero-subtitle">
      The easiest way to launch your next project. Modern, fast, and beautiful by default.
    </p>
    {/* Uncomment if you want the CTA button here:
    <a href="#features" className="hero-cta">Get Started</a>
    */}
  </section>
);

export default Hero; 