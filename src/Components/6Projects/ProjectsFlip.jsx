import React from 'react'
import './ProjectsFlip.css'

const ProjectFlips = ({ link, imageSrc, title, description, languages }) => {
  return (
    <div className="projects-container">
      <div className="project">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <h2 className="project-title">{title}</h2>
        </a>
        <p className="project-description">{description}</p>
        <div className="project-languages">
          {languages.map((language, index) => (
            <p className="p-lang" key={index}>{language}</p>
          ))}
        </div>
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer" className="project-image-link">
        <div className="project-image">
          <img src={imageSrc} alt={title} />
        </div>
      </a>
    </div>
  )
}

export default ProjectFlips

