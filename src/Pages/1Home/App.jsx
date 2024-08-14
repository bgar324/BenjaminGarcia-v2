import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../../Components/1Navbar/Navbar';
import AboutMe from '../../Components/2About Me/AboutMe';
import Card from '../../Components/3Card/Card';
import Languages from '../../Components/4Languages/Languages';
import AppProjects from '../2Projects/AppProjects';
import AppContact from '../3Contact/AppContact';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Home route */}
        <Route 
          path="/" 
          element={
            <div>
              <div className="abme-card">
                <div className="about-me"><AboutMe /></div>
                <div className="card"><Card /></div>
              </div>
              <div className="grid">
                <div className="languages"><Languages /></div>
              </div>
            </div>
          } 
        />
        {/* Projects route */}
        <Route path="/projects" element={<AppProjects />} />
        {/* Contact route */}
        <Route path="/contact" element={<AppContact />} />
      </Routes>
    </>
  );
}

export default App;
