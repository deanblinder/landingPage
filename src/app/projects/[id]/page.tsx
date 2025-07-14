"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import styles from "./page.module.css";
import ProjectGallery from "../../components/ProjectGallery/ProjectGallery";

import { projects } from "../../data/projects";

const ProjectPage: React.FC = () => {
  const params = useParams();
  const projectId = params.id as string;

  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div style={{ textAlign: "center", padding: "4rem 0" }}>
            <h1
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                marginBottom: "1rem",
                color: "#1a1a1a",
              }}
            >
              Project not found
            </h1>
            <Link href="/#projects" className={styles.backButton}>
              <svg
                className={styles.backIcon}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Projects
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* Back button */}
        <Link href="/#projects" className={styles.backButton}>
          <svg
            className={styles.backIcon}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Projects
        </Link>

        {/* Project content */}
        <div className={styles.projectCard}>
          {/* Hero section with image */}
          <div className={styles.heroSection}>
            <Image
              src={project.image}
              alt={project.title}
              fill
              className={styles.heroImage}
              priority
            />
            <div className={styles.heroOverlay}></div>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>{project.title}</h1>
              <p className={styles.heroDescription}>{project.description}</p>
            </div>
          </div>

          {/* Content section */}
          <div className={styles.mainContent}>
            {/* Project overview */}
            <div className={styles.overviewGrid}>
              <div className={styles.overviewContent}>
                <h2>Project Overview</h2>
                <p className={styles.overviewText}>
                  This is a comprehensive showcase of the{" "}
                  {project.title.toLowerCase()}. The project demonstrates modern
                  web development practices and innovative solutions to
                  real-world challenges.
                </p>
                <p className={styles.overviewText}>
                  Built with cutting-edge technologies and designed with user
                  experience in mind, this project represents the latest in web
                  development excellence.
                </p>
              </div>

              {/* Quick stats */}
              {/* <div className={styles.statsCard}>
                <h3 className={styles.statsTitle}>Project Stats</h3>
                <div className={styles.statsItem}>
                  <span>Status</span>
                  <span className={styles.statsValue}>Completed</span>
                </div>
                <div className={styles.statsItem}>
                  <span>Duration</span>
                  <span className={styles.statsValue}>3 months</span>
                </div>
                <div className={styles.statsItem}>
                  <span>Team Size</span>
                  <span className={styles.statsValue}>Solo</span>
                </div>
              </div> */}
            </div>

            {/* Project Gallery */}
            <ProjectGallery
              images={project.gallery}
              projectTitle={project.title}
            />

            {/* Technologies and Features */}
            {/* <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <h3 className={styles.featureTitle}>Technologies Used</h3>
                <div className={styles.techTags}>
                  {[
                    "React",
                    "Next.js",
                    "TypeScript",
                    "CSS Modules",
                    "Node.js",
                    "MongoDB",
                  ].map((tech) => (
                    <span key={tech} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.featureCard}>
                <h3 className={styles.featureTitle}>Key Features</h3>
                <ul className={styles.featureList}>
                  <li className={styles.featureItem}>
                    <svg
                      className={styles.checkIcon}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Responsive Design
                  </li>
                  <li className={styles.featureItem}>
                    <svg
                      className={styles.checkIcon}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Modern UI/UX
                  </li>
                  <li className={styles.featureItem}>
                    <svg
                      className={styles.checkIcon}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Performance Optimized
                  </li>
                  <li className={styles.featureItem}>
                    <svg
                      className={styles.checkIcon}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    SEO Friendly
                  </li>
                </ul>
              </div>
            </div> */}

            {/* Action buttons */}
            {/* <div className={styles.actionButtons}>
              <button
                className={`${styles.actionButton} ${styles.primaryButton}`}
              >
                <svg
                  className={styles.buttonIcon}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Live Demo
              </button>
              <button
                className={`${styles.actionButton} ${styles.secondaryButton}`}
              >
                <svg
                  className={styles.buttonIcon}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View Code
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
