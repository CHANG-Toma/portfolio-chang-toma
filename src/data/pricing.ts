export type PricingAbonnementCard = {
  id: string;
  title: string;
  tagline: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  ctaSubject: string;
  featured?: boolean;
  badge?: string;
};

/** Frais de mise en place uniques — affichés une seule fois au-dessus des cartes. */
export const setupFee = {
  amount: 149,
  label: "Frais de mise en place : 149€",
  detail:
    "création de votre site, quel que soit le palier choisi",
};

export const subscriptionSection = {
  label: "Abonnement",
  heading: "Un abonnement tout compris",
  description:
    "Un abonnement tout compris pour être visible en ligne, sans gros investissement de départ. Votre abonnement évolue avec vos besoins.",
  commitment:
    "Engagement 12 mois, reconduction tacite ensuite. Le site reste hébergé et géré par nos soins pendant toute la durée de l'abonnement.",
  evolutionNote:
    "Évolution légère = ajout de contenu/section/formulaire simple. Toute nouvelle fonctionnalité complexe (espace client, réservation, paiement…) est étudiée en projet sur-mesure séparé.",
};

export const pricingAbonnement: PricingAbonnementCard[] = [
  {
    id: "essentiel",
    title: "Essentiel",
    tagline: "Le site tourne — vous ne touchez à rien de technique.",
    price: "29 €",
    period: "/mois",
    features: [
      "Hébergement sécurisé + nom de domaine",
      "SSL, sauvegardes & mises à jour techniques",
      "Monitoring de disponibilité",
      "Support e-mail (réponse sous 48h)",
      "Modifications de contenu : hors forfait (sur devis)",
    ],
    cta: "Choisir Essentiel",
    ctaSubject: "CodeByToma — Abonnement Essentiel",
  },
  {
    id: "serenite",
    title: "Sérénité",
    tagline: "Le site reste à jour — sans que vous ayez à le gérer.",
    price: "79 €",
    period: "/mois",
    features: [
      "Tout Essentiel",
      "2 modifications de contenu incluses / mois (textes, images, pages simples — hors refonte)",
      "Optimisation performance & SEO de base",
      "Support prioritaire (réponse sous 24h)",
    ],
    cta: "Choisir Sérénité",
    ctaSubject: "CodeByToma — Abonnement Sérénité",
    featured: true,
    badge: "Le plus choisi",
  },
  {
    id: "premium",
    title: "Premium",
    tagline: "Le site progresse avec votre activité.",
    price: "199 €",
    period: "/mois",
    features: [
      "Tout Sérénité",
      "Point mensuel 15 min (objectifs & priorités)",
      "Jusqu'à 3h d'évolutions légères / mois (ajout de section, formulaire simple, petite intégration)",
      "Priorité sur les projets sur-mesure (réservation, espace client…)",
    ],
    cta: "Choisir Premium",
    ctaSubject: "CodeByToma — Abonnement Premium",
  },
];

export const surMesureSection = {
  id: "sur-mesure",
  title: "Votre activité évolue ? On va plus loin.",
  text: "Réservation en ligne, espace client, devis automatisés, boutique en ligne... quand votre site a besoin de fonctionnalités métier sur-mesure, on étudie ça ensemble au cas par cas.",
  cta: "Discutons de votre projet",
  ctaSubject: "CodeByToma — Projet sur-mesure",
};
