"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const BusinessHero = () => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!imageRef.current) return;
      const rx = (e.clientY - window.innerHeight / 2) / 55;
      const ry = (window.innerWidth / 2 - e.clientX) / 55;
      imageRef.current.style.transition = "transform 0.3s ease-out";
      imageRef.current.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    };
    const onLeave = () => {
      if (!imageRef.current) return;
      imageRef.current.style.transition = "transform 0.5s ease-out";
      imageRef.current.style.transform = "perspective(900px) rotateX(0) rotateY(0)";
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section
      id="accueil"
      className="relative flex min-h-[88vh] items-center overflow-hidden px-6 pb-20 pt-28 md:px-10"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-ink" />
        {/* Lumière douce qui se déplace */}
        <motion.div
          className="absolute h-[55vh] w-[55vw] rounded-full bg-cbtGlow blur-[100px]"
          style={{ top: "-10%", right: "-5%" }}
          animate={{
            x: [0, -40, 20, 0],
            y: [0, 30, -10, 0],
            opacity: [0.35, 0.55, 0.4, 0.35],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute h-[40vh] w-[40vw] rounded-full bg-cbtGlow blur-[90px]"
          style={{ bottom: "5%", left: "-10%" }}
          animate={{
            x: [0, 30, 0],
            y: [0, -25, 0],
          }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1.2fr_0.8fr] md:gap-16">
        <div>
          {/* Marque = logo à droite + header ; ici on part direct sur la promesse */}
          <motion.h1
            className="max-w-xl text-[2.4rem] font-semibold leading-[1.1] tracking-tight text-snow sm:text-5xl md:text-[3.2rem]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            Votre présence en ligne,&nbsp;
            <motion.span
              className="inline font-normal text-mist"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              sans contrainte technique.
            </motion.span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-md text-[15px] leading-relaxed text-mist"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.18 }}
          >
            Sites web, outils sur mesure et accompagnement pour indépendants et PME.
            Un interlocuteur unique, de la création au suivi.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.28 }}
          >
            <motion.a
              href="#offres"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2 rounded-md bg-snow px-5 py-2.5 text-[13px] font-medium text-ink"
            >
              Trouver mon offre
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-md border border-cbtBorder px-5 py-2.5 text-[13px] font-medium text-snow transition-colors hover:border-cbtBorderStrong"
            >
              Parler du projet
            </motion.a>
          </motion.div>

          <motion.p
            className="mt-8 text-[12px] text-mist/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Création dès 0 € · Suivi mensuel · Île-de-France & distanciel
          </motion.p>
        </div>

        <div className="flex justify-center md:justify-end">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
            transition={{
              opacity: { duration: 0.55, delay: 0.15 },
              scale: { duration: 0.55, delay: 0.15 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
            }}
          >
            {/* Anneau orbital */}
            <motion.div
              className="absolute -inset-3 rounded-full border border-cbtBorder"
              animate={{ rotate: 360 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              aria-hidden
            >
              <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-snow/70" />
            </motion.div>
            <motion.div
              className="absolute -inset-6 rounded-full border border-cbtBorder"
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              aria-hidden
            />
            <motion.div
              className="absolute inset-2 rounded-full bg-cbtFill blur-2xl"
              animate={{ opacity: [0.25, 0.5, 0.25], scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden
            />
            <div className="relative h-52 w-52 overflow-hidden rounded-full border border-cbtBorder bg-surface md:h-64 md:w-64">
              <Image
                ref={imageRef}
                src="/images/CodeByToma.png"
                alt="Logo CodeByToma"
                width={256}
                height={256}
                priority
                className="h-full w-full rounded-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BusinessHero;
