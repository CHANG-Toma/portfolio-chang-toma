"use client";

const items = [
  "Frais de lancement 490 €",
  "Abonnement Essentiel",
  "Abonnement Sérénité",
  "Abonnement Croissance",
  "Sur-mesure",
  "Devis gratuit",
  "CodeByToma",
];

/** Une unité assez longue pour couvrir les grands écrans (animation = -50 %). */
const buildTrack = () => {
  const unit = items.join("  ·  ") + "  ·  ";
  return Array.from({ length: 4 }, () => unit).join("");
};

const BusinessMarquee = () => {
  const track = buildTrack();

  return (
    <div className="overflow-hidden border-y border-cbtBorder bg-surface/40 py-3.5">
      <div className="flex w-max animate-cbt-marquee text-[12px] font-medium uppercase tracking-[0.18em] text-mist/70 will-change-transform">
        <span className="shrink-0 whitespace-nowrap px-4">{track}</span>
        <span className="shrink-0 whitespace-nowrap px-4" aria-hidden>
          {track}
        </span>
      </div>
    </div>
  );
};

export default BusinessMarquee;
