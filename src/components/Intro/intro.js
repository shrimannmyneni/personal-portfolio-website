import React from 'react';
import './intro.css';
import shri from '../../images/pictures/shrimann2023.png';
import TypingEffect from './TypingEffect'; // Make sure this component is in the same folder

const Intro = () => {
    return (
        <section id="intro" className="intro-section">
            <div className="intro-content">
                <span className="intro-greeting">Hello,</span>
                <h1 className="intro-heading">
                    I'm <span className="intro-name">Shrimann Myneni</span>
                </h1>
                <p className="intro-subheading">
                    Computer Science Student at the University of Michigan
                </p>
                <p className="intro-description">
                    I'm <TypingEffect/> {/* Dynamic typing effect component */}
                </p>
            </div>
            <img src={shri} alt="Profile" className="intro-image"/>
        </section>
    );
};

export default Intro;
