"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "On crée votre site",
    text: "Frais de lancement unique de 490 € — conception, développement et mise en ligne de votre site.",
  },
  {
    title: "On s’occupe de tout",
    text: "Hébergement, sécurité, maintenance et visibilité continue via votre abonnement mensuel.",
  },
  {
    title: "Ça évolue avec vous",
    text: "Montez de palier ou passez en sur-mesure quand votre activité le demande — sans tout recommencer.",
  },
];

const BusinessProcess = () => {
  return (
    <section
      id="processus"
      className="scroll-mt-24 border-t border-cbtBorder px-6 py-24 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="max-w-xl"
        >
          <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-mist/70">
            Comment ça marche
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-snow md:text-[1.85rem]">
            Création, accompagnement, évolution
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-mist md:text-base">
            Un démarrage clair avec 490 € de lancement, puis un abonnement
            qui s’adapte à votre niveau d’accompagnement.
          </p>
        </motion.div>

        <ol className="relative mt-14 md:grid md:grid-cols-3">
          <div
            className="pointer-events-none absolute bottom-3 left-[11px] top-3 w-px bg-gradient-to-b from-snow/40 via-cbtFill to-transparent md:left-0 md:right-0 md:top-[11px] md:h-px md:w-auto md:bg-gradient-to-r"
            aria-hidden
          />

          {steps.map((step, i) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative flex gap-5 pb-10 last:pb-0 md:block md:px-4 md:pb-0 first:md:pl-0"
            >
              <span className="relative z-10 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full border border-cbtBorderStrong bg-ink text-[10px] font-semibold text-snow md:mb-5">
                {i + 1}
              </span>
              <div>
                <h3 className="text-[15px] font-semibold text-snow">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-mist">
                  {step.text}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default BusinessProcess;
