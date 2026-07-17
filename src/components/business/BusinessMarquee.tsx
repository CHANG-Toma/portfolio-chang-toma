"use client";

const items = [
  "Site Essentiel",
  "Site Pro futuriste",
  "Abonnement évolutif",
  "Sur-mesure",
  "Devis gratuit",
  "CodeByToma",
];

const BusinessMarquee = () => {
  const line = items.join("  ·  ") + "  ·  ";

  return (
    <div className="overflow-hidden border-y border-cbtBorder bg-surface/40 py-3.5">
      <div className="flex w-max animate-cbt-marquee text-[12px] font-medium uppercase tracking-[0.18em] text-mist/70 will-change-transform">
        <span className="px-4">{line}</span>
        <span className="px-4" aria-hidden>
          {line}
        </span>
      </div>
    </div>
  );
};

export default BusinessMarquee;
