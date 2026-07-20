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
    image: "/images/showcase/aria-coach-studio.jpg",
    previewFrom: "from-stone-700",
    previewTo: "to-emerald-950",
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
    a: "En moyenne entre une et trois semaines selon la complexité et la disponibilité de vos contenus. Les 149 € de création couvrent la conception et la mise en ligne initiale du site. Nous vous communiquons un planning précis dès le démarrage.",
  },
  {
    q: "Comment fonctionne la tarification ?",
    a: "Vous payez 149 € une seule fois pour la création du site, puis un abonnement mensuel : Essentiel (49 €) pour un site en ligne et sécurisé, Sérénité (65 €) avec 2 mises à jour de contenu par mois, ou Premium (159 €) avec évolutions régulières. Pas de gros budget au départ.",
  },
  {
    q: "Je ne suis pas à l'aise avec l'informatique — est-ce pour moi ?",
    a: "Oui, c'est justement l'idée. Vous n'avez pas à gérer l'hébergement, la sécurité ou la technique : on s'en charge. Vous nous envoyez vos textes et photos, on s'occupe du reste. Chaque formule est expliquée en langage simple sur cette page.",
  },
  {
    q: "Que comprend la création à 149 € ?",
    a: "La conception et la mise en ligne de votre site vitrine : structure, design, pages essentielles et formulaire de contact. L'hébergement, la maintenance technique et l'accompagnement sont ensuite inclus dans l'abonnement mensuel choisi.",
  },
  {
    q: "Quelle est la différence entre Essentiel, Sérénité et Premium ?",
    a: "Essentiel (49 €) : votre site est en ligne, sécurisé et surveillé — vous ne gérez rien côté technique. Sérénité (65 €) : en plus, on met à jour votre contenu 2 fois par mois et on améliore votre visibilité sur Google. Premium (159 €) : en plus, 5 mises à jour par mois, jusqu'à 3 h d'évolutions, un point mensuel, un rapport de visibilité et la possibilité de changer le thème principal.",
  },
  {
    q: "Proposez-vous des applications web ou de l'e-commerce ?",
    a: "Oui. Les projets plus complexes (applications, e-commerce, réservation, espace client, paiement…) sont étudiés en sur-mesure, séparément de l’abonnement. Contactez-moi pour en discuter — sans grille de prix figée.",
  },
  {
    q: "Que signifie « évolution légère » ?",
    a: "En langage simple : ajouter une section, un formulaire ou du contenu sur votre site existant. Pas une refonte complète ni une boutique en ligne — ça, c'est du sur-mesure, étudié à part.",
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
