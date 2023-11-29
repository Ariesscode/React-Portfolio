import React from 'react';

import '../styles/Header.css';

// By importing the Header.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

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
    <header style={styles.headerStyle} className="header">
 <h1>Welcome to my portfolio...</h1>
    </header>
  );
}

export default Header;
