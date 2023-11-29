// import { useState } from 'react'
// import reactLogo from './components/react.svg'
// import viteLogo from '/vite.svg'
import Nav from './components/Nav';
import './styles/Navbar.css';
import Header from './components/Header';
import './styles/Header.css';
import Footer from './components/footer';
import Typewriter from 'typewriter-effect';


function App() {
  return (
    <div>
    <Nav />
    <Header />
    <Typewriter />
    <Footer />
  </div>
  )
}

export default App
