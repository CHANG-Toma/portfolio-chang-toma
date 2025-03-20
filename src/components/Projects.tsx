"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const projects = [
    {
      title: 'NexaFrame CMS',
      description: 'Développement d\'un Content Management Framework en PHP conçu pour une flexibilité et performance optimales. Système modulaire permettant une personnalisation complète pour les besoins spécifiques des clients.',
      technologies: ['PHP', 'HTML/CSS', 'JavaScript', 'MySQL', 'POO'],
      featured: true
    },
    {
      title: 'Plateforme de Gestion Location',
      description: 'Application web complète de gestion de locations immobilières similaire à Airbnb. Gestion des réservations, des paiements, des propriétaires et des locataires avec un tableau de bord d\'administration.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
      featured: true
    },
    {
      title: 'Lamusée Paris - Admin',
      description: 'Plateforme administrateur intégrée à Shopify permettant la gestion de clients, commandes, factures, paiements et produits pour une entreprise de commerce électronique.',
      technologies: ['Symfony', 'MySQL', 'Tailwind', 'VueCode', 'JavaScript'],
    },
    {
      title: 'CodeByToma',
      description: 'Application web gérant mes services freelance, incluant un système de gestion de projets, facturation et communication avec les clients.',
      technologies: ['Symfony', 'Vue.js', 'PostgreSQL', 'Bootstrap', 'VueCode'],
    },
    {
      title: 'Portfolio - 2024',
      description: 'Conception et développement de mon portfolio personnel présentant mon parcours, mes compétences et mes projets avec une interface moderne et interactive.',
      technologies: ['React', 'Next.js', 'HTML/CSS', 'Tailwind', 'VueCode'],
    },
    {
      title: 'MAINENANCE - 2022/2023',
      description: 'Développement d\'une application métier pour gérer les tâches de maintenance, les rapports d\'intervention et le suivi des équipements pour une entreprise industrielle.',
      technologies: ['Laravel', 'HTML/CSS', 'JS', 'MySQL', 'PHP/MariaDB'],
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
            <span className="text-purple font-mono mr-2">03.</span>
            Projets
          </h2>
          <div className="ml-4 flex-grow h-[1px] bg-lightNavy"></div>
        </motion.div>

        <div className="space-y-24 mb-20">
          {projects.filter(p => p.featured).map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>

        <h3 className="text-2xl font-bold text-white text-center mb-12">
          Autres projets intéressants
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(p => !p.featured).map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
