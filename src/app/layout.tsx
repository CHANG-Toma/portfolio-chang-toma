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
    "Site Essentiel moderne dès 590€, Site Pro futuriste dès 990€. Abonnement dès 29€/mois. Sur-mesure sur devis.",
  authors: [{ name: "Toma Chang", url: "https://www.codebytoma.dev" }],
  keywords: [
    "CodeByToma",
    "création site web",
    "site vitrine",
    "site essentiel",
    "abonnement site internet",
    "indépendants",
    "PME",
    "développement web",
    "Toma Chang",
  ],
  openGraph: {
    title: "CodeByToma — Création de sites web sur-mesure",
    description:
      "Sites dès 590€, abonnement évolutif dès 29€/mois. Sur-mesure pour les besoins métier avancés. Devis gratuit.",
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
