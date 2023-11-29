import React, {useState, useEffect} from 'react';

import Nav from './components/Nav';
import './styles/Navbar.css';
import Header from './components/Header';
import './styles/Header.css';
import Footer from './components/footer'; // Corrected import
import Typewriter from 'typewriter-effect';

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
      <Header />
      <Footer />
      <div className="text-effect">
      {isTyping && (
        <Typewriter 
        options={{ loop: true }}

          onInit={(typewriter) => {
            typewriter.typeString("Hi, my name is Abigail!")
              .pauseFor(2000)
              .deleteAll()
              .typeString("Full stack MERN Developer")
              .deleteAll()
              .pauseFor(1000)
              .typeString("Check out some of my latest projects!")
              .deleteAll()
              .pauseFor(1000)
              .typeString("By the way, thanks for stopping by :)")
              .deleteAll()
              .start();
             
   
          }}
        
        />
        
        )}
    </div>
    </div>
  );
}

export default App;
