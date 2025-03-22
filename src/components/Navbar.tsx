"use client";

import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { createPortal } from 'react-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  const navItems = [
    { name: 'Accueil', href: '#home' },
    { name: 'Expériences', href: '#experience' },
    { name: 'Projets', href: '#projects' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Disable body scroll when mobile menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const MobileMenu = () => {
    if (!mounted) return null;

    return createPortal(
      <div 
        className={cn(
          'fixed left-0 top-0 w-full h-full bg-navy/98 backdrop-blur-md md:hidden',
          'flex items-center justify-center',
          'z-[9999]',
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        )}
        style={{
          transition: 'opacity 0.3s ease, visibility 0.3s ease'
        }}
      >
        <button 
          onClick={() => setIsOpen(false)} 
          className="absolute top-4 right-6 text-white"
          aria-label="Fermer le menu"
        >
          <X className="h-6 w-6 text-purple" />
        </button>

        <nav className="flex flex-col items-center space-y-8 p-8">
          {navItems.map((item, i) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xl font-mono text-lightSlate hover:text-purple transition-colors duration-300"
              onClick={() => setIsOpen(false)}
              style={{ 
                transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: isOpen ? 1 : 0,
                transitionProperty: 'transform, opacity',
                transitionDuration: '0.3s',
                transitionTimingFunction: 'ease',
                transitionDelay: isOpen ? `${i * 50}ms` : '0ms'
              }}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>,
      document.body
    );
  };

  return (
    <header 
      className={cn(
        'fixed top-0 w-full z-[100] transition-all duration-300 py-4 px-6 md:px-12',
        scrolled ? 'backdrop-blur-lg bg-navy/80 shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        <a 
          href="#home" 
          className="text-white font-mono text-lg md:text-xl font-bold"
          onClick={() => setIsOpen(false)}
        >
          <span className="text-purple">&lt;</span>
          CodeByToma
          <span className="text-purple">/&gt;</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, i) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                'relative text-sm font-medium tracking-wide text-lightSlate hover:text-purple transition-colors duration-300',
                'before:content-[""] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-300 before:bg-purple',
                'hover:before:w-full hover:before:opacity-100'
              )}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile menu button - seulement pour ouvrir */}
        <button 
          onClick={() => setIsOpen(true)} 
          className="md:hidden text-white relative z-[9999]"
          aria-label="Ouvrir le menu"
        >
          <Menu className="h-6 w-6" />
        </button>

        <MobileMenu />
      </div>
    </header>
  );
};

export default Navbar;
