import React from 'react';
import './Tools/Loader.css'
import ShinyText from './Tools/ShinyText.jsx';

function Navbar() {
  const handleContactClick = (e) => {
    e.preventDefault();
    
    // Method 1: Using window.open
    const mailtoLink = `mailto:liyanagesupun10@gmail.com?subject=Website Inquiry`;
    window.open(mailtoLink, '_blank');

    // Fallback method if window.open doesn't work
    try {
      // Method 2: Direct href assignment
      window.location.href = mailtoLink;
    } catch (error) {
      // Method 3: Create and click a temporary link
      const link = document.createElement('a');
      link.href = mailtoLink;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <header className="flex justify-between items-center px-32 bg-white shadow-md">
      <div className="text-[4.5rem] font-semibold style">
        <ShinyText 
          text="LS" 
          disabled={false} 
          speed={10} 
          className="custom-class select-none" 
        />
      </div>

      <nav className="flex ml-10 gap-10 text-xl">
        <a href="#" className="hover:text-blue-500">
          Home
        </a>
        <a href="#projects" className="hover:text-blue-500">
          Projects
        </a>
        <a href="#about" className="hover:text-blue-500">
          About Me
        </a>
      </nav>

      <a
  href="#"
  onClick={handleContactClick} // Call the function when clicked
  className="relative py-2 px-8 text-white text-base font-bold rounded-full overflow-hidden bg-blue-500 transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
  style={{ textDecoration: 'none' }}
>
  Contact Me
</a>

    </header>
  );
}

export default Navbar;