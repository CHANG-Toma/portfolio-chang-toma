export type ShowcaseProject = {
  id: string;
  name: string;
  type: "Site vitrine" | "E-commerce" | "Premium";
  style: "Moderne" | "Minimaliste" | "Premium";
  url: string;
  previewFrom: string;
  previewTo: string;
};

export const showcaseProjects: ShowcaseProject[] = [
  {
    id: "codebytoma",
    name: "CodeByToma",
    type: "Site vitrine",
    style: "Moderne",
    url: "https://www.codebytoma.dev/",
    previewFrom: "from-slate-800",
    previewTo: "to-slate-950",
  },
  {
    id: "maxiloc",
    name: "MaxiLoc",
    type: "Premium",
    style: "Premium",
    url: "https://github.com/CHANG-Toma/maxi-loc",
    previewFrom: "from-indigo-900",
    previewTo: "to-slate-900",
  },
  {
    id: "lamusee",
    name: "Lamusée Paris",
    type: "E-commerce",
    style: "Minimaliste",
    url: "#contact",
    previewFrom: "from-neutral-800",
    previewTo: "to-stone-950",
  },
];

export const offersFaq = [
  {
    q: "Quel est le délai de création d'un site ?",
    a: "En moyenne entre une et trois semaines selon le type de projet, la complexité et la disponibilité de vos contenus. Nous vous communiquons un planning précis dès le démarrage.",
  },
  {
    q: "Puis-je acheter mon site sans abonnement ?",
    a: "Oui. La création de votre site fait l'objet d'un paiement unique. L'abonnement est optionnel et sert à l'hébergement, la sécurité et l'accompagnement technique de votre site.",
  },
  {
    q: "Quelle est la différence entre un site vitrine et une application web ?",
    a: "Le site vitrine présente votre activité et convertit vos visiteurs. L'application web va plus loin avec des fonctionnalités sur-mesure : espace client, tableau de bord, gestion de données ou process métier spécifiques.",
  },
  {
    q: "Que comprend la maintenance ?",
    a: "Selon la formule choisie : hébergement, nom de domaine, SSL, sauvegardes, support et, selon l'offre, modifications de contenu ou optimisations. La formule Sérénité couvre l'essentiel pour la plupart des entreprises.",
  },
  {
    q: "Puis-je faire évoluer mon site plus tard ?",
    a: "Absolument. Votre site peut grandir avec votre activité : nouvelles pages, fonctionnalités, boutique en ligne, application web ou refonte. Nous vous accompagnons à chaque étape.",
  },
  {
    q: "Quel est l'engagement de l'abonnement ?",
    a: "L'abonnement est souscrit pour une durée initiale de 12 mois, puis reconduit tacitement. Vous pouvez l'ajuster ou le résilier selon les modalités précisées dans le contrat.",
  },
];
