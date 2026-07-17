"use client";

import React from "react";
import Link from "next/link";

const BusinessFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-cbtBorder px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[13px] text-mist">
            <span className="font-medium text-snow">CodeByToma</span>
            <span className="mx-2 opacity-40">·</span>
            Code by Toma
            <span className="mx-2 opacity-40">·</span>
            Création de sites web pour freelances & PME
          </p>
          <p className="mt-2 text-[12px] text-mist/70">
            © {year} Toma Chang (Code by Toma) — Tous droits réservés
          </p>
        </div>
        <nav aria-label="Pied de page" className="flex flex-wrap gap-x-5 gap-y-2 text-[12px] text-mist">
          <a href="#processus" className="transition-colors hover:text-snow">
            Méthode
          </a>
          <a href="#offres" className="transition-colors hover:text-snow">
            Offres
          </a>
          <a href="#faq" className="transition-colors hover:text-snow">
            FAQ
          </a>
          <a href="#contact" className="transition-colors hover:text-snow">
            Contact
          </a>
          <Link href="/portfolio" className="transition-colors hover:text-snow">
            Portfolio
          </Link>
          <a
            href="mailto:toma11chang@gmail.com"
            className="transition-colors hover:text-snow"
          >
            toma11chang@gmail.com
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default BusinessFooter;
