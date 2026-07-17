"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, MapPin, Phone } from "lucide-react";

import AnimatedContent from "@/components/AnimatedContent";
import BounceCards from "@/components/BounceCards";
import DecryptedText from "@/components/DecryptedText";
import ElectricBorder from "@/components/ElectricBorder";
import GlareHover from "@/components/GlareHover";
import Iridescence from "@/components/Iridescence";
import ScrollReveal from "@/components/ScrollReveal";
import SplitText from "@/components/SplitText";
import TargetCursor from "@/components/TargetCursor";
import TextType from "@/components/TextType";
import TrueFocus from "@/components/TrueFocus";

const gradientSvg = (from: string, mid: string, to: string) =>
  `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop stop-color="${from}"/>
          <stop offset="0.5" stop-color="${mid}"/>
          <stop offset="1" stop-color="${to}"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#g)"/>
    </svg>`
  )}`;

const dishes = [
  {
    name: "Saint-Jacques rôties",
    desc: "Beurre noisette, agrumes confits, émulsion yuzu",
    price: "28 €",
  },
  {
    name: "Pigeon laqué",
    desc: "Chou pointu, jus corsé, raisins acidulés",
    price: "36 €",
  },
  {
    name: "Soufflé cacao",
    desc: "Fève tonka, crème anglaise glacée",
    price: "16 €",
  },
];

const gallery = [
  gradientSvg("#3a2218", "#8b2e2e", "#1a1210"),
  gradientSvg("#2a2418", "#d4a574", "#1c1612"),
  gradientSvg("#1e2420", "#5c7a6a", "#121816"),
  gradientSvg("#2a1c24", "#c47a6a", "#140f0c"),
  gradientSvg("#242018", "#a68b5b", "#16120e"),
];

const GastroDemo = () => {
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    setShowCursor(fine);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[var(--mg-bg)] text-[var(--mg-ink)]">
      {showCursor && (
        <TargetCursor
          targetSelector=".cursor-target"
          spinDuration={3}
          hideDefaultCursor
          cursorColor="#d4a574"
          cursorColorOnTarget="#f3ebe2"
        />
      )}

      {/* Demo banner */}
      <div className="relative z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-2.5">
          <Link
            href="/#offres"
            className="cursor-target inline-flex items-center gap-2 text-[12px] text-[var(--mg-muted)] transition-colors hover:text-[var(--mg-ink)]"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Retour CodeByToma
          </Link>
          <DecryptedText
            text="Démo · Site Vitrine · 990 €"
            animateOn="view"
            speed={30}
            sequential
            className="text-[11px] uppercase tracking-[0.14em] text-[var(--mg-muted)]"
            encryptedClassName="text-[var(--mg-gold)]/50"
          />
        </div>
      </div>

      {/* Hero */}
      <section className="relative min-h-[92vh] overflow-hidden px-6 pb-16 pt-8">
        <div className="pointer-events-none absolute inset-0 opacity-55">
          <Iridescence
            color={[0.85, 0.55, 0.35]}
            speed={0.55}
            amplitude={0.12}
            mouseReact
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--mg-bg)]/70 via-[var(--mg-bg)]/40 to-[var(--mg-bg)]" />

        <header className="relative z-10 mx-auto flex max-w-5xl items-center justify-between py-4">
          <span className="font-[family-name:var(--font-gastro-display)] text-2xl tracking-wide text-[var(--mg-ink)]">
            Maison Lune
          </span>
          <nav className="hidden items-center gap-7 md:flex">
            {[
              { label: "Menu", href: "#menu" },
              { label: "Maison", href: "#maison" },
              { label: "Réserver", href: "#reserver" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="cursor-target text-[13px] font-medium text-[var(--mg-muted)] transition-colors hover:text-[var(--mg-gold)]"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </header>

        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-center pt-16 text-center md:pt-24">
          <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.28em] text-[var(--mg-gold)]">
            Restaurant gastronomique · Paris 11ᵉ
          </p>

          <SplitText
            text="Maison Lune"
            tag="h1"
            className="font-[family-name:var(--font-gastro-display)] text-[3.2rem] font-semibold tracking-tight text-[var(--mg-ink)] sm:text-6xl md:text-[5rem]"
            delay={40}
            duration={1.1}
            splitType="chars"
            textAlign="center"
            from={{ opacity: 0, y: 48 }}
            to={{ opacity: 1, y: 0 }}
          />

          <div className="mt-6 min-h-[2rem] text-[16px] text-[var(--mg-muted)] md:text-lg">
            <TextType
              text={[
                "Cuisine de saison, produit vivant.",
                "Une table intimiste pour 28 couverts.",
                "Réservez votre soirée.",
              ]}
              typingSpeed={42}
              pauseDuration={2200}
              deletingSpeed={24}
              loop
              className="text-[var(--mg-muted)]"
              cursorCharacter="|"
              cursorClassName="text-[var(--mg-gold)]"
            />
          </div>

          <div className="mt-10">
            <ElectricBorder
              color="#d4a574"
              speed={1.1}
              chaos={0.14}
              borderRadius={999}
              className="inline-block"
            >
              <a
                href="#reserver"
                className="cursor-target inline-flex items-center gap-2 rounded-full bg-[var(--mg-bg)]/90 px-7 py-3 text-[13px] font-semibold text-[var(--mg-ink)]"
              >
                Réserver une table
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </ElectricBorder>
          </div>
        </div>

        <div className="relative z-10 mx-auto mt-20 flex max-w-5xl justify-center">
          <BounceCards
            images={gallery}
            containerWidth={520}
            containerHeight={280}
            animationDelay={0.35}
            animationStagger={0.08}
            enableHover
            transformStyles={[
              "rotate(8deg) translate(-150px)",
              "rotate(3deg) translate(-75px)",
              "rotate(-2deg)",
              "rotate(-8deg) translate(75px)",
              "rotate(4deg) translate(150px)",
            ]}
          />
        </div>
      </section>

      {/* TrueFocus strip */}
      <section className="relative z-10 border-y border-white/10 bg-black/30 px-6 py-12">
        <div className="mx-auto max-w-4xl text-[var(--mg-ink)]">
          <TrueFocus
            sentence="Entrées Plats Desserts Cave"
            separator=" "
            blurAmount={4}
            borderColor="#d4a574"
            glowColor="rgba(212, 165, 116, 0.45)"
            animationDuration={0.55}
            pauseBetweenAnimations={1.1}
          />
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="relative z-10 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-5xl">
          <AnimatedContent distance={60} duration={0.9}>
            <p className="text-center text-[12px] font-medium uppercase tracking-[0.22em] text-[var(--mg-gold)]">
              La carte
            </p>
          </AnimatedContent>

          <ScrollReveal
            baseOpacity={0.12}
            enableBlur
            baseRotation={2}
            blurStrength={5}
            containerClassName="mt-4 text-center"
            textClassName="font-[family-name:var(--font-gastro-display)] text-3xl font-medium text-[var(--mg-ink)] md:text-4xl"
          >
            Suggestions du moment
          </ScrollReveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {dishes.map((dish, i) => (
              <AnimatedContent
                key={dish.name}
                delay={i * 0.12}
                distance={40}
                duration={0.75}
              >
                <GlareHover
                  width="100%"
                  height="100%"
                  background="rgba(255,255,255,0.03)"
                  borderRadius="1.25rem"
                  borderColor="rgba(255,255,255,0.1)"
                  glareColor="#d4a574"
                  glareOpacity={0.35}
                  glareAngle={-40}
                  className="cursor-target h-full"
                >
                  <div className="flex h-full flex-col p-6">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-[family-name:var(--font-gastro-display)] text-xl font-medium text-[var(--mg-ink)]">
                        {dish.name}
                      </h3>
                      <span className="text-[13px] font-semibold text-[var(--mg-gold)]">
                        {dish.price}
                      </span>
                    </div>
                    <p className="mt-3 text-[14px] leading-relaxed text-[var(--mg-muted)]">
                      {dish.desc}
                    </p>
                  </div>
                </GlareHover>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="maison" className="relative z-10 px-6 py-16">
        <div className="mx-auto grid max-w-5xl gap-10 border-y border-white/10 py-16 md:grid-cols-2 md:items-center">
          <AnimatedContent direction="horizontal" distance={50}>
            <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-[var(--mg-gold)]">
              La maison
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-gastro-display)] text-3xl font-medium text-[var(--mg-ink)] md:text-4xl">
              Une table pour les soirs qui comptent
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[var(--mg-muted)]">
              Cette démo illustre un site vitrine CodeByToma pour un restaurant :
              ambiance forte, menu lisible, réservation claire — avec d’autres
              composants{" "}
              <a
                href="https://reactbits.dev/"
                target="_blank"
                rel="noreferrer"
                className="cursor-target text-[var(--mg-gold)] underline-offset-2 hover:underline"
              >
                React Bits
              </a>{" "}
              que sur Studio Kael.
            </p>
          </AnimatedContent>

          <AnimatedContent delay={0.15} distance={40}>
            <ul className="space-y-4 text-[14px] text-[var(--mg-muted)]">
              {[
                { icon: Clock, label: "Mar–Sam · 19h30 – 22h30" },
                { icon: MapPin, label: "12 rue Oberkampf, Paris 11ᵉ" },
                { icon: Phone, label: "01 00 00 00 00" },
              ].map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 border-b border-white/10 pb-3"
                >
                  <Icon className="h-4 w-4 text-[var(--mg-gold)]" />
                  {label}
                </li>
              ))}
            </ul>
          </AnimatedContent>
        </div>
      </section>

      {/* CTA */}
      <section id="reserver" className="relative z-10 px-6 pb-24 pt-8">
        <div className="mx-auto max-w-3xl text-center">
          <DecryptedText
            text="Votre table vous attend"
            animateOn="view"
            sequential
            speed={35}
            className="font-[family-name:var(--font-gastro-display)] text-3xl text-[var(--mg-ink)] md:text-4xl"
            encryptedClassName="text-[var(--mg-gold)]/40"
          />
          <p className="mx-auto mt-4 max-w-md text-[15px] text-[var(--mg-muted)]">
            Offre <strong className="text-[var(--mg-ink)]">Site Vitrine — 990 €</strong>{" "}
            · parfait pour restaurants, artisans et indépendants.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <ElectricBorder
              color="#d4a574"
              speed={1}
              chaos={0.1}
              borderRadius={999}
              className="inline-block"
            >
              <Link
                href="/#contact"
                className="cursor-target inline-flex items-center gap-2 rounded-full bg-[var(--mg-gold)] px-6 py-3 text-[13px] font-semibold text-[#140f0c]"
              >
                Obtenir mon devis gratuit
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </ElectricBorder>
            <Link
              href="/demo/vitrine"
              className="cursor-target rounded-full border border-white/15 px-5 py-2.5 text-[13px] font-medium text-[var(--mg-muted)] transition-colors hover:text-[var(--mg-ink)]"
            >
              Voir la démo Aria
            </Link>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <p className="font-[family-name:var(--font-gastro-display)] text-lg text-[var(--mg-ink)]">
            Maison Lune
          </p>
          <p className="text-[12px] text-[var(--mg-muted)]">
            Démo fictive ·{" "}
            <Link href="/" className="cursor-target text-[var(--mg-ink)] hover:underline">
              CodeByToma
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default GastroDemo;
