import React from 'react';

const Footer = () => {
    const socialLinks = [
      { name: 'GitHub', icon: '💻', url: '#' },
      { name: 'LinkedIn', icon: '🔗', url: '#' },
      { name: 'Twitter', icon: '🐦', url: '#' },
      { name: 'Email', icon: '📧', url: '#' }
    ];
  
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 mt-20 text-gray-300">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">About Me</h3>
              <p className="text-sm leading-relaxed">
              "Hi, I'm L.S.B Hemaratne, a dedicated software engineer with a passion for developing innovative 
              and efficient digital solutions. I specialize in crafting user-friendly applications and bringing 
              ideas to life through clean, scalable code. With expertise in modern web and software technologies, 
              I strive to create impactful solutions that make a difference."

              </p>
            </div>
  
            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm hover:text-white transition-colors duration-200">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-white transition-colors duration-200">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-white transition-colors duration-200">
                    Resume
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-white transition-colors duration-200">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Connect</h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 rounded-lg px-4 py-2 transition-colors duration-200"
                  >
                    <span className="text-xl">{link.icon}</span>
                    <span className="text-sm">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
  
          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm">
            <p>© {currentYear} L.S.B Hemaratne. All rights reserved.</p>
            <p className="mt-2 text-gray-400">
                Crafted with passion by L.S.B Hemaratne, a dedicated software engineer striving to create impactful digital solutions.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;