"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, ArrowRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const offers = [
  {
    id: "starter",
    name: "Starter",
    price: "49 €",
    period: "/mois",
    tagline: "Le nécessaire pour lancer votre présence en ligne.",
    creation: "Création offerte (engagement 24 mois)",
    featured: false,
    badge: null,
    recommend: null,
    includesLabel: "Inclus",
    highlights: [
      "Site vitrine professionnel",
      "Jusqu’à 5 pages",
      "Design personnalisé",
      "Version mobile",
      "Formulaire de contact",
      "Hébergement sécurisé",
      "Nom de domaine",
      "Certificat SSL",
      "Sauvegardes automatiques",
      "Maintenance technique",
      "Support par e-mail",
    ],
    ideal: ["Freelances", "Artisans", "Consultants", "Professions libérales", "Petites entreprises"],
    cta: "Demander mon devis gratuit",
  },
  {
    id: "business",
    name: "Business",
    price: "99 €",
    period: "/mois",
    tagline: "Notre offre la plus populaire.",
    creation: "Création offerte (engagement 24 mois)",
    featured: true,
    badge: "Le plus choisi",
    recommend: "Recommandé pour la majorité des entreprises",
    includesLabel: "Tout le Starter +",
    highlights: [
      "Jusqu’à 10 pages",
      "Optimisation SEO de base",
      "Modifications de contenu incluses",
      "Optimisation des performances",
      "Priorité sur le support",
      "Accompagnement pour faire évoluer votre site",
    ],
    ideal: ["PME", "Restaurants", "Commerces", "Agences", "Salles de sport"],
    cta: "Demander mon devis gratuit",
  },
  {
    id: "premium",
    name: "Premium",
    price: "199 €",
    period: "/mois",
    tagline: "Des solutions digitales conçues pour accompagner votre croissance.",
    creation: "Création offerte (engagement 24 mois)",
    featured: false,
    badge: null,
    recommend: null,
    includesLabel: "Tout le Business +",
    highlights: [
      "Développements sur mesure",
      "Intégration d’outils métiers",
      "Automatisations",
      "API",
      "Accompagnement personnalisé",
      "Évolutions régulières",
    ],
    ideal: ["Entreprises", "Structures en croissance", "Besoins spécifiques"],
    cta: "Demander mon devis gratuit",
  },
];

const BusinessOffers = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.12 });

  return (
    <section id="offres" className="scroll-mt-24 border-t border-cbtBorder px-6 py-24 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
        >
          <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-mist/70">
            Nos offres
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-snow md:text-[1.85rem]">
            Trois formules, un accompagnement clair
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3 lg:items-stretch">
          {offers.map((offer, i) => (
            <motion.article
              key={offer.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={cn(
                "relative flex flex-col rounded-xl border p-6 md:p-7",
                offer.featured
                  ? "border-snow/35 bg-surface shadow-[0_0_0_1px_var(--cbt-border-strong)] lg:-mt-2 lg:mb-[-0.5rem] lg:pb-8"
                  : "border-cbtBorder bg-transparent"
              )}
            >
              {offer.badge && (
                <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-md bg-snow px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-ink">
                  <Star className="h-3 w-3 fill-current" />
                  {offer.badge}
                </span>
              )}

              <h3 className="text-xl font-semibold text-snow">{offer.name}</h3>
              <p className="mt-1 text-[13px] text-mist">{offer.tagline}</p>

              <div className="mt-6">
                <p className="text-[12px] text-mist">À partir de</p>
                <p className="mt-0.5 text-3xl font-semibold tracking-tight text-snow">
                  {offer.price}
                  <span className="text-base font-normal text-mist">{offer.period}</span>
                </p>
                {offer.recommend && (
                  <p className="mt-2 text-[13px] font-medium text-snow/80">{offer.recommend}</p>
                )}
                <p className="mt-2 text-[12px] text-mist">{offer.creation}</p>
              </div>

              <div className="mt-7 flex-1 border-t border-cbtBorder pt-6">
                <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.12em] text-mist/70">
                  {offer.includesLabel}
                </p>
                <ul className="space-y-2.5">
                  {offer.highlights.map((item) => (
                    <li key={item} className="flex gap-2.5 text-[13px] text-mist">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-snow/60" strokeWidth={1.75} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7 border-t border-cbtBorder pt-5">
                <p className="mb-2 text-[12px] font-medium uppercase tracking-[0.12em] text-mist/70">
                  Idéal pour
                </p>
                <p className="text-[13px] text-mist">{offer.ideal.join(" · ")}</p>
              </div>

              <a
                href={`mailto:toma11chang@gmail.com?subject=${encodeURIComponent(
                  `CodeByToma — Devis gratuit (${offer.name})`
                )}`}
                className={cn(
                  "group mt-8 inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-[13px] font-medium transition-opacity hover:opacity-90",
                  offer.featured
                    ? "bg-snow text-ink"
                    : "border border-cbtBorder text-snow hover:border-cbtBorderStrong"
                )}
              >
                {offer.cta}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessOffers;
