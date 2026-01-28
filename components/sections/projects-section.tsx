"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/shared/section-header";
import { FilterTabs } from "@/components/shared/filter-tabs";
import { ProjectCard } from "@/components/shared/project-card";
import { projects, filterTabs } from "@/data/projects";

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <section id="projects" className="py-16 md:py-24 px-[5%] max-w-7xl mx-auto">
      <SectionHeader
        title="Featured Projects"
        subtitle="Explore my latest work across different platforms"
      />

      <FilterTabs
        tabs={filterTabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            tag={project.tag}
            techStack={project.techStack}
            gradientFrom={project.gradientFrom}
            gradientTo={project.gradientTo}
            image={project.images?.[0]}
          />
        ))}
      </div>
    </section>
  );
}
