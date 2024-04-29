import React from 'react'
import './Experience.css'

const Experience = () => {
  return (
    <>
      <section  id='experience'>
        <div className='experience-section'>
          <div className='heading3-div'>
            <div className='heading3-name-div'>
              <h1 className='heading3-name'>Experience</h1>
              <div className='dot3-div'></div>
            </div>
            <div className='heading3-hr-div'>
             <hr className='heading3-hr'></hr>
            </div>
          </div>
          <center>
          <div className='experience-info-div'>

            <div className="company-name-div">
              <div className="company-name">
                <span className="company-name-text">DMS Computers and Technology</span>
                <span className="jonning-year">Dec 2022 - Present</span>
              </div>
              <div className="company-duration">
                <span className="work-from-company">Full Stack Developer</span>
                <span className="company-location">Palghar, Maharashtra</span>
              </div>
            </div>
            <div className="experience-info">
              <span>
                In my current role at DMSTech, I've accrued over a year of invaluable experience, during which I've made substantial contributions to numerous projects. Notably, I've played a pivotal role in the creation of over five websites, including noteworthy projects like Furniture and a Farm House Website. 
                <br/> 
                In addition to my website development duties, I've diversified my skill set by mastering HTML, CSS, JavaScript, PHP, and Ajax. 
                <br/>
                 By harnessing these technologies, I've engineered captivating frontend experiences for a multitude of websites.
                <br/>
                 Moreover, I've broadened my expertise by constructing websites with comprehensive backend functionality, showcasing my proficiency across the entire development spectrum. 
                <br/>
                Presently, I'm proactively honing my abilities by delving into React, with a particular emphasis on advancing my prowess in backend development.
              </span>
            </div>
            <div className="language-skills-names-div">
            <span>HTML</span>
              <span>CSS</span>
              <span>PHP</span>
              <span>Ajax</span>
              <span>JavaScript</span>
              <span>MySql</span>
              <span>React</span>
              <span>Boostrap</span>
              <span>WordPress</span>
              <span>Wix</span>
              <span>GitHub</span>
            </div>
            {/* <div className="language-skills-names">
              <span>HTML</span>
              <span>CSS</span>
              <span>PHP</span>
              <span>Ajax</span>
              <span>JavaScript</span>
              <span>MySql</span>
              <span>React</span>
              <span>Boostrap</span>
              <span>WordPress</span>
              <span>Wix</span>
              <span>GitHub</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>PHP</span>
              <span>Ajax</span>
              <span>JavaScript</span>
              <span>MySql</span>
              <span>React</span>
              <span>Boostrap</span>
              <span>WordPress</span>
              <span>Wix</span>
              <span>GitHub</span>
            </div> */}
          </div>
          </center>
        </div>
      </section>
    </>
  )
}

export default Experience