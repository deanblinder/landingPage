import React from "react";
import Image from "next/image";
import "./AboutMe.css";

const AboutMe: React.FC = () => (
  <section id="about" className="aboutme-section">
    <Image
      src="https://randomuser.me/api/portraits/men/32.jpg"
      alt="Avatar"
      className="aboutme-avatar"
      width={96}
      height={96}
      priority
    />
    <h2 className="aboutme-title">About Me</h2>
    <p className="aboutme-text">
      Hi! I’m Dean, an experienced developer with a passion for building beautiful, high-performing web experiences. I specialize in modern technologies and love helping businesses and creators launch standout landing pages.
    </p>
  </section>
);

export default AboutMe; 