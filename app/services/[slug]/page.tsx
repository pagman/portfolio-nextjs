import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/shared/project-card";
import { services, getServiceBySlug, getServiceProjects } from "@/data/services";
import { siteUrl } from "@/lib/utils";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = getServiceBySlug((await params).slug);
  if (!service) return {};
  const url = `/services/${service.slug}`;
  return {
    title: service.metaTitle,
    description: service.description,
    alternates: { canonical: url },
    openGraph: {
      title: service.metaTitle,
      description: service.description,
      type: "website",
      locale: "el_GR",
      url,
      siteName: "mCubedDevLabs",
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.description,
      images: ["/opengraph-image"],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug((await params).slug);
  if (!service) notFound();
  const related = getServiceProjects(service);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    url: `${siteUrl}/services/${service.slug}`,
    serviceType: service.title,
    areaServed: { "@type": "Country", name: "Ελλάδα" },
    provider: { "@id": `${siteUrl}/#organization` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="pt-32 px-[5%] max-w-5xl mx-auto">
        <nav className="text-sm text-white/40 mb-8">
          <Link href="/" className="hover:text-white">Αρχική</Link> /{" "}
          <Link href="/#services" className="hover:text-white">Υπηρεσίες</Link>
        </nav>

        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-8 gradient-text">
          {service.title}
        </h1>
        <div className="space-y-4 text-white/60 text-lg leading-relaxed mb-16 max-w-3xl">
          {service.intro.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-6">Τι περιλαμβάνει</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {service.includes.map((item) => (
            <li key={item} className="p-4 bg-card rounded-xl border border-border text-muted-foreground">
              {item}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold mb-6">Τεχνολογίες</h2>
        <p className="text-white/60 mb-16">{service.tech.join(" · ")}</p>

        {related.length > 0 && (
          <>
            <h2 className="text-2xl font-bold mb-6">Σχετικά έργα</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {related.map((p) => (
                <ProjectCard
                  key={p.id}
                  id={p.id}
                  title={p.title}
                  description={p.description}
                  tag={p.tag}
                  techStack={p.techStack}
                  image={p.images?.[0]}
                />
              ))}
            </div>
          </>
        )}

        <section className="py-16 border-t border-border text-center">
          <h2 className="text-2xl font-bold mb-4">Ας συζητήσουμε το project σας</h2>
          <Button asChild size="lg" className="gradient-bg text-white font-semibold px-8 rounded-full">
            <Link href="/#contact">Επικοινωνήστε</Link>
          </Button>
        </section>
      </main>
    </>
  );
}
