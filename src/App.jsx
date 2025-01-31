import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/NavBar';
import './Components/Tools/Loader.css';
import AnimatedContent from './Components/Tools/AnimatedContent.jsx';
import ContactPage from './Components/ContactPage';
import Project from './Components/Projects';
import HomePage from './Components/HomePage'; 
import Footer from './Components/Footer.jsx'; 


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
    <BrowserRouter>
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
          <div className="bg-gray-100 min-h-screen">
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
            

            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/Project" element={<Project />} />
            </Routes>
            <Footer/>
          </div>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
