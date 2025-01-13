import React, { useState, useEffect } from 'react';
import Navbar from './Components/NavBar'; // Import Navbar
import HeroSection from './Components/HeroSection'; // Import HeroSection
import './Components/Tools/Loader.css'
import AnimatedContent from './Components/Tools/AnimatedContent.jsx'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay of 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loader">
          <div className="loader-text">
            <span>LS</span>
            <span>LS</span>
          </div>
          <div className="loaderL"></div>
        </div>
      ) : (
        <>
          <AnimatedContent
            distance={100}
            direction="Vertical"
            reverse={true}
            config={{ tension: 50, friction: 25 }}
            initialOpacity={0.0}
            animateOpacity
            scale={1.0}
            threshold={0.1}
          >
          <Navbar /> 

          </AnimatedContent>
          <HeroSection /> 
        </>
      )}
    </>
  );
}

export default App;
