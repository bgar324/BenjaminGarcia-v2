import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className='contact-prevent-scroll'>
      <div className="contact-container">
        <div className="bigText">
          <h1>Let's Work Together.</h1>
        </div>
        <div className="contact-info">
          <a href="mailto:bentgarcia05@gmail.com" className="mail">bentgarcia05@gmail.com</a>
          <br />
          <div className="contact-images">
            <a href="https://www.linkedin.com/in/btgarcia05" className="icon-wrapper" target='_blank' rel='noopener noreferrer'>
              <img src="/static/images/linkedin.svg" className="contact-image" alt="LinkedIn" />
            </a>
            <a href="https://github.com/bgar324" className="icon-wrapper" target='_blank' rel='noopener noreferrer'>
              <img src="/static/images/github.svg" className="contact-image" alt="GitHub" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
