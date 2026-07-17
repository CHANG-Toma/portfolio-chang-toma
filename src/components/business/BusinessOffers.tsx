"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, ArrowRight, Star, ExternalLink } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  creationSection,
  pricingCreation,
  subscriptionSection,
  pricingAbonnement,
  surMesureSection,
  type PricingCreationCard,
  type PricingAbonnementCard,
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
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className="max-w-2xl"
  >
    <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-mist/70">
      {label}
    </p>
    <h3 className="mt-3 text-xl font-semibold tracking-tight text-snow md:text-2xl">
      {heading}
    </h3>
    {description && (
      <p className="mt-4 text-[15px] leading-relaxed text-mist">{description}</p>
    )}
  </motion.div>
);

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

const CreationCard = ({
  card,
  index,
}: {
  card: PricingCreationCard;
  index: number;
}) => {
  const body = (
    <>
      <div className="mb-5 flex flex-wrap items-center gap-2">
        {card.badge && (
          <span className="inline-flex items-center gap-1.5 rounded-md bg-snow px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-ink">
            <Star className="h-3 w-3 fill-current" />
            {card.badge}
          </span>
        )}
        <span
          className={cn(
            "rounded-md border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide",
            card.featured
              ? "border-snow/30 bg-snow/10 text-snow"
              : "border-cbtBorder text-mist"
          )}
        >
          {card.styleLabel}
        </span>
      </div>

      {card.icon && (
        <span className="text-2xl" aria-hidden>
          {card.icon}
        </span>
      )}

      <h4
        className={cn("text-xl font-semibold text-snow", card.icon && "mt-4")}
      >
        {card.title}
      </h4>

      {card.description && (
        <p className="mt-3 text-[14px] leading-relaxed text-mist">
          {card.description}
        </p>
      )}

      <p className="mt-6 text-2xl font-semibold tracking-tight text-snow md:text-[1.75rem]">
        {card.price}
      </p>
      {card.priceNote && (
        <p className="mt-1.5 text-[13px] text-mist/80">{card.priceNote}</p>
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

      <CtaLink href={mailtoHref(card.ctaSubject)} featured={card.featured}>
        {card.cta}
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </CtaLink>
    </>
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className={cn(
        "flex h-full flex-col rounded-2xl border p-7 md:p-8",
        card.featured
          ? "border-snow/40 bg-surface shadow-[0_12px_48px_-16px_rgba(0,0,0,0.55),0_0_0_1px_var(--cbt-border-strong)]"
          : "border-cbtBorder bg-transparent hover:border-cbtBorderStrong"
      )}
    >
      {body}
    </motion.article>
  );
};

const AbonnementCard = ({
  card,
  index,
}: {
  card: PricingAbonnementCard;
  index: number;
}) => {
  const body = (
    <>
      {card.badge && (
        <span className="mb-5 inline-flex w-fit items-center gap-1.5 rounded-md bg-snow px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-ink">
          <Star className="h-3 w-3 fill-current" />
          {card.badge}
        </span>
      )}

      <h4 className="text-xl font-semibold text-snow">{card.title}</h4>
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

      <CtaLink href={mailtoHref(card.ctaSubject)} featured={card.featured}>
        {card.cta}
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </CtaLink>
    </>
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className={cn(
        "flex h-full flex-col rounded-2xl border p-7 md:p-8",
        card.featured
          ? "border-snow/40 bg-surface shadow-[0_12px_48px_-16px_rgba(0,0,0,0.55),0_0_0_1px_var(--cbt-border-strong)]"
          : "border-cbtBorder bg-transparent hover:border-cbtBorderStrong"
      )}
    >
      {body}
    </motion.article>
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
        className="object-cover object-top"
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
            Nos offres
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-snow md:text-[1.85rem]">
            Création + accompagnement évolutif
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-mist md:text-base">
            Un site en paiement unique pour être crédible en ligne, puis un
            abonnement pour le faire vivre — et le faire grandir avec votre
            activité.
          </p>
        </motion.div>

        <div className="mt-16">
          <SectionHeader
            label={creationSection.label}
            heading={creationSection.heading}
            description={creationSection.description}
          />
          <div className="mx-auto mt-10 grid max-w-4xl gap-5 lg:grid-cols-2 lg:items-stretch">
            {pricingCreation.map((card, i) => (
              <CreationCard key={card.id} card={card} index={i} />
            ))}
          </div>
        </div>

        <div className="mt-24 border-t border-cbtBorder pt-24">
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
        </div>

        <SurMesureBanner />

        <div className="mt-24 border-t border-cbtBorder pt-24">
          <SectionHeader
            label="Réalisations"
            heading="Découvrez nos réalisations"
            description="Essentiel = moderne & clair · Pro = futuriste & immersif — et du sur-mesure sur demande."
          />
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
