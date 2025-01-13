import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPaintBrush, faDatabase, faBug, faCode, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { faAndroid } from '@fortawesome/free-brands-svg-icons';
import FadeContent from './Tools/FadeContent';
import CountUp from './Tools/CountUp'
import web from '../assets/web.png';
import mobile from '../assets/mobile.png';
import java from '../assets/java.png';
import Rproject from '../assets/React.png';

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
    <div className="w-full bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">What I Do</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
              <div className="flex flex-col items-start">
                <FontAwesomeIcon
                  icon={skill.icon}
                  className="text-4xl mb-4 text-black"
                />
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {skill.title}
                </h3>
                <p className="text-gray-600">{skill.description}</p>
              </div>
              </FadeContent>
            </div>
          ))}
        </div>
      </div>
      <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
      <div className="flex justify-center mt-12 px-4">
            <div className="flex flex-wrap gap-8 sm:gap-16 md:gap-20 lg:gap-32 bg-white rounded-lg shadow-md p-4 sm:p-8 md:p-16 lg:p-20">
                
                {/* Web Projects */}
                <div className="w-full sm:w-auto text-center">
                    <div className="justify-center text-center">
                        <CountUp
                        from={0}
                        to={10}
                        separator=","
                        direction="up"
                        duration={1}
                        className="count-up-text font-bold text-[2.5rem] sm:text-[3rem] md:text-[4rem]"
                        />
                    </div>
                    <h5 className="text-lg sm:text-xl md:text-2xl">Web Projects</h5>
                    <img
                        src={web}
                        alt="Profile"
                        className="w-8 sm:w-10 h-auto mx-auto mt-4"
                    />
                </div>

                {/* Mobile Projects */}
                <div className="w-full sm:w-auto text-center">
                    <div className="justify-center text-center">
                        <CountUp
                        from={0}
                        to={4}
                        separator=","
                        direction="up"
                        duration={1}
                        className="count-up-text font-bold text-[2.5rem] sm:text-[3rem] md:text-[4rem]"
                        />
                    </div>
                    <h5 className="text-lg sm:text-xl md:text-2xl">Mobile Projects</h5>
                    <img
                        src={mobile}
                        alt="Profile"
                        className="w-8 sm:w-10 h-auto mx-auto mt-4"
                    />
                </div>

                {/* Java Projects */}
                <div className="w-full sm:w-auto text-center">
                    <div className="justify-center text-center">
                        <CountUp
                        from={0}
                        to={3}
                        separator=","
                        direction="up"
                        duration={1}
                        className="count-up-text font-bold text-[2.5rem] sm:text-[3rem] md:text-[4rem]"
                        />
                    </div>
                    <h5 className="text-lg sm:text-xl md:text-2xl">Java Projects</h5>
                    <img
                        src={java}
                        alt="Profile"
                        className="w-8 sm:w-10 h-auto mx-auto mt-4"
                    />
                </div>

                {/* React Projects */}
                <div className="w-full sm:w-auto text-center">
                    <div className="justify-center text-center">
                        <CountUp
                        from={0}
                        to={6}
                        separator=","
                        direction="up"
                        duration={1}
                        className="count-up-text font-bold text-[2.5rem] sm:text-[3rem] md:text-[4rem]"
                        />
                    </div>
                    <h5 className="text-lg sm:text-xl md:text-2xl">React Projects</h5>
                    <img
                        src={Rproject}
                        alt="Profile"
                        className="w-8 sm:w-10 h-auto mx-auto mt-4"
                    />
                </div>
            </div>
        </div>
        </FadeContent>

    </div>
  );
};

export default Content01;
