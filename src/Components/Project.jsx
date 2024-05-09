import React from 'react'
import './Project.css'
import parasponsive from "../img/para-sponsive.png"
import vegetable from "../img/vegetables-e-commerce-website.png";
import omkarFarm from "../img/omkar-nature-farm.png";
import royalImage from "../img/royal-indian-vivah.png";

const Project = () => {
  return (
    <>
    <section id='project'>
      <div className='project-section'>
        <div className='heading2-div'>
          <div className='heading2-hr-div'>
            <hr className='heading2-hr'></hr>
          </div>
          <div className='heading2-name-div'>
            <h1 className='heading2-name'>Project</h1>
            <div className='dot2-div'></div>
          </div>
          <div className='heading2-hr-div-2'>
            <hr className='heading2-hr-2'></hr>
          </div>
        </div>
        <center>
        <div className='my-project-div'>
          <div className='my-project-div1'>
            <div className='my-project-box1'>
              <div className='my-project-img'>
                <img src={parasponsive} alt="para-sponsive" />
              </div>
              <div className='my-project-description'>
                <div className='project-name-div'>
                  <h4 className='text'>Para Sponsive (E - commerace Website)</h4>
                  <hr className='line-1'/>
                </div>
                <div className="language-and-link-div">
                  <div className="language-div">
                    <p>HTML |</p>
                    <p>CSS |</p>
                    <p>JavaScript |</p>
                    <p>MD Boostrap |</p>
                    <p>PHP |</p>
                    <p>Ajax</p>
                  </div>
                  <div className="link-div">

                  </div>
                </div>
                <div className="description-div">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem suscipit sunt ab reprehenderit ipsam possimus itaque eum vero distinctio ipsum accusamus, voluptatibus animi. Cumque, mollitia quas blanditiis cum magni natus?
                  </p>
                </div>
              </div>
            </div>
            <div className='my-project-box2'>
              <div className='my-project-img'>
                <img src={vegetable} alt="" />
              </div>
              <div className='my-project-description'>
                <div className='project-name-div'>
                  <h4 className='text'>Vegefoods (E - commerace Website)</h4>
                  <hr className='line-2'/>
                </div>
                <div className="language-and-link-div">
                  <div className="language-div">
                    <p>HTML |</p>
                    <p>CSS |</p>
                    <p>JavaScript |</p>
                    <p>PHP |</p>
                    <p>Ajax</p>
                  </div>
                  <div className="link-div">

                  </div>
                </div>
                <div className="description-div">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem suscipit sunt ab reprehenderit ipsam possimus itaque eum vero distinctio ipsum accusamus, voluptatibus animi. Cumque, mollitia quas blanditiis cum magni natus?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='my-project-div2'>
            <div className='my-project-box1'>
              <div className='my-project-img'>
               <img src={omkarFarm} alt="" />
              </div>
              <div className='my-project-description'>
                <div className='project-name-div'>
                  <h4 className='text'>Omkar Nature Farm</h4>
                  <hr className='line-3'/>
                </div>
                <div className="language-and-link-div">
                  <div className="language-div">
                    <p>HTML |</p>
                    <p>CSS |</p>
                    <p>JavaScript |</p>
                    <p>MD Boostrap |</p>
                    <p>PHP |</p>
                    <p>Ajax</p>
                  </div>
                  <div className="link-div">

                  </div>
                </div>
                <div className="description-div">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem suscipit sunt ab reprehenderit ipsam possimus itaque eum vero distinctio ipsum accusamus, voluptatibus animi. Cumque, mollitia quas blanditiis cum magni natus?
                  </p>
                </div>
              </div>
            </div>
            <div className='my-project-box2'>
              <div className='my-project-img'>
               <img src={royalImage} alt="" />
              </div>
              <div className='my-project-description'>
                <div className='project-name-div'>
                  <h4 className='text'>Royal Indian Vivah - web</h4>
                  <hr className='line-4'/>
                </div>
                <div className="language-and-link-div">
                  <div className="language-div">
                    <p>HTML |</p>
                    <p>CSS</p>
                  </div>
                  <div className="link-div">

                  </div>
                </div>
                <div className="description-div">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem suscipit sunt ab reprehenderit ipsam possimus itaque eum vero distinctio ipsum accusamus, voluptatibus animi. Cumque, mollitia quas blanditiis cum magni natus?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
         <div className="view-all-project-btn-div">
          <button className="view-all-project-btn">View All Project</button>
        </div>
        </center>


       
      </div>
    </section>   
    </>
  )
}

export default Project