"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const points = [
  "149 € une seule fois pour créer votre site",
  "Essentiel (49 €) : site en ligne et sécurisé, sans rien gérer",
  "Sérénité (65 €) : on met aussi à jour votre contenu (2× / mois)",
  "Premium (159 €) : 5 mises à jour / mois, évolutions régulières et suivi mensuel",
  "Vous pouvez changer de formule plus tard",
  "Engagement 12 mois, puis renouvellement automatique",
];

const BusinessSubscription = () => {
  return (
    <section
      id="abonnement"
      className="scroll-mt-24 border-t border-cbtBorder px-6 py-24 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-2xl font-semibold tracking-tight text-snow md:text-[1.85rem]">
              Pourquoi choisir un abonnement&nbsp;?
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-mist md:text-base">
              Vous payez une fois la création (149 €), puis un forfait mensuel
              selon le niveau d&apos;accompagnement souhaité : Essentiel (49
              €), Sérénité (65 €), Premium (159 €).
            </p>
            <p className="mt-6 text-[15px] font-medium text-snow">
              Commencez simple, montez en gamme plus tard.
              <span className="mt-1 block font-normal text-mist">
                Le Premium prépare aussi le passage vers du sur-mesure
                (réservation, espace client…) sans tout recommencer.
              </span>
            </p>
            <a
              href="#offres"
              className="mt-6 inline-flex text-[13px] font-medium text-snow underline decoration-cbtBorderStrong underline-offset-4 transition-colors hover:decoration-snow"
            >
              Voir les formules d&apos;abonnement
            </a>
          </motion.div>

          <ul className="space-y-3">
            {points.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
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
