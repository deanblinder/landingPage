import React, { useEffect } from "react";
import "./Sidebar.css";

interface SidebarProps {
  open?: boolean;
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    if (onClose) onClose();
  };

  return (
    <>
      {open && <div className="sidebar-backdrop" onClick={onClose} />}
      <aside className={`sidebar${open ? " open" : ""}`}>
        <button className="close" aria-label="Close menu" onClick={onClose}>&times;</button>
        <nav>
          <a href="#features" onClick={e => handleNavClick(e, "features")}>Features</a>
          <a href="#about" onClick={e => handleNavClick(e, "about")}>About</a>
          <a href="#projects" onClick={e => handleNavClick(e, "projects")}>Projects</a>
          <a href="#gallery" onClick={e => handleNavClick(e, "gallery")}>Gallery</a>
          <a href="#pricing" onClick={e => handleNavClick(e, "pricing")}>Pricing</a>
          <a href="#faq" onClick={e => handleNavClick(e, "faq")}>FAQ</a>
          <a href="#testimonials" onClick={e => handleNavClick(e, "testimonials")}>Testimonials</a>
          <a href="#contact" onClick={e => handleNavClick(e, "contact")}>Contact</a>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar; 