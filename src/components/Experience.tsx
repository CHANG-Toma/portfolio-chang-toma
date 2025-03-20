"use client";
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, MapPin, Briefcase, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  location: string;
  date: string;
  description: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 'lamusee',
    title: 'Développeur Full-Stack',
    company: 'Alternance - Lamusée Paris',
    location: 'Paris',
    date: '2024 - 2025',
    description: [
      "Développement et conception d'une plateforme administrateur / Shopify",
      "Mise en place d'une interface utilisateur responsive et interactive",
      "Collaboration avec l'équipe design pour l'UI/UX",
      "Optimisation des performances de l'application"
    ],
    technologies: ['Symfony', 'MySQL', 'Tailwind CSS', 'VueCode', 'JavaScript', 'PHP']
  },
  {
    id: 'codebytoma',
    title: 'Développeur Full-Stack',
    company: 'Freelance - CodeByToma',
    location: 'Île-de-France',
    date: 'Mai 2024',
    description: [
      'Conception et développement de sites web adaptés aux besoins des clients',
      'Maintenance et mise à jour régulière des projets existants',
      'Conseil technique et accompagnement des clients',
      'Développement de fonctionnalités spécifiques sur mesure'
    ],
    technologies: ['Symfony', 'Vue.js', 'PostgreSQL', 'Bootstrap', 'VueCode', 'JavaScript', 'PHP']
  },
  {
    id: 'apprentissage',
    title: 'Développeur apprentissage',
    company: 'Alternance - Apprentissage',
    location: 'Paris',
    date: 'Octobre 2022 - Août 2023',
    description: [
      "Charge de développement d'applications web",
      "Conception et développement d'un intranet",
      "Mise à jour et maintenance du site web de l'entreprise",
      'Participation aux réunions de projet et aux phases de conception'
    ],
    technologies: ['HTML/CSS', 'JavaScript', 'PHP', 'MySQL']
  },
  {
    id: 'secredo',
    title: 'Stage',
    company: 'Banque Secredo',
    location: 'Paris',
    date: 'Juin - Juillet 2022',
    description: [
      "Développement d'un portail applicatif métier",
      'Collaboration avec les équipes métier pour comprendre les besoins',
      'Intégration de fonctionnalités spécifiques au secteur bancaire',
      'Tests et débogage des applications développées'
    ],
    technologies: ['Symfony', 'Tailwind', 'MySQL', 'VueCode', 'JavaScript', 'PHP']
  }
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState(experiences[0].id);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  return (
    <section id="experience" className="py-20 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            <span className="text-purple font-mono mr-2">02.</span>
            Expériences
          </h2>
          <div className="ml-4 flex-grow h-[1px] bg-lightNavy"></div>
        </motion.div>

        <div className="relative glassmorphism rounded-lg p-1 md:p-0 shadow-lg">
          <div className="md:grid md:grid-cols-3 rounded-lg overflow-hidden">
            {/* Tab navigation */}
            <div className="bg-lightNavy/50 p-2 md:p-0">
              <div className="flex md:flex-col overflow-x-auto md:overflow-visible scrollbar-hide">
                {experiences.map((exp) => (
                  <button
                    key={exp.id}
                    onClick={() => setActiveTab(exp.id)}
                    className={cn(
                      "py-4 px-6 font-mono text-sm whitespace-nowrap md:whitespace-normal text-left transition-all duration-300 hover:bg-navy/30 hover:text-purple",
                      activeTab === exp.id
                        ? "text-purple border-l-0 md:border-l-2 border-b-2 md:border-b-0 border-purple bg-lightNavy"
                        : "text-lightSlate border-l-0 md:border-l-2 border-b-2 md:border-b-0 border-lightNavy"
                    )}
                  >
                    {exp.company.split(' - ')[1]}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab content */}
            <div className="col-span-2 p-6 md:p-8">
              {experiences.map((exp) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={activeTab === exp.id ? { opacity: 1, x: 0 } : { opacity: 0, x: 20, display: 'none' }}
                  transition={{ duration: 0.3 }}
                  className={activeTab === exp.id ? 'block' : 'hidden'}
                >
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                    {exp.title} <span className="text-purple">@{exp.company.split(' - ')[1]}</span>
                  </h3>
                  
                  <div className="flex flex-wrap items-center text-sm text-lightSlate mb-4">
                    <div className="flex items-center mr-6 mb-2">
                      <Calendar className="h-4 w-4 mr-2 text-purple" />
                      {exp.date}
                    </div>
                    <div className="flex items-center mb-2">
                      <MapPin className="h-4 w-4 mr-2 text-purple" />
                      {exp.location}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex">
                        <ArrowRight className="h-5 w-5 mr-2 text-purple flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="bg-navy px-3 py-1 rounded-full text-xs font-mono text-purple"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
