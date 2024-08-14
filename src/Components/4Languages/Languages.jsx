import React from 'react'
import './Languages.css'

const Languages = () => {
  return (
    <>
    <div className="languages-container">
      <div className="image-text-container">
        <a href="https://isocpp.org/" target="_blank">
          <img className = "l-image" src = "./images/c++.svg" alt="C++" />
        </a>
        <p className='image-caption'>C++</p>
      </div>
      <div className="image-text-container">
      <a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank">
        <img className = "l-image" src = "./images/css.svg" alt="CSS" />
      </a>
      <p className='image-caption'>CSS</p>
      </div>
      <div className="image-text-container">
      <a href="https://html.com/" target="_blank">
        <img className = "l-image" src = "./images/html.svg" alt="HTML5" />
      </a>
      <p className='image-caption'>HTML</p>        
      </div>
      <div className="image-text-container">
      <a href="https://www.java.com/en/" target="_blank">
        <img className = "l-image" src = "./images/java.svg" alt="Java" />
      </a>
      <p className='image-caption'>Java</p>        
      </div>
      <div className="image-text-container">
      <a href="https://www.javascript.com/" target="_blank">
        <img className = "l-image" src = "./images/javascript.svg" alt="JavaScript" />
      </a>
      <p className='image-caption'>JavaScript</p>        
      </div>
      <div className="image-text-container">
      <a href="https://nodejs.org/en" target="_blank">
        <img className = "l-image" src = "./images/nodejs.svg" alt="NodeJS" />
      </a>
      <p className='image-caption'>NodeJS</p>        
      </div>
      <div className="image-text-container">
      <a href="https://www.python.org/" target="_blank">
        <img className = "l-image" src = "./images/python.svg" alt="Python" />
      </a>
      <p className='image-caption'>Python</p>        
      </div>
      <div className="image-text-container">
      <a href="https://react.dev/" target="_blank"> 
        <img className = "l-image" src = "./images/react.svg" alt="React" />
      </a>
      <p className='image-caption'>React</p>        
      </div>
    </div>
    </>      
  )
}

export default Languages