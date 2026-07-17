"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";

const benefits = [
  "Sites vitrines dès 990 €",
  "Applications web sur-mesure",
  "Boutiques Shopify",
  "Abonnement optionnel dès 49 €/mois",
  "Design personnalisé",
  "Un développeur Full-Stack dédié",
  "Accompagnement dans la durée",
];

const BusinessBenefits = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <section id="avantages" className="scroll-mt-24 border-t border-cbtBorder px-6 py-24 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="max-w-2xl"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-snow md:text-[1.85rem]">
            Pourquoi choisir CodeByToma&nbsp;?
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-mist md:text-base">
            Parce qu&apos;un site internet ne doit pas seulement être beau. Il doit
            être fiable, rapide et évoluer avec votre activité — de la création
            à l&apos;accompagnement technique.
          </p>
        </motion.div>

        <ul className="mt-12 grid gap-3 sm:grid-cols-2">
          {benefits.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="flex items-start gap-3 rounded-lg border border-cbtBorder bg-surface/40 px-4 py-3.5"
            >
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-snow" strokeWidth={2} />
              <span className="text-[14px] text-snow/90">{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BusinessBenefits;
