import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
    return (
        <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl font-bold text-white mb-8">Projects Portfolio</h1>
                
                <div className="bg-zinc-900 p-8 rounded-lg shadow-lg">
                    <div className="flex items-center justify-center mb-6">
                        <div className="relative">
                            <div className="w-16 h-16 border-4 border-white border-dashed rounded-full animate-spin"></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <span className="text-white text-2xl">⚡</span>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-2xl font-semibold text-white mb-4">
                        Portfolio Under Construction
                    </h2>
                    
                    <p className="text-gray-300 mb-6">
                        I'm currently working on something awesome! In the meantime, 
                        you can check out my latest projects and contributions on GitHub.
                    </p>

                    <a 
                        href="https://github.com/SupunLiyanage88" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-white hover:bg-gray-300 text-black font-medium rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"

                    >
                        <FaGithub className="w-5 h-5 mr-2" />
                        View My GitHub Profile
                    </a>
                </div>

                <p className="mt-8 text-gray-600 text-sm">
                    Check back soon for an updated portfolio showcasing my projects and skills!
                </p>
            </div>
        </div>
    );
};

export default Projects;