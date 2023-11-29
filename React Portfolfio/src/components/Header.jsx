import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GrGithub } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";

import '../styles/Header.css';


const styles = {
  headerStyle: {
    display: 'flex'
  }
  
 
};


function Header() {
  return (
    <header style={styles.headerStyle}>
    <div className="github-link">
    <GrGithub />
    </div>
    <div className="linkedIn-link">
    <FaLinkedin />

    </div>
    <div className="repo-link">
    <FaGitAlt />
    </div>
  </header>
);
}

export default Header;
