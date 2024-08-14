import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="header">
      <a href="/" className="logo">
        <span style={{ color: 'red' }}>!</span>ben
      </a>

      <nav className="navbar">
        <Link to ="/">Home</Link>
        <a href = "/static/images/resume.docx (3).pdf">Resume</a>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  )
}

export default Navbar