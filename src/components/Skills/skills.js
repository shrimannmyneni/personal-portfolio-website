import React from 'react'
import './skills.css'
import FullStackImg from "../../images/tech-fields/fullstack.png";
import AI_MLImg from "../../images/tech-fields/ai-ml.png";
import CloudEngImg from "../../images/tech-fields/cloud-eng.png";


const Skills = () => {
    return (
        <section id='skills'>
            <span className="Skill Title">
                What I do
            </span>
            <span className="skillDesc">
                UMich Ann Arbor student
            </span>
            <div className='skillBars'>
                <div className='skillBar'>
                   <img src={FullStackImg} alt='Full Stack Logo Picture' className="skillBarImg"/>
                   <div className='skillBarText'>
                        <h2>Full-Stack</h2>
                        <p>Write Content Here</p>
                   </div>
                </div>
                <div className='skillBar'>
                   <img src={AI_MLImg} alt='AI/ML Logo Picture' className="skillBarImg"/>
                   <div className='skillBarText'>
                        <h2>AI/ML</h2>
                        <p>Write Content Here</p>
                   </div>
                </div>
                <div className='skillBar'>
                   <img src={CloudEngImg} alt='Cloud Development Logo Picture' className="skillBarImg"/>
                   <div className='skillBarText'>
                        <h2>Cloud Development</h2>
                        <p>Write Content Here</p>
                   </div>
                </div>

            </div>
        </section>
    )
}

export default Skills;