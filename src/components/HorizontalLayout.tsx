'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PorscheOutline from '../components/svg/PorscheOutline';

const projects = [
  {
    title: 'SQA Orders Database',
    description: 'Web-based Inventory Management System',
    tech: ['SQL', 'PHP', 'HTML', 'CSS'],
    link: 'https://github.com/your-repo'
  },
  {
    title: 'Portfolio Website',
    description: 'My personal portfolio website.',
    tech: ['Next.js', 'TypeScript', 'Node.js'],
    link: 'https://github.com/raqibzzz/my-portfolio'
  },
  {
    title: 'Spotify Music Discovery AI',
    description: 'A music discovery AI chatbot using Next.js',
    tech: ['Next.js', 'OpenAI API', 'Spotify API'],
    link: 'https://github.com/raqibzzz/ai-music-discovery'
  }
];

const HorizontalLayout: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);


  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      const container = document.getElementById('horizontal-container');
      if (container) {
        container.scrollLeft += e.deltaY;
        setScrollPosition(container.scrollLeft);
      }
    };
  
    const container = document.getElementById('horizontal-container');
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }
  
    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <div className="h-screen overflow-hidden bg-neutral-900">
      <div 
        id="horizontal-container"
        className="h-full whitespace-nowrap overflow-x-auto overflow-y-hidden scroll-smooth relative"
        style={{ scrollBehavior: 'smooth' }}
      >
        {/* Hero Section */}
        <div className="inline-block w-screen h-full align-top px-8 relative">
          {/* Background Car SVG */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="w-[1200px] h-[800px] text-white"
            >
                <PorscheOutline />
            </motion.div>
          </div>
          {/* Text Content */}
          <div className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <div className="text-neutral-100 text-8xl font-bold tracking-tighter leading-none">
                RAQIB
              </div>
              <div className="text-green-800 text-8xl font-bold tracking-tighter leading-none">
                MUKTADIR
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-8 text-neutral-400"
            >
              Software Developer and Design Enthusiast
            </motion.div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="inline-block w-screen h-full align-top px-8 bg-neutral-900">
          <div className="flex flex-col items-center justify-center h-full space-y-10">
            <h2 className="text-6xl text-neutral-100">Projects</h2>
            <div className="flex space-x-8 overflow-x-auto p-4">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index, duration: 0.5 }}
                  className="bg-neutral-800 p-6 rounded-2xl shadow-lg w-80 h-64 flex flex-col justify-between"
                >
                  <h3 className="text-xl text-white font-semibold">{project.title}</h3>
                  <p className="text-neutral-400 text-sm">{project.description}</p>
                  <div className="flex space-x-2 mt-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-neutral-700 text-neutral-300 px-2 py-1 rounded text-xs">{tech}</span>
                    ))}
                  </div>
                  <a href={project.link} className="text-amber-400 mt-4 text-sm" target="_blank" rel="noopener noreferrer">
                    View Project ↗
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default HorizontalLayout;
