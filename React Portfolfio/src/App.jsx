import React, {useState, useEffect} from 'react';

import Nav from './components/Nav';
import './styles/Navbar.css';
// import Header from './components/Header';
import './styles/Header.css';
import Footer from './components/footer'; // Corrected import
import Typewriter from 'typewriter-effect';
import './styles/typewriter.css';
import CustomCard from './components/profile-image';
import portfolioImage from '../../Assets/portfolio.jpeg';

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import AboutMe from './AboutMe';
// import Contact from './Contact';
// import Resume from './Resume';

function App() {
  const [isTyping, setIsTyping] = useState(true);
  const handleTypingComplete = () => {
  setIsTyping(false)
  }
  useEffect(() => {
    const restartTyping = () => {
      setIsTyping(true);
    };

    if (!isTyping) {
      // Set a delay before restarting the typing animation
      const timeoutId = setTimeout(restartTyping, 2000);

      // Clear the timeout to avoid potential memory leaks
      return () => clearTimeout(timeoutId);
    }
  }, [isTyping]);
  return (
    <div>
      <Nav />
      <Footer />
      <div style={{ display: 'flex' }}>

      <div className="text-effect" style={{ maxHeight: '700px', maxWidth: '620px', overflow: 'hidden' }}>
      {isTyping && (
        <Typewriter 
        options={{ loop: true, delay: 50 }}

          onInit={(typewriter) => {
            typewriter.typeString('<span class="typewriter">Hi, my name is Abigail.</span>')
            .pauseFor(2000)
            .deleteAll()
              
              .typeString('<span class="typewriter">Full stack MERN Developer...</span>')
              .pauseFor(3000)
              .deleteAll()
              .typeString('<span class="typewriter">Latest projects and collaborations.</span>')
              .pauseFor(2000)
              .deleteAll()
              .typeString('<span class="typewriter">Front-End skills...</span>')
              .pauseFor(2000)
              .deleteAll()
              
              .typeString('<span class="typewriter">Back-End skills...</span>')
              .pauseFor(2000)
              .deleteAll()
              
              .typeString('<span class="typewriter">MONGO, MYSQL, NODE</span>')
              .pauseFor(3000)
              .deleteAll()
            
              .typeString('<span class="typewriter">CSS, EXPRESS, HTML,</span>')
              .pauseFor(3000)
              .deleteAll()
              
              .typeString('<span class="typewriter">BOOTSTRAP...</span>')
              .pauseFor(3000)
              .deleteAll()
    
              .typeString('<span class="typewriter">JavaScript, REACT...</span>')
              .pauseFor(2000)
              .deleteAll()
              .start();
             
   
          }}
        
        />
        
        )}
        
    </div>

    <div className="fixed-card" style={{ position: 'fixed', top: '100px', right: '80px'
   }}>
            <CustomCard 
            imageUrl={portfolioImage} 
              buttonText="Read more"
              buttonUrl="https://example.com"
            />
          </div>
    </div>
    </div>
    
  );
}

export default App;
