import {React, useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import '../styles/typewriter.css';
import CustomCard from '../components/profile-image';
import portfolioImage from '../../../Assets/portfolio.jpeg';
function Home() {
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
        <div className="app-container">
       
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
          <div className="fixed-card" style={{
            position: 'fixed', top: '100px', right: '80px'
          }}>
            <CustomCard
              imageUrl={portfolioImage}
              description="It's just the beginning! Thanks for stopping by to check out my portfolio."
              buttonText="Read more"
              buttonUrl="/About" //url for button to go to about page 
              className="custom-card"
            />
          </div>
        </div>
       
          
      </div>
      
  );
    
  }

  export default Home;