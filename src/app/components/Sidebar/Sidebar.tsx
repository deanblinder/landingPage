"use client";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Sidebar.css";

interface SidebarProps {
  open?: boolean;
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
  const { t } = useTranslation("common");

  // Close sidebar if resizing to desktop
  useEffect(() => {
    function handleResize() {
      if (open && window.innerWidth >= 769 && onClose) {
        onClose();
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [open, onClose]);

  // Close sidebar on initial mobile load if open
  useEffect(() => {
    if (open && window.innerWidth < 769 && onClose) {
      onClose();
    }
    // eslint-disable-next-line
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    if (onClose) onClose();
  };

  return (
    <>
      <div
        className={`sidebar-backdrop${open ? " active" : ""}`}
        onClick={onClose}
      />
      <aside className={`sidebar${open ? " open" : ""}`}>
        <button
          className="close"
          aria-label={t("NAVIGATION_CLOSE_MENU")}
          onClick={onClose}
        >
          ✕
        </button>
        <nav>
          <a href="#features" onClick={(e) => handleNavClick(e, "features")}>
            {t("NAVIGATION_FEATURES")}
          </a>
          <a href="#about" onClick={(e) => handleNavClick(e, "about")}>
            {t("NAVIGATION_ABOUT")}
          </a>
          <a href="#projects" onClick={(e) => handleNavClick(e, "projects")}>
            {t("NAVIGATION_PROJECTS")}
          </a>
          <a href="#gallery" onClick={(e) => handleNavClick(e, "gallery")}>
            {t("NAVIGATION_GALLERY")}
          </a>
          <a href="#pricing" onClick={(e) => handleNavClick(e, "pricing")}>
            {t("NAVIGATION_PRICING")}
          </a>
          <a href="#faq" onClick={(e) => handleNavClick(e, "faq")}>
            {t("NAVIGATION_FAQ")}
          </a>
          <a
            href="#testimonials"
            onClick={(e) => handleNavClick(e, "testimonials")}
          >
            {t("NAVIGATION_TESTIMONIALS")}
          </a>
          <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>
            {t("NAVIGATION_CONTACT")}
          </a>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
