import React from 'react';
import { Link } from 'react-router-dom';
import { IoLogoLinkedin } from 'react-icons/io5';
import { TbBrandGithubFilled } from 'react-icons/tb';
import { AiFillInstagram } from 'react-icons/ai';
import './Footer.css';

const socialLinks = [
  { href: 'https://www.linkedin.com/in/ankita-chaudhari-6650b3273/', label: 'LinkedIn', icon: IoLogoLinkedin },
  { href: 'https://github.com/ankitachaudhari123', label: 'GitHub', icon: TbBrandGithubFilled },
  { href: 'https://www.instagram.com/an_kita_30/', label: 'Instagram', icon: AiFillInstagram },
];

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer__socials">
        {socialLinks.map(({ href, label, icon: Icon }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer" className="site-footer__social" aria-label={label}>
            <Icon size={20} />
          </a>
        ))}
      </div>
      <p className="site-footer__text">
        Built with <span className="mono">React</span> · Designed &amp; developed by <span>Ankita Chaudhari</span>
      </p>
      <p className="site-footer__copy">© {new Date().getFullYear()} Ankita Chaudhari. All rights reserved.</p>
    </footer>
  );
};

export const AllProjectHeader = () => (
  <header className="all-projects-nav">
    <Link to="/" className="all-projects-nav__logo">
      <img src={`${process.env.PUBLIC_URL}/favicon.svg`} alt="" className="all-projects-nav__icon" />
      <span className="all-projects-nav__name">Ankita</span>
    </Link>
    <Link to="/" className="all-projects-nav__back btn-outline">
      ← Back to Portfolio
    </Link>
  </header>
);

export default Footer;
