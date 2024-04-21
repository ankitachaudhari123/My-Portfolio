import React from 'react'
import './About.css'
import { ImHtmlFive2 } from "react-icons/im";
import { SiReact } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";

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
          <div className='info-box'>
            <div className="info-box-div-1">
              <div className="about-info-icon-div">
                <br/><br/>
               <ImHtmlFive2 size="50px" color='white'/>
              </div>
              <div className="about-info-text-div">
                <span style={{boxShadow: "rgb(7, 42, 200) 0px -10px 0px inset", whiteSpace: "nowrap"}}>Frontend Dev </span><span> HTML , CSS</span>
              </div>
            </div>
            <div className="info-box-div-2">
              <div className='about-info-style-div'>
               <span style={{marginLeft:"35px"}}>&lt;h3&gt;</span>
               <div className='straightline'></div>
               <span  style={{marginLeft:"30px"}}>&lt;/h3&gt;</span>
              </div>
              <div className='about-skill-info-div'>
               <div className='skill-div'>
                 <p style={{textAlign:"left"}}>Passionate about UI/UX. Over 1 years of development experience in HTML, CSS, JS frameworks.</p>
               </div>
              </div>
            </div>
          </div>
          <div className='info-box'>
          <div className="info-box-div-1">
              <div className="about-info-icon-div">
               <br/><br/>
               <TbBrandJavascript size="70px" color='white'/>
              </div>
              <div className="about-info-text-div">
                <span style={{boxShadow: "rgb(255, 0, 127) 0px -10px 0px inset ", whiteSpace: "nowrap"}}>Backend Dev </span><span>PHP</span>
              </div>
            </div>
            <div className="info-box-div-2">
              <div className='about-info-style-div'>
               <span style={{marginLeft:"35px"}}>&lt;h3&gt;</span>
               <div className='straightline'></div>
               <span  style={{marginLeft:"30px"}}>&lt;/h3&gt;</span>
              </div>
              <div className='about-skill-info-div'>
               <div className='skill-div'>
                 <p style={{textAlign:"left"}}>Passionate about UI/UX. Over 1 years of development experience in HTML, CSS, JS frameworks.</p>
               </div>
              </div>
            </div>
          </div>
          <div className='info-box'>
          <div className="info-box-div-1">
              <div className="about-info-icon-div">
               <br/><br/>
              <SiReact size="50px" color='white'/>
              </div>
              <div className="about-info-text-div">
                <span style={{boxShadow: "rgb(242, 100, 25) 0px -10px 0px inset", whiteSpace: "nowrap"}}>Frontend Dev </span><span> React</span>
              </div>
            </div>
            <div className="info-box-div-2">
              <div className='about-info-style-div'>
               <span style={{marginLeft:"35px"}}>&lt;h3&gt;</span>
               <div className='straightline'></div>
               <span  style={{marginLeft:"30px"}}>&lt;/h3&gt;</span>
              </div>
              <div className='about-skill-info-div'>
               <div className='skill-div'>
                 <p style={{textAlign:"left"}}>Currently learning react with some experience using JavaScript for past projects.</p>
               </div>
              </div>
            </div>
          </div>
         </div>  
        </center>
      </div>
    </section>
    </>
  )
}

export default About