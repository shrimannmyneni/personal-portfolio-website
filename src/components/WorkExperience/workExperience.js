// workExperience.js
import React from 'react';
import JobCard from './JobCard';
import jobHistory from './jobHistory';
import './jobSection.css';

const workExperience = () => (
    <section className="job-section" id='workExperience'>
        <h1 className="workExperienceTitle">Work Experience</h1>
        <div className="job-list">
            {jobHistory.map((job, index) => (
                <JobCard key={index} {...job} />
            ))}
        </div>
    </section>
);

export default workExperience;
