// certifications.js
import React from 'react';
import './certifications.css';
import MicrosoftLogo from '../../images/certification-imgs/microsoft.png'
import UmichLogo from '../../images/certification-imgs/UmichLogo.jpeg'


const Certifications = () => (
    <section className="cert-section" id='certifications'>
        <h1 className="certificationsTitle">Certifications</h1>
        <div className="cert-list">

                <div className="cert-card">
                    <img src={UmichLogo} alt='Microsoft Logo' className="cert-logo" />
                    <div className="cert-content">
                        <h2 className="cert-title">Introduction to Structured Query Language (SQL)</h2>
                        <p className="cert-organization">University of Michigan</p>
                        <p className="cert-issuedDate">Issued December 2022</p>
                        <a href='https://coursera.org/share/9add8ed1e1be274224e6bb711a469e5c' target="_blank" rel="noopener noreferrer" className="cert-link">
                            Show credential
                        </a>
                        {/* <p className="cert-skills">Skills: MySQL, SQL, MAMP</p> */}
                    </div>
                </div>

                <div className="cert-card">
                    <img src={MicrosoftLogo} alt='Microsoft Logo' className="cert-logo" />
                    <div className="cert-content">
                        <h2 className="cert-title">Microsoft Office Specialist - Associate</h2>
                        <p className="cert-organization">Microsoft</p>
                        <p className="cert-issuedDate">Issued May 2021</p>
                        {/* <a href='https://www.example.com/cert1' target="_blank" rel="noopener noreferrer" className="cert-link">
                            Show credential
                        </a> */}
                        {/* <p className="cert-skills">Skills: Microsoft Office, Microsoft Word 2019, Microsoft Excel 2019, Microsoft PowerPoint 2019</p> */}
                        <p className="cert-id">Credential ID: wNE7n-2FYh</p>
                    </div>
                </div>

        </div>
    </section>
);

export default Certifications;
