// import { useState } from 'react'
// import reactLogo from './components/react.svg'
// import viteLogo from '/vite.svg'
import Nav from './components/Nav';
import './styles/Navbar.css';
import Header from './components/Header';
import './styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return (
    <div>
    <Nav />
    <Header />
    <FontAwesomeIcon icon="fa-brands fa-github" />
  </div>
  )
}

export default App
