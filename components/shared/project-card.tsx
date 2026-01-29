import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  tag: string;
  techStack: string[];
  gradientFrom: string;
  gradientTo: string;
  image?: string;
}

export function ProjectCard({
  id,
  title,
  description,
  tag,
  techStack,
  gradientFrom,
  gradientTo,
  image,
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${id}`}>
      <Card className="bg-card border-border rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 h-full">
        <CardHeader className="p-0">
          <div
            className="w-full aspect-video flex items-center justify-center relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
            }}
          >
            {image ? (
              <Image
                src={image}
                alt={title}
                fill
                className="object-contain"
              />
            ) : (
              <div className="w-[70%] h-[80%] bg-white rounded-lg shadow-xl" />
            )}
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-all duration-300" />
          </div>
        </CardHeader>
        <CardContent className="p-6 md:p-8">
          <Badge
            variant="secondary"
            className="mb-3 bg-accent text-accent-foreground font-medium"
          >
            {tag}
          </Badge>
          <h3 className="text-xl md:text-2xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            {description}
          </p>
        </CardContent>
        <CardFooter className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
          <div className="flex gap-2 flex-wrap">
            {techStack.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="bg-muted text-muted-foreground border-none text-xs md:text-sm"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
