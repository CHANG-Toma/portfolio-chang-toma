"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SkillCard from './SkillCard';
import { 
  Figma, Code2, Database, Server, Globe, Laptop, 
  Terminal, GitBranch, Layout, UserCheck, Hammer, FileBadge, BookOpen
} from 'lucide-react';

const Skills = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  
  const frontendSkills = [
    { name: 'HTML/CSS', icon: <Layout />, level: 95 },
    { name: 'JavaScript', icon: <Code2 />, level: 90 },
    { name: 'React/Next.js', icon: <Laptop />, level: 85 },
    { name: 'Vue.js', icon: <Globe />, level: 80 },
    { name: 'Bootstrap/Tailwind', icon: <Figma />, level: 95 },
  ];
  
  const backendSkills = [
    { name: 'PHP', icon: <Code2 />, level: 90 },
    { name: 'Symfony', icon: <Server />, level: 85 },
    { name: 'Laravel', icon: <Server />, level: 70 },
    { name: 'MySQL/PostgreSQL', icon: <Database />, level: 85 },
    { name: 'NoSQL', icon: <Database />, level: 75 },
  ];
  
  const otherSkills = [
    { name: 'Git/GitHub', icon: <GitBranch />, level: 85 },
    { name: 'Docker/Linux', icon: <Terminal />, level: 75 },
    { name: 'Travail d\'équipe', icon: <UserCheck />, level: 90 },
    { name: 'Autonomie', icon: <Hammer />, level: 95 },
    { name: 'Adaptabilité', icon: <BookOpen />, level: 90 },
  ];
  
  const languages = [
    { name: 'Français', icon: <FileBadge />, level: 100 },
    { name: 'Anglais (B2)', icon: <FileBadge />, level: 80 },
    { name: 'Tahitien', icon: <FileBadge />, level: 60 },
  ];

  return (
    <section id="skills" className="py-20 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            <span className="text-purple font-mono mr-2">04.</span>
            Compétences
          </h2>
          <div className="ml-4 flex-grow h-[1px] bg-lightNavy"></div>
        </motion.div>
        
        <div className="mb-16">
          <h3 className="text-xl text-white font-bold mb-6 flex items-center">
            <Code2 className="mr-2 text-purple" /> 
            Frontend
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {frontendSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <SkillCard
                  icon={skill.icon}
                  name={skill.name}
                  level={skill.level}
                />
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="mb-16">
          <h3 className="text-xl text-white font-bold mb-6 flex items-center">
            <Server className="mr-2 text-purple" /> 
            Backend
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {backendSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <SkillCard
                  icon={skill.icon}
                  name={skill.name}
                  level={skill.level}
                />
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="mb-16">
          <h3 className="text-xl text-white font-bold mb-6 flex items-center">
            <Terminal className="mr-2 text-purple" /> 
            Autres compétences techniques
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {otherSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <SkillCard
                  icon={skill.icon}
                  name={skill.name}
                  level={skill.level}
                />
              </motion.div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-xl text-white font-bold mb-6 flex items-center">
            <Globe className="mr-2 text-purple" /> 
            Langages
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {languages.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <SkillCard
                  icon={skill.icon}
                  name={skill.name}
                  level={skill.level}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
