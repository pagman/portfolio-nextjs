import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  tag: string;
  techStack: string[];
  gradientFrom?: string;
  gradientTo?: string;
  image?: string;
}

export function ProjectCard({
  id,
  title,
  description,
  tag,
  techStack,
  image,
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${id}`} className="group block h-full">
      <div className="bg-white/2 border border-white/6 rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:bg-white/4 hover:border-white/12 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40">
        {/* Image area */}
        <div className="w-full aspect-video relative overflow-hidden shrink-0 bg-white/3">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
            />
          ) : (
            <div className="absolute inset-6 bg-white/4 rounded-xl border border-white/5" />
          )}
        </div>

        {/* Content */}
        <div className="p-6 md:p-7 flex flex-col flex-1">
          <div className="flex items-start justify-between gap-4 mb-3">
            <span className="text-xs text-white/30 tracking-[0.15em] uppercase font-medium">
              {tag}
            </span>
            <ArrowUpRight
              size={15}
              className="text-white/20 group-hover:text-white/60 transition-colors shrink-0 mt-0.5"
            />
          </div>
          <h3 className="text-lg md:text-xl font-semibold mb-2 leading-snug">
            {title}
          </h3>
          <p className="text-white/40 text-sm leading-relaxed mb-5 flex-1">
            {description}
          </p>
          <div className="flex gap-1.5 flex-wrap">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs text-white/30 bg-white/4 border border-white/6 px-2.5 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
