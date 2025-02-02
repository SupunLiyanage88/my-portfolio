import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FaAngleUp } from "react-icons/fa";
import Navbar from './Components/NavBar';
import './Components/Tools/Loader.css';
import AnimatedContent from './Components/Tools/AnimatedContent.jsx';
import ContactPage from './Components/ContactPage';
import Project from './Components/Projects';
import HomePage from './Components/HomePage'; 
import Footer from './Components/Footer.jsx'; 

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simulate a loading delay of 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (isLoading) {
    return (
      <div className="loader">
        <div className="loader-text">
          <span>LS</span>
          <span>LS</span>
        </div>
        <div className="loaderL"></div>
      </div>
    );
  }

  return (
    <BrowserRouter>
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
        
        <Footer />

        <button
          onClick={scrollToTop}
          className={`
            fixed bottom-6 right-6
            w-12 h-12
            bg-gray-900 dark:bg-white
            text-white dark:text-gray-900
            rounded-full shadow-lg
            flex items-center justify-center
            transform transition-all duration-300 ease-in-out
            hover:bg-gray-700 dark:hover:bg-gray-100
            hover:scale-110
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}
          `}
          aria-label="Scroll to top"
        >
          <FaAngleUp 
            className="w-6 h-6 animate-bounce" 
            size={24}
          />
        </button>
      </div>
    </BrowserRouter>
  );
}

export default App;