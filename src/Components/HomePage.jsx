import React from 'react';
import FadeContent from './Tools/FadeContent';
import AnimatedContent from './Tools/AnimatedContent'
import HeroSection from './HeroSection';
import Content01 from './Content01';
import Content02 from './Content02';
import IconWall from './IconWall';


const HomePage = () => {
  return (
    <div>
        <HeroSection />
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
        >
          <Content01 />          
        </AnimatedContent>
        
        <Content02 />
        <IconWall />
        

    </div>

);
};

export default HomePage;
