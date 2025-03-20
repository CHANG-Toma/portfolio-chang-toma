"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return;
      
      const x = e.clientX;
      const y = e.clientY;
      
      // Calculate rotation based on mouse position
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      const rotateX = (y - centerY) / 30;
      const rotateY = (centerX - x) / 30;
      
      imageRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-20 pb-10 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Toma Chang
          </motion.h1>
          
          <motion.h2 
            className="md:text-5xl lg:text-6xl font-bold text-slate mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AnimatedText 
              text={[
                "Développeur Full-Stack",
                "Frontend & Backend",
                "Un projet en vue ?",
                "Contactez-moi !"
              ]}
              className="inline" 
              delay={0.8}
            />
          </motion.h2>
          
          <motion.p 
            className="text-lg text-lightSlate max-w-lg mb-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Spécialisé dans la conception et le développement d'applications web modernes
            et d'expériences digitales exceptionnelles.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a href="#projects">
              <Button className="bg-purple hover:bg-purple/90 text-white px-8 py-6 rounded text-lg transition-all duration-300 shadow-lg shadow-purple/20">
                Découvrir mes projets
              </Button>
            </a>
          </motion.div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-purple rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <div className="relative overflow-hidden w-60 h-60 md:w-80 md:h-80 rounded-full border-2 border-purple/30 shadow-lg shadow-purple/20 transition-all duration-300">
              <img 
                ref={imageRef}
                src="/lovable-uploads/06bbd3e8-2701-4038-8394-db30abe19282.png" 
                alt="Toma Chang" 
                className="w-full h-full object-cover transition-all duration-300"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <p className="text-lightSlate mb-2 text-sm font-mono">Explorer plus</p>
        <ChevronDown className="w-6 h-6 text-purple animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
