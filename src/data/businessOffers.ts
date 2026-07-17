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
    image: "/images/showcase/aria-coach-studio.jpg",
    previewFrom: "from-stone-700",
    previewTo: "to-emerald-950",
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
    a: "En moyenne entre une et trois semaines selon la complexité et la disponibilité de vos contenus. Les frais de lancement (490 €) couvrent la conception, le développement et la mise en ligne. Nous vous communiquons un planning précis dès le démarrage.",
  },
  {
    q: "Comment fonctionne la tarification ?",
    a: "Vous payez 490 € de frais de lancement (création du site), puis un abonnement mensuel selon le niveau d'accompagnement : Essentiel 49 €, Sérénité 99 € ou Croissance 199 €. Hébergement, sécurité et suivi sont inclus.",
  },
  {
    q: "Quelle est la différence entre Essentiel, Sérénité et Croissance ?",
    a: "Essentiel : votre site reste en ligne et sécurisé. Sérénité : on gère le site pour vous (modifications mensuelles, perf/SEO, rapport). Croissance : accompagnement pour faire évoluer le site régulièrement (évolutions, conversion, conseils stratégiques).",
  },
  {
    q: "Puis-je changer d'abonnement ?",
    a: "Oui. Vous pouvez passer d'Essentiel à Sérénité ou Croissance (et inversement) selon l'évolution de vos besoins, sans tout recommencer.",
  },
  {
    q: "Puis-je résilier ?",
    a: "L'abonnement est souscrit pour 12 mois, puis reconduit tacitement. Vous pouvez le résilier selon les modalités précisées dans le contrat. Pendant toute la durée, votre site reste hébergé et géré par nos soins.",
  },
  {
    q: "Que se passe-t-il si j'ai besoin d'une grosse évolution ?",
    a: "Les évolutions importantes (espace client, réservation, paiement, e-commerce…) sont étudiées en projet sur-mesure, séparément de l'abonnement. On définit ensemble le périmètre et un devis dédié.",
  },
  {
    q: "Le nom de domaine est-il inclus ?",
    a: "Oui. Le nom de domaine est inclus dans les trois formules, avec l'hébergement sécurisé et le certificat SSL.",
  },
  {
    q: "Proposez-vous des applications web ou de l'e-commerce ?",
    a: "Oui. Les projets plus complexes (applications, e-commerce, réservation, espace client, paiement…) sont étudiés en sur-mesure, séparément de l’abonnement. Contactez-moi pour en discuter — sans grille de prix figée.",
  },
];
