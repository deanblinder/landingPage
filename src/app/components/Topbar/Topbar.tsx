import React from "react";
import "./Topbar.css";

interface TopbarProps {
  onBurgerClick?: () => void;
}

const Topbar: React.FC<TopbarProps> = ({ onBurgerClick }) => {
  return (
    <header className="topbar landing-topbar">
      <div className="logo">MyApp</div>
      <nav className="nav-desktop">
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
      <button className="burger" aria-label="Open menu" onClick={onBurgerClick}>
        <span />
        <span />
        <span />
      </button>
    </header>
  );
};

export default Topbar;
