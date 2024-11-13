// JobCard.js
import React from 'react';
import './jobSection.css';

const JobCard = ({ role, company, location, dates, responsibilities }) => (
    <div className="job-card">
        <h3 className="job-role">{role}</h3>
        <p className="job-company-location">
            {company} — {location}
        </p>
        <p className="job-dates">{dates}</p>
        <ul className="job-responsibilities">
            {responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
);

export default JobCard;
