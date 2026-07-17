export type ShowcaseProject = {
  id: string;
  name: string;
  type: "Site vitrine" | "E-commerce" | "Application Web";
  style: "Pro" | "Essentiel";
  url: string;
  image?: string;
  previewFrom: string;
  previewTo: string;
  live?: boolean;
};

export const showcaseProjects: ShowcaseProject[] = [
  {
    id: "maison-lune",
    name: "Maison Lune",
    type: "Site vitrine",
    style: "Pro",
    url: "/demo/gastro",
    image: "/images/showcase/maison-lune.jpg",
    previewFrom: "from-amber-800",
    previewTo: "to-stone-950",
    live: true,
  },
  {
    id: "aria-coach",
    name: "Aria Coach",
    type: "Site vitrine",
    style: "Essentiel",
    url: "/demo/vitrine",
    image: "/images/showcase/aria-coach.jpg",
    previewFrom: "from-orange-400",
    previewTo: "to-indigo-500",
    live: true,
  },
  {
    id: "atelier-seve",
    name: "Atelier Sève",
    type: "Site vitrine",
    style: "Essentiel",
    url: "/demo/coiffure",
    image: "/images/showcase/atelier-seve.jpg",
    previewFrom: "from-rose-900",
    previewTo: "to-stone-950",
    live: true,
  },
];

export const offersFaq = [
  {
    q: "Quel est le délai de création d'un site ?",
    a: "En moyenne entre une et trois semaines selon la formule (Essentiel ou Vitrine Pro), la complexité et la disponibilité de vos contenus. Nous vous communiquons un planning précis dès le démarrage.",
  },
  {
    q: "Puis-je acheter mon site sans abonnement ?",
    a: "Oui. La création fait l'objet d'un paiement unique (dès 590 €). L'abonnement est optionnel et couvre hébergement, sécurité et accompagnement technique.",
  },
  {
    q: "Quelle est la différence entre Site Essentiel et Site Vitrine Pro ?",
    a: "L'Essentiel (590 €) est un site moderne de base : clair, rapide à lancer, suffisant pour exister en ligne. Le Vitrine Pro (990 €) est la version futuriste : design immersif, animations et effets visuels pour une image plus mémorable.",
  },
  {
    q: "Proposez-vous des applications web ou de l'e-commerce ?",
    a: "Oui, mais ces projets plus complexes (applications, e-commerce, réservation, espace client…) sont étudiés sur-mesure. Contactez-moi pour en discuter — sans grille de prix figée.",
  },
  {
    q: "Que comprend la maintenance ?",
    a: "Essentiel (29 €) : technique seule (hébergement, SSL, sauvegardes, monitoring) — le contenu reste hors forfait. Sérénité (79 €) : 2 modifications de contenu / mois + perf/SEO de base + support prioritaire. Premium (199 €) : point mensuel, jusqu’à 3h d’évolutions / mois, et priorité sur les projets sur-mesure.",
  },
  {
    q: "Puis-je faire évoluer mon site plus tard ?",
    a: "Absolument. Vous pouvez passer d'un Essentiel à un rendu plus immersif, faire évoluer votre abonnement, ou passer sur du sur-mesure quand votre activité le demande.",
  },
  {
    q: "Quel est l'engagement de l'abonnement ?",
    a: "L'abonnement est souscrit pour une durée initiale de 12 mois, puis reconduit tacitement. Vous pouvez l'ajuster ou le résilier selon les modalités précisées dans le contrat.",
  },
];
