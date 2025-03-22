import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Toma Chang - CodeByToma",
  description:
    "Bienvenue sur mon portfolio, je suis un développeur full-stack spécialisé dans la création d'applications web modernes et performantes.",
  authors: [{ name: "Toma Chang", url: "https://github.com/CHANG-Toma" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* SEO */}
        <title>Toma Chang - Développeur Full-Stack</title>
        <meta
          name="description"
          content="Bienvenue sur mon portfolio, je suis un développeur full-stack spécialisé dans la création d'applications web modernes et performantes."
        />
        <meta name="author" content="Toma Chang" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
