import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Github, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/layout/navbar";
import { projects, getProjectById } from "@/data/projects";
import type { Metadata } from "next";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | YourName`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section
          className="relative min-h-[60vh] flex items-center justify-center px-[5%] overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${project.gradientFrom}20 0%, ${project.gradientTo}20 100%)`,
          }}
        >
          {/* Background gradient orbs */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute w-[600px] h-[600px] rounded-full blur-[150px] opacity-30"
              style={{
                background: project.gradientFrom,
                left: "10%",
                top: "20%",
              }}
            />
            <div
              className="absolute w-[400px] h-[400px] rounded-full blur-[120px] opacity-20"
              style={{
                background: project.gradientTo,
                right: "10%",
                bottom: "10%",
              }}
            />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            {/* Back button */}
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-white transition-colors mb-8"
            >
              <ArrowLeft size={20} />
              Back to Projects
            </Link>

            {/* Tag */}
            <Badge
              className="mb-6 text-sm px-4 py-1"
              style={{
                background: `linear-gradient(135deg, ${project.gradientFrom} 0%, ${project.gradientTo} 100%)`,
                color: "white",
              }}
            >
              {project.tag}
            </Badge>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {project.title}
            </h1>

            {/* Short description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              {project.description}
            </p>

            {/* Meta info */}
            <div className="flex items-center justify-center gap-6 flex-wrap text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{project.year}</span>
              </div>
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{project.role}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Device Mockup Section */}
        <section className="px-[5%] -mt-16 relative z-20 max-w-5xl mx-auto">
          <div
            className="rounded-2xl overflow-hidden shadow-2xl aspect-video flex items-center justify-center relative"
            style={{
              background: `linear-gradient(135deg, ${project.gradientFrom} 0%, ${project.gradientTo} 100%)`,
            }}
          >
            {project.images?.[0] ? (
              <Image
                src={project.images[0]}
                alt={project.title}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-[80%] h-[85%] bg-white rounded-lg shadow-xl" />
            )}
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24 px-[5%] max-w-4xl mx-auto">
          {/* Tech Stack */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-4">Tech Stack</h2>
            <div className="flex gap-2 flex-wrap">
              {project.techStack.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="px-4 py-2 text-sm bg-card border-border hover:border-primary/50 transition-colors"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Full Description */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-4">Overview</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {project.fullDescription}
            </p>
          </div>

          {/* Features */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-4">Key Features</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border"
                >
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      background: `linear-gradient(135deg, ${project.gradientFrom} 0%, ${project.gradientTo} 100%)`,
                    }}
                  >
                    <span className="text-white text-xs font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges & Solutions */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-4">
              Challenges & Solutions
            </h2>
            <div className="p-6 bg-card rounded-xl border border-border">
              <p className="text-muted-foreground leading-relaxed">
                {project.challenges}
              </p>
            </div>
          </div>

          {/* Outcome */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-4">Results & Impact</h2>
            <div
              className="p-6 rounded-xl"
              style={{
                background: `linear-gradient(135deg, ${project.gradientFrom}15 0%, ${project.gradientTo}15 100%)`,
                borderLeft: `4px solid ${project.gradientFrom}`,
              }}
            >
              <p className="text-foreground leading-relaxed">
                {project.outcome}
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 flex-wrap">
            {project.liveUrl && (
              <Button
                asChild
                size="lg"
                className="gradient-bg hover:opacity-90 transition-opacity text-white font-semibold px-8 rounded-full"
              >
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink size={18} />
                  View Live Demo
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white/20 hover:bg-white/5 px-8 rounded-full"
              >
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github size={18} />
                  View Source Code
                </a>
              </Button>
            )}
          </div>
        </section>

        {/* More Projects Section */}
        <section className="py-16 px-[5%] border-t border-border">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">
              Interested in working together?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let&apos;s discuss your next project and create something amazing.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button
                asChild
                size="lg"
                className="gradient-bg hover:opacity-90 transition-opacity text-white font-semibold px-8 rounded-full"
              >
                <Link href="/#contact">Get in Touch</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white/20 hover:bg-white/5 px-8 rounded-full"
              >
                <Link href="/#projects">View More Projects</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
