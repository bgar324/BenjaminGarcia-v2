import React from 'react'
import './ProjectsFlip.css'

const ProjectFlips = ({ link, imageSrc, title, description, languages }) => {
  return (
    <a href={link} target='_blank' rel="noopener noreferrer">
      <div className="projects-container-flip">
        <div className="project-flip">
          <h2 className="project-title-flip">{title}</h2>
          <p className="project-description-flip">{description}</p>
          <div className="project-languages-flip">
            {languages.map((language, index) => (
              <p className="p-lang-flip" key={index}>{language}</p>
            ))}
          </div>
        </div>
        <div className="project-image-flip">
          <img src={imageSrc} alt={title} />
        </div>
      </div>
    </a>
  )
}

export default ProjectFlips
