import React from "react";

/** リンク種別ごとの表示ラベルとアイコン */
const LINK_PRESETS = {
  website: { label: "Website", icon: "fa-solid fa-arrow-up-right-from-square" },
  appStore: { label: "iOS", icon: "fa-brands fa-apple" },
  googlePlay: { label: "Android", icon: "fa-brands fa-google-play" },
};

/** プロジェクトの外部リンク(Webサイト・ストア)をピル型ボタンで表示する */
const ProjectLink = ({ type, url }) => {
  const { label, icon } = LINK_PRESETS[type];

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="project__link"
    >
      <i className={icon} aria-hidden="true"></i>
      {label}
    </a>
  );
};

export default ProjectLink;
