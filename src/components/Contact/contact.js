import React, { useRef } from 'react';
import './contact.css';
import LinkedInImg from "../../images/contact/linkedin.png";
import GithubImg from "../../images/contact/github.png";
import InstaImg from "../../images/contact/insta.jpeg";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_a7e1eln', 'template_y0nlulo', form.current, '0roZsgpq669cIxVmW')
          .then(
            (result) => {
              console.log('SUCCESS: ', result.text);
              e.target.reset();
              alert('Email Sent!');
            },
            (error) => {
              console.log('FAILED: ', error.text);
            }
          );
    };
    
    return (
        <section className="contactPage">
            <div id='contact'>
                <h1 className='contactPageTitle'>Contact Me</h1>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type='text' className='name' placeholder='Your Name' name='your_name' />
                    <input type='email' className='email' placeholder='Your Email' name='your_email' />
                    <textarea className='msg' name='message' rows='6' placeholder='Your Message'></textarea>
                    <button type='submit' className='submitBtn'>Submit</button>
                </form>
                
                <div className='links'>
                    <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                        <img src={LinkedInImg} alt='LinkedIn' className='link' />
                    </a>
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                        <img src={GithubImg} alt='GitHub' className='link' />
                    </a>
                    <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                        <img src={InstaImg} alt='Instagram' className='link' />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;
