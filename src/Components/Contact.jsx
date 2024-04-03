import React, { useRef } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_60lxjgt', 'template_pwrcfr1', form.current, {
            publicKey: 'HevVQmrZfqOBZ3NnWTBex',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    
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
            </div>
            <div className='contact-div'>
                <center>
                <div className="contact-text-div">
                    <p className='contact-text'>Please fill out the form below to discuss any work opportunities.</p>
                </div>
                
                <div className="contact-from-div">
                    <form className="contact-form" ref={form} onSubmit={sendEmail}>
                        <input type="text" className='name' placeholder='Your Name' name="user_name"/>
                        <input type="email" className='email' placeholder='Your Email' name="user_email"/>
                        <textarea className='msg' name='message' rows="5" placeholder='Your Message'></textarea>
                        <button type="submit" value="send" className="submitBtn">Submit</button>
                    </form>
                </div>
                </center>
            </div>
        </div>
    </section>
    </>
  )
}

export default Contact