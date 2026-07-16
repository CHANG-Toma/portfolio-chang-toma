"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "La création est-elle vraiment offerte ?",
    a: "Oui. La création de votre site est incluse dans nos offres avec un engagement de 24 mois.",
  },
  {
    q: "Suis-je propriétaire de mon site ?",
    a: "Vous restez propriétaire de votre contenu et de votre nom de domaine. Les modalités concernant le code source et les développements spécifiques sont précisées dans le contrat.",
  },
  {
    q: "Puis-je demander des modifications ?",
    a: "Oui. Les petites modifications de contenu sont incluses selon votre formule. Les évolutions importantes font simplement l’objet d’un devis avant toute intervention.",
  },
  {
    q: "Combien de temps faut-il pour créer un site ?",
    a: "En moyenne entre une et deux semaines selon la complexité du projet et la disponibilité des contenus.",
  },
  {
    q: "Que se passe-t-il si mon activité évolue ?",
    a: "Votre site évolue avec vous. Nous pouvons ajouter des fonctionnalités, développer de nouveaux outils ou créer des automatisations adaptées à votre entreprise.",
  },
];

const BusinessFaq = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 border-t border-cbtBorder px-6 py-24 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="max-w-xl"
        >
          <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-mist/70">
            Questions fréquentes
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-snow md:text-[1.85rem]">
            Les réponses aux questions les plus posées
          </h2>
        </motion.div>

        <div className="mt-12 max-w-3xl divide-y divide-[var(--cbt-border)] border-y border-cbtBorder">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-[15px] font-medium text-snow">{item.q}</span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 shrink-0 text-mist transition-transform duration-300",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-[14px] leading-relaxed text-mist">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BusinessFaq;
