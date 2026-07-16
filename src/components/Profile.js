import React from "react";

/** プロフィール(顔写真・名前・タイトル)を表示するヘッダーセクション */
const Profile = ({ image, latinName, kanjiName, title }) => (
  <header className="profile fade-in">
    <img src={image} alt={latinName} className="profile__avatar" />
    <h1 className="profile__name">
      <span>{latinName}</span>
      <span className="profile__name-separator" aria-hidden="true">
        /
      </span>
      <span>{kanjiName}</span>
    </h1>
    <p className="profile__title">{title}</p>
  </header>
);

export default Profile;
