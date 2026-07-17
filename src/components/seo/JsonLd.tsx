import { offersFaq } from "@/data/businessOffers";
import { CONTACT, SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/seo";

const organization = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
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
    url: SITE_URL,
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
      name: "Site Essentiel",
      price: "590",
      priceCurrency: "EUR",
      description: "Site vitrine moderne, 3–4 pages, mobile, formulaire de contact.",
      url: `${SITE_URL}/#offres`,
    },
    {
      "@type": "Offer",
      name: "Site Vitrine Pro",
      price: "990",
      priceCurrency: "EUR",
      description: "Site immersif futuriste avec animations et effets avancés.",
      url: `${SITE_URL}/#offres`,
    },
  ],
};

const website = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
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
