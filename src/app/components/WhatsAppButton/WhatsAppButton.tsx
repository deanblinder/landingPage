import React from "react";
import "./WhatsAppButton.css";
import Image from "next/image";

const WhatsAppButton: React.FC = () => (
  <a
    href="https://wa.me/+972523980151" // Replace with your WhatsApp number
    className="whatsapp-float"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
  >
    <Image src="/images/WhatsApp.svg" alt="WhatsApp" width={100} height={100} />
  </a>
);

export default WhatsAppButton;
