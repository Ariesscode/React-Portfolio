import React from 'react';
import '../styles/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TfiEmail } from "react-icons/tfi";

export default function Nav() {
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

          <a style={styles.navbarA} href="#">Home</a>
        </li>
        <li style={styles.navbarItem}>
          <a style={styles.navbarA} href="#">About me</a>
        </li>
        <li style={styles.navbarItem}>
          <a style={styles.navbarA} href="#">Projects</a>
        </li>
        <li style={styles.navbarItem}>
          <a style={styles.navbarA} href="#">Resume</a>
        </li>
      </ul>
      <a className="animated-header" style={styles.navbarContact} href="#">
      <TfiEmail />

      </a>

    </nav>
  );
}
