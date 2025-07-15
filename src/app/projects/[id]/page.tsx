"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import styles from "./page.module.css";
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
          <div className={styles.notFound}>
            <h1>Project not found</h1>
            <Link href="/#projects" className={styles.backButton}>
              ← {t("PROJECTS_BACK_TO_PROJECTS")}
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
          ← {t("PROJECTS_BACK_TO_PROJECTS")}
        </Link>

        {/* Project image */}
        <div className={styles.projectImage}>
          <Image
            src={project.image}
            alt={t(project.titleKey)}
            width={800}
            height={400}
            className={styles.image}
            priority
          />
        </div>

        {/* Project title and description */}
        <h1 className={styles.projectTitle}>{t(project.titleKey)}</h1>
        <p className={styles.projectDescription}>{t(project.descriptionKey)}</p>
      </div>
    </div>
  );
};

export default ProjectPage;
