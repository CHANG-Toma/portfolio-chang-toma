"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder, FolderOpen } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  github?: string;
  demo?: string;
  featured?: boolean;
}

const ProjectCard = ({ 
  title, 
  description, 
  technologies, 
  image, 
  github, 
  demo,
  featured = false
}: ProjectProps) => {
  const [isHovered, setIsHovered] = useState(false);

  if (featured) {
    return (
      <motion.div
        whileHover={{ y: -5 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.1 }}
        className="relative grid md:grid-cols-12 gap-4 rounded-lg overflow-hidden p-1"
      >
        <div className="md:col-span-7 lg:col-span-8 order-2 md:order-1 flex flex-col justify-center">
          <p className="text-purple font-mono text-sm mb-2">Projet vedette</p>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{title}</h3>
          
          <div className="relative mb-6">
            <div className="glassmorphism p-6 rounded-lg shadow-lg">
              <p className="text-lightSlate">{description}</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3 mb-6">
            {technologies.map((tech, i) => (
              <span 
                key={i} 
                className="text-lightSlate font-mono text-sm"
              >
                {tech}
                {i < technologies.length - 1 && <span className="ml-3">•</span>}
              </span>
            ))}
          </div>
          
          <div className="flex space-x-4">
            {github && (
              <a 
                href={github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lightSlate hover:text-purple transition-colors duration-300"
                aria-label="GitHub Repository"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {demo && (
              <a 
                href={demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lightSlate hover:text-purple transition-colors duration-300"
                aria-label="Live Demo"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
        
        <div className="md:col-span-5 lg:col-span-4 order-1 md:order-2">
          <div className="relative overflow-hidden rounded-lg h-64 md:h-full shadow-xl shadow-purple/5">
            {image ? (
              <>
                <div className="absolute inset-0 bg-purple/30 z-10 mix-blend-multiply"></div>
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full h-full object-cover"
                />
              </>
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-purple/20 to-darkPurple/20 flex items-center justify-center">
                <Folder className="w-16 h-16 text-purple" />
              </div>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.1 }}
      className="glassmorphism rounded-lg overflow-hidden flex flex-col h-full shadow-lg hover:shadow-xl hover:shadow-purple/10 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-8 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-6">
          <div className="text-purple">
            {isHovered ? (
              <FolderOpen className="w-12 h-12" />
            ) : (
              <Folder className="w-12 h-12" />
            )}
          </div>
          <div className="flex space-x-4">
            {github && (
              <a 
                href={github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lightSlate hover:text-purple transition-colors duration-300"
                aria-label="GitHub Repository"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {demo && (
              <a 
                href={demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lightSlate hover:text-purple transition-colors duration-300"
                aria-label="Live Demo"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-lightSlate mb-6 flex-1">{description}</p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {technologies.map((tech, i) => (
            <span 
              key={i} 
              className="text-lightSlate font-mono text-xs"
            >
              {tech}
              {i < technologies.length - 1 && <span className="mx-1">•</span>}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
