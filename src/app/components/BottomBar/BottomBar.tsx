import React from "react";
import "./BottomBar.css";

const BottomBar: React.FC = () => (
  <footer className="bottombar">
    <div className="bottombar-content">
      <span className="bottombar-copy">&copy; {new Date().getFullYear()} MyApp. All rights reserved.</span>
    </div>
  </footer>
);

export default BottomBar; 