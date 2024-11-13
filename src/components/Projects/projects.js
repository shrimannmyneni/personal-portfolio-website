import React from 'react'
import projectsData from './projectsData'
import './projects.css'

const Projects = () => {
    return (
        <section className="projects-section" id='personalProjects'>
            <h1 className="projects-title">Personal Projects</h1>
            <div className="projects-grid">
                {projectsData.map((project, index) => (
                    <div key={index} className="project-card">
                        <div className="project-image-wrapper">
                            <img src={project.image} alt={project.title} className="project-image" />
                        </div>
                        <div className="project-content">
                            <h2 className="project-name">{project.title}</h2>
                            <p className="project-date">{project.date}</p>
                            <p className="project-technologies">{project.technologies}</p>
                            <p className="project-description">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects
