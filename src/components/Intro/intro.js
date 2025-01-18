import React from 'react';
import './intro.css';
import shri from '../../images/headshots/ShriMyneni_A14.jpg';
import TypingEffect from './typingEffects'; // Make sure this component is in the same folder

const Intro = () => {
    return (
        <section id="intro" className="intro-section">
            <div className="intro-content">
                <span className="intro-greeting">Hello,</span>
                <h1 className="intro-heading">
                    I'm <span className="intro-name">Shrimann Myneni,</span>
                </h1>
                <p className="intro-subheading">
                    a Computer Science Student at the University of Michigan.
                </p>
                <p className="intro-description">
                    <TypingEffect/> {/* Dynamic typing effect component */}
                </p>
            </div>
            <img src={shri} alt="Profile" className="intro-image"/>
        </section>
    );
};

export default Intro;
