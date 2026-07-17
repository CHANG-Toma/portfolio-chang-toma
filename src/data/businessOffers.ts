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
    a: "En moyenne entre une et trois semaines selon la complexité et la disponibilité de vos contenus. Les frais de mise en place (149 €) couvrent la création initiale. Nous vous communiquons un planning précis dès le démarrage.",
  },
  {
    q: "Comment fonctionne la tarification ?",
    a: "Vous payez 149 € de frais de mise en place (création du site), puis un abonnement mensuel (Essentiel 29 €, Sérénité 79 € ou Premium 199 €) qui couvre hébergement, sécurité et accompagnement. Pas de gros investissement de départ.",
  },
  {
    q: "Quelle est la différence entre Essentiel, Sérénité et Premium ?",
    a: "Essentiel : technique seule (hébergement, SSL, sauvegardes, monitoring). Sérénité : + 2 modifications de contenu / mois, perf/SEO de base et support prioritaire. Premium : + point mensuel 15 min et jusqu’à 3h d’évolutions légères / mois.",
  },
  {
    q: "Proposez-vous des applications web ou de l'e-commerce ?",
    a: "Oui. Les projets plus complexes (applications, e-commerce, réservation, espace client, paiement…) sont étudiés en sur-mesure, séparément de l’abonnement. Contactez-moi pour en discuter — sans grille de prix figée.",
  },
  {
    q: "Que signifie « évolution légère » ?",
    a: "Ajout de contenu, section ou formulaire simple. Toute nouvelle fonctionnalité complexe (espace client, réservation, paiement…) est étudiée en projet sur-mesure séparé.",
  },
  {
    q: "Puis-je faire évoluer mon abonnement plus tard ?",
    a: "Absolument. Vous pouvez monter de palier (Essentiel → Sérénité → Premium) ou passer sur du sur-mesure quand votre activité le demande, sans tout recommencer.",
  },
  {
    q: "Quel est l'engagement de l'abonnement ?",
    a: "L'abonnement est souscrit pour une durée initiale de 12 mois, puis reconduit tacitement. Pendant toute la durée, le site reste hébergé et géré par nos soins. Vous pouvez l'ajuster ou le résilier selon les modalités précisées dans le contrat.",
  },
];
