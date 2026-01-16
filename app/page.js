import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Users, Award, Briefcase } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import TestimonialCard from '@/components/TestimonialCard';
import BlogCard from '@/components/BlogCard';
import CTASection from '@/components/CTASection';
import { services } from '@/content/services';
import { projects } from '@/content/projects';
import { blogPosts } from '@/content/blog';

const testimonials = [
  {
    quote: "Zesty transformed our brand completely. Their creativity and attention to detail exceeded all expectations. The results speak for themselves.",
    name: "Jennifer Adams",
    role: "CEO, TechStart Inc."
  },
  {
    quote: "Working with Zesty was a game-changer for our business. They don't just deliver projects, they deliver results that matter.",
    name: "Michael Chen",
    role: "Founder, Verde Fashion"
  },
  {
    quote: "The team's professionalism and creative vision helped us stand out in a crowded market. Highly recommend their services.",
    name: "Sarah Williams",
    role: "Marketing Director, Pulse Health"
  }
];

const clientLogos = ['Acme Corp', 'TechVista', 'Nexus Labs', 'Quantum AI', 'Vertex Inc', 'Prism Co'];

const processSteps = [
  { number: '01', title: 'Discover', description: 'We dive deep into your brand, goals, and audience to understand the full picture.' },
  { number: '02', title: 'Design', description: 'Our team crafts beautiful, purposeful designs that align with your vision.' },
  { number: '03', title: 'Develop', description: 'We bring designs to life with clean, scalable, and performant code.' },
  { number: '04', title: 'Launch', description: 'We deploy, optimize, and ensure everything runs smoothly from day one.' }
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Sparkles className="h-4 w-4 mr-2" />
                Award-Winning Creative Agency
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
                We Create Digital
                <span className="text-gradient"> Experiences</span> That Matter
              </h1>
              <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed mb-8">
                Transform your brand with our expert design and development services. We help ambitious companies build remarkable digital products.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg">
                    Start a Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/works">
                  <Button variant="outline" className="rounded-full px-8 py-6 text-lg border-white/20 hover:bg-white/5">
                    View Works
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="aspect-square relative">
                <Image
                  src="https://images.unsplash.com/photo-1557682268-e3955ed5d83f?w=600&h=600&fit=crop"
                  alt="Creative Design"
                  fill
                  className="object-cover rounded-3xl"
                  priority
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary/30 to-transparent" />
              </div>
            </div>
          </div>

          {/* Trust Row */}
          <div className="mt-16 pt-16 border-t border-white/10">
            <p className="text-muted-foreground text-sm text-center mb-8">Trusted by innovative companies</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {clientLogos.map((logo) => (
                <span key={logo} className="text-muted-foreground/50 text-lg font-semibold">
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Services"
            title="Crafting Digital Excellence"
            description="We offer comprehensive creative services to help your brand thrive in the digital landscape."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 sm:py-20 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1560714443-d7c7a6d62ea4?w=800&h=600&fit=crop"
                  alt="Our Team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/20 rounded-2xl -z-10" />
            </div>
            <div>
              <span className="text-primary text-sm font-medium tracking-wider uppercase">About Us</span>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mt-4 mb-6">
                We're a Team of Creative Problem Solvers
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                With over a decade of experience, we've helped hundreds of brands achieve their digital potential. Our passion for design and technology drives us to create exceptional experiences.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="flex items-center text-3xl font-bold text-gradient">
                    <Briefcase className="h-6 w-6 text-primary mr-2" />
                    200+
                  </div>
                  <p className="text-muted-foreground text-sm mt-1">Projects</p>
                </div>
                <div>
                  <div className="flex items-center text-3xl font-bold text-gradient">
                    <Users className="h-6 w-6 text-primary mr-2" />
                    50+
                  </div>
                  <p className="text-muted-foreground text-sm mt-1">Clients</p>
                </div>
                <div>
                  <div className="flex items-center text-3xl font-bold text-gradient">
                    <Award className="h-6 w-6 text-primary mr-2" />
                    15+
                  </div>
                  <p className="text-muted-foreground text-sm mt-1">Awards</p>
                </div>
              </div>
              <Link href="/about">
                <Button variant="outline" className="rounded-full px-6 border-white/20 hover:bg-white/5">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12">
            <SectionHeading
              label="Our Works"
              title="Featured Projects"
              description="Explore our portfolio of successful projects that have helped brands grow."
              centered={false}
            />
            <Link href="/works" className="mt-4 sm:mt-0">
              <Button variant="outline" className="rounded-full px-6 border-white/20 hover:bg-white/5">
                View All Works
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 6).map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-20 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Process"
            title="How We Work"
            description="Our proven process ensures every project is delivered with excellence and efficiency."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={step.number} className="relative p-6 rounded-2xl border border-white/10 bg-background">
                <span className="text-5xl font-bold text-primary/20">{step.number}</span>
                <h3 className="text-xl font-semibold mt-4 mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[2px] bg-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Testimonials"
            title="What Our Clients Say"
            description="Don't just take our word for it. Here's what our clients have to say about working with us."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-16 sm:py-20 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12">
            <SectionHeading
              label="Our Blog"
              title="Latest Insights"
              description="Stay updated with the latest trends, tips, and insights from our team."
              centered={false}
            />
            <Link href="/blog" className="mt-4 sm:mt-0">
              <Button variant="outline" className="rounded-full px-6 border-white/20 hover:bg-white/5">
                View All Posts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}