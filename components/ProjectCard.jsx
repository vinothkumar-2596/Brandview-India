import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <Link href={`/works/${project.slug}`} className="group block">
      <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl hover:border-primary/30 transition-all duration-300">
        <div className="aspect-[4/3] relative">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center text-white font-medium bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full border border-white/20">
              View Case Study
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </div>
          </div>
        </div>
        <div className="p-6 bg-white/5 backdrop-blur-sm">
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