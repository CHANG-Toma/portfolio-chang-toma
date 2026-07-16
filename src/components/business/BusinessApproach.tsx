"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const points = [
  {
    title: "Interlocuteur unique",
    text: "Vous parlez à la personne qui conçoit et maintient la solution.",
  },
  {
    title: "Sur mesure",
    text: "Adapté à votre métier — pas un template figé.",
  },
  {
    title: "Dans la durée",
    text: "Création, maintenance et évolutions : un partenariat.",
  },
  {
    title: "Évolutif",
    text: "Site d’abord, puis outils métier ou automatisations.",
  },
];

const BusinessApproach = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="approche"
      className="scroll-mt-24 border-t border-cbtBorder px-6 py-24 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="max-w-xl"
        >
          <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-mist/70">
            Approche
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-snow md:text-[1.85rem]">
            Pourquoi CodeByToma
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {points.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="border-t border-cbtBorder pt-5"
            >
              <h3 className="text-[15px] font-semibold text-snow">{point.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-mist">{point.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessApproach;
