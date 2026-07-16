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
    default: "CodeByToma — Sites web & accompagnement pour indépendants & PME",
    template: "%s | CodeByToma",
  },
  description:
    "CodeByToma crée et maintient votre présence en ligne : sites vitrines, offres Business et solutions sur mesure. Partenaire digital des indépendants et PME.",
  authors: [{ name: "Toma Chang", url: "https://www.codebytoma.dev" }],
  keywords: [
    "CodeByToma",
    "création site web",
    "auto-entreprise",
    "site vitrine",
    "indépendants",
    "PME",
    "développement web",
    "Toma Chang",
  ],
  openGraph: {
    title: "CodeByToma — Sites web & accompagnement digital",
    description:
      "Votre présence en ligne, sans contrainte technique. Sites, maintenance et outils sur mesure.",
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
