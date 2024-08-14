import React from 'react'
import './Projects.css'

const Project = ({ link, imageSrc, title, description, languages }) => {
  return (
    <a href={link} target='_blank' rel="noopener noreferrer">
      <div className="projects-container">
        <div className="project-image">
          <img src={imageSrc} alt={title} />
        </div>
        <div className="project">
          <h2 className="project-title">{title}</h2>
          <p className="project-description">{description}</p>
          <div className="project-languages">
            {languages.map((language, index) => (
              <p className="p-lang" key={index}>{language}</p>
            ))}
          </div>
        </div>
      </div>
    </a>
  )
}

export default Project
