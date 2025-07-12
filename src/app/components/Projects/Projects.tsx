"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "./Projects.css";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with Next.js and styled-components, featuring animations and a blog.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "E-commerce Store",
    description: "A modern e-commerce platform with Stripe integration, product search, and a custom admin dashboard.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Chat App",
    description: "A real-time chat application using React, Socket.io, and Node.js, with group and private messaging.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
];

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 700);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile;
}

const Projects: React.FC = () => {
  const isMobile = useIsMobile();
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">Projects</h2>
      {isMobile ? (
        <div className="projects-scroll">
          {projects.map((project, idx) => (
            <div className="project-card project-card-mobile" key={idx}>
              <Image src={project.image} alt={project.title} className="project-image" width={400} height={170} priority={idx === 0} />
              <div className="project-content">
                <h3 className="project-name">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="projects-list">
          {projects.map((project, idx) => (
            <div className="project-card" key={idx}>
              <Image src={project.image} alt={project.title} className="project-image" width={400} height={170} priority={idx === 0} />
              <div className="project-content">
                <h3 className="project-name">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects; 