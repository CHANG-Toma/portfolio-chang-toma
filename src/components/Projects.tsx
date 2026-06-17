"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const Projects = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const projects = [
    {
      title: 'Lamusée Paris — Plateforme admin & client',
      description:
        "Seul développeur en poste : conception et développement d'une plateforme administrateur et client pour la gestion des clients, devis, factures, paiements et produits. Autonomie complète de l'architecture à la mise en production.",
      technologies: ['Symfony', 'Tailwind CSS', 'PostgreSQL', 'Docker', 'o2switch'],
      featured: true,
    },
    {
      title: 'MaxiLoc — Gestion locative',
      description:
        "Application web de gestion immobilière permettant de suivre la rentabilité des investissements locatifs : réservations, charges, rapports et analyses de performance.",
      technologies: ['Next.js', 'React', 'TypeScript', 'Docker', 'Nginx', 'Recharts', 'Bootstrap'],
      github: 'https://github.com/CHANG-Toma/maxi-loc',
      featured: true,
    },
    {
      title: 'CodeByToma',
      description:
        "Application web gérant mes services freelance : présentation de l'offre, gestion de projets et communication avec les clients.",
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Vercel'],
      demo: 'https://www.codebytoma.dev/',
    },
    {
      title: 'Portfolio — CodeByToma',
      description:
        "Portfolio personnel présentant mon parcours, mes compétences et mes projets avec une interface moderne, animée et responsive.",
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
      github: 'https://github.com/CHANG-Toma/portfolio-chang-toma',
      demo: 'https://www.codebytoma.dev/',
    },
    {
      title: 'Ecoride',
      description:
        "Projet de développement web autour de la mobilité durable, avec une architecture moderne en TypeScript.",
      technologies: ['TypeScript', 'React', 'Next.js'],
      github: 'https://github.com/CHANG-Toma/Ecoride',
    },
    {
      title: 'NexaFrame CMS',
      description:
        "Content Management Framework en PHP conçu pour la flexibilité et la performance. Système modulaire personnalisable selon les besoins métier.",
      technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS', 'POO'],
      github: 'https://github.com/CHANG-Toma/NexaFrame',
    },
    {
      title: 'Numericli — Application maintenance',
      description:
        "Application métier développée en alternance pour gérer les tâches de maintenance, les rapports d'intervention et le suivi des équipements.",
      technologies: ['Laravel', 'MySQL', 'JavaScript', 'Bootstrap', 'PhpMyAdmin'],
    },
    {
      title: 'Banque Socredo — Portail métier',
      description:
        "Stage : développement et maintenance d'un portail applicatif métier pour le secteur bancaire, en collaboration avec les équipes métier.",
      technologies: ['Symfony', 'MySQL', 'Tailwind CSS', 'JavaScript', 'PHP'],
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Projets
          </h2>
          <div className="ml-4 flex-grow h-[1px] bg-lightNavy"></div>
        </motion.div>

        <div className="space-y-24 mb-20">
          {projects.filter(p => p.featured).map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        <h3 className="text-2xl font-bold text-white text-center mb-12">
          Autres projets intéressants
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(p => !p.featured).map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
          <motion.div 
            className="flex justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Button
              onClick={() => window.open('https://github.com/CHANG-Toma?tab=repositories', '_blank', 'noopener,noreferrer')}
              className="group transition-all duration-300 hover:scale-105"
              variant="outline"
            >
              Voir plus sur GitHub
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>  
    </section>
  );
};

export default Projects;
