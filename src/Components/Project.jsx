import React from 'react'
import './Project.css'

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
              <div className='my-project-img'></div>
              <div className='my-project-description'></div>
            </div>
            <div className='my-project-box2'>
              <div className='my-project-img'></div>
              <div className='my-project-description'></div>
            </div>
          </div>
          <div className='my-project-div2'>
            <div className='my-project-box1'>
              <div className='my-project-img'></div>
              <div className='my-project-description'></div>
            </div>
            <div className='my-project-box2'>
              <div className='my-project-img'></div>
              <div className='my-project-description'></div>
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