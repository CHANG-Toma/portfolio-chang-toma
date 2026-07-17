export type PricingVariant = {
  id: string;
  label: string;
  price: string;
  description: string;
  ctaSubject: string;
};

export type PricingCreationCard = {
  id: string;
  icon?: string;
  title: string;
  description?: string;
  price?: string;
  audience?: string[];
  features: string[];
  cta: string;
  ctaSubject?: string;
  featured?: boolean;
  badge?: string;
  variants?: PricingVariant[];
  defaultVariantId?: string;
};

export type PricingAbonnementCard = {
  id: string;
  title: string;
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
  heading: "Création de sites",
  description: "Un paiement unique pour un site prêt à l'emploi.",
};

export const pricingCreation: PricingCreationCard[] = [
  {
    id: "vitrine",
    icon: "🌐",
    title: "Site Vitrine",
    audience: ["Artisans", "Indépendants", "Petites entreprises"],
    features: [
      "Jusqu'à 5 pages",
      "Version mobile",
      "Formulaire de contact",
    ],
    cta: "Demander un devis",
    defaultVariantId: "moderne",
    variants: [
      {
        id: "moderne",
        label: "Moderne",
        price: "990 €",
        description: "Design épuré, professionnel et intemporel",
        ctaSubject: "CodeByToma — Devis gratuit (Site Vitrine Moderne)",
      },
      {
        id: "futuriste",
        label: "Futuriste",
        price: "1 290 €",
        description:
          "Design immersif, animations avancées, effets visuels qui marquent les esprits",
        ctaSubject: "CodeByToma — Devis gratuit (Site Vitrine Futuriste)",
      },
    ],
  },
  {
    id: "application",
    icon: "⚡",
    title: "Application Web",
    description:
      "Au-delà du site vitrine : espace client, tableau de bord, fonctionnalités sur-mesure adaptées à votre activité",
    price: "À partir de 2 290 €",
    audience: [
      "Entreprises avec besoins spécifiques",
      "Startups",
      "Structures qui veulent digitaliser un process",
    ],
    features: [
      "Développement sur-mesure",
      "Base de données",
      "Authentification / espace client",
      "Fonctionnalités métier spécifiques",
      "Design personnalisé",
    ],
    cta: "Demander un devis",
    ctaSubject: "CodeByToma — Devis gratuit (Application Web)",
    featured: true,
    badge: "Populaire",
  },
  {
    id: "ecommerce",
    icon: "🛒",
    title: "E-commerce Shopify",
    description:
      "Une boutique en ligne complète, avec un design au choix : Moderne, Pro ou Futuriste.",
    price: "À partir de 1 990 €",
    audience: ["Commerçants qui veulent vendre en ligne"],
    features: [
      "Boutique Shopify complète",
      "Thème personnalisé (Moderne, Pro ou Futuriste)",
      "Configuration paiement",
      "Catalogue produits",
    ],
    cta: "Demander un devis",
    ctaSubject: "CodeByToma — Devis gratuit (E-commerce Shopify)",
  },
];

export const subscriptionSection = {
  label: "Abonnement",
  heading: "Abonnement",
  description:
    "L'accompagnement continu : hébergement, sécurité et support.",
  commitment: "Engagement 12 mois, reconduction tacite ensuite.",
};

export const pricingAbonnement: PricingAbonnementCard[] = [
  {
    id: "essentiel",
    title: "Essentiel",
    price: "49 €",
    period: "/mois",
    features: [
      "Hébergement sécurisé",
      "Nom de domaine",
      "Certificat SSL",
      "Sauvegardes automatiques",
      "Support par e-mail",
      "Petite modification de contenu comprise",
    ],
    cta: "Choisir Essentiel",
    ctaSubject: "CodeByToma — Abonnement Essentiel",
  },
  {
    id: "serenite",
    title: "Sérénité",
    price: "99 €",
    period: "/mois",
    features: [
      "Tout Essentiel",
      "Ajout ou modification de contenu",
      "Optimisation performance",
      "Support prioritaire",
    ],
    cta: "Choisir Sérénité",
    ctaSubject: "CodeByToma — Abonnement Sérénité",
    featured: true,
    badge: "Le plus choisi",
  },
  {
    id: "premium",
    title: "Premium",
    price: "199 €",
    period: "/mois",
    features: [
      "Tout Sérénité",
      "Développements sur mesure",
      "Intégrations d'outils métiers",
      "Automatisations",
      "Accompagnement personnalisé mensuel",
    ],
    cta: "Choisir Premium",
    ctaSubject: "CodeByToma — Abonnement Premium",
  },
];
