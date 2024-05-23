import React from 'react'
import './Card.css'

const Card = () => {
  return (
    <>
      <div className="card-contaner">
        <div className="card-img-div">
         <img src="" alt="" />
        </div>
        <div className="card-description-div">
          <div className='Card-name-div'>
             <h4 className='card-text'></h4>
          </div>
          <div className="card-language-and-link-div">
            <div className="card-language-div">
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
            </div>
            <div className="card-link-div">
              <h1><a href=''></a> <a href=''></a></h1>
            </div>
          </div>
          <div className="description-box">
            <p></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card;