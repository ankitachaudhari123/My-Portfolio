import React from 'react'
import './NavBar.css'
import { IoHome } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { TbBrandGithubFilled } from "react-icons/tb";
import { AiFillInstagram } from "react-icons/ai";
import { FaPhone } from "react-icons/fa6";
import { FaAward } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className='nav-bar-box'>
      <ul>
        <br></br>
        <br></br>
        <a href='#home' className='a-hrf'><li className='nav-bar-items'><IoHome />Home</li></a>
        <a href='#about' className='a-hrf'><li className='nav-bar-items'><FaUser />About</li></a>
        <a href='#project' className='a-hrf'><li className='nav-bar-items'><FaLaptopCode />Project</li></a>
        <a href='#experience' className='a-hrf'><li className='nav-bar-items'><FaAward />Experience</li></a>
        <a href='#contact' className='a-hrf'><li className='nav-bar-items'><FaPhone />Contact</li></a>
      </ul>
      <h5 className='nav-bar-text'>Socials</h5>
      <ul>
      <a href='https://www.linkedin.com/in/ankita-chaudhari-6650b3273/' className='a-hrf'><li className='nav-bar-social-items'><IoLogoLinkedin />Linkedin</li></a>
      <a href='https://github.com/ankitachaudhari123' className='a-hrf'><li className='nav-bar-social-items'><TbBrandGithubFilled />GitHub</li></a>
      <a href='https://www.instagram.com/an_kita_30/' className='a-hrf'><li className='nav-bar-social-items'><AiFillInstagram />Instragram</li></a>
      </ul>
    </div>
  )
}

export default NavBar