import React from "react";
import ProjectItem from "./ProjectItem";

/** カテゴリ単位(Web / Mobile など)でプロジェクトをまとめたカード */
const ProjectCategory = ({ title, projects, stagger = 0 }) => (
  <section className="project-category fade-in" style={{ "--stagger": stagger }}>
    <h2 className="project-category__title">{title}</h2>
    <ul className="project-category__list">
      {projects.map((project) => (
        <ProjectItem key={project.name} {...project} />
      ))}
    </ul>
  </section>
);

export default ProjectCategory;
