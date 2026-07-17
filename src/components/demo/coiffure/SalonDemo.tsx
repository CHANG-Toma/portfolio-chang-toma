"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  MapPin,
  Phone,
  Scissors,
} from "lucide-react";
import { motion } from "framer-motion";
import BlurText from "@/components/BlurText";
import FadeContent from "@/components/FadeContent";
import Magnet from "@/components/Magnet";
import SpotlightCard from "@/components/SpotlightCard";

const services = [
  {
    title: "Coupe & brushing",
    text: "Une coupe pensée pour votre visage, votre matière et votre rythme.",
    price: "à partir de 42 €",
  },
  {
    title: "Couleur & balayage",
    text: "Des nuances naturelles ou affirmées, toujours respectueuses du cheveu.",
    price: "à partir de 78 €",
  },
  {
    title: "Soins signature",
    text: "Protocoles hydratation, réparation et brillance sur mesure.",
    price: "à partir de 35 €",
  },
  {
    title: "Mariage & événements",
    text: "Essai + jour J — coiffure durable pour les moments qui comptent.",
    price: "sur devis",
  },
];

const looks = [
  { label: "Brun profond", from: "#2a1f1c", mid: "#5c4038", to: "#1a1210" },
  { label: "Blond miel", from: "#3a3228", mid: "#c4a574", to: "#1c1812" },
  { label: "Roux cuivré", from: "#3a1e18", mid: "#b85c3a", to: "#140e0c" },
  { label: "Noir satiné", from: "#121214", mid: "#3a3a42", to: "#0a0a0c" },
];

const team = [
  { name: "Léa Moreau", role: "Fondatrice · Coupe & couleur" },
  { name: "Nina Okada", role: "Coloriste · Balayage" },
  { name: "Jules Martin", role: "Barbier · Coupe homme" },
];

const hours = [
  { day: "Mardi — Vendredi", time: "10h — 19h30" },
  { day: "Samedi", time: "9h — 18h" },
  { day: "Dimanche — Lundi", time: "Fermé" },
];

const SalonDemo = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[var(--sv-bg)] text-[var(--sv-ink)]">
      {/* Demo banner */}
      <div className="relative z-50 border-b border-[var(--sv-border)] bg-black/40 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-2.5">
          <Link
            href="/#offres"
            className="inline-flex items-center gap-2 text-[12px] text-[var(--sv-muted)] transition-colors hover:text-[var(--sv-ink)]"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Retour CodeByToma
          </Link>
          <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--sv-muted)]">
            Démo · Site Essentiel
          </span>
        </div>
      </div>

      {/* Nav */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "border-b border-[var(--sv-border)] bg-[var(--sv-bg)]/90 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a
            href="#accueil"
            className="font-[family-name:var(--font-salon-display)] text-xl font-medium tracking-tight"
          >
            Atelier Sève
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {[
              { label: "Services", href: "#services" },
              { label: "Looks", href: "#looks" },
              { label: "Équipe", href: "#equipe" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[13px] text-[var(--sv-muted)] transition-colors hover:text-[var(--sv-ink)]"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <Magnet padding={28} magnetStrength={2.8}>
            <a
              href="#contact"
              className="rounded-md bg-[var(--sv-rose)] px-4 py-2 text-[13px] font-medium text-[var(--sv-bg)] transition-opacity hover:opacity-90"
            >
              Prendre RDV
            </a>
          </Magnet>
        </div>
      </header>

      {/* Hero — full-bleed atmosphere */}
      <section
        id="accueil"
        className="relative flex min-h-[88vh] items-end overflow-hidden px-6 pb-16 pt-20 md:pb-24 md:pt-28"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 55% at 70% 30%, rgba(212,160,164,0.28), transparent 55%), radial-gradient(ellipse 50% 45% at 15% 70%, rgba(232,223,212,0.08), transparent 50%), linear-gradient(160deg, #1a1614 0%, #0e0d0c 45%, #121010 100%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
              backgroundSize: "180px",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[var(--sv-bg)] to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[12px] font-medium uppercase tracking-[0.2em] text-[var(--sv-rose)]"
          >
            Salon de coiffure · Paris 11ᵉ
          </motion.p>

          <div className="mt-4 max-w-2xl">
            <BlurText
              text="La coupe juste,"
              delay={40}
              animateBy="words"
              direction="top"
              className="font-[family-name:var(--font-salon-display)] text-[3rem] font-medium leading-[1.05] tracking-tight text-[var(--sv-ink)] sm:text-5xl md:text-[4.25rem]"
            />
            <BlurText
              text="le geste précis."
              delay={55}
              animateBy="words"
              direction="top"
              className="mt-1 font-[family-name:var(--font-salon-display)] text-[3rem] font-medium leading-[1.05] tracking-tight text-[var(--sv-pearl)] sm:text-5xl md:text-[4.25rem]"
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-6 max-w-md text-[15px] leading-relaxed text-[var(--sv-muted)] md:text-base"
          >
            Coupe, couleur et soins dans un atelier calme — pour une silhouette
            nette qui vous ressemble vraiment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <Magnet padding={36} magnetStrength={2.6}>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-md bg-[var(--sv-ink)] px-5 py-2.5 text-[13px] font-medium text-[var(--sv-bg)]"
              >
                Réserver un créneau
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Magnet>
            <a
              href="#services"
              className="rounded-md border border-[var(--sv-border)] px-5 py-2.5 text-[13px] font-medium text-[var(--sv-ink)] transition-colors hover:border-[var(--sv-rose)]/40"
            >
              Voir les services
            </a>
          </motion.div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-[var(--sv-border)] bg-[var(--sv-surface)]/60 py-3.5">
        <motion.div
          className="flex whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--sv-muted)]"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        >
          {Array.from({ length: 2 }).map((_, loop) => (
            <span key={loop} className="flex shrink-0 gap-10 px-5">
              {[
                "Coupe sur-mesure",
                "Couleur respectueuse",
                "Soins signature",
                "RDV en ligne",
                "Paris 11ᵉ",
                "Atelier Sève",
              ].map((label) => (
                <span
                  key={`${loop}-${label}`}
                  className="flex items-center gap-10"
                >
                  {label}
                  <Scissors className="h-3 w-3 text-[var(--sv-rose)]" />
                </span>
              ))}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Services */}
      <section id="services" className="scroll-mt-24 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <FadeContent duration={800}>
            <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-[var(--sv-rose)]">
              Services
            </p>
            <h2 className="mt-3 max-w-lg font-[family-name:var(--font-salon-display)] text-3xl font-medium tracking-tight md:text-4xl">
              Ce que nous faisons le mieux
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[var(--sv-muted)]">
              Un menu clair, des prestations soignées — sans surprise sur le
              fauteuil.
            </p>
          </FadeContent>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {services.map((s, i) => (
              <FadeContent key={s.title} delay={i * 70} duration={650}>
                <SpotlightCard
                  className="!rounded-xl !border-[var(--sv-border)] !bg-[var(--sv-surface)] !p-6"
                  spotlightColor="rgba(212, 160, 164, 0.18)"
                >
                  <h3 className="text-lg font-medium text-[var(--sv-ink)]">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[var(--sv-muted)]">
                    {s.text}
                  </p>
                  <p className="mt-5 text-[13px] font-medium text-[var(--sv-rose)]">
                    {s.price}
                  </p>
                </SpotlightCard>
              </FadeContent>
            ))}
          </div>
        </div>
      </section>

      {/* Looks */}
      <section id="looks" className="scroll-mt-24 border-t border-[var(--sv-border)] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <FadeContent duration={800}>
            <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-[var(--sv-rose)]">
              Inspiration
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-salon-display)] text-3xl font-medium tracking-tight md:text-4xl">
              Quelques directions
            </h2>
          </FadeContent>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {looks.map((look, i) => (
              <motion.div
                key={look.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                whileHover={{ y: -4 }}
                className="group relative aspect-[3/4] overflow-hidden rounded-xl"
                style={{
                  background: `linear-gradient(160deg, ${look.from}, ${look.mid} 45%, ${look.to})`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 text-[13px] font-medium text-[var(--sv-ink)]">
                  {look.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section id="equipe" className="scroll-mt-24 border-t border-[var(--sv-border)] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <FadeContent duration={800}>
            <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-[var(--sv-rose)]">
              L&apos;équipe
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-salon-display)] text-3xl font-medium tracking-tight md:text-4xl">
              Des mains expertes, une écoute vraie
            </h2>
          </FadeContent>

          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {team.map((member, i) => (
              <FadeContent key={member.name} delay={i * 80} duration={650}>
                <li className="border-t border-[var(--sv-border)] pt-5">
                  <p className="font-[family-name:var(--font-salon-display)] text-xl text-[var(--sv-ink)]">
                    {member.name}
                  </p>
                  <p className="mt-1.5 text-[13px] text-[var(--sv-muted)]">
                    {member.role}
                  </p>
                </li>
              </FadeContent>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24 border-t border-[var(--sv-border)] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 rounded-2xl border border-[var(--sv-border)] bg-[var(--sv-surface)] p-8 md:grid-cols-[1.2fr_0.8fr] md:p-12">
            <FadeContent duration={800}>
              <h2 className="font-[family-name:var(--font-salon-display)] text-3xl font-medium tracking-tight md:text-4xl">
                Réservez votre prochain rendez-vous
              </h2>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[var(--sv-muted)]">
                Un créneau, une consultation rapide, et on construit ensemble le
                rendu qui vous convient.
              </p>
              <Magnet padding={36} magnetStrength={2.6} className="mt-8 inline-block">
                <a
                  href="mailto:toma11chang@gmail.com?subject=Atelier%20S%C3%A8ve%20—%20Demande%20de%20RDV"
                  className="group inline-flex items-center gap-2 rounded-md bg-[var(--sv-rose)] px-5 py-2.5 text-[13px] font-medium text-[var(--sv-bg)]"
                >
                  Demander un créneau
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </Magnet>
            </FadeContent>

            <FadeContent delay={100} duration={800}>
              <ul className="space-y-5 text-[14px]">
                <li className="flex items-start gap-3 text-[var(--sv-muted)]">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--sv-rose)]" />
                  <span>
                    24 rue de la Folie-Méricourt
                    <br />
                    75011 Paris
                  </span>
                </li>
                <li>
                  <a
                    href="tel:0148000000"
                    className="flex items-center gap-3 text-[var(--sv-muted)] transition-colors hover:text-[var(--sv-ink)]"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-[var(--sv-rose)]" />
                    01 48 00 00 00
                  </a>
                </li>
                <li className="flex items-start gap-3 text-[var(--sv-muted)]">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[var(--sv-rose)]" />
                  <ul className="space-y-1">
                    {hours.map((h) => (
                      <li key={h.day} className="flex gap-3">
                        <span className="w-36 shrink-0">{h.day}</span>
                        <span className="text-[var(--sv-ink)]">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </FadeContent>
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--sv-border)] px-6 py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <p className="font-[family-name:var(--font-salon-display)] text-sm text-[var(--sv-ink)]">
            Atelier Sève
          </p>
          <p className="text-[12px] text-[var(--sv-muted)]">
            Démo fictive · réalisée par{" "}
            <Link href="/" className="underline underline-offset-2 hover:text-[var(--sv-ink)]">
              CodeByToma
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SalonDemo;
