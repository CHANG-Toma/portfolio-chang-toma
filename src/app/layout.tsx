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
    default: "CodeByToma — Partenaire digital dès 49€/mois",
    template: "%s | CodeByToma",
  },
  description:
    "CodeByToma crée, héberge et accompagne votre site internet à partir de 49€/mois. Abonnement simple et transparent pour indépendants et PME.",
  authors: [{ name: "Toma Chang", url: "https://www.codebytoma.dev" }],
  keywords: [
    "CodeByToma",
    "création site web",
    "abonnement site internet",
    "site vitrine",
    "indépendants",
    "PME",
    "développement web",
    "Toma Chang",
  ],
  openGraph: {
    title: "CodeByToma — Partenaire digital dès 49€/mois",
    description:
      "Votre site internet créé, hébergé, sécurisé et accompagné. Devis gratuit.",
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
