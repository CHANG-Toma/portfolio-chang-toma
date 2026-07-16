import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio — Toma Chang",
  description:
    "Portfolio de Toma Chang — Développeur Full-Stack. Parcours, projets et compétences.",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
