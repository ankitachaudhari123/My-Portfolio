import React, {useState}from 'react'
import './MyPortfolio.css'
import NavBar from './NavBar'
import Home from './Home'
import About from './About'
import Project from './Project'
import Experience from './Experience'
import Contact from './Contact'
import { FaBars, FaTimes} from "react-icons/fa";
// import './NavBar.css'


const MyPortfolio = () => {

 
  const [click, setClick] = useState(false);

  console.log(click);
 
   const handleClick = () => {
     setClick(!click);
     // setClick(false);
     // console.log(click);
   };


  return (
    <>
    
    <div className='main-box'>
    <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={30} style={{ color: "fff" }} />
        ) : (
          <FaBars size={30} style={{ color: "fff" }} />
        )}
      </div>
        <div className={click ? 'nav-bar-section active' : 'nav-bar-section'}>
            <NavBar onLinkClick={handleClick} />
        </div>
        <div className='my-portfolio'>
        <div className='my-info-section'>
          <Home/>
          <About/>
          <Project/>
          <Experience/>
          <Contact/>
        </div>
        </div>
    </div>
    </>
  )
}

export default MyPortfolio