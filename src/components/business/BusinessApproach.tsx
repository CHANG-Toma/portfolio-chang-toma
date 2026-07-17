"use client";

import React from "react";
import { motion } from "framer-motion";

const BusinessApproach = () => {
  return (
    <section
      id="approche"
      className="scroll-mt-24 border-t border-cbtBorder px-6 py-24 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-mist/70">
            Pourquoi CodeByToma
          </p>
          <h2 className="mt-3 max-w-2xl text-2xl font-semibold tracking-tight text-snow md:text-[1.85rem]">
            Un partenaire technique, pas une plateforme anonyme
          </h2>
          <div className="mt-6 max-w-2xl space-y-4 text-[15px] leading-relaxed text-mist md:text-base">
            <p>
              Nous créons votre site vitrine pour vous rendre visible et
              crédible, puis nous gérons l&apos;hébergement, la maintenance et
              la performance au quotidien.
            </p>
            <p className="text-snow">
              Quand votre activité grandit, votre abonnement peut intégrer des
              fonctionnalités métier — réservation, devis, espace client — sans
              tout recommencer.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessApproach;
