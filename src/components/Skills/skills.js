import React from 'react'
import './skills.css'
import FullStack from "../../images/tech-fields/fullstack.png";
import AI_ML from "../../images/tech-fields/ai-ml.png";
import CloudEng from "../../images/tech-fields/cloud-eng.png";


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
                   <img src={FullStack} alt='Full Stack' className="skillBarImg"/>
                   <div className='skillBarText'>
                        <h2>Full-Stack</h2>
                        <p>Write Content Here</p>
                   </div>
                </div>
                <div className='skillBar'>
                   <img src={AI_ML} alt='AI/ML' className="skillBarImg"/>
                   <div className='skillBarText'>
                        <h2>AI/ML</h2>
                        <p>Write Content Here</p>
                   </div>
                </div>
                <div className='skillBar'>
                   <img src={CloudEng} alt='Cloud Development' className="skillBarImg"/>
                   <div className='skillBarText'>
                        <h2>Cloud Development</h2>
                        <p>Write Content Here</p>
                   </div>
                </div>

            </div>
        </section>
    );
}

export default Skills;