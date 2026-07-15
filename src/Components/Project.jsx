import React from 'react';
import './Project.css';
import SectionTitle from './SectionTitle';
import AnimateOnScroll from './AnimateOnScroll';
import { FEATURED_PROJECTS } from '../data/projects';
import { FaGithub } from 'react-icons/fa';
import { MdInsertLink } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { IoLogoGooglePlaystore } from 'react-icons/io5';

const linkConfig = [
  { key: 'github', icon: FaGithub, label: 'GitHub' },
  { key: 'live', icon: MdInsertLink, label: 'Live' },
  { key: 'playstore', icon: IoLogoGooglePlaystore, label: 'Play Store' },
];

const Project = () => {
  return (
    <section id="project" className="projects">
      <div className="section">
        <SectionTitle>Projects</SectionTitle>

        <div className="projects__grid">
          {FEATURED_PROJECTS.map((project, i) => (
            <AnimateOnScroll key={project.id} animation="fade-up" delay={i * 120}>
              <article className="project-card">
                <div className="project-card__img-wrap">
                  <img src={project.img} alt={project.name} className="project-card__img" loading="lazy" />
                  <div className="project-card__overlay">
                    <div className="project-card__links">
                      {linkConfig
                        .filter(({ key }) => project.links[key])
                        .map(({ key, icon: Icon, label }, j) => (
                          <a
                            key={key}
                            href={project.links[key]}
                            target="_blank"
                            rel="noreferrer"
                            className="project-card__link"
                            style={{ '--link-delay': `${j * 80}ms` }}
                            aria-label={label}
                          >
                            <Icon size={20} />
                          </a>
                        ))}
                    </div>
                  </div>
                </div>
                <div className="project-card__body">
                  <h3 className="project-card__name">{project.name}</h3>
                  <p className="project-card__desc">{project.description}</p>
                  <div className="project-card__tags">
                    {project.tags.map((tag) => (
                      <span className="tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll animation="zoom-in" delay={200}>
          <div className="projects__cta">
            <Link to="/allproject">
              <button className="btn-primary btn-shine">View All Projects</button>
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Project;
