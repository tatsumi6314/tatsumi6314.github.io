import React from "react";
import ProjectLink from "./ProjectLink";

/** プロジェクト1件(名前・技術タグ・リンク)を表示する行 */
const ProjectItem = ({ name, tech, links }) => (
  <li className="project">
    <div className="project__info">
      <span className="project__name">{name}</span>
      <span className="project__tags">
        {tech.map((tag) => (
          <span key={tag} className="project__tag">
            {tag}
          </span>
        ))}
      </span>
    </div>
    <div className="project__links">
      {links.map((link) => (
        <ProjectLink key={link.url} {...link} />
      ))}
    </div>
  </li>
);

export default ProjectItem;
