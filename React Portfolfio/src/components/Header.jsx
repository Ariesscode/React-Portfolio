import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../styles/Header.css';


const styles = {
  headerStyle: {
    background: 'lightorange',
    width: '70%',
    marginTop: '5px',
    height: '300'
  },
  headingStyle: {
    fontSize: '20px',
  },
 
};


function Header() {
  return (
    <header>
    <div className="github-link">
    <FontAwesomeIcon icon="fa-brands fa-github" />
    </div>
    <div className="linkedIn-link">
      <i className="bi bi-linkedin"></i>
    </div>
    <div className="repo-link">
      <i className="bi bi-git-repo"></i>
    </div>
  </header>
);
}

export default Header;
