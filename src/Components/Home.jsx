import React from 'react'
import './Home.css'
import { TbMenuDeep } from "react-icons/tb";

const Home = () => {
  return (
    <>
    <section id='home'>
      <div className='home-section'>
        <div className="mobile-view-nav-bar">
          <br />
          <TbMenuDeep color='white' size="30px"/>
        </div>
      
        <br></br>
        <h1 className='self-name'>Hey, I'm Ankita</h1>
        <br/>
        <p className='self-qualification-into'>Full Stack Web Developer</p>
      </div>
    </section>
    </>
  )
}

export default Home