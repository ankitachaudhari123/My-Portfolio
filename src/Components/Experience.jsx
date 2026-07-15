import React from 'react';
import './Experience.css';
import SectionTitle from './SectionTitle';
import AnimateOnScroll from './AnimateOnScroll';
import { TECH_STACK } from '../data/techStack';

const skills = [...TECH_STACK, 'Git', 'GitHub'];

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="section">
        <SectionTitle>Experience</SectionTitle>
        <AnimateOnScroll animation="fade-up">
          <div className="timeline">
            <div className="timeline__marker">
              <div className="timeline__dot glow-pulse"></div>
              <div className="timeline__line"></div>
            </div>
            <div className="timeline__content">
              <div className="exp-card">
                <div className="exp-card__header">
                  <div>
                    <h3 className="exp-card__company">DMS Computers and Technology</h3>
                    <p className="exp-card__role">Full Stack Developer — Websites, Apps &amp; Software</p>
                    <p className="exp-card__location">Palghar, Maharashtra</p>
                  </div>
                  <span className="exp-card__date">Jan 2022 - Jun 2025</span>
                </div>
                <div className="exp-card__body">
                  <p>
                    In my role at DMSTech, I have built websites, apps, and software across the full
                    stack — 4.7 years in web development, 3.5 years in app development, and 1.2 years
                    as a software maker. I have contributed to numerous projects, including over five
                    websites, mobile apps like Get It Split, and full-stack software solutions.
                  </p>
                  <p>
                    I work with HTML, CSS, JavaScript, PHP, and Ajax to build engaging frontends and
                    powerful backends. My toolkit includes React and Flutter for apps, plus Node.js
                    for server-side development.
                  </p>
                  <p>
                    I am continuously learning modern databases and backend tools — MySQL, PostgreSQL,
                    Supabase, and MongoDB — to build scalable, production-ready full-stack applications.
                  </p>
                </div>
                <div className="exp-card__skills">
                  {skills.map((skill, i) => (
                    <span className="tag tag-pop" key={skill} style={{ animationDelay: `${i * 50}ms` }}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Experience;
