export type PricingFeature = {
  text: string;
  detail?: string;
};

export type PricingAbonnementCard = {
  id: string;
  title: string;
  tagline: string;
  /** Une phrase simple pour comprendre la formule d'un coup d'œil */
  summary: string;
  price: string;
  period: string;
  features: PricingFeature[];
  cta: string;
  ctaSubject: string;
  featured?: boolean;
  badge?: string;
};

/** Frais de création uniques — intégrés au bloc tarifaire des cartes. */
export const setupFee = {
  amount: 149,
  label: "Création du site : 149 €",
  detail: "frais uniques, quel que soit le palier d'abonnement choisi",
  shortLine: "149 € de création · une seule fois",
  plainExplanation:
    "149 € une seule fois pour concevoir et mettre en ligne votre site. Ensuite, l'abonnement mensuel couvre la mise en ligne, la sécurité et l'accompagnement — sans surprise technique.",
};

/** Formulations courtes réutilisées sur le site. */
export const pricingSummary = {
  creationFormatted: `${setupFee.amount} €`,
  subscriptionFrom: "49 €/mois",
  short: `Création ${setupFee.amount} € · Abonnement dès 49 €/mois`,
  pitch:
    "Création du site à 149 € (frais uniques), puis abonnement mensuel dès 49 €/mois.",
};

export const subscriptionSection = {
  label: "Abonnement",
  heading: "Des formules claires, sans jargon",
  description:
    "149 € de création pour fabriquer votre site, puis un abonnement mensuel selon l'accompagnement souhaité. Pas besoin de connaissances techniques : on s'occupe de la partie en ligne, sécurité et maintenance.",
  commitment:
    "Engagement 12 mois, puis renouvellement automatique. Pendant toute la durée, votre site reste en ligne et géré par nos soins.",
  evolutionNote:
    "Petite évolution = nouveau texte, section ou formulaire de contact. Besoin plus avancé (réservation, paiement, espace client…) = étudié en projet sur-mesure, à part.",
};

export const pricingAbonnement: PricingAbonnementCard[] = [
  {
    id: "essentiel",
    title: "Essentiel",
    tagline:
      "Zéro souci technique. On s'occupe de tout pendant que vous vous concentrez sur votre activité.",
    summary: "Votre site est en ligne et sécurisé — vous n'avez rien à gérer.",
    price: "49 €",
    period: "/mois",
    features: [
      { text: "Jusqu'à 3 pages" },
      {
        text: "Site en ligne 24h/24 + adresse web",
        detail: "Hébergement + nom de domaine inclus (ex. votresite.fr).",
      },
      {
        text: "Connexion sécurisée + sauvegarde chaque semaine",
        detail:
          "Site sécurisé pour vos visiteurs, avec une copie de secours créée automatiquement chaque semaine.",
      },
      {
        text: "Surveillance du site",
        detail: "Monitoring = on vérifie automatiquement que le site reste disponible.",
      },
      { text: "Support par e-mail (réponse sous 48h)" },
      { text: "Modifications de textes ou photos : sur devis" },
    ],
    cta: "Choisir Essentiel",
    ctaSubject: "CodeByToma — Abonnement Essentiel",
  },
  {
    id: "serenite",
    title: "Sérénité",
    tagline: "Votre site reste vivant et à jour, sans jamais y penser.",
    summary:
      "Comme Essentiel, plus 2 mises à jour de contenu par mois — textes, photos, pages simples.",
    price: "65 €",
    period: "/mois",
    features: [
      { text: "Tout Essentiel inclus" },
      {
        text: "Sauvegarde quotidienne + récupération rapide",
        detail:
          "Une sauvegarde est créée chaque jour. En cas de problème, on peut restaurer rapidement une version saine.",
      },
      {
        text: "Visibilité Google & site plus rapide",
        detail:
          "SEO de base = titres, descriptions et structure mieux comprises par Google, avec des pages plus rapides à charger.",
      },
      { text: "Support prioritaire (réponse sous 24h)" },
      { text: "2 modifications de contenu / mois incluses" },
    ],
    cta: "Choisir Sérénité",
    ctaSubject: "CodeByToma — Abonnement Sérénité",
    featured: true,
    badge: "⭐ Le plus choisi",
  },
  {
    id: "premium",
    title: "Premium",
    tagline:
      "Votre site évolue avec votre activité — avec un vrai suivi, mois après mois.",
    summary:
      "L'accompagnement le plus complet : plus de mises à jour, des évolutions régulières et un interlocuteur dédié.",
    price: "159 €",
    period: "/mois",
    features: [
      { text: "Autant de pages que nécessaire" },
      { text: "Tout Sérénité inclus" },
      { text: "5 modifications de contenu / mois incluses" },
      { text: "Point mensuel de 15 min (objectifs & priorités)" },
      { text: "Jusqu'à 3 h d'évolutions / mois" },
      {
        text: "Rapport mensuel de visibilité",
        detail:
          "Nombre de visites, pages les plus vues et performance du site — pour suivre concrètement vos résultats.",
      },
      { text: "Changement de thème principal possible" },
      { text: "Priorité sur les projets sur-mesure (réservation, espace client…)" },
    ],
    cta: "Choisir Premium",
    ctaSubject: "CodeByToma — Abonnement Premium",
  },
];

export const surMesureSection = {
  id: "sur-mesure",
  title: "Votre activité évolue ? On va plus loin.",
  text: "Réservation en ligne, espace client, devis automatisés, boutique en ligne… Quand votre site a besoin de fonctions spécifiques à votre métier, on en discute ensemble — sans engagement sur une grille fixe.",
  cta: "Discutons de votre projet",
  ctaSubject: "CodeByToma — Projet sur-mesure",
};
