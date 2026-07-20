"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const BusinessContact = () => {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-cbtBorder px-6 py-24 pb-32 md:px-10 md:py-28 md:pb-28"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.4 }}
          className="grid gap-10 rounded-xl border border-cbtBorder bg-gradient-to-br from-cbtFill to-transparent p-8 md:grid-cols-[1.3fr_0.7fr] md:items-center md:gap-12 md:p-12"
        >
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-snow md:text-[1.85rem]">
              Prêt à développer votre présence en ligne&nbsp;?
            </h2>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-mist md:text-base">
              Création 149 €, puis abonnement dès 49 €/mois — et du
              sur-mesure si votre activité le demande.
            </p>
            <a
              href="mailto:toma11chang@gmail.com?subject=CodeByToma%20—%20Devis%20gratuit"
              className="group mt-8 inline-flex items-center gap-2 rounded-md bg-snow px-5 py-2.5 text-[13px] font-medium text-ink"
            >
              Obtenir mon devis gratuit
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <ul className="space-y-4 text-[14px]">
            <li>
              <a
                href="mailto:toma11chang@gmail.com"
                className="flex items-center gap-3 text-mist transition-colors hover:text-snow"
              >
                <Mail className="h-4 w-4 shrink-0" strokeWidth={1.75} />
                toma11chang@gmail.com
              </a>
            </li>
            <li>
              <a
                href="tel:0686930522"
                className="flex items-center gap-3 text-mist transition-colors hover:text-snow"
              >
                <Phone className="h-4 w-4 shrink-0" strokeWidth={1.75} />
                06 86 93 05 22
              </a>
            </li>
            <li className="flex items-center gap-3 text-mist">
              <MapPin className="h-4 w-4 shrink-0" strokeWidth={1.75} />
              Île-de-France · à distance
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessContact;
