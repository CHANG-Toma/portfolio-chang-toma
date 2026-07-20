"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  MessageCircle,
  Sparkles,
  Star,
} from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";

const offers = [
  {
    title: "Essai",
    price: "45 €",
    detail: "1 séance",
    text: "On pose ton objectif et on teste l’approche ensemble.",
    features: ["Bilan personnalisé", "Plan de démarrage", "Sans engagement"],
  },
  {
    title: "Mensuel",
    price: "160 €",
    detail: "/ mois",
    text: "Le suivi le plus choisi pour des résultats stables.",
    features: ["4 séances / mois", "Suivi WhatsApp", "Ajustements hebdo"],
    featured: true,
  },
  {
    title: "Online",
    price: "69 €",
    detail: "8 semaines",
    text: "Programme guidé, flexible, depuis chez toi.",
    features: ["Vidéos & plan", "Check-in hebdo", "Accès 8 semaines"],
  },
];

const testimonials = [
  {
    name: "Camille R.",
    role: "Salariée · Lyon",
    quote:
      "J’ai enfin un rythme qui tient avec mon job. Clair, motivant, sans pression.",
  },
  {
    name: "Thomas B.",
    role: "Indépendant · Paris",
    quote:
      "Reprise après 2 ans sans sport. En 6 semaines je me sens vraiment mieux.",
  },
  {
    name: "Léa M.",
    role: "Étudiante · Nantes",
    quote: "Des séances adaptées à mon emploi du temps. Je recommande.",
  },
];

const VitrineDemo = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[var(--vk-bg)] text-[var(--vk-ink)]">
      <motion.div
        className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-[var(--vk-blue)] via-[var(--vk-accent)] to-[var(--vk-mint)]"
        style={{ scaleX: progress }}
      />

      <div
        className="pointer-events-none fixed inset-0 -z-10"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 92% 0%, rgba(79,110,247,0.28), transparent 55%), radial-gradient(ellipse 45% 40% at 0% 35%, rgba(255,79,46,0.14), transparent 50%), radial-gradient(ellipse 40% 35% at 70% 100%, rgba(184,242,216,0.5), transparent)",
        }}
      />

      {/* Demo banner */}
      <div className="border-b border-black/5 bg-[var(--vk-ink)] text-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-2.5">
          <Link
            href="/#offres"
            className="inline-flex items-center gap-2 text-[12px] text-white/70 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Retour CodeByToma
          </Link>
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50">
            Démo · Site vitrine
          </span>
        </div>
      </div>

      {/* Nav */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-black/5 bg-white/80 shadow-sm backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#accueil" className="text-xl font-extrabold tracking-tight">
            aria
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {[
              { label: "Méthode", href: "#methode" },
              { label: "Offres", href: "#offres-coach" },
              { label: "Avis", href: "#avis" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[13px] font-medium text-[var(--vk-muted)] transition-colors hover:text-[var(--vk-ink)]"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-[var(--vk-accent)] px-4 py-2 text-[13px] font-bold text-white shadow-[0_10px_24px_-8px_rgba(255,79,46,0.55)]"
          >
            Réserver
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="accueil" className="px-6 pb-16 pt-10 md:pb-24 md:pt-14">
        <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-10">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/80 px-3 py-1.5 text-[12px] font-semibold text-[var(--vk-blue)] shadow-sm backdrop-blur"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Coach bien-être · Paris & online
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06 }}
              className="mt-5 text-[2.8rem] font-extrabold leading-[1.02] tracking-tight sm:text-5xl md:text-[3.75rem]"
            >
              Plus d’énergie.
              <br />
              <span className="bg-gradient-to-r from-[var(--vk-accent)] to-[var(--vk-blue)] bg-clip-text text-transparent">
                Moins de stress.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              className="mt-5 max-w-md text-[16px] leading-relaxed text-[var(--vk-muted)]"
            >
              Un coaching moderne et accessible pour bouger, récupérer et te
              sentir mieux — sans jargon, sans pression.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#offres-coach"
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--vk-ink)] px-5 py-3 text-[13px] font-bold text-white"
              >
                Voir les offres
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-white px-5 py-3 text-[13px] font-bold shadow-sm"
              >
                <Calendar className="h-3.5 w-3.5" />
                Appel gratuit 20 min
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="mt-10 flex items-center gap-4"
            >
              <div className="flex -space-x-2">
                {["#4f6ef7", "#ff4f2e", "#b8f2d8", "#12141c"].map((c) => (
                  <span
                    key={c}
                    className="h-8 w-8 rounded-full border-2 border-white"
                    style={{ background: c }}
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5 text-[var(--vk-accent)]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <p className="mt-0.5 text-[12px] text-[var(--vk-muted)]">
                  180+ personnes accompagnées
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.55 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-[var(--vk-blue)] via-[var(--vk-accent)] to-[var(--vk-mint)] opacity-80 blur-sm" />
            <div className="relative overflow-hidden rounded-[2.25rem] bg-[var(--vk-ink)] p-1">
              <div className="rounded-[2rem] bg-gradient-to-br from-[#1a1f35] to-[#12141c] p-7 text-white md:p-8">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[var(--vk-mint)]">
                    Cette semaine
                  </span>
                  <MessageCircle className="h-4 w-4 text-white/40" />
                </div>
                <p className="mt-8 text-3xl font-extrabold leading-tight md:text-4xl">
                  3 séances
                  <br />
                  1 objectif clair
                </p>
                <p className="mt-4 text-[14px] text-white/55">
                  Un rythme réaliste, pensé pour ton quotidien.
                </p>
                <div className="mt-8 grid grid-cols-3 gap-3">
                  {[
                    { v: "45'", l: "séance" },
                    { v: "1:1", l: "suivi" },
                    { v: "7j", l: "support" },
                  ].map((s) => (
                    <div
                      key={s.l}
                      className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-center"
                    >
                      <p className="text-lg font-extrabold text-[var(--vk-mint)]">
                        {s.v}
                      </p>
                      <p className="text-[10px] uppercase tracking-wide text-white/45">
                        {s.l}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-3 rounded-2xl border border-black/5 bg-white px-4 py-3 shadow-lg md:-left-6"
            >
              <p className="text-[11px] font-semibold text-[var(--vk-muted)]">
                Prochaine dispo
              </p>
              <p className="text-sm font-bold">Jeudi · 18h30</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-black/5 bg-white py-3.5">
        <motion.div
          className="flex whitespace-nowrap text-[12px] font-semibold uppercase tracking-[0.2em] text-[var(--vk-muted)]"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          {Array.from({ length: 2 }).map((_, loop) => (
            <span key={loop} className="flex shrink-0 gap-10 px-5">
              {[
                "Coaching 1:1",
                "Online & présentiel",
                "Sans pression",
                "Résultats concrets",
                "Suivi humain",
                "Site Vitrine démo",
              ].map((label) => (
                <span key={`${loop}-${label}`} className="flex items-center gap-10">
                  {label}
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--vk-accent)]" />
                </span>
              ))}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Méthode */}
      <section id="methode" className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[var(--vk-accent)]">
              Méthode
            </p>
            <h2 className="mt-3 max-w-lg text-3xl font-extrabold tracking-tight md:text-[2.2rem]">
              Simple, progressive, adaptée à ta vie
            </h2>
          </motion.div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                n: "01",
                title: "On clarifie",
                text: "Objectif, contraintes, rythme réel — on part de ta vie.",
                bg: "bg-white",
              },
              {
                n: "02",
                title: "On structure",
                text: "Un plan clair : séances, récup, petites habitudes.",
                bg: "bg-[var(--vk-mint)]",
              },
              {
                n: "03",
                title: "On ajuste",
                text: "Suivi régulier, motivation et progrès mesurables.",
                bg: "bg-white",
              },
            ].map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className={`rounded-[1.5rem] border border-black/5 p-6 shadow-sm ${item.bg}`}
              >
                <span className="text-[12px] font-bold text-[var(--vk-blue)]">
                  {item.n}
                </span>
                <h3 className="mt-4 text-xl font-extrabold">{item.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[var(--vk-muted)]">
                  {item.text}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Offres */}
      <section id="offres-coach" className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[var(--vk-accent)]">
                Offres
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-[2.2rem]">
                Choisis ton rythme
              </h2>
            </div>
            <p className="max-w-xs text-[14px] text-[var(--vk-muted)]">
              Des formules lisibles, sans surprise — pour démarrer ou s’engager.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {offers.map((offer, i) => (
              <motion.article
                key={offer.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.09 }}
                whileHover={{ y: -6 }}
                className={`relative flex flex-col overflow-hidden rounded-[1.75rem] p-6 md:p-7 ${
                  offer.featured
                    ? "bg-[var(--vk-ink)] text-white shadow-[0_28px_60px_-28px_rgba(18,20,28,0.65)]"
                    : "border border-black/5 bg-white shadow-sm"
                }`}
              >
                {offer.featured && (
                  <span className="mb-4 w-fit rounded-full bg-[var(--vk-accent)] px-2.5 py-1 text-[11px] font-bold text-white">
                    Le plus choisi
                  </span>
                )}
                <h3 className="text-lg font-extrabold">{offer.title}</h3>
                <div className="mt-3 flex items-baseline gap-1.5">
                  <span className="text-3xl font-extrabold">{offer.price}</span>
                  <span
                    className={`text-[13px] ${
                      offer.featured ? "text-white/50" : "text-[var(--vk-muted)]"
                    }`}
                  >
                    {offer.detail}
                  </span>
                </div>
                <p
                  className={`mt-3 text-[14px] leading-relaxed ${
                    offer.featured ? "text-white/65" : "text-[var(--vk-muted)]"
                  }`}
                >
                  {offer.text}
                </p>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {offer.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-center gap-2 text-[13px] ${
                        offer.featured ? "text-white/80" : "text-[var(--vk-ink)]"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          offer.featured
                            ? "bg-[var(--vk-mint)]"
                            : "bg-[var(--vk-blue)]"
                        }`}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-[13px] font-bold ${
                    offer.featured
                      ? "bg-white text-[var(--vk-ink)]"
                      : "bg-[var(--vk-bg)] text-[var(--vk-ink)]"
                  }`}
                >
                  Je commence
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Avis */}
      <section id="avis" className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[var(--vk-accent)]">
            Avis
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-[2.2rem]">
            Ils ont commencé avec Aria
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.blockquote
                key={t.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-[1.5rem] border border-black/5 bg-white p-6 shadow-sm"
              >
                <div className="flex gap-0.5 text-[var(--vk-accent)]">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-[14px] leading-relaxed text-[var(--vk-muted)]">
                  “{t.quote}”
                </p>
                <footer className="mt-5">
                  <p className="text-[13px] font-bold">{t.name}</p>
                  <p className="text-[12px] text-[var(--vk-muted)]">{t.role}</p>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[var(--vk-ink)] px-8 py-12 text-white md:px-12 md:py-14"
        >
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[var(--vk-blue)]/40 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-24 left-10 h-56 w-56 rounded-full bg-[var(--vk-accent)]/30 blur-3xl"
            aria-hidden
          />
          <div className="relative">
            <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[var(--vk-mint)]">
              Contact
            </p>
            <h2 className="mt-3 max-w-lg text-3xl font-extrabold tracking-tight md:text-[2.2rem]">
              Prêt·e à te sentir mieux ?
            </h2>
            <p className="mt-4 max-w-md text-[15px] text-white/65">
              Démo vitrine coaching réalisée par{" "}
              <strong className="text-white">CodeByToma</strong> — création
              149 €, puis abonnement dès 49 €/mois.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--vk-accent)] px-5 py-3 text-[13px] font-bold text-white"
              >
                Obtenir mon devis gratuit
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/demo/gastro"
                className="rounded-full border border-white/20 px-5 py-3 text-[13px] font-medium text-white/80 transition-colors hover:text-white"
              >
                Voir Maison Lune
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="border-t border-black/5 px-6 py-8">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <p className="font-extrabold">aria</p>
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
