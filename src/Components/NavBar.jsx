import React, { useState, useEffect } from "react";
import "./NavBar.css";
import { IoHome } from "react-icons/io5";
import { FaUser, FaLaptopCode, FaAward, FaPhone } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { TbBrandGithubFilled } from "react-icons/tb";
import { AiFillInstagram } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";
import useActiveSection from "../hooks/useActiveSection";

const navLinks = [
  { id: "home", label: "Home", icon: IoHome },
  { id: "about", label: "About", icon: FaUser },
  { id: "project", label: "Projects", icon: FaLaptopCode },
  { id: "experience", label: "Experience", icon: FaAward },
  { id: "contact", label: "Contact", icon: FaPhone },
];

const socialLinks = [
  { href: "https://www.linkedin.com/in/ankita-chaudhari-6650b3273/", label: "LinkedIn", icon: IoLogoLinkedin },
  { href: "https://github.com/ankitachaudhari123", label: "GitHub", icon: TbBrandGithubFilled },
  { href: "https://www.instagram.com/an_kita_30/", label: "Instagram", icon: AiFillInstagram },
];

const SECTION_IDS = navLinks.map((l) => l.id);

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <a href="#home" className="navbar__logo" onClick={(e) => handleNavClick(e, "home")}>
          <img src={`${process.env.PUBLIC_URL}/favicon.svg`} alt="" className="navbar__logo-icon" />
          <span className="navbar__logo-bracket mono">&lt;</span>
          <span className="navbar__logo-name gradient-animate">Ankita</span>
          <span className="navbar__logo-bracket mono">/&gt;</span>
        </a>

        <ul className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
          {navLinks.map(({ id, label, icon: Icon }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`navbar__link ${activeSection === id ? "navbar__link--active" : ""}`}
                onClick={(e) => handleNavClick(e, id)}
              >
                <Icon size={14} />
                {label}
              </a>
            </li>
          ))}
          <li className="navbar__socials-mobile">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="navbar__social-link" aria-label={label}>
                <Icon size={18} />
              </a>
            ))}
          </li>
        </ul>

        <div className="navbar__socials">
          {socialLinks.map(({ href, label, icon: Icon }, i) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="navbar__social-link icon-float"
              style={{ '--float-delay': `${i * 0.3}s` }}
              aria-label={label}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        <button className="navbar__toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
