"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string | string[];  // Peut maintenant accepter un tableau de phrases
  className?: string;
  delay?: number;
  typingSpeed?: number;     // Vitesse de frappe en ms
  deletingSpeed?: number;   // Nouvelle prop pour la vitesse de suppression
  pauseBetween?: number;    // Pause entre les phrases en ms
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className = "", 
  delay = 0,
  typingSpeed = 80,
  deletingSpeed = 50,  // La suppression est plus rapide que l'écriture
  pauseBetween = 2000
}) => {
  const phrases = Array.isArray(text) ? text : [text];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const startDelay = setTimeout(() => {
      let timeoutId: NodeJS.Timeout;

      const typeWriter = () => {
        const currentPhrase = phrases[currentPhraseIndex];

        if (!isDeleting) {
          // Phase d'écriture
          if (displayText.length < currentPhrase.length) {
            setDisplayText(currentPhrase.slice(0, displayText.length + 1));
            timeoutId = setTimeout(typeWriter, typingSpeed);
          } else {
            // Attendre avant de commencer à effacer
            timeoutId = setTimeout(() => {
              setIsDeleting(true);
              typeWriter();
            }, pauseBetween);
          }
        } else {
          // Phase de suppression
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
            timeoutId = setTimeout(typeWriter, deletingSpeed);
          } else {
            setIsDeleting(false);
            // Passer à la phrase suivante
            setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
          }
        }
      };

      typeWriter();

      return () => clearTimeout(timeoutId);
    }, delay * 1000);

    // Animation du curseur
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 530);

    return () => {
      clearTimeout(startDelay);
      clearInterval(cursorInterval);
    };
  }, [currentPhraseIndex, isDeleting, displayText, phrases, delay, typingSpeed, deletingSpeed, pauseBetween]);

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
