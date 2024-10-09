import React from 'react'
import './ProjectsFlip.css'

const ProjectFlips = ({ link, imageSrc, title, description, languages }) => {
  return (
    <div className="projects-container-flip">
      <div className="project-flip">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <h2 className="project-title-flip">{title}</h2>
        </a>
        <p className="project-description-flip">{description}</p>
        <div className="project-languages-flip">
          {languages.map((language, index) => (
            <p className="p-lang" key={index}>{language}</p>
          ))}
        </div>
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer" className="project-image-link-flip">
        <div className="project-image-flip">
          <img src={imageSrc} alt={title} />
        </div>
      </a>
    </div>
  )
}

export default ProjectFlips

