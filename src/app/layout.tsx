import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Toma Chang - Développeur Full-Stack",
  description:
    "Bienvenue sur mon portfolio, je suis un développeur full-stack spécialisé dans la création d'applications web modernes et performantes.",
  authors: [{ name: "Toma Chang", url: "https://github.com/CHANG-Toma" }],
  keywords: [
    "Développeur Full-Stack",
    "CodeByToma",
    "Portfolio",
    "Projet",
    "Contact",
    "Développeur",
    "Full-Stack",
    "CHANG Toma",
    "toma chang",
    "toma",
    "chang",
    "toma chang portfolio",
    "toma chang github",
    "toma chang linkedin",
    "toma chang instagram",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SpeedInsights />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
