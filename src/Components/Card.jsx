import React from 'react'
import './Card.css'

const Card = ({img,name,language1,language2,language3,language4,language5,language6,icon1,icon2,link1,link2,description}) => {
  return (
    <>
      <div className="card-contaner">
        <div className="card-img-div">
         <img src={img} alt={name} />
        </div>
        <div className="card-description-div">
          <div className='Card-name-div'>
             <h4 className='card-text'>{name}</h4>
          </div>
          <div className="card-language-and-link-div">
            <div className="card-language-div">
              <p>{language1}</p>
              <p>{language2}</p>
              <p>{language3}</p>
              <p>{language4}</p>
              <p>{language5}</p>
              <p>{language6}</p>
            </div>
            <div className="card-link-div">
              <h1><a href={link1} target='blank'>{icon1}</a> <a href={link2} target='blank'>{icon2}</a></h1>
            </div>
          </div>
          <div className="description-box">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card;