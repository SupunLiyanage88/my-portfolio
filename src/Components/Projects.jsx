import React from 'react';
import BounceCards from './Tools/BounceCards'
import LunuMirisa01 from '../assets/LunuMirisa02.png';
import BookScape01 from '../assets/BookScape03.png';
import BookScape02 from '../assets/BookScape02.png';
import LunuMirisa02 from '../assets/LunuMirisa05.png';
import NoteApp01 from '../assets/NoteApp02.png';

const Projects = () => {

    const images = [
        LunuMirisa01,
        BookScape01,
        BookScape02,
        LunuMirisa02,
        NoteApp01
      ];
      
      const transformStyles = [
        "rotate(5deg) translate(-150px)",
        "rotate(0deg) translate(-70px)",
        "rotate(-5deg)",
        "rotate(5deg) translate(70px)",
        "rotate(-5deg) translate(150px)"
      ];


    return (
        <div>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold text-center text-gray-800 mt-10">
                    Projects
                </h1>
                <div>
                    <BounceCards
                        className="custom-class"
                        images={images}
                        containerWidth={700}
                        containerHeight={350}
                        animationDelay={1}
                        animationStagger={0.08}
                        easeType="elastic.out(1, 0.5)"
                        transformStyles={transformStyles}
                    />                    
                </div>
            </div>

        </div>
    );
};

export default Projects;