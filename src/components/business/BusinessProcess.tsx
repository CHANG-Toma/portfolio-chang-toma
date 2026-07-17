"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    title: "Nous échangeons",
    text: "Nous prenons le temps de comprendre votre activité et vos objectifs.",
  },
  {
    title: "Nous créons votre projet",
    text: "Site vitrine, application web ou boutique Shopify : nous concevons une solution adaptée à vos besoins.",
  },
  {
    title: "Mise en ligne",
    text: "Votre site est livré clé en main après un paiement unique, prêt à accueillir vos visiteurs ou clients.",
  },
  {
    title: "Nous vous accompagnons",
    text: "Vous pouvez souscrire un abonnement pour l'hébergement, la maintenance, la sécurité et le support.",
  },
];

const BusinessProcess = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <section
      id="processus"
      className="scroll-mt-24 border-t border-cbtBorder px-6 py-24 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="max-w-xl"
        >
          <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-mist/70">
            Comment ça fonctionne
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-snow md:text-[1.85rem]">
            Quatre étapes, un accompagnement continu
          </h2>
        </motion.div>

        <ol className="relative mt-14 md:grid md:grid-cols-4">
          <motion.div
            className="pointer-events-none absolute left-[11px] top-3 bottom-3 w-px origin-top bg-gradient-to-b from-snow/40 via-cbtFill to-transparent md:left-0 md:right-0 md:top-[11px] md:h-px md:w-auto md:origin-left md:bg-gradient-to-r"
            initial={{ scaleY: 0, scaleX: 0 }}
            whileInView={{ scaleY: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden
          />

          {steps.map((step, i) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.15 + i * 0.1 }}
              whileHover={{ y: -4 }}
              className="relative flex gap-5 pb-10 last:pb-0 md:block md:px-4 md:pb-0 first:md:pl-0"
            >
              <motion.span
                className="relative z-10 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full border border-cbtBorderStrong bg-ink text-[10px] font-semibold text-snow md:mb-5"
                whileInView={{ scale: [0.6, 1.15, 1] }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.45 }}
              >
                {i + 1}
              </motion.span>
              <div>
                <h3 className="text-[15px] font-semibold text-snow">{step.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-mist">{step.text}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default BusinessProcess;
