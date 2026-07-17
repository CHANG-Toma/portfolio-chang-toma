import type { Metadata } from "next";
import HomeClient from "@/components/business/HomeClient";
import JsonLd from "@/components/seo/JsonLd";
import {
  OG_IMAGE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE_HOME,
  SITE_URL,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: SITE_TITLE_HOME,
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: SITE_NAME,
    title: SITE_TITLE_HOME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
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
    title: SITE_TITLE_HOME,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <HomeClient />
    </>
  );
}
