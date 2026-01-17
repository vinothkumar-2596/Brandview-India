import { useState } from "react";
import FilterBar from "@/components/FilterBar";
import ProjectCard from "@/components/ProjectCard";
import CTASection from "@/components/CTASection";
import { projects } from "@/content/projects";

const categories = ["All", ...new Set(projects.map((project) => project.category))];

export default function WorksPage() {
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleFilter = (category) => {
    if (category === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter((project) => project.category === category));
    }
  };

  return (
    <>
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-background" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              Our Works
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mt-4 mb-6">
              Crafting Digital Excellence
            </h1>
            <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed">
              Explore our portfolio of successful projects that have helped brands achieve their
              goals and make an impact.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FilterBar categories={categories} onFilter={handleFilter} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
