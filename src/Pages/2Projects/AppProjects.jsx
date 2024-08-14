import React from 'react';
import './AppProjects.css';
import Projects from '../../Components/6Projects/Projects';
import ProjectFlips from '../../Components/6Projects/ProjectsFlip';
import { Helmet } from 'react-helmet';


const AppProjects = () => {
  return (
    <>
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <div className="projects">
      <Projects
        link="https://www.youtube.com"
        imageSrc="images/portfolio-image.png"
        title="Personal Portfolio"
        description="Check out my portfolio and let me know what you think! I built it using React JS, Vite, and CSS to showcase my projects and my skills. My goal was to create a platform with the focus of networking and connecting with others. I'm excited to network and explore new opportunities together, so feel free to reach out!"
        languages={['React', 'Vite', 'CSS']}
      />

      <ProjectFlips
        link="https://github.com/bgar324/suika"
        imageSrc="images/suika.png"
        title="Suika Remake in Python"
        description="asfsfd"
        languages={['Python','Pygame','Pymunk']}
      />

      <Projects
        link="https://beautiful-gumption-a0ca0e.netlify.app/"
        imageSrc="images/weather.png"
        title="Real Time Weather"
        description="asdfs"
        languages={['HTML', 'CSS', 'JavaScript', 'OpeanWeather API']}
      />
      </div>
    </>
  );
}

export default AppProjects;
