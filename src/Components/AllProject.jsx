import React from 'react';
import './AllProject.css';
import Card from './Card';
import AnimateOnScroll from './AnimateOnScroll';
import Footer, { AllProjectHeader } from './Footer';
import { PROJECTS } from '../data/projects';
import { FaGithub } from 'react-icons/fa';
import { MdInsertLink } from 'react-icons/md';
import { IoLogoGooglePlaystore } from 'react-icons/io5';

const iconMap = {
  github: <FaGithub color="white" size="20px" />,
  live: <MdInsertLink color="white" size="20px" />,
  playstore: <IoLogoGooglePlaystore color="white" size="20px" />,
};

const AllProject = () => {
  return (
    <div className="all-projects-page">
      <AllProjectHeader />

      <div className="all-projects-page__header">
        <h1 className="all-projects-page__title">All Projects</h1>
        <p className="all-projects-page__subtitle">A collection of my work across web, app &amp; software development</p>
      </div>

      <div className="all-projects-page__grid">
        {PROJECTS.map((project, index) => (
          <AnimateOnScroll key={project.id} animation="fade-up" delay={(index % 2) * 100}>
            <Card
              img={project.img}
              name={project.name}
              tags={project.tags}
              description={project.description}
              links={project.links}
              iconMap={iconMap}
            />
          </AnimateOnScroll>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default AllProject;
