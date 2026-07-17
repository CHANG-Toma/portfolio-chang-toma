export type PricingAbonnementCard = {
  id: string;
  emoji: string;
  title: string;
  tagline: string;
  price: string;
  period: string;
  /** Lignes avec coche (features) */
  features: string[];
  /** Préfixe type « Tout Essentiel » affiché avant les features */
  includesFrom?: string;
  /** Ligne grisée hors forfait */
  footnote?: string;
  cta: string;
  ctaSubject: string;
  featured?: boolean;
  badge?: string;
};

/** Frais de mise en place uniques — affichés une seule fois au-dessus des cartes. */
export const setupFee = {
  amount: 490,
  label: "Frais de lancement : 490€",
  detail:
    "Ils couvrent la conception, le développement et la mise en ligne de votre site.",
  note: "Quel que soit l'abonnement choisi.",
};

export const subscriptionSection = {
  label: "Abonnement",
  heading: "Votre site, toujours performant",
  description:
    "Choisissez le niveau d'accompagnement qui correspond à vos besoins. Nous nous occupons de toute la partie technique afin que vous puissiez vous concentrer sur votre activité.",
  commitment:
    "Engagement 12 mois, reconduction tacite ensuite. Le site reste hébergé et géré par nos soins pendant toute la durée de l'abonnement.",
  evolutionNote:
    "Évolution = ajout de contenu, section ou optimisation. Toute nouvelle fonctionnalité complexe (espace client, réservation, paiement…) est étudiée en projet sur-mesure séparé.",
};

export const pricingAbonnement: PricingAbonnementCard[] = [
  {
    id: "essentiel",
    emoji: "🌱",
    title: "Essentiel",
    tagline:
      "Idéal pour les entreprises qui souhaitent simplement que leur site reste en ligne et sécurisé.",
    price: "49€",
    period: "/mois",
    features: [
      "Hébergement sécurisé",
      "Nom de domaine",
      "Certificat SSL",
      "Sauvegardes automatiques",
      "Mises à jour techniques",
      "Surveillance du site",
      "Support par email (48h)",
    ],
    footnote: "Modifications de contenu disponibles sur devis.",
    cta: "Choisir Essentiel",
    ctaSubject: "CodeByToma — Abonnement Essentiel",
  },
  {
    id: "serenite",
    emoji: "🚀",
    title: "Sérénité",
    tagline: "Vous ne vous occupez de rien, nous gérons votre site pour vous.",
    price: "99€",
    period: "/mois",
    includesFrom: "Tout Essentiel",
    features: [
      "30 minutes de modifications chaque mois (textes, images, horaires…)",
      "Optimisation des performances",
      "Vérification SEO de base",
      "Rapport mensuel de maintenance",
      "Assistance prioritaire",
      "Réponse sous 24h",
    ],
    cta: "Choisir Sérénité",
    ctaSubject: "CodeByToma — Abonnement Sérénité",
    featured: true,
    badge: "Le plus choisi",
  },
  {
    id: "croissance",
    emoji: "⭐",
    title: "Croissance",
    tagline:
      "Pour les entreprises qui souhaitent faire évoluer leur site régulièrement.",
    price: "199€",
    period: "/mois",
    includesFrom: "Tout Sérénité",
    features: [
      "2 heures d'évolutions chaque mois",
      "Création de nouvelles sections",
      "Optimisation de la conversion",
      "Audit SEO mensuel",
      "Conseils stratégiques",
      "Priorité absolue sur les demandes",
      "Réponse prioritaire",
    ],
    cta: "Choisir Croissance",
    ctaSubject: "CodeByToma — Abonnement Croissance",
  },
];

export type ComparisonValue = boolean | string;

export type ComparisonRow = {
  feature: string;
  essentiel: ComparisonValue;
  serenite: ComparisonValue;
  croissance: ComparisonValue;
};

export const comparisonTable: ComparisonRow[] = [
  { feature: "Hébergement", essentiel: true, serenite: true, croissance: true },
  {
    feature: "Nom de domaine",
    essentiel: true,
    serenite: true,
    croissance: true,
  },
  { feature: "SSL", essentiel: true, serenite: true, croissance: true },
  {
    feature: "Sauvegardes",
    essentiel: true,
    serenite: true,
    croissance: true,
  },
  {
    feature: "Mises à jour",
    essentiel: true,
    serenite: true,
    croissance: true,
  },
  {
    feature: "Monitoring",
    essentiel: true,
    serenite: true,
    croissance: true,
  },
  {
    feature: "Temps de réponse",
    essentiel: "48h",
    serenite: "24h",
    croissance: "Prioritaire",
  },
  {
    feature: "Temps de modifications inclus",
    essentiel: "Sur devis",
    serenite: "30 min / mois",
    croissance: "2 h / mois",
  },
  {
    feature: "Optimisation performances",
    essentiel: false,
    serenite: true,
    croissance: true,
  },
  {
    feature: "SEO",
    essentiel: false,
    serenite: "De base",
    croissance: "Audit mensuel",
  },
  {
    feature: "Rapport mensuel",
    essentiel: false,
    serenite: true,
    croissance: true,
  },
  {
    feature: "Conseils",
    essentiel: false,
    serenite: false,
    croissance: "Stratégiques",
  },
  {
    feature: "Priorité support",
    essentiel: false,
    serenite: true,
    croissance: "Absolue",
  },
];

export const subscriptionFaq = [
  {
    q: "Puis-je changer d'abonnement ?",
    a: "Oui. Vous pouvez passer d'Essentiel à Sérénité ou Croissance (et inversement) selon l'évolution de vos besoins. On ajuste simplement le niveau d'accompagnement — sans tout recommencer.",
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
];

export const surMesureSection = {
  id: "sur-mesure",
  title: "Votre activité évolue ? On va plus loin.",
  text: "Réservation en ligne, espace client, devis automatisés, boutique en ligne... quand votre site a besoin de fonctionnalités métier sur-mesure, on étudie ça ensemble au cas par cas.",
  cta: "Discutons de votre projet",
  ctaSubject: "CodeByToma — Projet sur-mesure",
};
