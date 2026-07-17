"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Star, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  creationSection,
  pricingCreation,
  subscriptionSection,
  pricingAbonnement,
  type PricingCreationCard,
  type PricingAbonnementCard,
  type PricingVariant,
} from "@/data/pricing";
import { showcaseProjects, type ShowcaseProject } from "@/data/businessOffers";

const MAILTO = "mailto:toma11chang@gmail.com";

const mailtoHref = (subject: string) =>
  `${MAILTO}?subject=${encodeURIComponent(subject)}`;

const SectionHeader = ({
  label,
  heading,
  description,
}: {
  label: string;
  heading: string;
  description?: string;
}) => (
  <div className="max-w-2xl">
    <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-mist/70">
      {label}
    </p>
    <h3 className="mt-3 text-xl font-semibold tracking-tight text-snow md:text-2xl">
      {heading}
    </h3>
    {description && (
      <p className="mt-4 text-[15px] leading-relaxed text-mist">{description}</p>
    )}
  </div>
);

const StyleToggle = ({
  variants,
  selectedId,
  onChange,
}: {
  variants: PricingVariant[];
  selectedId: string;
  onChange: (id: string) => void;
}) => (
  <div
    className="flex w-full rounded-lg border border-cbtBorder bg-cbtFill/40 p-1"
    role="tablist"
    aria-label="Style du site"
  >
    {variants.map((variant) => {
      const isActive = selectedId === variant.id;
      return (
        <button
          key={variant.id}
          type="button"
          role="tab"
          aria-selected={isActive}
          onClick={() => onChange(variant.id)}
          className={cn(
            "flex-1 rounded-md px-3 py-2 text-[12px] font-medium transition-all duration-300 sm:text-[13px]",
            isActive
              ? "bg-snow text-ink shadow-sm"
              : "text-mist hover:text-snow"
          )}
        >
          {variant.label}
        </button>
      );
    })}
  </div>
);

const SiteVitrineCard = ({
  card,
  index,
}: {
  card: PricingCreationCard;
  index: number;
}) => {
  const variants = card.variants ?? [];
  const [selectedId, setSelectedId] = useState(
    card.defaultVariantId ?? variants[0]?.id ?? ""
  );
  const selected =
    variants.find((v) => v.id === selectedId) ?? variants[0];

  if (!selected) return null;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="relative flex flex-col rounded-2xl border border-cbtBorder bg-transparent p-7 hover:border-cbtBorderStrong md:p-8"
    >
      {card.icon && (
        <span className="text-2xl" aria-hidden>
          {card.icon}
        </span>
      )}

      <h4 className={cn("text-xl font-semibold text-snow", card.icon && "mt-4")}>
        {card.title}
      </h4>

      <div className="mt-5">
        <StyleToggle
          variants={variants}
          selectedId={selectedId}
          onChange={setSelectedId}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selected.id}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25 }}
          className="mt-5"
        >
          <p className="text-2xl font-semibold tracking-tight text-snow md:text-[1.75rem]">
            {selected.price}
          </p>
          <p className="mt-3 text-[14px] leading-relaxed text-mist">
            {selected.description}
          </p>
        </motion.div>
      </AnimatePresence>

      {card.audience?.length ? (
        <div className="mt-6 rounded-xl border border-cbtBorder bg-cbtFill/30 p-4">
          <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-mist/65">
            Pour
          </p>
          <p className="mt-2 text-[13px] leading-relaxed text-snow/90">
            {card.audience.join(" · ")}
          </p>
        </div>
      ) : null}

      <div className="mt-7 flex-1 border-t border-cbtBorder pt-7">
        <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.12em] text-mist/65">
          Inclus
        </p>
        <ul className="space-y-2.5">
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
      </div>

      <a
        href={mailtoHref(selected.ctaSubject)}
        className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md border border-cbtBorder px-4 py-3 text-[13px] font-medium text-snow transition-all hover:border-cbtBorderStrong"
      >
        {card.cta}
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </a>
    </motion.article>
  );
};

const CreationCard = ({
  card,
  index,
}: {
  card: PricingCreationCard;
  index: number;
}) => {
  if (card.variants?.length) {
    return <SiteVitrineCard card={card} index={index} />;
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className={cn(
        "relative flex flex-col rounded-2xl border p-7 md:p-8",
        card.featured
          ? "border-snow/40 bg-surface shadow-[0_12px_48px_-16px_rgba(0,0,0,0.55),0_0_0_1px_var(--cbt-border-strong)] lg:-mt-1 lg:pb-9"
          : "border-cbtBorder bg-transparent hover:border-cbtBorderStrong"
      )}
    >
      {card.badge && (
        <span className="mb-5 inline-flex w-fit items-center gap-1.5 rounded-md bg-snow px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-ink">
          <Star className="h-3 w-3 fill-current" />
          {card.badge}
        </span>
      )}

      {card.icon && (
        <span className="text-2xl" aria-hidden>
          {card.icon}
        </span>
      )}

      <h4 className={cn("text-xl font-semibold text-snow", card.icon && "mt-4")}>
        {card.title}
      </h4>

      {card.description && (
        <p className="mt-3 text-[14px] leading-relaxed text-mist">
          {card.description}
        </p>
      )}

      {card.price && (
        <p className="mt-6 text-2xl font-semibold tracking-tight text-snow md:text-[1.75rem]">
          {card.price}
        </p>
      )}

      {card.audience?.length ? (
        <div className="mt-6 rounded-xl border border-cbtBorder bg-cbtFill/30 p-4">
          <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-mist/65">
            Pour
          </p>
          <p className="mt-2 text-[13px] leading-relaxed text-snow/90">
            {card.audience.join(" · ")}
          </p>
        </div>
      ) : null}

      <div className="mt-7 flex-1 border-t border-cbtBorder pt-7">
        <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.12em] text-mist/65">
          Inclus
        </p>
        <ul className="space-y-2.5">
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
      </div>

      <a
        href={mailtoHref(card.ctaSubject ?? "")}
        className={cn(
          "group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md px-4 py-3 text-[13px] font-medium transition-all",
          card.featured
            ? "bg-snow text-ink hover:opacity-90"
            : "border border-cbtBorder text-snow hover:border-cbtBorderStrong"
        )}
      >
        {card.cta}
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </a>
    </motion.article>
  );
};

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
    transition={{ duration: 0.45, delay: index * 0.08 }}
    whileHover={{ y: -4 }}
    className={cn(
      "relative flex flex-col rounded-2xl border p-7 md:p-8",
      card.featured
        ? "border-snow/40 bg-surface shadow-[0_12px_48px_-16px_rgba(0,0,0,0.55),0_0_0_1px_var(--cbt-border-strong)]"
        : "border-cbtBorder bg-transparent hover:border-cbtBorderStrong"
    )}
  >
    {card.badge && (
      <span className="mb-5 inline-flex w-fit items-center gap-1.5 rounded-md bg-snow px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-ink">
        <Star className="h-3 w-3 fill-current" />
        {card.badge}
      </span>
    )}

    <h4 className="text-xl font-semibold text-snow">{card.title}</h4>
    <p className="mt-4 text-2xl font-semibold tracking-tight text-snow md:text-[1.75rem]">
      {card.price}
      <span className="text-base font-normal text-mist">{card.period}</span>
    </p>

    <div className="mt-7 flex-1 border-t border-cbtBorder pt-7">
      <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.12em] text-mist/65">
        Inclus
      </p>
      <ul className="space-y-2.5">
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
    </div>

    <a
      href={mailtoHref(card.ctaSubject)}
      className={cn(
        "group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md px-4 py-3 text-[13px] font-medium transition-all",
        card.featured
          ? "bg-snow text-ink hover:opacity-90"
          : "border border-cbtBorder text-snow hover:border-cbtBorderStrong"
      )}
    >
      {card.cta}
      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
    </a>
  </motion.article>
);

const ProjectPreview = ({ project }: { project: ShowcaseProject }) => (
  <div
    className={cn(
      "relative aspect-[16/10] overflow-hidden rounded-lg bg-gradient-to-br",
      project.previewFrom,
      project.previewTo
    )}
  >
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
  </div>
);

const ShowcaseCard = ({ project, index }: { project: ShowcaseProject; index: number }) => (
  <motion.article
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.08 }}
    className="group flex flex-col overflow-hidden rounded-2xl border border-cbtBorder bg-surface/40 transition-colors hover:border-cbtBorderStrong"
  >
    <div className="p-3 pb-0">
      <ProjectPreview project={project} />
    </div>

    <div className="flex flex-1 flex-col p-6">
      <h3 className="text-lg font-semibold text-snow">{project.name}</h3>

      <div className="mt-3 flex flex-wrap gap-2">
        <span className="rounded-md border border-cbtBorder bg-cbtFill/50 px-2 py-0.5 text-[11px] text-mist">
          {project.type}
        </span>
        <span className="rounded-md border border-cbtBorder bg-cbtFill/50 px-2 py-0.5 text-[11px] text-mist">
          {project.style}
        </span>
      </div>

      <a
        href={project.url}
        target={project.url.startsWith("http") ? "_blank" : undefined}
        rel={project.url.startsWith("http") ? "noopener noreferrer" : undefined}
        className="group/btn mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md border border-cbtBorder px-4 py-2.5 text-[13px] font-medium text-snow transition-colors hover:border-cbtBorderStrong md:w-auto"
      >
        Voir le projet
        <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
      </a>
    </div>
  </motion.article>
);

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
            Nos offres
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-snow md:text-[1.85rem]">
            Des sites web adaptés à vos objectifs
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-mist md:text-base">
            Choisissez votre formule de création en paiement unique, puis
            ajoutez un abonnement si vous souhaitez un accompagnement technique
            dans la durée.
          </p>
        </motion.div>

        <div className="mt-16">
          <SectionHeader
            label={creationSection.label}
            heading={creationSection.heading}
            description={creationSection.description}
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3 lg:items-stretch">
            {pricingCreation.map((card, i) => (
              <CreationCard key={card.id} card={card} index={i} />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mt-24 border-t border-cbtBorder pt-24"
        >
          <SectionHeader
            label={subscriptionSection.label}
            heading={subscriptionSection.heading}
            description={subscriptionSection.description}
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3 lg:items-stretch">
            {pricingAbonnement.map((card, i) => (
              <AbonnementCard key={card.id} card={card} index={i} />
            ))}
          </div>
          <p className="mt-8 text-center text-[13px] text-mist/80">
            {subscriptionSection.commitment}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mt-24 border-t border-cbtBorder pt-24"
        >
          <SectionHeader
            label="Portfolio"
            heading="Découvrez nos réalisations"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {showcaseProjects.map((project, i) => (
              <ShowcaseCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessOffers;
