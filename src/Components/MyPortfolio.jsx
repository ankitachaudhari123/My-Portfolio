import React from 'react'
import './MyPortfolio.css'
import NavBar from './NavBar'
import Home from './Home'
import About from './About'
import Project from './Project'

const MyPortfolio = () => {
  return (
    <>
    
    <div className='main-box'>
        <div className='nav-bar-section'>
            <NavBar/>
        </div>
        <div className='my-portfolio'>
        <div className='my-info-section'>
          <Home/>
          <About/>
          <Project/>
        </div>
        </div>
    </div>
    </>
  )
}

export default MyPortfolio