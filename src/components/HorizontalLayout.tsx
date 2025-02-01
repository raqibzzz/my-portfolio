'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PorscheOutline from '../components/svg/PorscheOutline';

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
        className="h-full whitespace-nowrap overflow-x-auto overflow-y-hidden scroll-smooth"
        style={{ scrollBehavior: 'smooth' }}
      >
        {/* Hero Section */}
        <div className="inline-block w-screen h-full align-top px-8 relative">
          {/* Background Car SVG */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            {/* Insert the SVG component we created */}
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
                NEED MONEY
              </div>
              <div className="text-neutral-100 text-8xl font-bold tracking-tighter leading-none">
                FOR
                <span className="text-amber-400 ml-4 italic">PORSCHE</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-8 text-neutral-400"
            >
              RAQIB MUKATDIR,
              Software Engineer & Developer (I'm tryna put business in the mix)
            </motion.div>
          </div>
        </div>

        <div className="inline-block w-screen h-full align-top px-8 bg-neutral-900">
          <div className="flex items-center justify-center h-full">
            <h2 className="text-6xl text-neutral-100">Projects</h2>
          </div>
        </div>

        <div className="inline-block w-screen h-full align-top px-8 bg-neutral-900">
          <div className="flex items-center justify-center h-full">
            <h2 className="text-6xl text-neutral-100">About</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalLayout;