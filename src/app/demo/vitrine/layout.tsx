import type { CSSProperties, ReactNode } from "react";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-vitrine-body",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Aria Coach — Démo Site Vitrine",
  description:
    "Exemple CodeByToma : site vitrine coaching — création 149 €, abonnement dès 49 €/mois.",
  robots: { index: false, follow: false },
};

const themeVars = {
  ["--vk-bg"]: "#f3f6ff",
  ["--vk-ink"]: "#12141c",
  ["--vk-muted"]: "#5c6478",
  ["--vk-accent"]: "#ff4f2e",
  ["--vk-blue"]: "#4f6ef7",
  ["--vk-mint"]: "#b8f2d8",
  ["--vk-surface"]: "#ffffff",
} as CSSProperties;

export default function VitrineDemoLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div
      className={`${outfit.variable} font-[family-name:var(--font-vitrine-body)]`}
      style={themeVars}
    >
      {children}
    </div>
  );
}
