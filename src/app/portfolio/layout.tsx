import type { Metadata } from "next";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo";

const description =
  "Portfolio de Toma Chang (CodeByToma) : parcours, projets et compétences Full-Stack.";

export const metadata: Metadata = {
  title: "Portfolio — Toma Chang",
  description,
  alternates: {
    canonical: `${SITE_URL}/portfolio`,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: SITE_NAME,
    title: "Portfolio — Toma Chang",
    description,
    url: `${SITE_URL}/portfolio`,
    images: [
      {
        url: OG_IMAGE.url,
        width: OG_IMAGE.width,
        height: OG_IMAGE.height,
        alt: OG_IMAGE.alt,
        type: OG_IMAGE.type,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio — Toma Chang",
    description,
    images: [OG_IMAGE.url],
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
