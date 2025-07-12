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

  return (
    <>
      {open && <div className="sidebar-backdrop" onClick={onClose} />}
      <aside className={`sidebar${open ? " open" : ""}`}>
        <button className="close" aria-label="Close menu" onClick={onClose}>&times;</button>
        <nav>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar; 