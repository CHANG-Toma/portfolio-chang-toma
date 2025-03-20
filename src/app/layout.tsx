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
  title: "Toma Chang",
  description: "Développeur Full-Stack",
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
          content="Portfolio de Toma Chang, Développeur Full-Stack spécialisé dans la création d'applications web modernes et performantes."
        />
        <meta name="author" content="Toma Chang" />

        {/* Importation du css */}
        <link rel="stylesheet" href="./globals.css" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
