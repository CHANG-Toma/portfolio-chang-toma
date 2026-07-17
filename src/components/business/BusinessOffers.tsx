"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Check,
  ArrowRight,
  Star,
  ExternalLink,
  Info,
  ChevronDown,
  Minus,
} from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  setupFee,
  subscriptionSection,
  pricingAbonnement,
  surMesureSection,
  comparisonTable,
  subscriptionFaq,
  type PricingAbonnementCard,
  type ComparisonValue,
} from "@/data/pricing";
import { showcaseProjects, type ShowcaseProject } from "@/data/businessOffers";

const MAILTO = "mailto:toma11chang@gmail.com";

const mailtoHref = (subject: string) =>
  `${MAILTO}?subject=${encodeURIComponent(subject)}`;

const CtaLink = ({
  href,
  featured,
  children,
}: {
  href: string;
  featured?: boolean;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    className={cn(
      "group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md px-4 py-3 text-[13px] font-medium transition-all",
      featured
        ? "bg-snow text-ink hover:opacity-90"
        : "border border-cbtBorder text-snow hover:border-cbtBorderStrong"
    )}
  >
    {children}
  </a>
);

const AbonnementCard = ({
  card,
  index,
}: {
  card: PricingAbonnementCard;
  index: number;
}) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.06 }}
    className={cn(
      "relative flex h-full flex-col rounded-2xl border p-7 md:p-8",
      card.featured
        ? "z-10 border-snow/40 bg-surface shadow-[0_12px_48px_-16px_rgba(0,0,0,0.55),0_0_0_1px_var(--cbt-border-strong)] lg:scale-[1.04] lg:px-9 lg:py-9"
        : "border-cbtBorder bg-transparent hover:border-cbtBorderStrong"
    )}
  >
    {card.badge && (
      <span className="mb-5 inline-flex w-fit items-center gap-1.5 rounded-md bg-snow px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-ink">
        <Star className="h-3 w-3 fill-current" />
        {card.badge}
      </span>
    )}

    <h3 className="text-xl font-semibold text-snow">
      <span className="mr-1.5" aria-hidden>
        {card.emoji}
      </span>
      {card.title}
    </h3>
    <p className="mt-2 text-[13px] leading-relaxed text-mist">{card.tagline}</p>
    <p className="mt-4 text-2xl font-semibold tracking-tight text-snow md:text-[1.75rem]">
      {card.price}
      <span className="text-base font-normal text-mist">{card.period}</span>
    </p>

    <div className="mt-7 flex-1 border-t border-cbtBorder pt-7">
      <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.12em] text-mist/65">
        Inclus
      </p>
      <ul className="space-y-2.5">
        {card.includesFrom && (
          <li className="flex gap-2.5 text-[13px] font-medium text-snow/85">
            <Check
              className="mt-0.5 h-3.5 w-3.5 shrink-0 text-snow/60"
              strokeWidth={1.75}
            />
            {card.includesFrom}
          </li>
        )}
        {card.features.map((feature) => (
          <li key={feature} className="flex gap-2.5 text-[13px] text-mist">
            <Check
              className="mt-0.5 h-3.5 w-3.5 shrink-0 text-snow/60"
              strokeWidth={1.75}
            />
            {feature}
          </li>
        ))}
      </ul>
      {card.footnote && (
        <p className="mt-4 text-[12px] leading-relaxed text-mist/50">
          {card.footnote}
        </p>
      )}
    </div>

    <CtaLink href={mailtoHref(card.ctaSubject)} featured={card.featured}>
      {card.cta}
      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
    </CtaLink>
  </motion.article>
);

const ComparisonCell = ({ value }: { value: ComparisonValue }) => {
  if (value === true) {
    return (
      <span className="inline-flex items-center justify-center text-snow" aria-label="Inclus">
        <Check className="h-4 w-4" strokeWidth={2} />
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-flex items-center justify-center text-mist/35" aria-label="Non inclus">
        <Minus className="h-3.5 w-3.5" strokeWidth={1.75} />
      </span>
    );
  }
  return <span className="text-[13px] text-mist">{value}</span>;
};

const ComparisonTable = () => (
  <motion.div
    initial={{ opacity: 0, y: 14 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className="mt-16"
  >
    <div className="mb-6 max-w-xl">
      <h3 className="text-lg font-semibold tracking-tight text-snow md:text-xl">
        Comparatif des accompagnements
      </h3>
      <p className="mt-2 text-[14px] leading-relaxed text-mist">
        Voyez clairement ce qui change d&apos;un niveau à l&apos;autre.
      </p>
    </div>

    <div className="overflow-x-auto rounded-2xl border border-cbtBorder">
      <table className="w-full min-w-[640px] border-collapse text-left">
        <thead>
          <tr className="border-b border-cbtBorder bg-cbtFill/50">
            <th className="px-4 py-3.5 text-[12px] font-medium uppercase tracking-[0.1em] text-mist/70 sm:px-5">
              Fonctionnalité
            </th>
            <th className="px-3 py-3.5 text-center text-[13px] font-semibold text-snow sm:px-4">
              Essentiel
            </th>
            <th className="bg-surface/60 px-3 py-3.5 text-center text-[13px] font-semibold text-snow sm:px-4">
              Sérénité
            </th>
            <th className="px-3 py-3.5 text-center text-[13px] font-semibold text-snow sm:px-4">
              Croissance
            </th>
          </tr>
        </thead>
        <tbody>
          {comparisonTable.map((row, i) => (
            <tr
              key={row.feature}
              className={cn(
                "border-b border-cbtBorder/70 last:border-b-0",
                i % 2 === 1 && "bg-cbtFill/20"
              )}
            >
              <td className="px-4 py-3 text-[13px] text-mist sm:px-5">
                {row.feature}
              </td>
              <td className="px-3 py-3 text-center sm:px-4">
                <ComparisonCell value={row.essentiel} />
              </td>
              <td className="bg-surface/40 px-3 py-3 text-center sm:px-4">
                <ComparisonCell value={row.serenite} />
              </td>
              <td className="px-3 py-3 text-center sm:px-4">
                <ComparisonCell value={row.croissance} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </motion.div>
);

const SubscriptionFaq = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="mt-16"
    >
      <div className="mb-6 max-w-xl">
        <h3 className="text-lg font-semibold tracking-tight text-snow md:text-xl">
          Questions sur l&apos;abonnement
        </h3>
        <p className="mt-2 text-[14px] leading-relaxed text-mist">
          Les réponses aux questions les plus fréquentes avant de démarrer.
        </p>
      </div>

      <div className="max-w-3xl divide-y divide-[var(--cbt-border)] border-y border-cbtBorder">
        {subscriptionFaq.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-[15px] font-medium text-snow">
                  {item.q}
                </span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 shrink-0 text-mist transition-transform duration-300",
                    isOpen && "rotate-180"
                  )}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-[14px] leading-relaxed text-mist">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

const SurMesureBanner = () => (
  <motion.div
    initial={{ opacity: 0, y: 14 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className="mt-24 overflow-hidden rounded-2xl border border-cbtBorder bg-gradient-to-br from-cbtFill via-surface/60 to-transparent px-8 py-12 text-center md:px-12 md:py-14"
  >
    <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-mist/70">
      Sur-mesure
    </p>
    <h3 className="mx-auto mt-3 max-w-xl text-xl font-semibold tracking-tight text-snow md:text-2xl">
      {surMesureSection.title}
    </h3>
    <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-mist">
      {surMesureSection.text}
    </p>
    <a
      href={mailtoHref(surMesureSection.ctaSubject)}
      className="group mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-snow px-5 py-2.5 text-[13px] font-medium text-ink transition-opacity hover:opacity-90"
    >
      {surMesureSection.cta}
      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
    </a>
  </motion.div>
);

const ProjectPreview = ({ project }: { project: ShowcaseProject }) => (
  <div
    className={cn(
      "relative aspect-[16/10] overflow-hidden rounded-lg bg-gradient-to-br",
      !project.image && project.previewFrom,
      !project.image && project.previewTo
    )}
  >
    {project.image ? (
      <Image
        src={project.image}
        alt={`Aperçu ${project.name}`}
        fill
        className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
    ) : (
      <>
        <div className="absolute inset-x-3 top-3 flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
        </div>
        <div className="absolute inset-x-4 bottom-4 top-10 rounded-md border border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="flex h-full flex-col justify-end p-4">
            <div className="space-y-2">
              <div className="h-2 w-2/3 rounded bg-white/20" />
              <div className="h-2 w-1/2 rounded bg-white/10" />
              <div className="mt-3 h-6 w-24 rounded bg-white/15" />
            </div>
          </div>
        </div>
      </>
    )}
  </div>
);

const ShowcaseCard = ({
  project,
  index,
}: {
  project: ShowcaseProject;
  index: number;
}) => {
  const isExternal = project.url.startsWith("http");
  const isLive =
    project.live !== false && (isExternal || project.url.startsWith("/"));

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-cbtBorder bg-surface/40 transition-all duration-300 hover:z-10 hover:-translate-y-1.5 hover:scale-[1.03] hover:border-cbtBorderStrong hover:shadow-[0_24px_48px_-20px_rgba(0,0,0,0.6)]"
    >
      <div className="overflow-hidden p-3 pb-0">
        <ProjectPreview project={project} />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-snow">{project.name}</h3>

        {isLive ? (
          <a
            href={project.url}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="group/btn mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md border border-cbtBorder px-4 py-2.5 text-[13px] font-medium text-snow transition-colors hover:border-cbtBorderStrong md:w-auto"
          >
            Voir le projet
            <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
          </a>
        ) : (
          <a
            href="#contact"
            className="group/btn mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md border border-cbtBorder px-4 py-2.5 text-[13px] font-medium text-mist transition-colors hover:border-cbtBorderStrong hover:text-snow md:w-auto"
          >
            Demander une démo
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
          </a>
        )}
      </div>
    </motion.article>
  );
};

const BusinessOffers = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.12 });

  return (
    <section
      id="offres"
      className="scroll-mt-24 border-t border-cbtBorder px-6 py-24 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="max-w-2xl"
        >
          <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-mist/70">
            {subscriptionSection.label}
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-snow md:text-[1.85rem]">
            {subscriptionSection.heading}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-mist md:text-base">
            {subscriptionSection.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="mt-10 rounded-xl border border-cbtBorder bg-cbtFill/40 px-5 py-5 text-center sm:px-6"
        >
          <p className="inline-flex flex-wrap items-center justify-center gap-1.5 text-[14px] font-medium text-snow sm:text-[15px]">
            {setupFee.label}
            <span
              className="relative inline-flex"
              title={`${setupFee.detail} ${setupFee.note}`}
            >
              <Info
                className="h-3.5 w-3.5 text-mist/55 transition-colors hover:text-mist"
                strokeWidth={1.75}
                aria-hidden
              />
              <span className="sr-only">
                {setupFee.detail} {setupFee.note}
              </span>
            </span>
          </p>
          <p className="mt-2 text-[13px] leading-relaxed text-mist">
            {setupFee.detail}
          </p>
          <p className="mt-1 text-[12px] text-mist/60">{setupFee.note}</p>
        </motion.div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3 lg:items-stretch lg:gap-6 lg:pt-3">
          {pricingAbonnement.map((card, i) => (
            <AbonnementCard key={card.id} card={card} index={i} />
          ))}
        </div>

        <p className="mt-10 text-center text-[13px] text-mist/80">
          {subscriptionSection.commitment}
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-center text-[12px] leading-relaxed text-mist/60">
          {subscriptionSection.evolutionNote}
        </p>

        <ComparisonTable />
        <SubscriptionFaq />

        <SurMesureBanner />

        <div className="mt-24 border-t border-cbtBorder pt-24">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="max-w-2xl"
          >
            <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-mist/70">
              Réalisations
            </p>
            <h3 className="mt-3 text-xl font-semibold tracking-tight text-snow md:text-2xl">
              Découvrez nos réalisations
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-mist">
              Exemples de sites vitrine — et du sur-mesure sur demande.
            </p>
          </motion.div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {showcaseProjects.map((project, i) => (
              <ShowcaseCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessOffers;
