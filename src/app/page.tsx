import type { Metadata } from "next";
import HomeClient from "@/components/business/HomeClient";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: `${SITE_NAME} — Sites web Essentiel & Pro pour freelances et PME`,
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: `${SITE_NAME} — Sites web Essentiel & Pro`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
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
