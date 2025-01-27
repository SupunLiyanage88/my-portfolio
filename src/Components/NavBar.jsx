import React, { useState, useEffect } from 'react';
import './Tools/Loader.css';
import ShinyText from './Tools/ShinyText.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.pageYOffset;
      const progress = (currentScroll / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactClick = (e) => {
    e.preventDefault();
    window.location.href = '/contact';
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollWithAnimation = (targetPosition) => {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000; // Duration in ms
    let start = null;

    function animation(currentTime) {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);

      // Easing function (easeInOutCubic)
      const ease = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      window.scrollTo(0, startPosition + (distance * ease));

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  };

  const handleAboutClick = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    
    if (aboutSection) {
      const targetPosition = aboutSection.offsetTop;
      scrollWithAnimation(targetPosition);
    } else {
      const targetPosition = document.documentElement.scrollHeight - window.innerHeight;
      scrollWithAnimation(targetPosition);
    }
    
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        {/* Progress bar */}
        <div 
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-300 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
        
        <div className="flex justify-between items-center px-6 sm:px-32 py-4">
          <div className="text-[3.5rem] sm:text-[4.5rem] font-semibold style">
            <ShinyText 
              text="LS" 
              disabled={false} 
              speed={10} 
              className="custom-class select-none" 
            />
          </div>

          <nav className="hidden sm:flex ml-10 gap-10 text-xl">
            <a href="/" className="relative group hover:text-blue-500 transition-colors duration-300">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#projects" className="relative group hover:text-blue-500 transition-colors duration-300">
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#about" 
              onClick={handleAboutClick} 
              className="relative group hover:text-blue-500 transition-colors duration-300"
            >
              About Me
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          <a
            href="#"
            onClick={handleContactClick}
            className="relative py-2 px-8 text-white text-base font-bold rounded-full overflow-hidden bg-blue-500 transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
            style={{ textDecoration: 'none' }}
          >
            Contact Me
          </a>

          <button 
            onClick={toggleMenu} 
            className="sm:hidden text-2xl focus:outline-none"
          >
            <span className="material-icons">Menu </span>
          </button>

          {isMenuOpen && (
            <div className="sm:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 px-6">
              <nav className="flex flex-col gap-6 text-xl">
                <a href="/" className="hover:text-blue-500 transition-colors duration-300">
                  Home
                </a>
                <a href="#projects" className="hover:text-blue-500 transition-colors duration-300">
                  Projects
                </a>
                <a 
                  href="#about" 
                  onClick={handleAboutClick} 
                  className="hover:text-blue-500 transition-colors duration-300"
                >
                  About Me
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>
      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className="h-24"></div>
    </>
  );
}

export default Navbar;