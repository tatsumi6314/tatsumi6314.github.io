import React from "react";
import "./App.css";
import qiitaIcon from "./image/qiita-white-icon.png"; // 画像をインポート
import profileImage from "./image/profile.png"; // 追加: プロフィール写真をインポート

const App = () => {
  return (
    <div className="App">
      <section className="profile-section">
        <img
          src={profileImage} // 変更: 仮のプロフィール写真をprofile.pngに変更
          alt="Tatsumi Oikawa"
          className="profile-picture"
        />
        <h2>Tatsumi Oikawa (翁川 竜海)</h2>
        <h3>Portfolios</h3>
      </section>
      <div className="projects-section">
        <div className="projects-category">
          <h4>Web Projects</h4>
          <ul>
            <li>
              <a
                href="https://www.speedqueen-cl.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="App-link"
              >
                <span className="project-title">Speed Queen</span>
                <span className="project-tag">TypeScript React</span>
              </a>
            </li>
            <li>
              <a
                href="https://naachan-journey.com"
                target="_blank"
                rel="noopener noreferrer"
                className="App-link"
              >
                <span className="project-title">Naachan Journey</span>
                <span className="project-tag">PHP WordPress</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="projects-category">
          <h4>Mobile Projects</h4>
          <ul>
            <li>
              <a
                href="https://apps.apple.com/jp/app/sketchmap/id6738701125"
                target="_blank"
                rel="noopener noreferrer"
                className="App-link"
              >
                <span className="project-title">SketchMap</span>
                <span className="project-tag">Dart Flutter iOS</span>
              </a>
            </li>
            <li>
              <a
                href="https://play.google.com/store/apps/details?id=com.sketch_map&hl=ja"
                target="_blank"
                rel="noopener noreferrer"
                className="App-link"
              >
                <span className="project-title">SketchMap</span>
                <span className="project-tag">Dart Flutter Android</span>
              </a>
            </li>
            <li>
              <a
                href="https://apps.apple.com/jp/app/kokokara/id6740821050"
                target="_blank"
                rel="noopener noreferrer"
                className="App-link"
              >
                <span className="project-title">Kokokara</span>
                <span className="project-tag">Dart Flutter iOS</span>
              </a>
            </li>
            <li>
              <a
                href="https://play.google.com/store/apps/details?id=com.kokokara&hl=ja"
                target="_blank"
                rel="noopener noreferrer"
                className="App-link"
              >
                <span className="project-title">Kokokara</span>
                <span className="project-tag">Dart Flutter Android</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="accounts-section">
        <a
          href="https://www.linkedin.com/in/tatsumi-oikawa-44a77414a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/tatsumi6314"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://qiita.com/tatsumi6314"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={qiitaIcon} // インポートした画像を利用
            alt="Qiita"
            className="qiita-icon"
            style={{ width: "48px", height: "48px" }} // 変更: アイコンサイズを48pxに戻す
          />
        </a>
      </div>
    </div>
  );
};

export default App;
