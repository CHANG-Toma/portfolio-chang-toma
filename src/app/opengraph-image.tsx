import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/seo";

export const runtime = "edge";
export const alt = "CodeByToma — Création de sites web sur-mesure";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: "linear-gradient(145deg, #020c1b 0%, #0a192f 45%, #112240 100%)",
          color: "#e6f1ff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#8892b0",
            fontWeight: 600,
          }}
        >
          {SITE_NAME}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              fontSize: 58,
              fontWeight: 700,
              lineHeight: 1.1,
              maxWidth: 900,
            }}
          >
            Une présence en ligne professionnelle, qui grandit avec vous
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              color: "#8892b0",
              maxWidth: 820,
              lineHeight: 1.35,
            }}
          >
            Sites dès 590 € · Abonnement dès 29 €/mois · Devis gratuit
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "#8892b0",
          }}
        >
          <span>www.codebytoma.dev</span>
          <span
            style={{
              display: "flex",
              padding: "10px 18px",
              borderRadius: 8,
              background: "#e6f1ff",
              color: "#020c1b",
              fontWeight: 600,
              fontSize: 20,
            }}
          >
            Devis gratuit
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
