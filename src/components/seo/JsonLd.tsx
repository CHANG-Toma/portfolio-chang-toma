import { offersFaq } from "@/data/businessOffers";
import {
  CONTACT,
  SITE_DESCRIPTION,
  SITE_LOGO,
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
    url: `${SITE_URL}${SITE_LOGO.url}`,
  },
  image: `${SITE_URL}${SITE_LOGO.url}`,
  email: CONTACT.email,
  telephone: CONTACT.phone,
  founder: {
    "@type": "Person",
    name: "Toma Chang",
    alternateName: ["Toma", "Code by Toma"],
    url: SITE_URL,
    jobTitle: "Développeur Informatique",
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
  image: `${SITE_URL}${SITE_LOGO.url}`,
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
      name: "Frais de lancement",
      price: "490",
      priceCurrency: "EUR",
      description:
        "Conception, développement et mise en ligne de votre site, quel que soit l'abonnement choisi.",
      url: `${SITE_URL}/#offres`,
    },
    {
      "@type": "Offer",
      name: "Abonnement Essentiel",
      price: "49",
      priceCurrency: "EUR",
      description:
        "Site en ligne et sécurisé : hébergement, domaine, SSL, sauvegardes, mises à jour et surveillance.",
      url: `${SITE_URL}/#offres`,
    },
    {
      "@type": "Offer",
      name: "Abonnement Sérénité",
      price: "99",
      priceCurrency: "EUR",
      description:
        "On gère votre site pour vous : modifications mensuelles, performances, SEO de base et support prioritaire.",
      url: `${SITE_URL}/#offres`,
    },
    {
      "@type": "Offer",
      name: "Abonnement Croissance",
      price: "199",
      priceCurrency: "EUR",
      description:
        "Accompagnement pour faire évoluer le site : 2h d'évolutions / mois, conversion, audit SEO et conseils stratégiques.",
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
