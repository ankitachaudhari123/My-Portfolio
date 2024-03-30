import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='nav-bar-box'>
      <ul>
        <br></br>
        <br></br>
        <li className='nav-bar-items'>Home</li>
        <li className='nav-bar-items'>About</li>
        <li className='nav-bar-items'>Project</li>
        <li className='nav-bar-items'>Experience</li>
        <li className='nav-bar-items'>Contact</li>
      </ul>
      <h5 className='nav-bar-text'>Socials</h5>
      <ul>
        <li className='nav-bar-social-items'>Linkedin</li>
        <li className='nav-bar-social-items'>GitHub</li>
        <li className='nav-bar-social-items'>Instragram</li>
      </ul>
    </div>
  )
}

export default NavBar