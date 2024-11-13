import React from 'react';
import './education.css';

const Education = () => {
    return (
        <section className="educationSection">
            <h1 className="educationTitle">Education</h1>
            <div className="educationDegree">
                University of Michigan - Ann Arbor
                <br />
                Pursuing a B.S.E. in Computer Science, Mathematics Minor
                <br />
                Expected Graduation: May 2026
            </div>
            <div className="educationContent">
                <div className="educationColumn">
                    <h3>Relevant Coursework</h3>
                    <ul className="courseworkList">
                        <li>EECS 489: Computer Networks</li>
                        <li>EECS 485: Web Systems</li>
                        <li>EECS 370: Intro to Computer Organization</li>
                        <li>EECS 281: Data Structures & Algorithms</li>
                        <li>EECS 280: Object-Oriented Programming</li>
                        <li>IOE 373: Data Analytics Tools & Techniques</li>
                    </ul>
                </div>
                <div className="educationColumn">
                    <h3>Project Teams</h3>
                    <ul className="projectsList">
                        <li>2025 Constellation Multidisciplinary Project<br/><span className='date'>(1/2025 - 12/2025)</span></li>
                        <li>Michigan RoboSub<br/><span className='date'>(9/2024 - 12/2024)</span></li>
                        <li>Wolverine Sports Analytics<br/><span className='date'>(9/2023 - 12/2023)</span></li>
                    </ul>
                </div>
                <div className="educationColumn">
                    <h3>Other Activities</h3>
                    <ul className="activitiesList">
                        <li>Treasurer, Sigma Nu Fraternity<br/><span className='date'>(12/2023 - 11/2024)</span></li>
                        <li>Volunteer, 826Michigan<br/><span className='date'>(1/2023 - 4/2023)</span></li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Education;
