import React from 'react';
import './Home.css';
import { FaGithub, FaLinkedin, FaGlobe, FaMobileAlt, FaLaptopCode } from 'react-icons/fa';
import { HiArrowDown } from 'react-icons/hi';
import TypingText from './TypingText';
import CodeTerminal from './CodeTerminal';
import FloatingCode from './FloatingCode';

const services = [
  { icon: FaGlobe, label: 'Websites', years: '4.7 yrs' },
  { icon: FaMobileAlt, label: 'Apps', years: '3.5 yrs' },
  { icon: FaLaptopCode, label: 'Software', years: '1.2 yrs' },
];

const Home = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1"></div>
        <div className="hero__orb hero__orb--2"></div>
        <div className="hero__grid"></div>
        <FloatingCode />
      </div>

      <div className="hero__layout section">
        <div className="hero__left">
          <div className="hero__badge mono hero-enter" style={{ '--enter-delay': '100ms' }}>
            <span className="hero__badge-dot"></span>
            Full Stack Developer
          </div>

          <h1 className="hero__title hero-enter" style={{ '--enter-delay': '250ms' }}>
            Hey, I'm <span className="hero__name gradient-animate">Ankita</span>
          </h1>

          <p className="hero__role hero-enter" style={{ '--enter-delay': '450ms' }}>
            <TypingText />
          </p>

          <div className="hero__services hero-enter" style={{ '--enter-delay': '550ms' }}>
            {services.map(({ icon: Icon, label, years }) => (
              <span className="hero__service-pill" key={label}>
                <Icon size={14} />
                {label}
                <span className="hero__service-years">{years}</span>
              </span>
            ))}
          </div>

          <p className="hero__desc hero-enter" style={{ '--enter-delay': '650ms' }}>
            I build websites, mobile apps, and software using HTML, CSS, JavaScript, PHP, Ajax,
            React, Flutter, Node.js, and databases like MySQL, PostgreSQL, Supabase, and MongoDB.
          </p>

          <div className="hero__actions hero-enter" style={{ '--enter-delay': '800ms' }}>
            <button className="btn-primary btn-shine" onClick={() => scrollTo('project')}>
              View My Work
            </button>
            <button className="btn-outline" onClick={() => scrollTo('contact')}>
              Get In Touch
            </button>
          </div>

          <div className="hero__socials hero-enter" style={{ '--enter-delay': '950ms' }}>
            <a href="https://github.com/ankitachaudhari123" target="_blank" rel="noreferrer" className="hero__social-link">
              <FaGithub size={20} />
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/ankita-chaudhari-6650b3273/" target="_blank" rel="noreferrer" className="hero__social-link">
              <FaLinkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="hero__right">
          <CodeTerminal />
        </div>

        <button className="hero__scroll hero-enter" style={{ '--enter-delay': '1100ms' }} onClick={() => scrollTo('about')} aria-label="Scroll down">
          <HiArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Home;
