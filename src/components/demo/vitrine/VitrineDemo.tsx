"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const offers = [
  {
    title: "Essai",
    price: "45 €",
    detail: "1 séance",
    text: "On pose ton objectif et on teste l’approche ensemble.",
  },
  {
    title: "Mensuel",
    price: "160 €",
    detail: "/ mois",
    text: "Le suivi le plus choisi pour des résultats stables.",
    featured: true,
  },
  {
    title: "Online",
    price: "69 €",
    detail: "8 semaines",
    text: "Programme guidé, flexible, depuis chez toi.",
  },
];

const steps = [
  {
    n: "01",
    title: "Clarifier",
    text: "Objectif, contraintes, rythme réel — on part de ta vie, pas d’un programme générique.",
  },
  {
    n: "02",
    title: "Structurer",
    text: "Séances, récupération, petites habitudes. Un plan lisible que tu peux tenir.",
  },
  {
    n: "03",
    title: "Ajuster",
    text: "Suivi régulier, motivation et progrès mesurables — sans pression inutile.",
  },
];

const testimonials = [
  {
    quote:
      "J’ai enfin un rythme qui tient avec mon job. Clair, motivant, sans pression.",
    name: "Camille R.",
    role: "Salariée · Lyon",
  },
  {
    quote:
      "Reprise après 2 ans sans sport. En 6 semaines je me sens vraiment mieux.",
    name: "Thomas B.",
    role: "Indépendant · Paris",
  },
  {
    quote: "Des séances adaptées à mon emploi du temps. Je recommande.",
    name: "Léa M.",
    role: "Étudiante · Nantes",
  },
];

const VitrineDemo = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[var(--vk-bg)] text-[var(--vk-ink)]">
      {/* Demo banner */}
      <div className="relative z-[70] border-b border-white/10 bg-[var(--vk-deep)] text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-2.5">
          <Link
            href="/#offres"
            className="inline-flex items-center gap-2 text-[12px] text-white/65 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Retour CodeByToma
          </Link>
          <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/40">
            Démo · Site vitrine
          </span>
        </div>
      </div>

      {/* Nav */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-[var(--vk-line)] bg-[var(--vk-bg)]/90 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a
            href="#accueil"
            className="font-[family-name:var(--font-aria-display)] text-2xl font-semibold tracking-tight"
          >
            Aria
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {[
              { label: "Méthode", href: "#methode" },
              { label: "Formules", href: "#offres-coach" },
              { label: "Témoignages", href: "#avis" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[12px] font-medium uppercase tracking-[0.14em] text-[var(--vk-muted)] transition-colors hover:text-[var(--vk-ink)]"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="text-[12px] font-medium uppercase tracking-[0.14em] text-[var(--vk-ink)] underline decoration-[var(--vk-accent)] decoration-2 underline-offset-8 transition-opacity hover:opacity-70"
          >
            Réserver
          </a>
        </div>
      </header>

      {/* Hero — full-bleed atmospheric plane */}
      <section
        id="accueil"
        className="relative min-h-[88vh] overflow-hidden border-b border-[var(--vk-line)]"
      >
        <div
          className="absolute inset-0"
          aria-hidden
          style={{
            background: `
              linear-gradient(105deg, rgba(233,235,230,0.94) 0%, rgba(233,235,230,0.72) 42%, rgba(18,22,18,0.55) 100%),
              radial-gradient(ellipse 80% 70% at 78% 40%, #3d5c48 0%, transparent 55%),
              radial-gradient(ellipse 50% 60% at 90% 80%, #6b7f6e 0%, transparent 50%),
              linear-gradient(160deg, #2a3830 0%, #121612 100%)
            `,
          }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          transition={{ duration: 1.2 }}
          className="pointer-events-none absolute inset-0"
          aria-hidden
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")",
            backgroundSize: "180px",
            mixBlendMode: "overlay",
          }}
        />

        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-6 pb-16 pt-24 md:justify-center md:pb-24 md:pt-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-[family-name:var(--font-aria-display)] text-[clamp(4.5rem,18vw,11rem)] font-medium leading-[0.85] tracking-tight text-[var(--vk-ink)]"
          >
            Aria
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mt-8 max-w-lg md:mt-10"
          >
            <h1 className="font-[family-name:var(--font-aria-display)] text-3xl font-medium leading-tight tracking-tight text-[var(--vk-ink)] md:text-4xl">
              Un rythme qui te ressemble.
            </h1>
            <p className="mt-4 text-[15px] font-light leading-relaxed text-[var(--vk-muted)] md:text-base">
              Coaching bien-être à Paris &amp; en ligne — pour bouger, récupérer
              et tenir dans la durée.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <a
                href="#offres-coach"
                className="group inline-flex items-center gap-2 bg-[var(--vk-ink)] px-6 py-3 text-[12px] font-medium uppercase tracking-[0.14em] text-[var(--vk-surface)] transition-opacity hover:opacity-90"
              >
                Voir les formules
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#methode"
                className="text-[12px] font-medium uppercase tracking-[0.14em] text-[var(--vk-ink)] underline decoration-[var(--vk-line)] underline-offset-8 transition-colors hover:decoration-[var(--vk-accent)]"
              >
                Découvrir la méthode
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Méthode — editorial columns, no cards */}
      <section id="methode" className="border-b border-[var(--vk-line)] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--vk-accent)]">
              La méthode
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-aria-display)] text-3xl font-medium tracking-tight md:text-5xl">
              Simple. Progressive.
              <br />
              <span className="italic text-[var(--vk-muted)]">Adaptée à ta vie.</span>
            </h2>
          </motion.div>

          <div className="mt-16 grid gap-0 md:grid-cols-3 md:divide-x md:divide-[var(--vk-line)]">
            {steps.map((step, i) => (
              <motion.article
                key={step.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-t border-[var(--vk-line)] py-8 md:border-t-0 md:px-8 md:py-0 md:first:pl-0 md:last:pr-0"
              >
                <p className="font-[family-name:var(--font-aria-display)] text-4xl font-medium text-[var(--vk-accent)]/40">
                  {step.n}
                </p>
                <h3 className="mt-4 font-[family-name:var(--font-aria-display)] text-2xl font-medium">
                  {step.title}
                </h3>
                <p className="mt-3 text-[14px] font-light leading-relaxed text-[var(--vk-muted)]">
                  {step.text}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Formules — list rows, not pricing cards */}
      <section
        id="offres-coach"
        className="border-b border-[var(--vk-line)] bg-[var(--vk-surface)] px-6 py-20 md:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--vk-accent)]">
                Formules
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-aria-display)] text-3xl font-medium tracking-tight md:text-5xl">
                Choisis ton rythme
              </h2>
            </div>
            <p className="max-w-sm text-[14px] font-light leading-relaxed text-[var(--vk-muted)]">
              Des accompagnements lisibles, sans surprise — pour démarrer ou
              t’engager.
            </p>
          </div>

          <ul className="mt-14 divide-y divide-[var(--vk-line)] border-y border-[var(--vk-line)]">
            {offers.map((offer, i) => (
              <motion.li
                key={offer.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group grid gap-4 py-8 transition-colors hover:bg-[var(--vk-bg)]/60 md:grid-cols-[1fr_1.2fr_auto] md:items-center md:gap-10 md:px-4"
              >
                <div>
                  <div className="flex items-baseline gap-3">
                    <h3 className="font-[family-name:var(--font-aria-display)] text-2xl font-medium md:text-3xl">
                      {offer.title}
                    </h3>
                    {offer.featured && (
                      <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--vk-accent)]">
                        Le plus choisi
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-[13px] text-[var(--vk-muted)]">
                    {offer.detail}
                  </p>
                </div>
                <p className="text-[14px] font-light leading-relaxed text-[var(--vk-muted)]">
                  {offer.text}
                </p>
                <div className="flex items-center justify-between gap-6 md:justify-end">
                  <span className="font-[family-name:var(--font-aria-display)] text-2xl font-medium">
                    {offer.price}
                  </span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-[0.12em] text-[var(--vk-ink)] transition-opacity group-hover:opacity-100 md:opacity-60"
                  >
                    Commencer
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Témoignages — large editorial quotes */}
      <section id="avis" className="border-b border-[var(--vk-line)] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--vk-accent)]">
            Témoignages
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-aria-display)] text-3xl font-medium tracking-tight md:text-5xl">
            Ils ont commencé avec Aria
          </h2>

          <div className="mt-16 space-y-0 divide-y divide-[var(--vk-line)] border-y border-[var(--vk-line)]">
            {testimonials.map((t, i) => (
              <motion.blockquote
                key={t.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="grid gap-6 py-10 md:grid-cols-[1fr_auto] md:gap-16"
              >
                <p className="font-[family-name:var(--font-aria-display)] text-2xl font-medium italic leading-snug tracking-tight text-[var(--vk-ink)] md:text-3xl">
                  “{t.quote}”
                </p>
                <footer className="md:self-end md:text-right">
                  <p className="text-[13px] font-medium">{t.name}</p>
                  <p className="mt-0.5 text-[12px] text-[var(--vk-muted)]">
                    {t.role}
                  </p>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="bg-[var(--vk-deep)] px-6 py-20 text-[var(--vk-surface)] md:py-28"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-6xl"
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--vk-accent)]">
            Contact
          </p>
          <h2 className="mt-4 max-w-xl font-[family-name:var(--font-aria-display)] text-3xl font-medium tracking-tight md:text-5xl">
            Prêt·e à retrouver de l’énergie&nbsp;?
          </h2>
          <p className="mt-5 max-w-md text-[15px] font-light leading-relaxed text-white/55">
            Démo vitrine coaching — réalisée avec{" "}
            <strong className="font-medium text-white/85">CodeByToma</strong>
            . Création 149 €, puis abonnement dès 49 €/mois.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 bg-[var(--vk-surface)] px-6 py-3 text-[12px] font-medium uppercase tracking-[0.14em] text-[var(--vk-ink)] transition-opacity hover:opacity-90"
            >
              Obtenir mon devis
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/demo/gastro"
              className="inline-flex items-center px-2 py-3 text-[12px] font-medium uppercase tracking-[0.14em] text-white/55 underline decoration-white/20 underline-offset-8 transition-colors hover:text-white"
            >
              Voir Maison Lune
            </Link>
          </div>
        </motion.div>
      </section>

      <footer className="border-t border-[var(--vk-line)] bg-[var(--vk-bg)] px-6 py-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <p className="font-[family-name:var(--font-aria-display)] text-xl font-medium">
            Aria
          </p>
          <p className="text-[12px] text-[var(--vk-muted)]">
            Démo ·{" "}
            <Link href="/#offres" className="text-[var(--vk-ink)] hover:underline">
              CodeByToma
            </Link>
            {" "}— création 149 € + abonnement
          </p>
        </div>
      </footer>
    </div>
  );
};

export default VitrineDemo;
