import React from 'react'
import "./intro.css"
import shri from "../../images/pictures/shrimann2023.png";

const Intro = () => {
    return (
        <section id="intro">
            <div className='introContent'>
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Shrimann Myneni</span><br/>Computer Science Student at the University of Michigan</span>
                <span className="introPara">//Insert intro here hi</span>
            </div>
            <img src={shri} alt="g" className='bg'/>
        </section>
    )
}

export default Intro;