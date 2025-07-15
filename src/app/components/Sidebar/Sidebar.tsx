"use client";
import React, { useEffect } from "react";
import Link from "next/link";
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

  const handleNavClick = () => {
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
          <Link href="/#features" onClick={handleNavClick}>
            {t("NAVIGATION_FEATURES")}
          </Link>
          <Link href="/#about" onClick={handleNavClick}>
            {t("NAVIGATION_ABOUT")}
          </Link>
          <Link href="/#projects" onClick={handleNavClick}>
            {t("NAVIGATION_PROJECTS")}
          </Link>
          <Link href="/#gallery" onClick={handleNavClick}>
            {t("NAVIGATION_GALLERY")}
          </Link>
          <Link href="/#pricing" onClick={handleNavClick}>
            {t("NAVIGATION_PRICING")}
          </Link>
          <Link href="/#faq" onClick={handleNavClick}>
            {t("NAVIGATION_FAQ")}
          </Link>
          <Link href="/#testimonials" onClick={handleNavClick}>
            {t("NAVIGATION_TESTIMONIALS")}
          </Link>
          <Link href="/#contact" onClick={handleNavClick}>
            {t("NAVIGATION_CONTACT")}
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
