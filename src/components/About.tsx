"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Car, GraduationCap, MapPin } from "lucide-react";

const highlights = [
  {
    icon: <Briefcase className="w-5 h-5 text-purple" />,
    title: "Freelance & alternance",
    text: "Disponible pour des missions freelance et une alternance pour ma dernière année de Master Lead Développeur Full-Stack à Ensitech (2025–2027).",
  },
  {
    icon: <GraduationCap className="w-5 h-5 text-purple" />,
    title: "Master Ensitech",
    text: "Étudiant en 4ᵉ année — Bachelor puis Master Lead Développeur Full-Stack. Parcours orienté architecture, développement web et gestion de projet Agile.",
  },
  {
    icon: <MapPin className="w-5 h-5 text-purple" />,
    title: "Basé en Yvelines",
    text: "Interventions à distance et en présentiel en Île-de-France selon les besoins du projet.",
  },
  {
    icon: <Car className="w-5 h-5 text-purple" />,
    title: "Permis B et véhiculé",
    text: "Mobilité facilitée pour les réunions client, ateliers et accompagnement terrain.",
  },
];

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  return (
    <section id="about" className="py-20 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">Profil</h2>
          <div className="ml-4 flex-grow h-[1px] bg-lightNavy" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glassmorphism rounded-lg p-6"
          >
            <p className="text-lightSlate leading-relaxed">
              Développeur full-stack en alternance chez Lamusée Paris, je conçois
              des applications web modernes et robustes — de l&apos;interface
              utilisateur au backend. Seul développeur en poste, j&apos;assure
              l&apos;autonomie complète sur les choix techniques, de
              l&apos;architecture à la mise en production.
            </p>
            <p className="text-lightSlate leading-relaxed mt-4">
              En parallèle, je propose mes services via CodeByToma pour la
              conception de sites web, intranets et applications sur mesure.
              Autonome, adaptable et orienté résultat.
            </p>
          </motion.div>

          <div className="space-y-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glassmorphism rounded-lg p-5"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5">{item.icon}</div>
                  <div>
                    <h3 className="text-white font-semibold">{item.title}</h3>
                    <p className="text-lightSlate mt-1">{item.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
