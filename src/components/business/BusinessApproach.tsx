"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const BusinessApproach = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="approche"
      className="scroll-mt-24 border-t border-cbtBorder px-6 py-24 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="max-w-2xl"
        >
          <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-mist/70">
            Pourquoi CodeByToma
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-snow md:text-[1.85rem]">
            Un accompagnement de A à Z, pas une plateforme anonyme
          </h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-mist md:text-base">
            <p>
              Contrairement aux plateformes de création de sites, nous vous
              accompagnons de A à Z. Vous n&apos;êtes jamais seul.
            </p>
            <p>
              Nous restons disponibles pour répondre à vos besoins et faire évoluer
              votre présence digitale.
            </p>
            <p className="text-snow">
              Notre objectif n&apos;est pas seulement de créer un site internet.
              Notre objectif est de devenir votre partenaire technique sur le long
              terme.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessApproach;
