"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const benefits = [
  "Site Essentiel dès 590 € (moderne)",
  "Site Pro dès 990 € (futuriste)",
  "Abonnement évolutif dès 29 €/mois",
  "Design personnalisé",
  "Un développeur Full-Stack dédié",
  "Sur-mesure sur demande",
  "Accompagnement dans la durée",
];

const BusinessBenefits = () => {
  return (
    <section
      id="avantages"
      className="scroll-mt-24 border-t border-cbtBorder px-6 py-24 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="max-w-2xl"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-snow md:text-[1.85rem]">
            Pourquoi choisir CodeByToma&nbsp;?
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-mist md:text-base">
            Sans présence en ligne pro, freelances et PME perdent en
            crédibilité. Nous créons votre site, puis nous
            l&apos;accompagnons dans la durée — avec un abonnement qui évolue
            si votre activité grandit.
          </p>
        </motion.div>

        <ul className="mt-12 grid gap-3 sm:grid-cols-2">
          {benefits.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: Math.min(i * 0.04, 0.2) }}
              className="flex items-start gap-3 rounded-lg border border-cbtBorder bg-surface/40 px-4 py-3.5"
            >
              <Check
                className="mt-0.5 h-4 w-4 shrink-0 text-snow"
                strokeWidth={2}
              />
              <span className="text-[14px] text-snow/90">{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BusinessBenefits;
