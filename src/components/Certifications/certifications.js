// certifications.js
import React from 'react';
import certsData from './certsData';
import './certifications.css';

const Certifications = () => (
    <section className="cert-section" id='certifications'>
        <h1 className="certificationsTitle">Certifications</h1>
        <div className="cert-list">
            {certsData.map((cert, index) => (
                <div key={index} className="cert-card">
                    <img src={cert.logo} alt={`${cert.organization} logo`} className="cert-logo" />
                    <div className="cert-content">
                        <h2 className="cert-title">{cert.title}</h2>
                        <p className="cert-organization">{cert.organization}</p>
                        <p className="cert-issuedDate">Issued {cert.issuedDate}</p>
                        <a href={cert.credentialLink} target="_blank" rel="noopener noreferrer" className="cert-link">
                            Show credential
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default Certifications;
