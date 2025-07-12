import React from "react";
import "./Sidebar.css";

interface SidebarProps {
  open?: boolean;
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
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