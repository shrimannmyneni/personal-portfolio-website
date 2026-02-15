import React from 'react';
import './contact.css';
import LinkedInImg from "../../images/contact/linkedin.png";
import GithubImg from "../../images/contact/github.png";
import InstaImg from "../../images/contact/insta.jpeg";

const Contact = () => {
    return (
    <section className="contact" id='contact'>
        <div className="contactContainer">
            <h1 className="contactPageTitle">Contact Me</h1>
            <div className="emailDisplay">
                <a href="mailto:shrimann.myneni@outlook.com" className="emailLink">
                    shrimann.myneni@outlook.com
                </a>
            </div>
            <div className="socialLinks">
                <a href="https://www.linkedin.com/in/shrimann-myneni-17286b214/" target="_blank" rel="noopener noreferrer">
                    <img src={LinkedInImg} alt="LinkedIn" className="socialIcon" />
                </a>
                <a href="https://github.com/shrimannmyneni" target="_blank" rel="noopener noreferrer">
                    <img src={GithubImg} alt="GitHub" className="socialIcon" />
                </a>
                <a href="https://www.instagram.com/shr1myneni/?locale=en" target="_blank" rel="noopener noreferrer">
                    <img src={InstaImg} alt="Instagram" className="socialIcon" />
                </a>
            </div>
        </div>
    </section>
    );
}

export default Contact;