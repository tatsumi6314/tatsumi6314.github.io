import React from "react";
import "./App.css";

const PortfolioItem = ({ url, title, language, library, platform }) => (
  <li className="portfolio-item">
    <a
      className="App-link"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="portfolio-content">
        <div className="portfolio-title">{title}</div>
        <div className="portfolio-details">
          <span className="portfolio-language">{language}</span>
          <span className="portfolio-library">{library}</span>
          {platform && <span className="portfolio-platform">{platform}</span>}
        </div>
      </div>
    </a>
  </li>
);

const AccountItem = ({ url, service, username }) => (
  <li className="account-item">
    <a
      className="App-link"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="account-content">
        <span className="account-service">{service}</span>
        <span className="account-username">{username}</span>
      </div>
    </a>
  </li>
);

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Portfolio</h1>
        <section>
          <h2>Web Projects</h2>
          <ul>
            <PortfolioItem
              url="https://www.speedqueen-cl.com/"
              title="Speed Queen"
              language="Typescript"
              library="React"
            />
            <PortfolioItem
              url="https://naachan-journey.com"
              title="Naachan Journey"
              language="PHP"
              library="WordPress"
            />
          </ul>
        </section>
        <section>
          <h2>Mobile Projects</h2>
          <ul>
            <PortfolioItem
              url="https://play.google.com/store/apps/details?id=com.sketch_map&hl=ja"
              title="Sketch Map"
              language="Dart"
              library="Flutter"
              platform="Android"
            />
          </ul>
        </section>
        <h1>Account</h1>
        <section>
          <ul>
            <AccountItem
              url="https://github.com/tatsumi6314"
              service="GitHub"
              username="tatsumi6314"
            />
            <AccountItem
              url="https://www.linkedin.com/in/tatsumi-oikawa-44a77414a/"
              service="LinkedIn"
              username="Tatsumi Oikawa"
            />
          </ul>
        </section>
      </header>
    </div>
  );
};

export default App;