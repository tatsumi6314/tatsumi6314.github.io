import React from "react";

/** SNS・外部アカウントへの円形アイコンリンク一覧 */
const SocialLinks = ({ links, stagger = 0 }) => (
  <nav
    className="social fade-in"
    style={{ "--stagger": stagger }}
    aria-label="SNSアカウント"
  >
    {links.map(({ name, url, iconClass, iconSrc }) => (
      <a
        key={name}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="social__link"
        aria-label={name}
      >
        {iconClass ? (
          <i className={iconClass} aria-hidden="true"></i>
        ) : (
          <img src={iconSrc} alt="" className="social__icon-image" />
        )}
      </a>
    ))}
  </nav>
);

export default SocialLinks;
