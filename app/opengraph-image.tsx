import { ImageResponse } from "next/og";

export const alt = "mCubedDevLabs - Full-Stack Development & UI/UX Design";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Latin text only: the default next/og font has no Greek glyphs
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0a0a",
          color: "#ffffff",
        }}
      >
        <div style={{ fontSize: 96, fontWeight: 900, color: "#00AFC0" }}>
          mCubedDevLabs
        </div>
        <div style={{ fontSize: 44, marginTop: 24 }}>
          Full-Stack Development & UI/UX Design
        </div>
        <div style={{ fontSize: 32, marginTop: 40, color: "rgba(255,255,255,0.5)" }}>
          React · Next.js · Flutter · WordPress
        </div>
      </div>
    ),
    size
  );
}
