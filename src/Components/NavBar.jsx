import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='nav-bar-box'>
      <ul>
        <br></br>
        <br></br>
        <a href='#home' className='a-hrf'><li className='nav-bar-items'>Home</li></a>
        <a href='#about' className='a-hrf'><li className='nav-bar-items'>About</li></a>
        <a href='#project' className='a-hrf'><li className='nav-bar-items'>Project</li></a>
        <a href='#experience' className='a-hrf'><li className='nav-bar-items'>Experience</li></a>
        <a href='#contact' className='a-hrf'><li className='nav-bar-items'>Contact</li></a>
      </ul>
      <h5 className='nav-bar-text'>Socials</h5>
      <ul>
      <a href='https://www.linkedin.com/in/ankita-chaudhari-6650b3273/' className='a-hrf'><li className='nav-bar-social-items'>Linkedin</li></a>
      <a href='https://github.com/ankitachaudhari123' className='a-hrf'><li className='nav-bar-social-items'>GitHub</li></a>
      <a href='https://www.instagram.com/an_kita_30/' className='a-hrf'><li className='nav-bar-social-items'>Instragram</li></a>
      </ul>
    </div>
  )
}

export default NavBar