import { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { siteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  // ponytail: build date as lastmod (static site = deploy date); per-page dates if content updates diverge
  const lastModified = new Date();
  return [
    { url: siteUrl, lastModified },
    ...services.map((s) => ({ url: `${siteUrl}/services/${s.slug}`, lastModified })),
    ...projects.map((p) => ({ url: `${siteUrl}/projects/${p.id}`, lastModified })),
  ];
}
