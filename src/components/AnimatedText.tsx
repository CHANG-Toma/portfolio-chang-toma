"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string | string[];
  className?: string;
  delay?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className = "", 
  delay = 0
}) => {
  const phrases = Array.isArray(text) ? text : [text];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const startAnimation = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      let index = isDeleting ? currentPhrase.length : 0;

      const animate = () => {
        if (!isDeleting) {
          // Écriture légèrement ralentie
          if (index <= currentPhrase.length) {
            setTimeout(() => {
              setDisplayText(currentPhrase.slice(0, index));
              index++;
              if (index <= currentPhrase.length) {
                animate();
              } else {
                setTimeout(() => setIsDeleting(true), 1000);
              }
            }, 25); // Petit délai pour l'écriture
          }
        } else {
          // Suppression instantanée
          if (index >= 0) {
            setDisplayText(currentPhrase.slice(0, index));
            index--;
            requestAnimationFrame(animate);
          } else {
            setIsDeleting(false);
            setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
          }
        }
      };

      animate();
    };

    const timer = setTimeout(startAnimation, delay * 1000);

    const cursorTimer = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 400);

    return () => {
      clearTimeout(timer);
      clearInterval(cursorTimer);
    };
  }, [currentPhraseIndex, isDeleting, phrases, delay]);

  return (
    <span className={className}>
      {displayText}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: cursorVisible ? 1 : 0 }}
        transition={{ duration: 0.1 }}
        className="inline-block w-[2px] h-[1em] bg-purple ml-1 align-middle"
      />
    </span>
  );
};

export default AnimatedText;
