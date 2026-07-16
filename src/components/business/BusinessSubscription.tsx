"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";

const points = [
  "Aucun investissement important",
  "Hébergement inclus",
  "Maintenance continue",
  "Sécurité renforcée",
  "Sauvegardes automatiques",
  "Un interlocuteur unique",
  "Un site qui évolue avec votre entreprise",
];

const BusinessSubscription = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <section
      id="abonnement"
      className="scroll-mt-24 border-t border-cbtBorder px-6 py-24 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
          >
            <h2 className="text-2xl font-semibold tracking-tight text-snow md:text-[1.85rem]">
              Pourquoi choisir un abonnement&nbsp;?
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-mist md:text-base">
              Créer un site est une première étape. Le maintenir à jour, sécurisé
              et performant est tout aussi important.
            </p>
            <p className="mt-6 text-[15px] font-medium text-snow">
              Vous vous concentrez sur votre activité.
              <span className="mt-1 block font-normal text-mist">
                Nous nous occupons du reste.
              </span>
            </p>
          </motion.div>

          <ul className="space-y-3">
            {points.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="flex items-center gap-3 border-b border-cbtBorder pb-3 last:border-0"
              >
                <Check className="h-4 w-4 shrink-0 text-snow" strokeWidth={2} />
                <span className="text-[14px] text-snow/90">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BusinessSubscription;
