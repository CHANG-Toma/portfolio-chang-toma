export type PricingCreationCard = {
  id: string;
  icon?: string;
  title: string;
  styleLabel: string;
  description?: string;
  price: string;
  priceNote?: string;
  audience?: string[];
  features: string[];
  cta: string;
  ctaSubject: string;
  featured?: boolean;
  badge?: string;
};

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

export const creationSection = {
  label: "Création de sites",
  heading: "Deux niveaux, une même exigence",
  description:
    "Essentiel : un site moderne, clair et efficace pour démarrer. Pro : une expérience futuriste, avec animations et effets qui marquent les esprits.",
};

export const pricingCreation: PricingCreationCard[] = [
  {
    id: "essentiel",
    icon: "🌐",
    title: "Site Essentiel",
    styleLabel: "Moderne",
    description:
      "La base solide : un site moderne, simple et professionnel pour exister en ligne rapidement.",
    price: "590 €",
    priceNote: "ou 3x 197 € sans frais",
    audience: ["Freelances", "Indépendants qui démarrent"],
    features: [
      "Template optimisé",
      "Jusqu'à 3-4 pages",
      "Design moderne & clair",
      "Version mobile",
      "Formulaire de contact",
    ],
    cta: "Demander un devis",
    ctaSubject: "CodeByToma — Devis gratuit (Site Essentiel)",
  },
  {
    id: "vitrine-pro",
    icon: "✨",
    title: "Site Vitrine Pro",
    styleLabel: "Futuriste",
    description:
      "Quand vous voulez marquer les esprits : design immersif, animations avancées et effets visuels sur-mesure.",
    price: "990 €",
    priceNote: "ou 3x 330 € sans frais",
    audience: [
      "PME",
      "Indépendants qui veulent une image forte et mémorable",
    ],
    features: [
      "Jusqu'à 5-6 pages",
      "Design personnalisé immersif",
      "Animations & micro-interactions",
      "Effets visuels avancés",
      "Version mobile",
      "Formulaire de contact",
      "Optimisation SEO de base",
    ],
    cta: "Demander un devis",
    ctaSubject: "CodeByToma — Devis gratuit (Site Vitrine Pro · Futuriste)",
    featured: true,
    badge: "Populaire",
  },
];

export const subscriptionSection = {
  label: "Abonnement",
  heading: "Trois formules, un suivi évolutif",
  description:
    "Technique seule, contenu inclus, ou accompagnement pour faire grandir le site. Commencez simple, montez en gamme quand votre activité le demande.",
  commitment: "Engagement 12 mois, reconduction tacite ensuite.",
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
      "2 modifications de contenu incluses / mois",
      "Textes, images, pages simples (hors refonte)",
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
      "Point mensuel 30 min (objectifs & priorités)",
      "Jusqu’à 3h d’évolutions / mois",
      "Nouvelles sections, formulaires, intégrations",
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
