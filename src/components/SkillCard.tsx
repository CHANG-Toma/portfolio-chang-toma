"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  icon: React.ReactNode;
  name: string;
}

const SkillCard = ({ icon, name }: SkillCardProps) => {
  return (
    <motion.div 
      className="bg-lightNavy/50 p-4 rounded-lg flex flex-col items-center gap-2"
      whileHover={{ 
        scale: 1.05,
        backgroundColor: "rgba(230, 149, 255, 0.1)",
        transition: { duration: 0.2 }
      }}
    >
      <div className="text-purple">{icon}</div>
      <h4 className="text-sm font-mono text-center">{name}</h4>
    </motion.div>
  );
};

export default SkillCard;
