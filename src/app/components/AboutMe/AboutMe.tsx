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
      Hi! I’m John Doe, a passionate developer who loves building beautiful and performant web experiences. I specialize in React, Next.js, and modern web technologies. Let’s build something amazing together!
    </p>
  </section>
);

export default AboutMe; 