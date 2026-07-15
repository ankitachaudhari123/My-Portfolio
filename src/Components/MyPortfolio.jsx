import React from 'react';
import './MyPortfolio.css';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Project from './Project';
import Experience from './Experience';
import Contact from './Contact';
import Footer from './Footer';

const MyPortfolio = () => {
  return (
    <div className="portfolio">
      <a href="#home" className="skip-link">Skip to content</a>
      <NavBar />
      <main className="portfolio__main">
        <Home />
        <About />
        <Project />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default MyPortfolio;
