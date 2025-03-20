"use client";

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'Accueil', href: '#home' },
    { name: 'Expériences', href: '#experience' },
    { name: 'Projets', href: '#projects' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

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

  return (
    <header 
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-12',
        scrolled ? 'backdrop-blur-lg bg-navy/80 shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
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
          <Button className="bg-transparent hover:bg-purple/10 text-purple border border-purple rounded px-4 py-2 text-sm font-mono transition-all duration-300">
            CV
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-white z-50"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isOpen ? (
            <X className="h-6 w-6 text-purple" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Navigation Overlay */}
        <div 
          className={cn(
            'fixed inset-0 bg-lightNavy/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out md:hidden',
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          )}
        >
          <nav className="flex flex-col items-center space-y-8 p-8">
            {navItems.map((item, i) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg font-mono text-lightSlate hover:text-purple transition-colors duration-300"
                onClick={() => setIsOpen(false)}
                style={{ 
                  transitionDelay: isOpen ? `${i * 50}ms` : '0ms',
                  transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                  opacity: isOpen ? 1 : 0,
                  transition: 'transform 0.3s ease, opacity 0.3s ease'
                }}
              >
                <span className="text-purple mr-2">0{i + 1}.</span>
                {item.name}
              </a>
            ))}
            <Button className="bg-transparent hover:bg-purple/10 text-purple border border-purple rounded px-6 py-3 text-lg font-mono transition-all duration-300 mt-4">
              CV
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
