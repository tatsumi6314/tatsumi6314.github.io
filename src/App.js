import React from "react";
import "./App.css";
import Profile from "./components/Profile";
import ProjectCategory from "./components/ProjectCategory";
import SocialLinks from "./components/SocialLinks";
import { profile } from "./data/profile";
import { projectCategories } from "./data/projects";
import { socialLinks } from "./data/socialLinks";

/** ポートフォリオ全体のレイアウトを組み立てるルートコンポーネント */
const App = () => (
  <div className="app">
    <main className="app__container">
      <Profile {...profile} />
      <div className="projects">
        {projectCategories.map((category, index) => (
          <ProjectCategory
            key={category.title}
            {...category}
            stagger={index + 1}
          />
        ))}
      </div>
      <SocialLinks links={socialLinks} stagger={projectCategories.length + 1} />
    </main>
    <footer className="footer">
      © {new Date().getFullYear()} Tatsumi Oikawa
    </footer>
  </div>
);

export default App;
