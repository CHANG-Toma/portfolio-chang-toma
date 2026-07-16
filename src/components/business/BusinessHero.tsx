"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const BusinessHero = () => {
  const logoGroupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!logoGroupRef.current) return;
      const rx = (e.clientY - window.innerHeight / 2) / 55;
      const ry = (window.innerWidth / 2 - e.clientX) / 55;
      logoGroupRef.current.style.transition = "transform 0.3s ease-out";
      logoGroupRef.current.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    };
    const onLeave = () => {
      if (!logoGroupRef.current) return;
      logoGroupRef.current.style.transition = "transform 0.5s ease-out";
      logoGroupRef.current.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
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
          animate={{ x: [0, 30, 0], y: [0, -25, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1.2fr_0.8fr] md:gap-16">
        <div>
          <motion.h1
            className="max-w-xl text-[2.35rem] font-semibold leading-[1.12] tracking-tight text-snow sm:text-5xl md:text-[3.1rem]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            Votre partenaire digital,&nbsp;
            <span className="font-normal text-mist">à partir de 49€/mois.</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-lg text-[15px] leading-relaxed text-mist md:text-base"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
          >
            Développez votre présence en ligne sans investissement important.
            CodeByToma crée votre site internet, l&apos;héberge, le sécurise et
            l&apos;accompagne dans le temps grâce à un abonnement simple et transparent.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.25 }}
          >
            <motion.a
              href="mailto:toma11chang@gmail.com?subject=CodeByToma%20—%20Devis%20gratuit"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2 rounded-md bg-snow px-5 py-2.5 text-[13px] font-medium text-ink"
            >
              Obtenir un devis gratuit
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </motion.a>
            <motion.a
              href="#offres"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-md border border-cbtBorder px-5 py-2.5 text-[13px] font-medium text-snow transition-colors hover:border-cbtBorderStrong"
            >
              Découvrir nos offres
            </motion.a>
          </motion.div>
        </div>

        <div className="flex justify-center md:justify-end">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
            transition={{
              opacity: { duration: 0.6, delay: 0.15 },
              scale: { duration: 0.6, delay: 0.15, type: "spring", stiffness: 120 },
              y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 },
            }}
            whileHover={{ scale: 1.04 }}
          >
            {/* Halo + orbites + logo basculent ensemble avec la souris */}
            <div
              ref={logoGroupRef}
              className="relative will-change-transform"
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div
                className="absolute -inset-8 rounded-full bg-snow/10 blur-3xl"
                animate={{ opacity: [0.2, 0.45, 0.2], scale: [0.92, 1.08, 0.92] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden
              />
              <motion.div
                className="absolute -inset-5 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0%, var(--cbt-snow) 8%, transparent 18%, transparent 55%, var(--cbt-snow) 62%, transparent 72%)",
                  opacity: 0.35,
                  maskImage:
                    "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 1px))",
                  WebkitMaskImage:
                    "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 1px))",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                aria-hidden
              />
              <motion.div
                className="absolute -inset-2 rounded-full border border-dashed border-cbtBorderStrong/60"
                animate={{ rotate: -360 }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                aria-hidden
              />
              <motion.div
                className="absolute -inset-7"
                animate={{ rotate: 360 }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                aria-hidden
              >
                <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-snow shadow-[0_0_12px_var(--cbt-snow)]" />
                <span className="absolute bottom-[18%] left-[8%] h-1.5 w-1.5 rounded-full bg-snow/70" />
              </motion.div>
              <motion.div
                className="absolute -inset-10"
                animate={{ rotate: -360 }}
                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                aria-hidden
              >
                <span className="absolute right-[12%] top-[30%] h-1 w-1 rounded-full bg-mist" />
              </motion.div>
              <div className="relative h-52 w-52 overflow-hidden rounded-full border border-cbtBorder bg-surface shadow-[0_0_40px_-12px_var(--cbt-snow)] md:h-64 md:w-64">
                <Image
                  src="/images/CodeByToma.png"
                  alt="Logo CodeByToma"
                  width={256}
                  height={256}
                  priority
                  className="h-full w-full rounded-full object-cover"
                />
                <motion.div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-snow/25 to-transparent"
                  initial={{ x: "-120%" }}
                  animate={{ x: ["-120%", "120%"] }}
                  transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 3.5, ease: "easeInOut" }}
                  aria-hidden
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BusinessHero;