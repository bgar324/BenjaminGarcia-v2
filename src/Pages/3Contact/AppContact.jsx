import React from 'react';
import './AppContact.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../../Components/1Navbar/Navbar';
import Contact from '../../Components/5Contact/Contact';
import { Helmet } from 'react-helmet';


const AppContact = () => {
  return (
    <>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <div className="contact">
        <Contact />
      </div>
    </>
  );
}

export default AppContact;
