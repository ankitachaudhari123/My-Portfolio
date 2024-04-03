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
        </div>
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
      </div>
    </section>   
    </>
  )
}

export default Project