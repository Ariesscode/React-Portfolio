import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet} from 'react-router-dom';

import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Projects from './components/projects';
import Resume from './components/Resume';
import Nav from './components/Nav';
import './styles/Navbar.css';
// import Header from './components/Header';
import './styles/Header.css';
import Footer from './components/footer'; // Corrected import
import Typewriter from 'typewriter-effect';
import './styles/typewriter.css';
import CustomCard from './components/profile-image';
import portfolioImage from '../../Assets/portfolio.jpeg';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}



   
     

export default App;
