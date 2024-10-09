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
        link="https://benjamingarcia.vercel.app/"
        imageSrc="/static/images/portfolio-image.png"
        title="Personal Portfolio"
        description="Check out my portfolio and let me know what you think! I built it using React JS, Vite, and CSS to showcase my projects and my skills. My goal was to create a platform with the focus of networking and connecting with others. I'm excited to network and explore new opportunities together, so feel free to reach out!"
        languages={['React', 'Vite', 'CSS']}
      />

      <ProjectFlips 
        link="https://github.com/bgar324/cs-club-website"
        imageSrc="/static/images/cs-club-web.png"
        title="Mt. SAC CS Club Website"
        description="Spearheaded a complete overhaul of the Mt. SAC Computer Science Club website. Featuring a cleaner design and improved functionaility. Providing up-to-date contact information, showcasing current officers and club advisors, as well as information about upcoming and past events. Along with open source opportunities."
        languages={['Work in Progress', 'React', 'CSS']}
      />

      <Projects
        link="https://github.com/bgar324/suika"
        imageSrc="/static/images/suika.png"
        title="Suika Remake in Python"
        description="Remake of the popular Suika Watermelon game coded entirely in Python. I used Pymunk for realistic physics like collisions, gravity, and friction, and Pygame for rendering graphics and game development. Python handled the game logic, including checking if balls level up when contacting similar ones."
        languages={['Python','Pygame','Pymunk']}
      />

      <ProjectFlips
        link="https://beautiful-gumption-a0ca0e.netlify.app/"
        imageSrc="/static/images/weather.png"
        title="Real Time Weather"
        description="Responsive front-end application that retrieves live weather data from OpenWeather's API. Features include real-time updates, location-based forecasts, and detailed metrics like humidity, wind speed, and temperature extremes. Offering a intuitive user interface with a clean design optimized for both desktop and mobile devices."
        languages={['HTML', 'CSS', 'JavaScript', 'OpenWeather API']}
      />
      </div>
    </>
  );
}

export default AppProjects;
