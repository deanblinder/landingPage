import React from "react";
import "./WhatsAppButton.css";

const WhatsAppButton: React.FC = () => (
  <a
    href="https://wa.me/1234567890" // Replace with your WhatsApp number
    className="whatsapp-float"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
  >
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="16" fill="#25D366" />
      <path d="M22.5 18.5c-.3-.2-1.7-.8-2-1s-.5-.2-.7.1c-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.4-2.3-1.4-.8-.7-1.4-1.6-1.6-1.9-.2-.3 0-.4.1-.6.1-.1.2-.2.3-.4.1-.1.1-.2.2-.3.1-.1.1-.2.2-.3.1-.2.1-.3 0-.5-.1-.2-.7-1.7-1-2.3-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.7.7-.7 1.7 0 1 .7 2 1 2.4.2.3 1.4 2.2 3.4 3.1 2 .8 2 .5 2.4.5.4 0 1.2-.5 1.4-1 .2-.5.2-.9.1-1.1z" fill="#fff"/>
    </svg>
  </a>
);

export default WhatsAppButton; 