"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const BusinessNeed = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.35 });

  return (
    <section id="besoin" className="border-t border-cbtBorder px-6 py-24 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[200px_1fr] md:gap-16">
          <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-mist/70">
            Positionnement
          </p>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
          >
            <h2 className="max-w-2xl text-2xl font-semibold tracking-tight text-snow md:text-[1.85rem]">
              Un partenaire digital, pas une prestation one-shot.
            </h2>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-mist">
              Indépendants et PME veulent une présence en ligne claire, sans gros
              budget de départ. CodeByToma crée votre site à 149 €, puis gère
              technique, hébergement et sécurité via l&apos;abonnement — et reste
              disponible dans la durée.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BusinessNeed;
