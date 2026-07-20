import type { CSSProperties, ReactNode } from "react";
import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-gastro-display",
  weight: ["400", "500", "600", "700"],
});

const body = Outfit({
  subsets: ["latin"],
  variable: "--font-gastro-body",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Maison Lune — Démo Site Vitrine",
  description:
    "Exemple CodeByToma : site vitrine restaurant — création 149 €, abonnement dès 49 €/mois.",
  robots: { index: false, follow: false },
};

const themeVars = {
  ["--mg-bg"]: "#140f0c",
  ["--mg-ink"]: "#f3ebe2",
  ["--mg-muted"]: "#b7a99a",
  ["--mg-gold"]: "#d4a574",
  ["--mg-wine"]: "#8b2e2e",
} as CSSProperties;

export default function GastroDemoLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div
      className={`${display.variable} ${body.variable} font-[family-name:var(--font-gastro-body)]`}
      style={themeVars}
    >
      {children}
    </div>
  );
}
