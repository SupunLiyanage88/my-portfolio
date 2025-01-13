import React from 'react';
import { 
  FaGithub, 
  FaLinkedinIn, 
  FaTwitter, 
  FaEnvelope,
  FaFolder,
  FaFileAlt,
  FaUser,
  FaPhone,
  FaFacebook
} from 'react-icons/fa';

const Footer = () => {
    const socialLinks = [
      { name: 'GitHub', icon: <FaGithub className="w-5 h-5" />, url: 'https://github.com/SupunLiyanage88' },
      { name: 'LinkedIn', icon: <FaLinkedinIn className="w-5 h-5" />, url: 'https://www.linkedin.com/in/supun-liyanage-600790223' },
      { name: 'FaceBook', icon: <FaFacebook className="w-5 h-5" />, url: 'https://www.facebook.com/supun.liyanage08/' },
      { name: 'Email', icon: <FaEnvelope className="w-5 h-5" />, url: 'liyanagesupun10@gmail.com' }
    ];

    const quickLinks = [
      { name: 'Portfolio', icon: <FaFolder className="w-4 h-4" />, url: '#' },
      { name: 'Projects', icon: <FaFolder className="w-4 h-4" />, url: '#' },
      { name: 'E-mail', icon: <FaFileAlt className="w-4 h-4" />, url: 'liyanagesupun10@gmail.com' },
      { name: 'Contact', icon: <FaPhone className="w-4 h-4" />, url: '0764748263' }
    ];
  
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="bg-black text-white mt-20">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* About Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold border-b-2 border-white pb-2 inline-block">
                <FaUser className="inline-block mr-2 mb-1" />
                About Me
              </h3>
              <p className="text-sm leading-relaxed text-gray-300">
                "Hi, I'm L.S.B Hemaratne, a dedicated software engineer with a passion for developing innovative 
                and efficient digital solutions. I specialize in crafting user-friendly applications and bringing 
                ideas to life through clean, scalable code. With expertise in modern web and software technologies, 
                I strive to create impactful solutions that make a difference."
              </p>
            </div>
  
            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold border-b-2 border-white pb-2 inline-block">
                Quick Links
              </h3>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.url} 
                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      {link.icon}
                      <span className="text-sm">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Social Links */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold border-b-2 border-white pb-2 inline-block">
                Connect
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="flex items-center space-x-2 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-lg px-4 py-3 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    {link.icon}
                    <span className="text-sm">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
  
          {/* Copyright */}
          <div className="mt-16 pt-8 border-t border-white border-opacity-20 text-center">
            <p className="text-sm">© {currentYear} L.S.B Hemaratne. All rights reserved.</p>
            <p className="mt-2 text-sm text-gray-400">
              Crafted with passion by L.S.B Hemaratne, a dedicated software engineer striving to create impactful digital solutions.
            </p>
          </div>
        </div>
      </footer>
    );
};
  
export default Footer;