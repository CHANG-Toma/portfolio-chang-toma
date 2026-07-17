import { offersFaq } from "@/data/businessOffers";
import {
  CONTACT,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_NAME_ALIASES,
  SITE_TAGLINE,
  SITE_URL,
} from "@/lib/seo";

const organization = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: [...SITE_NAME_ALIASES],
  legalName: "Code by Toma",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/images/CodeByToma.png`,
  },
  image: `${SITE_URL}/images/CodeByToma.png`,
  email: CONTACT.email,
  telephone: CONTACT.phone,
  founder: {
    "@type": "Person",
    name: "Toma Chang",
    alternateName: ["Toma", "Code by Toma"],
    url: SITE_URL,
    jobTitle: "Développeur Full-Stack",
  },
  sameAs: [] as string[],
  areaServed: {
    "@type": "AdministrativeArea",
    name: CONTACT.region,
  },
};

const professionalService = {
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#service`,
  name: SITE_NAME,
  alternateName: [...SITE_NAME_ALIASES],
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  image: `${SITE_URL}/images/CodeByToma.png`,
  telephone: CONTACT.phone,
  email: CONTACT.email,
  priceRange: "€€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Virement, carte",
  areaServed: [
    { "@type": "Country", name: "France" },
    { "@type": "AdministrativeArea", name: CONTACT.region },
  ],
  serviceType: [
    "Création de sites web",
    "Site vitrine",
    "Maintenance de site web",
    "Abonnement site internet",
  ],
  provider: { "@id": `${SITE_URL}/#organization` },
  offers: [
    {
      "@type": "Offer",
      name: "Frais de mise en place",
      price: "149",
      priceCurrency: "EUR",
      description:
        "Création de votre site vitrine, quel que soit le palier d'abonnement choisi.",
      url: `${SITE_URL}/#offres`,
    },
    {
      "@type": "Offer",
      name: "Abonnement Essentiel",
      price: "29",
      priceCurrency: "EUR",
      description:
        "Hébergement, SSL, sauvegardes, monitoring et support e-mail.",
      url: `${SITE_URL}/#offres`,
    },
    {
      "@type": "Offer",
      name: "Abonnement Sérénité",
      price: "79",
      priceCurrency: "EUR",
      description:
        "Tout Essentiel + 2 modifications de contenu / mois, SEO de base et support prioritaire.",
      url: `${SITE_URL}/#offres`,
    },
    {
      "@type": "Offer",
      name: "Abonnement Premium",
      price: "199",
      priceCurrency: "EUR",
      description:
        "Tout Sérénité + point mensuel et jusqu'à 3h d'évolutions légères / mois.",
      url: `${SITE_URL}/#offres`,
    },
  ],
};

const website = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  alternateName: [...SITE_NAME_ALIASES],
  description: SITE_TAGLINE,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "fr-FR",
};

const faqPage = {
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  mainEntity: offersFaq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

const graph = {
  "@context": "https://schema.org",
  "@graph": [organization, professionalService, website, faqPage],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
