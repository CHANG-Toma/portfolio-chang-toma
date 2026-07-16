"use client";

import React, { useMemo, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const profiles = [
  {
    id: "presence",
    label: "Indépendant",
    hint: "Visibilité simple",
  },
  {
    id: "business",
    label: "PME",
    hint: "Acquisition & outils",
  },
  {
    id: "custom",
    label: "Sur mesure",
    hint: "Projet métier",
  },
] as const;

const offers = {
  presence: {
    id: "presence",
    name: "Présence Digitale",
    tagline: "Votre présence en ligne, sans contrainte.",
    audience: "Indépendants et petites structures",
    creation: "0 €",
    price: "79 €",
    period: "/mois",
    note: "Engagement 24 mois · hébergement & maintenance inclus",
    highlights: [
      "Site vitrine jusqu’à 5 pages",
      "Design personnalisé & mobile",
      "Hébergement, domaine, SSL",
      "Sauvegardes, maintenance, sécurité",
      "Support & petites modifications",
    ],
  },
  business: {
    id: "business",
    name: "Business Digital",
    tagline: "Un site pensé pour développer votre activité.",
    audience: "PME et structures en croissance",
    creation: "À partir de 990 €",
    price: "149 €",
    period: "/mois",
    note: "Tout le pack Présence + fonctionnalités avancées",
    highlights: [
      "Pages supplémentaires & design avancé",
      "Blog, formulaires avancés",
      "Réservation en ligne",
      "Statistiques & suivi",
      "Accompagnement évolutif",
    ],
  },
  custom: {
    id: "custom",
    name: "Solutions Sur Mesure",
    tagline: "Des outils digitaux adaptés à votre métier.",
    audience: "Entreprises qui veulent optimiser",
    creation: "À partir de 3 000 €",
    price: null,
    period: null,
    note: "Devis selon le besoin — cadrage inclus",
    highlights: [
      "Applications web & espaces clients",
      "Tableaux de bord / CRM",
      "Automatisations & API",
      "Intégrations métier",
      "Solutions avec IA si pertinent",
    ],
  },
} as const;

type OfferId = keyof typeof offers;

const BusinessOffers = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const [active, setActive] = useState<OfferId>("business");
  const selected = useMemo(() => offers[active], [active]);

  return (
    <section id="offres" className="scroll-mt-24 border-t border-cbtBorder px-6 py-24 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="max-w-2xl"
        >
          <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-mist/70">
            Offres
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-snow md:text-[1.85rem]">
            Quelle est votre situation&nbsp;?
          </h2>
          <p className="mt-3 text-[15px] text-mist">
            Sélectionnez votre profil : l’offre adaptée s’affiche clairement, sans
            comparer trois colonnes d’un coup.
          </p>
        </motion.div>

        {/* Sélecteur de profil — cœur UX */}
        <div
          role="tablist"
          aria-label="Profil client"
          className="mt-10 grid gap-2 sm:grid-cols-3"
        >
          {profiles.map((profile, i) => {
            const isActive = active === profile.id;
            return (
              <motion.button
                key={profile.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(profile.id)}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.35 }}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "rounded-lg border px-4 py-4 text-left transition-colors duration-200",
                  isActive
                    ? "border-snow/30 bg-snow text-ink"
                    : "border-cbtBorder bg-transparent text-mist hover:border-cbtBorderStrong hover:text-snow"
                )}
              >
                <span className="block text-[14px] font-semibold">{profile.label}</span>
                <span
                  className={cn(
                    "mt-0.5 block text-[12px]",
                    isActive ? "text-ink/60" : "text-mist/70"
                  )}
                >
                  {profile.hint}
                </span>
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selected.id}
            role="tabpanel"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.28 }}
            className="mt-6 rounded-xl border border-cbtBorder bg-surface/60 p-6 md:p-10"
          >
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <div>
                <p className="text-[12px] uppercase tracking-[0.14em] text-mist">
                  {selected.audience}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-snow md:text-[1.75rem]">
                  {selected.name}
                </h3>
                <p className="mt-2 text-[15px] text-mist">{selected.tagline}</p>

                <div className="mt-8 flex flex-wrap gap-8 border-t border-cbtBorder pt-8">
                  <div>
                    <p className="text-[12px] text-mist">Création</p>
                    <p className="mt-1 text-lg font-semibold text-snow">{selected.creation}</p>
                  </div>
                  <div>
                    <p className="text-[12px] text-mist">Abonnement</p>
                    {selected.price ? (
                      <p className="mt-1 text-3xl font-semibold tracking-tight text-snow">
                        {selected.price}
                        <span className="text-base font-normal text-mist">{selected.period}</span>
                      </p>
                    ) : (
                      <p className="mt-1 text-2xl font-semibold text-snow">Sur devis</p>
                    )}
                  </div>
                </div>
                <p className="mt-2 text-[13px] text-mist/80">{selected.note}</p>

                <motion.a
                  href={`mailto:toma11chang@gmail.com?subject=${encodeURIComponent(
                    `CodeByToma — Offre ${selected.name}`
                  )}`}
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group mt-8 inline-flex items-center gap-2 rounded-md bg-snow px-5 py-2.5 text-[13px] font-medium text-ink"
                >
                  Demander cette offre
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </motion.a>
              </div>

              <ul className="space-y-3.5 rounded-lg border border-cbtBorder bg-ink/40 p-5 md:p-6">
                <li className="mb-1 text-[12px] font-medium uppercase tracking-[0.12em] text-mist/70">
                  Inclus
                </li>
                {selected.highlights.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i }}
                    className="flex gap-3 text-[14px] text-snow/90"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-mist" strokeWidth={1.75} />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default BusinessOffers;
