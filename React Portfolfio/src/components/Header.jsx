import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GrGithub } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import '../styles/Header.css';


const styles = {
  headerStyle: {
    display: 'flex',
    size: '20px',
    color: 'purple'
  },
 iconStyle: {
    fontSize: '2em', 
    marginRight: '5px'
  }
  
 
};




const Header = () => {
  return (
    <header style={styles.headerStyle}>
      <div className="github-link">
        <a href="/https://github.com/Ariesscode" target="_blank" rel="noopener noreferrer">
          <GrGithub style={styles.iconStyle} />
        </a>
      </div>
      <div className="linkedIn-link">
        <a href="/www.linkedin.com/in/abigail-burtley-a401ba2a2" target="_blank" rel="noopener noreferrer">
          <FaLinkedin style={styles.iconStyle}/>
        </a>
      </div>
      <div className="repo-link">
        <a href="/https://github.com/Ariesscode/React-Portfolio" target="_blank" rel="noopener noreferrer">
          <FaGitAlt style={styles.iconStyle}/>
        </a>
      </div>
    </header>
  );
};

export default Header;
