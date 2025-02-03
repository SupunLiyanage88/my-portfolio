import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintBrush, faDatabase, faBug, faCode, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { faAndroid } from '@fortawesome/free-brands-svg-icons';
import CountUp from './Tools/CountUp'
import web from '../assets/web.png';
import mobile from '../assets/mobile.png';
import java from '../assets/java.png';
import Rproject from '../assets/React.png';
import python from '../assets/python.png';
import AnimatedContent from './Tools/AnimatedContent.jsx'
import ImageSlider from './Tools/ImageSlider';

const Content01 = () => {
  const skills = [
    {
      icon: faCode,
      title: "Full-Stack Development",
      description:
        "Proficient in developing both front-end and back-end applications using modern technologies like React, Node.js, and MongoDB.",
    },
    {
      icon: faAndroid,
      title: "Android App Development",
      description:
        "Skilled in creating intuitive and functional mobile applications using Android Studio, Java, and XML with seamless Firebase integration.",
    },
    {
      icon: faPaintBrush,
      title: "Web Design and Styling",
      description:
        "Expertise in designing responsive and visually appealing user interfaces with tools like Tailwind CSS, HTML, and JavaScript.",
    },
    {
      icon: faDatabase,
      title: "Database Management",
      description:
        "Strong ability to design, implement, and optimize databases using SQL (MySQL) and NoSQL (MongoDB) for scalable applications.",
    },
    {
      icon: faBug,
      title: "Problem-Solving and Debugging",
      description:
        "Experienced in diagnosing issues in software projects and implementing efficient, maintainable solutions to enhance performance.",
    },
    {
      icon: faCodeBranch,
      title: "Version Control and Collaboration",
      description:
        "Proficient with Git/GitHub for managing codebases, collaborating on team projects, and maintaining version control.",
    },
  ];

  return (
    <div className="w-full bg-gray-100 py-8 sm:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">What I Do</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skills.map((skill, index) => (
            <AnimatedContent
              key={index}
              distance={150}
              direction="horizontal"
              reverse={false}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.2}
            >
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col items-start">
                  <FontAwesomeIcon
                    icon={skill.icon}
                    className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-black"
                  />
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-800">
                    {skill.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">{skill.description}</p>
                </div>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </div>

      <AnimatedContent
        distance={150}
        direction="horizontal"
        reverse={true}
        config={{ tension: 80, friction: 20 }}
        initialOpacity={0.2}
        animateOpacity
        scale={0.5}
        threshold={0.1}
      >
        <section className="px-4 sm:px-6 mb-28 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mt-6 sm:mt-10 mb-6 sm:mb-12">
            Total Projects
          </h1>
          
          <div className="flex justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-12 lg:gap-16 bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8 lg:p-12 w-full max-w-5xl">
              
              {/* Project Cards */}
              {[
                { count: 10, label: "Web Projects", img: web },
                { count: 4, label: "Mobile Projects", img: mobile },
                { count: 3, label: "Java Projects", img: java },
                { count: 6, label: "React Projects", img: Rproject },
                { count: 3, label: "Python Projects", img: python },
              ].map((item, index) => (
                <div key={index} className="w-32 sm:w-36 md:w-40 text-center">
                  <div className="justify-center text-center">
                    <CountUp
                      from={0}
                      to={item.count}
                      separator="," 
                      duration={1}
                      className="count-up-text font-bold text-3xl sm:text-4xl md:text-[3rem]"
                    />
                  </div>
                  <h5 className="text-sm sm:text-base md:text-lg text-gray-500 mt-2">
                    {item.label}
                  </h5>
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-8 sm:w-10 h-auto mx-auto mt-3"
                  />
                </div>
              ))}
              
            </div>
          </div>
        </section>
      

      <div className="max-w-6xl mx-auto mt-8 sm:mt-12">
        <h1 className="text-3xl sm:text-5xl font-bold mb-8 mt-10 sm:mb-12 text-center">Featured Projects</h1>
        <ImageSlider />
      </div>
      </AnimatedContent>
          
    </div>
  );
};

export default Content01;