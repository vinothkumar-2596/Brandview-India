import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <Link href={`/works/${project.slug}`} className="group block">
      <div className="relative overflow-hidden rounded-2xl bg-card border border-white/10">
        <div className="aspect-[4/3] relative">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center text-white font-medium">
              View Case Study
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </div>
          </div>
        </div>
        <div className="p-6">
          <span className="text-primary text-sm font-medium">{project.category}</span>
          <h3 className="text-xl font-semibold mt-2 mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground line-clamp-2">{project.excerpt}</p>
        </div>
      </div>
    </Link>
  );
}