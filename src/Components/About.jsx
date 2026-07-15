import React from 'react';
import './About.css';
import SectionTitle from './SectionTitle';
import AnimateOnScroll from './AnimateOnScroll';
import { TECH_STACK } from '../data/techStack';
import { ImHtmlFive2 } from "react-icons/im";
import { SiFlutter } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";

const skills = [
  {
    icon: ImHtmlFive2,
    title: "Websites",
    tech: "HTML, CSS, JS, Ajax",
    years: "4.7 years",
    color: "#ec4899",
    description: "Over 4.7 years building responsive, visually appealing websites with HTML, CSS, JavaScript, and Ajax.",
  },
  {
    icon: SiFlutter,
    title: "Apps",
    tech: "Flutter, React",
    years: "3.5 years",
    color: "#f472b6",
    description: "Over 3.5 years developing mobile and cross-platform apps with Flutter and React.",
  },
  {
    icon: TbBrandJavascript,
    title: "Software",
    tech: "PHP, Node, MySQL",
    years: "1.2 years",
    color: "#ff2d95",
    description: "Over 1.2 years building backend software with PHP, Node.js, and MySQL — learning PostgreSQL, Supabase, and MongoDB.",
  },
];

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section">
        <SectionTitle>About</SectionTitle>

        <AnimateOnScroll animation="fade-up">
          <p className="about__intro">
            I am a skilled and passionate Full Stack Developer who builds websites, mobile apps,
            and software solutions — with 4.7 years in web development, 3.5 years in app development,
            and 1.2 years as a software maker. I am learning and working with HTML, CSS, JavaScript,
            PHP, Ajax, React, Flutter, Node.js, MySQL, PostgreSQL, Supabase, and MongoDB.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={100}>
          <div className="about__stack">
            <h3 className="about__stack-title mono">{'// tech stack'}</h3>
            <div className="about__stack-tags">
              {TECH_STACK.map((tech, i) => (
                <span className="tag tag-pop" key={tech} style={{ animationDelay: `${i * 40}ms` }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        <div className="about__skills">
          {skills.map(({ icon: Icon, title, tech, years, color, description }, i) => (
            <AnimateOnScroll key={title} animation="flip-up" delay={i * 150}>
              <div className="skill-card">
                <div className="skill-card__header">
                  <div className="skill-card__icon" style={{ background: `${color}18`, borderColor: `${color}40` }}>
                    <Icon size={32} color={color} />
                  </div>
                  <div>
                    <h3 className="skill-card__title">{title}</h3>
                    <p className="skill-card__years">{years}</p>
                    <p className="skill-card__tech mono">{tech}</p>
                  </div>
                </div>
                <div className="skill-card__code mono">
                  <span className="skill-card__tag">&lt;h3&gt;</span>
                  <div className="skill-card__line"></div>
                  <span className="skill-card__tag">&lt;/h3&gt;</span>
                </div>
                <p className="skill-card__desc">{description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
