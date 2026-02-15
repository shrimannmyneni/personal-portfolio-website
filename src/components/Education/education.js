import React from 'react';
import './education.css';

const Education = () => {
    return (
        <section className="educationSection">
            <h1 className="educationTitle">Education</h1>
            <div className="educationDegree">
                University of Michigan - Ann Arbor
                <br />
                B.S.E. in Computer Science, Minor in Mathematics
                <br />
                Expected Graduation: May 2026
            </div>
            <div className="educationContent">
                <div className="educationColumn">
                    <h3>Relevant Coursework</h3>
                    <ul className="courseworkList">
                        <li>Data Structures and Algorithms</li>
                        <li>Object-Oriented Programming</li>
                        <li>Web Systems</li>
                        <li>Computer Networks</li>
                        <li>Computer System Organization</li>
                        <li>Database Management Systems</li>
                        <li>Computer Vision</li>
                        <li>Data Analytics Tools and Techniques</li>
                        <li>Distributed Systems</li>
                    </ul>
                </div>
                <div className="educationColumn">
                    <h3>Project Teams</h3>
                    <ul className="projectsList">
                        <li>Constellation Energy Multidisciplinary Project<br/><span className='date'>(1/2025 - 12/2025)</span></li>
                        <li>Michigan RoboSub<br/><span className='date'>(9/2024 - 12/2024)</span></li>
                        <li>Wolverine Sports Analytics<br/><span className='date'>(9/2023 - 12/2023)</span></li>
                    </ul>
                </div>
                <div className="educationColumn">
                    <h3>Other Activities</h3>
                    <ul className="activitiesList">
                        <li>VP of Finance, IEEE Student Branch at the University of Michigan<br/><span className='date'>(12/2024 - 08/2025)</span></li>
                        <li>Treasurer, Sigma Nu Fraternity<br/><span className='date'>(12/2023 - 11/2024)</span></li>
                        <li>Youth Writing Coach, 826Michigan<br/><span className='date'>(1/2023 - 4/2023)</span></li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Education;