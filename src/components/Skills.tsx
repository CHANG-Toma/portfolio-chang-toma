"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SkillCard from "./SkillCard";
import {
  Code2,
  Database,
  Laptop,
  Terminal,
  GitBranch,
  Layout,
} from "lucide-react";

const Skills = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const frameworks = [
    { name: "React", icon: <Code2 /> },
    { name: "Next.js", icon: <Laptop /> },
    { name: "Vue.js", icon: <Layout /> },
    { name: "Node.js", icon: <Layout /> },
    { name: "Symfony", icon: <Layout /> },
    { name: "Laravel", icon: <Layout /> },
    { name: "Tailwind CSS", icon: <Layout /> },
    { name: "Bootstrap", icon: <Layout /> },
  ];

  const databases = [
    { name: "MySQL", icon: <Layout /> },
    { name: "PostgreSQL", icon: <Layout /> },
    { name: "MongoDB", icon: <Layout /> },
  ];

  const otherSkills = [
    { name: "Git", icon: <GitBranch /> },
    { name: "Docker", icon: <Terminal /> },
    { name: "CI/CD", icon: <Layout /> },
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
            Compétences
          </h2>
          <div className="ml-4 flex-grow h-[1px] bg-lightNavy"></div>
        </motion.div>

        <div className="mb-16">
          <h3 className="text-xl text-white font-bold mb-6 flex items-center">
            <Code2 className="mr-2 text-purple" />
            Frameworks & Librairies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {frameworks.map((skill, index) => (
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
                />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-xl text-white font-bold mb-6 flex items-center">
            <Database className="mr-2 text-purple" />
            Bases de données
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {databases.map((skill, index) => (
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
