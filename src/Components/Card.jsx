import React from 'react';
import './Card.css';
import { FaGithub } from 'react-icons/fa';
import { MdInsertLink } from 'react-icons/md';
import { IoLogoGooglePlaystore } from 'react-icons/io5';

const defaultIcons = {
  github: <FaGithub size={20} />,
  live: <MdInsertLink size={20} />,
  playstore: <IoLogoGooglePlaystore size={20} />,
};

const Card = ({ img, name, tags = [], description, links = {}, iconMap = defaultIcons }) => {
  const linkEntries = [
    { key: 'github', href: links.github },
    { key: 'live', href: links.live },
    { key: 'playstore', href: links.playstore },
  ].filter((l) => l.href);

  return (
    <article className="all-project-card">
      <div className="all-project-card__img-wrap">
        <img src={img} alt={name} className="all-project-card__img" loading="lazy" />
        {linkEntries.length > 0 && (
          <div className="all-project-card__overlay">
            <div className="all-project-card__links">
              {linkEntries.map(({ key, href }) => (
                <a key={key} href={href} target="_blank" rel="noreferrer" className="all-project-card__link" aria-label={key}>
                  {iconMap[key] || defaultIcons[key]}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="all-project-card__body">
        <h3 className="all-project-card__name">{name}</h3>
        {description && <p className="all-project-card__desc">{description}</p>}
        <div className="all-project-card__tags">
          {tags.map((tag) => (
            <span className="tag" key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default Card;
