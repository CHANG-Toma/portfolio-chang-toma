import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ThemeProvider from "@/components/ThemeProvider";

const figtree = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "CodeByToma — Création de sites web sur-mesure",
    template: "%s | CodeByToma",
  },
  description:
    "Sites vitrines dès 990€, applications web et e-commerce Shopify. Abonnement hébergement & maintenance dès 49€/mois. Devis gratuit.",
  authors: [{ name: "Toma Chang", url: "https://www.codebytoma.dev" }],
  keywords: [
    "CodeByToma",
    "création site web",
    "site vitrine",
    "application web",
    "e-commerce Shopify",
    "abonnement site internet",
    "indépendants",
    "PME",
    "développement web",
    "Toma Chang",
  ],
  openGraph: {
    title: "CodeByToma — Création de sites web sur-mesure",
    description:
      "Sites vitrines, applications web et boutiques Shopify. Abonnement optionnel pour l'hébergement et la maintenance. Devis gratuit.",
    url: "https://www.codebytoma.dev",
    siteName: "CodeByToma",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark" suppressHydrationWarning>
      <body className={`${figtree.variable} antialiased`}>
        <ThemeProvider>
          <SpeedInsights />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
