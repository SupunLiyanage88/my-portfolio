import React from 'react';
import FadeContent from './Tools/FadeContent';
import {
  FaHtml5, FaJs, FaCss3Alt, FaBootstrap, FaReact, FaAngular,
  FaNodeJs, FaJava, FaPhp, FaPython, FaDatabase, FaAndroid,
  FaGithub, FaFigma, FaServer, FaMobile, FaDatabase as FaSqlServer
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiExpress, 
  SiMongodb, 
  SiMysql,
  SiFirebase
} from 'react-icons/si';

const Content02 = () => {
  const skills = {
    frontend: [
      { name: 'HTML5', icon: <FaHtml5 className="w-6 h-6 text-orange-600" /> },
      { name: 'JavaScript', icon: <FaJs className="w-6 h-6 text-yellow-400" /> },
      { name: 'Tailwind', icon: <SiTailwindcss className="w-6 h-6 text-cyan-400" /> },
      { name: 'Bootstrap', icon: <FaBootstrap className="w-6 h-6 text-purple-600" /> },
      { name: 'React', icon: <FaReact className="w-6 h-6 text-blue-400" /> },
      { name: 'Angular', icon: <FaAngular className="w-6 h-6 text-red-600" /> }
    ],
    backend: [
      { name: 'Node.js', icon: <FaNodeJs className="w-6 h-6 text-green-600" /> },
      { name: 'Express.js', icon: <SiExpress className="w-6 h-6 text-gray-600" /> },
      { name: 'Java', icon: <FaJava className="w-6 h-6 text-red-500" /> },
      { name: 'JavaScript', icon: <FaJs className="w-6 h-6 text-yellow-400" /> },
      { name: 'PHP', icon: <FaPhp className="w-6 h-6 text-purple-500" /> },
      { name: 'Python', icon: <FaPython className="w-6 h-6 text-blue-500" /> }
    ],
    databases: [
      { name: 'MongoDB', icon: <SiMongodb className="w-6 h-6 text-green-500" /> },
      { name: 'SQL Server', icon: <FaSqlServer className="w-6 h-6 text-blue-600" /> },
      { name: 'MySQL', icon: <SiMysql className="w-6 h-6 text-blue-500" /> }
    ],
    mobile: [
      { name: 'Android Studio', icon: <FaAndroid className="w-6 h-6 text-green-500" /> },
      { name: 'Firebase', icon: <SiFirebase className="w-6 h-6 text-orange-500" /> }
    ],
    OtherTools: [
      { name: 'Github', icon: <FaGithub className="w-6 h-6 text-gray-800" /> },
      { name: 'Figma', icon: <FaFigma className="w-6 h-6 text-purple-500" /> }
    ]
  };

  const CategoryCard = ({ title, items, icon }) => (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">{icon}</span>
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {items.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1"
          >
            {skill.icon}
            <span className="text-sm font-medium text-gray-700">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const categoryIcons = {
    frontend: <FaCss3Alt className="w-6 h-6 text-blue-500" />,
    backend: <FaServer className="w-6 h-6 text-gray-600" />,
    databases: <FaDatabase className="w-6 h-6 text-blue-400" />,
    mobile: <FaMobile className="w-6 h-6 text-gray-700" />,
    other: <FaGithub className="w-6 h-6 text-gray-800" />
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-20 text-center">
            Professional Skills
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CategoryCard
              title="Frontend Development"
              items={skills.frontend}
              icon={categoryIcons.frontend}
            />
            <CategoryCard
              title="Backend Development"
              items={skills.backend}
              icon={categoryIcons.backend}
            />
            <CategoryCard
              title="Database Management"
              items={skills.databases}
              icon={categoryIcons.databases}
            />
            <CategoryCard
              title="Mobile Development"
              items={skills.mobile}
              icon={categoryIcons.mobile}
            />
            <CategoryCard
              title="Other Tools"
              items={skills.OtherTools}
              icon={categoryIcons.other}
            />
          </div>
        </div>
      </FadeContent>
    </div>
  );
};

export default Content02;