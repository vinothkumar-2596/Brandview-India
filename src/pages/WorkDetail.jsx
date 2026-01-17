import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, User, Layers } from "lucide-react";
import CTASection from "@/components/CTASection";
import { projects } from "@/content/projects";
import NotFound from "@/pages/NotFound";

export default function WorkDetailPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <NotFound />;
  }

  const currentIndex = projects.findIndex((item) => item.slug === slug);
  const prevProject = projects[currentIndex - 1];
  const nextProject = projects[currentIndex + 1];

  return (
    <>
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-background" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link
            to="/works"
            className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Works
          </Link>
          <div className="max-w-3xl">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              {project.category}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mt-4 mb-6">
              {project.title}
            </h1>
            <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed mb-8">
              {project.excerpt}
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center">
                <User className="h-5 w-5 text-primary mr-2" />
                <span className="text-muted-foreground">Client: {project.client}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-primary mr-2" />
                <span className="text-muted-foreground">Timeline: {project.timeline}</span>
              </div>
              <div className="flex items-center">
                <Layers className="h-5 w-5 text-primary mr-2" />
                <span className="text-muted-foreground">
                  Services: {project.services.join(", ")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-video relative rounded-2xl overflow-hidden">
            <img
              src={project.coverImage}
              alt={project.title}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6">The Challenge</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {project.client} approached us with a complex challenge that required innovative
              thinking and strategic execution. They needed to differentiate themselves in a
              competitive market while maintaining their core values and connecting with their
              target audience on a deeper level.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Our Solution</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We developed a comprehensive strategy that addressed their unique needs. Our team
              conducted extensive research, created multiple design iterations, and collaborated
              closely with the client to ensure the final deliverables exceeded expectations. The
              solution combined cutting-edge design with practical functionality.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6">The Results</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {project.results.map((result, index) => (
                <div key={index} className="p-6 rounded-2xl border border-white/10 bg-card text-center">
                  <p className="text-lg font-medium">{result}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Project Gallery</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[4/3] relative rounded-xl overflow-hidden">
                <img
                  src={project.coverImage}
                  alt={`${project.title} - Image 1`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="aspect-[4/3] relative rounded-xl overflow-hidden">
                <div className="w-full h-full bg-accent/40" />
              </div>
              <div className="aspect-[4/3] relative rounded-xl overflow-hidden col-span-2">
                <div className="w-full h-full bg-accent/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between">
            {prevProject ? (
              <Link to={`/works/${prevProject.slug}`} className="group">
                <span className="text-muted-foreground text-sm">Previous Project</span>
                <div className="flex items-center mt-1 group-hover:text-primary transition-colors">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  <span className="font-semibold">{prevProject.title}</span>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {nextProject && (
              <Link to={`/works/${nextProject.slug}`} className="group text-right">
                <span className="text-muted-foreground text-sm">Next Project</span>
                <div className="flex items-center justify-end mt-1 group-hover:text-primary transition-colors">
                  <span className="font-semibold">{nextProject.title}</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </Link>
            )}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
