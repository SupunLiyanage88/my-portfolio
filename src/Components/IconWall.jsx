import React from "react";
import LogoWall from './Tools/LogoWall';
import { 
  FaJava, 
  FaPython, 
  FaReact, 
  FaGithub, 
  FaDocker 
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiCplusplus, 
  SiNodedotjs, 
  SiFigma 
} from 'react-icons/si';

const IconWall = () => {
  const logoImgs = [
    { imgUrl: FaJava, altText: "Java", color: "#f89820" },
    { imgUrl: FaPython, altText: "Python", color: "#3776ab" },
    { imgUrl: FaReact, altText: "React", color: "#61dafb" },
    { imgUrl: SiFigma, altText: "Figma", color: "#f24e1e" },
    { imgUrl: FaGithub, altText: "GitHub", color: "#181717" },
    { imgUrl: SiCplusplus, altText: "C++", color: "#00599c" },
    { imgUrl: SiTypescript, altText: "TypeScript", color: "#3178c6" },
    { imgUrl: FaDocker, altText: "Docker", color: "#2496ed" },
    { imgUrl: SiNodedotjs, altText: "Node.js", color: "#339933" }
  ];

  return (
    <div>
        <div style={{height: '300px', width: '100%', position: 'relative'}}>
          <LogoWall
            items={logoImgs}
            direction='horizontal'
            pauseOnHover={false}
            size='clamp(1rem, 2rem + 10vmin, 15rem)'
            duration='40s'
            bgColor='#FFFFFF'
            bgAccentColor='#f0f0f0'
          />  
        </div>
    </div>
  );
};

export default IconWall;