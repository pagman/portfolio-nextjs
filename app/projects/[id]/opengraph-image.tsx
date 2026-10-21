import { ImageResponse } from "next/og";
import { getProjectById, projects } from "@/data/projects";

export const alt = "mCubedDevLabs project";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

// Latin text only: the default next/og font has no Greek glyphs
export default async function Image({ params }: { params: Promise<{ id: string }> }) {
  const project = getProjectById((await params).id);
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
          background: `linear-gradient(135deg, ${project?.gradientFrom ?? "#0a0a0a"}, ${project?.gradientTo ?? "#0a0a0a"})`,
          color: "#ffffff",
        }}
      >
        <div style={{ fontSize: 32, opacity: 0.8 }}>{project?.tag ?? ""}</div>
        <div style={{ fontSize: 96, fontWeight: 900, marginTop: 16 }}>
          {project?.title ?? "mCubedDevLabs"}
        </div>
        <div style={{ fontSize: 32, marginTop: 40, opacity: 0.8 }}>
          {project?.techStack.slice(0, 4).join(" · ") ?? ""}
        </div>
        <div style={{ fontSize: 28, marginTop: "auto", opacity: 0.7 }}>mCubedDevLabs</div>
      </div>
    ),
    size
  );
}
