import React, { useState, useEffect } from 'react';
import { RiMenu4Line, RiCloseLine } from 'react-icons/ri';
import { FiHome, FiFolder, FiUser, FiMail } from 'react-icons/fi';
import ShinyText from './Tools/ShinyText.jsx';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

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
    const duration = 1000;
    let start = null;

    function animation(currentTime) {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);

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

  const navItems = [
    { name: 'Home', icon: FiHome, href: '/' },
    { name: 'Projects', icon: FiFolder, href: '#projects' },
    { name: 'About Me', icon: FiUser, href: '#about', onClick: handleAboutClick },
  ];

  return (
    <div className="relative">
      <header className="bg-white shadow-sm backdrop-blur-md bg-opacity-80">
        <div 
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
        
        <div className="relative">
          <div className="flex justify-between items-center px-6 sm:px-32 py-4">
            <div className="text-[3.5rem] sm:text-[4.5rem] font-semibold">
              <ShinyText 
                text="LS" 
                disabled={false} 
                speed={10} 
                className="custom-class select-none" 
              />
            </div>

            <nav className="hidden sm:flex ml-16 gap-12 text-lg">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a 
                    key={item.name}
                    href={item.href}
                    onClick={item.onClick}
                    className="relative group flex items-center gap-2 text-gray-600 hover:text-blue-500 transition-colors duration-300"
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.name}</span>
                    <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                );
              })}
            </nav>

            <a
              href="#"
              onClick={handleContactClick}
              className="hidden sm:flex items-center gap-2 relative py-2.5 px-8 text-white text-base font-medium rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg active:scale-95"
            >
              <FiMail className="w-5 h-5" />
              Contact Me
            </a>

            <button 
              onClick={toggleMenu} 
              className="sm:hidden text-2xl focus:outline-none text-gray-600 hover:text-blue-500 transition-colors duration-300"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? 
                <RiCloseLine className="w-8 h-8" /> : 
                <RiMenu4Line className="w-8 h-8" />
              }
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <div 
            className={`sm:hidden bg-white/95 backdrop-blur-sm overflow-hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'max-h-80 border-t border-gray-100' : 'max-h-0'
            }`}
          >
            <nav className="flex flex-col px-6 py-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a 
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      if (item.onClick) item.onClick(e);
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center gap-3 py-4 text-lg text-gray-600 hover:text-blue-500 transition-all duration-300 border-b border-gray-100"
                  >
                    <Icon className="w-5 h-5" />
                    {item.name}
                  </a>
                );
              })}
              <a
                href="#"
                onClick={(e) => {
                  handleContactClick(e);
                  setIsMenuOpen(false);
                }}
                className="flex items-center gap-3 py-4 text-lg text-blue-500 hover:text-blue-600 transition-all duration-300"
              >
                <FiMail className="w-5 h-5" />
                Contact Me
              </a>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;