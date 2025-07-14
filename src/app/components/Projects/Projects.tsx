"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../../data/projects";
import "./Projects.css";

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
            <Link
              href={`/projects/${project.id}`}
              key={idx}
              className="project-card project-card-mobile"
            >
              <Image
                src={project.image}
                alt={project.title}
                className="project-image"
                width={400}
                height={170}
                priority={idx === 0}
              />
              <div className="project-content">
                <h3 className="project-name">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="projects-list">
          {projects.map((project, idx) => (
            <Link href={`/projects/${project.id}`} key={idx} className="project-card">
              <Image
                src={project.image}
                alt={project.title}
                className="project-image"
                width={400}
                height={170}
                priority={idx === 0}
              />
              <div className="project-content">
                <h3 className="project-name">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;
