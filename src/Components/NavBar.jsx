import React from "react";
import "./NavBar.css";
import { IoHome } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { TbBrandGithubFilled } from "react-icons/tb";
import { AiFillInstagram } from "react-icons/ai";
import { FaPhone } from "react-icons/fa6";
import { FaAward } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";

const NavBar = ({ closeNavbar }) => {
  const handleNavLinkClick = (event, id) => {
    event.preventDefault(); 
    closeNavbar(); 

    const section = document.getElementById(id); 
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="nav-bar-box-web">
        <ul style={{marginTop:"-40%"}}>          
          <a href="#home" className="a-hrf" onClick={(e)=> handleNavLinkClick(e, 'home')}>
            <li className="nav-bar-items">
              <IoHome size="15px" /> Home
            </li>
          </a>
          <a href="#about" className="a-hrf" onClick={(e)=> handleNavLinkClick(e, 'about')}>
            <li className="nav-bar-items">
              <FaUser size="15px" /> About
            </li>
          </a>
          <a href="#project" className="a-hrf" onClick={(e)=> handleNavLinkClick(e, 'project')}>
            <li className="nav-bar-items">
              <FaLaptopCode size="15px" /> Project
            </li>
          </a>
          <a href="#experience" className="a-hrf" onClick={(e)=> handleNavLinkClick(e, 'experience')}>
            <li className="nav-bar-items">
              <FaAward size="15px" /> Experience
            </li>
          </a>
          <a href="#contact" className="a-hrf" onClick={(e)=> handleNavLinkClick(e, 'contact')}>
            <li className="nav-bar-items">
              <FaPhone size="15px" /> Contact
            </li>
          </a>
        </ul>
        <h5 className="nav-bar-text">Socials</h5>
        <ul>
          <a
            href="https://www.linkedin.com/in/ankita-chaudhari-6650b3273/"
            className="a-hrf"
          >
            <li className="nav-bar-social-items">
              <IoLogoLinkedin size="20px" /> Linkedin
            </li>
          </a>
          <a href="https://github.com/ankitachaudhari123" className="a-hrf">
            <li className="nav-bar-social-items">
              <TbBrandGithubFilled size="20px" /> GitHub
            </li>
          </a>
          <a href="https://www.instagram.com/an_kita_30/" className="a-hrf">
            <li className="nav-bar-social-items">
              <AiFillInstagram size="20px" /> Instragram
            </li>
          </a>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
