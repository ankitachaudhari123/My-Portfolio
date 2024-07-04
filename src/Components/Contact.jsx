import React from 'react'
import './Contact.css'
import { CiMail } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";

const Contact = () => {
    
  return (
    <>
    <section id='contact'>
        <div className='contact-section'>
            <div className='heading4-div'>
                <div className='heading4-hr-div'>
                    <hr className='heading4-hr'></hr>
                </div>
                <div className='heading4-name-div'>
                    <h1 className='heading4-name'>Contact</h1>
                    <div className='dot4-div'></div>
                </div>
                <div className='heading4-hr-div-2'>
                    <hr className='heading4-hr-2'></hr>
                </div>
            </div>
            <div className='contact-div'>
             <center>
                <div className="contact-text-div">
                    <p className="contact-text">Thank you for taking the time to explore my portfolio. If you have any inquiries, collaboration opportunities, or simply want to get in touch, feel free to reach out using the following methods:</p>
                </div>
                <div className="contact-icon-div">
                    <a href='https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=ankitachaudhari631@gmail.com'><div className="contact-social-icon-div">
                        <div className="contact-social-icon"><CiMail color='white' fontSize={'30px'} /></div>
                        <div className="contact-social-text">ankitachaudhari631@gmail.com</div>
                    </div></a>
                    <a href='https://www.linkedin.com/in/ankita-chaudhari-6650b3273/'><div className="contact-social-icon-div">
                        <div className="contact-social-icon"><CiLinkedin color='white' fontSize={'30px'}/></div>
                        <div className="contact-social-text">LinkdIn</div>
                    </div></a>
                    <a href='https://www.instagram.com/an_kita_30/'><div className="contact-social-icon-div">
                        <div className="contact-social-icon"><CiInstagram color='white' fontSize={'30px'}/></div>
                        <div className="contact-social-text">Instagram</div>
                    </div></a>
                </div>
                <br/>
                <div className="contact-text-div">
                    <p className="contact-text">I value open communication and am always eager to connect with fellow professionals and enthusiasts in the field. Whether you have feedback, questions, or exciting projects to discuss, I look forward to hearing from you!</p>
                </div> 
                <br/><br/>
             </center>
            </div>
        </div>
    </section>
    </>
  )
}

export default Contact