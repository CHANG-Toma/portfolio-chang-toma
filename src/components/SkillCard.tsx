"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SkillCardProps {
  icon: React.ReactNode;
  name: string;
  level?: number;
  className?: string;
}

const SkillCard = ({ icon, name, level = 80, className }: SkillCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn(
        "glassmorphism p-4 rounded-lg flex flex-col items-center justify-center space-y-3 shadow-lg hover:shadow-xl hover:shadow-purple/10 transition-all duration-300",
        className
      )}
    >
      <div className="text-purple text-3xl">{icon}</div>
      <div className="text-center">
        <h3 className="font-medium text-white">{name}</h3>
      </div>
      <div className="w-full bg-navy rounded-full h-2 overflow-hidden">
        <motion.div 
          className="bg-purple h-full rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  );
};

export default SkillCard;
