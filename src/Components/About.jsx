import React from 'react'
import './About.css'


const About = () => {
  return (
    <>
    <section id='about'>
      <div className='about-section'>
        <div className='heading1-div'>
          <div className='heading1-name-div'>
            <h1 className='heading1-name'>About</h1>
            <div className='dot1-div'></div>
          </div>
          <div className='heading1-hr-div'>
           <hr className='heading1-hr'></hr>
          </div>
       </div>
       <center>
         <div className='about-info-div'>
           <br></br>
           <h1 className='about-info'>I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly website. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, JavaScript, Ajax, Wordpress, Wix , PHP and My-SQL.</h1>              
         </div>
         <div className='about-info-box'>
          <div className='info-box'></div>
          <div className='info-box'></div>
          <div className='info-box'></div>
         </div>  
        </center>
      </div>
    </section>
    </>
  )
}

export default About