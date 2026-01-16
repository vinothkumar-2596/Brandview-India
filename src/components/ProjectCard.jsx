import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <div className="group rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300">
      <div className="aspect-[4/3] relative">
        <img
          src={project.coverImage}
          alt={project.title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <span className="text-primary text-sm font-medium">{project.category}</span>
        <h3 className="text-xl font-semibold mt-2 mb-3">{project.title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">{project.excerpt}</p>
        <Link
          to={`/works/${project.slug}`}
          className="inline-flex items-center text-primary font-medium"
        >
          View Project
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
