"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import styles from "./page.module.css";
import ProjectGallery from "../../components/ProjectGallery/ProjectGallery";

import { projects } from "../../data/projects";

const ProjectPage: React.FC = () => {
  const { t } = useTranslation("common");
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
              {t("PROJECTS_BACK_TO_PROJECTS")}
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
          {t("PROJECTS_BACK_TO_PROJECTS")}
        </Link>

        {/* Project content */}
        <div className={styles.projectCard}>
          {/* Hero section with image */}
          <div className={styles.heroSection}>
            <Image
              src={project.image}
              alt={t(project.titleKey)}
              fill
              className={styles.heroImage}
              priority
            />
            <div className={styles.heroOverlay}></div>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>{t(project.titleKey)}</h1>
              <p className={styles.heroDescription}>
                {t(project.descriptionKey)}
              </p>
            </div>
          </div>

          {/* Content section */}
          <div className={styles.mainContent}>
            {/* Project overview */}
            <div className={styles.overviewGrid}>
              <div className={styles.overviewContent}>
                <h2>{t("PROJECTS_OVERVIEW_TITLE")}</h2>
                <p className={styles.overviewText}>
                  {t("PROJECTS_OVERVIEW_TEXT_1")}{" "}
                  {t(project.titleKey).toLowerCase()}.{" "}
                  {t("PROJECTS_OVERVIEW_TEXT_2")}
                </p>
                <p className={styles.overviewText}>
                  {t("PROJECTS_OVERVIEW_TEXT_3")}
                </p>
              </div>

              {/* Project details */}
              <div className={styles.statsCard}>
                <h3 className={styles.statsTitle}>
                  {t("PROJECTS_DETAILS_TITLE")}
                </h3>
                <div className={styles.statsItem}>
                  <span>{t("PROJECTS_CLIENT")}</span>
                  <span className={styles.statsValue}>{project.client}</span>
                </div>
                <div className={styles.statsItem}>
                  <span>{t("PROJECTS_CATEGORY")}</span>
                  <span className={styles.statsValue}>
                    {t(project.categoryKey)}
                  </span>
                </div>
                <div className={styles.statsItem}>
                  <span>{t("PROJECTS_DURATION")}</span>
                  <span className={styles.statsValue}>{project.duration}</span>
                </div>
              </div>
            </div>

            {/* Project Gallery */}
            <ProjectGallery
              images={project.gallery}
              projectTitle={t(project.titleKey)}
            />

            {/* Technologies and Features */}
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <h3 className={styles.featureTitle}>
                  {t("PROJECTS_TECH_STACK")}
                </h3>
                <div className={styles.techTags}>
                  {project.techStack.map((tech) => (
                    <span key={tech} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.featureCard}>
                <h3 className={styles.featureTitle}>
                  {t("PROJECTS_FEATURES")}
                </h3>
                <ul className={styles.featureList}>
                  {project.features.map((feature) => (
                    <li key={feature} className={styles.featureItem}>
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
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action buttons */}
            <div className={styles.actionButtons}>
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
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
                  {t("PROJECTS_LIVE_DEMO")}
                </a>
              )}
              {project.sourceCode && (
                <a
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.actionButton} ${styles.secondaryButton}`}
                >
                  <svg
                    className={styles.buttonIcon}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.12 2.51.35 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.74c0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
                  </svg>
                  {t("PROJECTS_SOURCE_CODE")}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
