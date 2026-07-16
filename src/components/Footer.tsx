"use client";
import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 bg-lightNavy/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="flex space-x-6 mb-6">
          <a 
            href="mailto:toma11chang@gmail.com" 
            className="text-lightSlate hover:text-purple transition-colors duration-300"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a 
            href="https://github.com/CHANG-Toma" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-lightSlate hover:text-purple transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="https://linkedin.com/in/chang-toma" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-lightSlate hover:text-purple transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://canva.link/iguu1b4afrg4oy0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lightSlate hover:text-purple transition-colors duration-300 text-sm"
            aria-label="CV"
          >
            CV
          </a>
          <Link
            href="/"
            className="text-lightSlate hover:text-purple transition-colors duration-300 text-sm"
          >
            CodeByToma
          </Link>
        </div>
        
        <p className="text-lightSlate text-sm flex items-center">
          <span>Conçu et développé par Toma Chang</span>
          <Heart className="w-4 h-4 text-purple mx-2 animate-pulse " />
          <span>{year}</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
