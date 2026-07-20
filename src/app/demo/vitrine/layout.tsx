import type { CSSProperties, ReactNode } from "react";
import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-aria-display",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const body = Outfit({
  subsets: ["latin"],
  variable: "--font-aria-body",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Aria Coach — Démo Site Vitrine",
  description:
    "Exemple CodeByToma : site vitrine coaching — création 149 €, abonnement dès 49 €/mois.",
  robots: { index: false, follow: false },
};

/** Studio éditorial — encre, lin, accent feuille. */
const themeVars = {
  ["--vk-bg"]: "#e9ebe6",
  ["--vk-ink"]: "#1a1f1c",
  ["--vk-muted"]: "#5c645e",
  ["--vk-accent"]: "#3d5c48",
  ["--vk-line"]: "rgba(26, 31, 28, 0.12)",
  ["--vk-surface"]: "#f4f5f1",
  ["--vk-deep"]: "#121612",
} as CSSProperties;

export default function VitrineDemoLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div
      className={`${display.variable} ${body.variable} font-[family-name:var(--font-aria-body)]`}
      style={themeVars}
    >
      {children}
    </div>
  );
}
