

import React from 'react';
import '../styles/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TfiEmail } from "react-icons/tfi";
import { Link, useLocation} from 'react-router-dom';


export default function Nav() {
  const currentPage = useLocation().pathname;

  const styles = {
    navbar: {
      padding: '5px',
      height: '60px',
      backgroundColor: 'lightgrey',
      display: 'flex',
      justifyContent: 'end',
      alignItems: 'center',
      fontfamily: 'helvetica',




    },
    navbarList: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      textDecoration: 'none',


    },
    navbarItem: {
      marginRight: '20px',
      marginTop: '15px',
    },
    navbarContact: {
      color: 'black',
      padding: '8px 12px',
      borderRadius: '20px',
      background: 'white',
      textDecoration: 'none',
      marginRight: '20px',
    },
    navbarA: {
      textDecoration: 'none',
      color: 'white',
      fontfamily: 'helvetica',

    }
  };

  return (
    <nav style={styles.navbar}>
      <ul style={styles.navbarList}>
        <li style={styles.navbarItem}>
        <Link className={currentPage === '/' ? 'nav-link active' : 'nav-link'} style={styles.navbarA} to="/">Home</Link>
        </li>
        <li style={styles.navbarItem}>
        <Link className={currentPage === '/About' ? 'nav-link active' : 'nav-link'} style={styles.navbarA} to="/About">About me</Link>
        </li>
        <li style={styles.navbarItem}>
        <Link className={currentPage === '/projects' ? 'nav-link active' : 'nav-link'} style={styles.navbarA} to="/projects">Projects</Link>

        </li>
        <li style={styles.navbarItem}>
        <Link className={currentPage === '/resume' ? 'nav-link active' : 'nav-link'} style={styles.navbarA} to="/resume">Resume</Link>

        </li>
      </ul>
     <Link className="animated-header" style={styles.navbarContact} to="Contact">
      <TfiEmail />

      </Link>


    </nav>
  );
}
