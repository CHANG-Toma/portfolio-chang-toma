import type { Metadata } from "next";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Portfolio — Toma Chang, développeur Full-Stack",
  description:
    "Portfolio de Toma Chang (CodeByToma) : parcours, projets et compétences en développement web Full-Stack.",
  alternates: {
    canonical: `${SITE_URL}/portfolio`,
  },
  openGraph: {
    title: "Portfolio — Toma Chang",
    description:
      "Parcours, projets et compétences de Toma Chang, développeur Full-Stack.",
    url: `${SITE_URL}/portfolio`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
