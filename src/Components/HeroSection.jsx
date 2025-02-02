import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faCheck, faFile, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { MdEmail, MdCopyAll } from "react-icons/md";
import profilePic from '../assets/Supun Liyanage profile pic.png';
import BlurText from './Tools/BlurText.jsx';
import SplitText from './Tools/SplitText.jsx';
import './Tools/Tool.css';
import FadeContent from './Tools/FadeContent.jsx'
import AnimatedContent from './Tools/AnimatedContent.jsx'
import RotatingText from './Tools/RotatingText'


const HeroSection = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const resumeUrl = "https://drive.google.com/file/d/1bEQ1GR5fuxZ2UOfcSqUozpqESxEYnXmT/view?usp=drive_link";
  
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  const handleAnimationCompleteS = () => {
    console.log('All letters have animated!');
  };

  const handleResumeClick = (action) => {
    setIsDownloading(true);
    
    if (action === 'download') {
      const fileId = resumeUrl.split('/')[5];
      const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
      
      // Create temporary link for download
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.setAttribute('download', 'Supun_Liyanage_Resume.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // Open in new tab
      window.open(resumeUrl, '_blank');
    }
    
    setIsDownloading(false);
  };

  const location = "Malabe, Sri Lanka";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;

  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("liyanagesupun10@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  

  return (
    <div>
      <section className="flex flex-col-reverse md:flex-row items-center bg-gray-100 justify-center text-center py-5">
        {/* Profile Image */}
        <div className="flex-1 flex flex-col items-center">
          <AnimatedContent
              distance={150}
              direction="horizontal"
              reverse={false}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.2}
            >
            <img
              src={profilePic}
              alt="Profile"
              className="w-[15rem] md:w-[25rem] h-auto mx-auto"
            />
          </AnimatedContent>
          <div className="flex items-center gap-4 mt-4 relative">
          <AnimatedContent
              distance={70}
              direction="vertical"
              reverse={false}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.2}
            >
            <div className="flex items-center gap-4 mt-4 relative">
              <MdEmail className="text-2xl" />
              <h3 className="text-base font-semibold">liyanagesupun10@gmail.com</h3>
              <MdCopyAll 
                className="text-2xl cursor-pointer hover:text-blue-500 transition-colors"
                onClick={copyToClipboard}
              />
            </div>
            </AnimatedContent>
            {copied && (
              <div className="fixed transform -translate-x-1/2 bg-gray-300 text-black px-4 py-2 rounded-lg text-sm flex items-center gap-2 shadow-lg notification-animate z-50" style={{ left: '50%', bottom: '2rem' }}>
                <FontAwesomeIcon icon={faCheck} className="text-green-600" />
                <span>E-mail Copied!</span>
              </div>
            )}
          </div>
        </div>


        {/* Text Content */}
        <div className="flex-1 md:mr-[15rem] w-full md:w-[20rem] mt-10 md:mt-20 px-5 md:px-0">

          {/* <BlurText
            text="Hi, I'm Supun Liyanage!"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-3xl md:text-4xl font-semibold"
          /> */}

          <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
          <div className="items-center justify-center flex text-3xl md:text-4xl font-semibold">
          
            <div className="mr-3 mb-1 text-gray-500">I'm</div>
            
            <RotatingText
              texts={['Supun Liyanage', 'Software Developer', 'Full-Stack Developer', 'Creative Coder!','Digital Craftsman']}
              mainClassName="px-2 sm:px-2 md:px-3 text-black  sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.020}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={5000}
            />
          
          </div>
          </FadeContent>

          <p className="text-base md:text-lg mt-3 max-w-2xl mx-auto">
            <SplitText
              text="    A passionate software engineer specializing in building innovative web and mobile applications. Explore my work and let's create something amazing together!"
              className="text-lg md:text-2xl font-thin text-center"
              delay={15}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
              onLetterAnimationComplete={handleAnimationCompleteS}
            />
          </p>

          <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>

          {/* Social Links */}
          <div className="flex justify-center gap-5 my-5">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/supun-liyanage-600790223"
              className="group relative inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="focus:outline-none">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-3xl md:text-4xl transform transition-transform duration-300 hover:scale-125 text-blue-500"
                />
              </button>
              <span className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-20 px-4 py-2 text-sm font-bold text-white bg-gray-900 rounded-lg shadow-lg transition-transform duration-300 ease-in-out scale-0 group-hover:scale-100">
                LinkedIn
              </span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/SupunLiyanage88"
              className="group relative inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="focus:outline-none">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-3xl md:text-4xl transform transition-transform duration-300 hover:scale-125 hover:text-black"
                />
              </button>
              <span className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-20 px-4 py-2 text-sm font-bold text-white bg-gray-900 rounded-lg shadow-lg transition-transform duration-300 ease-in-out scale-0 group-hover:scale-100">
                GitHub
              </span>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/supun.liyanage08/"
              className="group relative inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="focus:outline-none">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-3xl md:text-4xl transform transition-transform duration-300 hover:scale-125 text-blue-600"
                />
              </button>
              <span className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-20 px-4 py-2 text-sm font-bold text-white bg-gray-900 rounded-lg shadow-lg transition-transform duration-300 ease-in-out scale-0 group-hover:scale-100">
                Facebook
              </span>
            </a>
          </div>

          </FadeContent>

          <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>

          {/* Resume Button */}
          <div class="container">
              <button
                  onClick={() => handleResumeClick('download')}
                  disabled={isDownloading}
                >
              <label class="label">
                <input type="checkbox" class="input" />
                <span class="circle"
                  >
                    <FontAwesomeIcon icon={faFile} className="icon" />
                  
                  <div class="square"></div>
                </span>
                <p class="title">Download Resume</p>
                <p class="title">Retry</p>
              </label>
              </button>
          </div>

          {/* Location Link */}
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors group relative"
          >
            <FontAwesomeIcon icon={faLocationDot} className="mr-2 text-lg" />
            {location}
          </a>

          </FadeContent>
        </div>


      </section>
    </div>

  );
};

export default HeroSection;