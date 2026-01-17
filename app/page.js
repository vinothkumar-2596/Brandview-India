"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Award,
  Trophy,
  CheckCircle2,
} from "lucide-react";
import CTASection from "@/components/CTASection";
import { services } from "@/content/services";
import { projects } from "@/content/projects";
import { blogPosts } from "@/content/blog";

const testimonials = [
  {
    quote:
      "BrandView India transformed our brand completely. Their creativity and attention to detail exceeded all expectations. The results speak for themselves.",
    name: "Jennifer Adams",
    role: "CEO, TechStart Inc.",
  },
  {
    quote:
      "Working with BrandView India was a game-changer for our business. They don't just deliver projects, they deliver results that matter.",
    name: "Michael Chen",
    role: "Founder, Verde Fashion",
  },
  {
    quote:
      "The team's professionalism and creative vision helped us stand out in a crowded market. Highly recommend their services.",
    name: "Sarah Williams",
    role: "Marketing Director, Pulse Health",
  },
];

const clientLogos = [
  "Acme Corp",
  "TechVista",
  "Nexus Labs",
  "Quantum AI",
  "Vertex Inc",
  "Prism Co",
];

const processSteps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description:
      "We dive deep into your brand, goals, and audience to craft a clear strategic roadmap.",
  },
  {
    number: "02",
    title: "Design & Identity",
    description:
      "Our team creates refined visual systems and experiences that feel premium and purposeful.",
  },
  {
    number: "03",
    title: "Build & Launch",
    description:
      "We bring designs to life with clean, scalable builds and launch with confidence.",
  },
  {
    number: "04",
    title: "Scale & Optimize",
    description:
      "Post-launch, we iterate, optimize, and help your brand grow with measurable impact.",
  },
];

export default function HomePage() {
  return (
    <>
      <section
        id="home"
        className="bg-white pb-16 pt-28 sm:pb-20 sm:pt-32"
      >
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col items-center text-center">
              <h1 className="mt-6 text-5xl font-semibold text-slate-900 sm:text-6xl lg:text-[96px] lg:leading-[1.05]">
                BrandView India
              </h1>
              <p className="mt-6 max-w-2xl text-base text-slate-600 sm:text-lg">
                We build premium brand experiences, digital platforms, and campaigns that
                connect ambitious brands with their audience.
              </p>
            </div>

            <div className="rounded-[36px] bg-secondary px-6 py-10 text-white shadow-2xl sm:px-10 sm:py-12">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {["Branding", "Web Design", "Digital Marketing", "Social Media"].map((label) => (
                  <span
                    key={label}
                    className="flex w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-2 text-xs font-semibold text-white/80"
                  >
                    {label}
                  </span>
                ))}
              </div>
              <div className="mt-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                    Welcome to BrandView India
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
                    We Build Brands That
                    <span className="block">Break the Mold.</span>
                  </h2>
                </div>
                <Button className="rounded-full bg-white px-6 text-slate-900 hover:bg-white/90">
                  Start a Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-white/70">
                {clientLogos.map((logo) => (
                  <span key={logo} className="uppercase tracking-[0.2em]">
                    {logo}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">About</p>
                <h3 className="mt-4 text-2xl sm:text-3xl font-semibold text-slate-900">
                  We Create Strategic, Elegant Digital Experiences
                </h3>
                <p className="mt-4 text-slate-600">
                  At BrandView India, we focus on transforming ideas into premium digital
                  experiences. Our work combines clarity, storytelling, and performance.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <div className="rounded-2xl bg-white px-5 py-4 shadow-sm border border-slate-100">
                    <p className="text-xl font-semibold text-slate-900">25K+</p>
                    <p className="text-xs text-slate-500">Audience Reached</p>
                  </div>
                  <div className="rounded-2xl bg-white px-5 py-4 shadow-sm border border-slate-100">
                    <p className="text-xl font-semibold text-slate-900">18+</p>
                    <p className="text-xs text-slate-500">Years of Experience</p>
                  </div>
                  <div className="rounded-2xl bg-white px-5 py-4 shadow-sm border border-slate-100">
                    <p className="text-xl font-semibold text-slate-900">99%</p>
                    <p className="text-xs text-slate-500">Client Satisfaction</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden border border-slate-100 bg-white shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1000&h=750&fit=crop"
                    alt="Studio team"
                    width={720}
                    height={520}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                Selected Projects
              </p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-slate-900">
                Our Latest Work
              </h2>
            </div>
            <Link
              href="/works"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2 text-xs font-semibold text-white"
            >
              View All Works
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.slice(0, 3).map((project) => (
              <article
                key={project.slug}
                className="group rounded-3xl border border-slate-100 bg-white shadow-sm overflow-hidden"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    {project.category}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-slate-900">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">{project.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="services"
        className="py-16 sm:py-20 bg-secondary text-white"
      >
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">
              What We Do Best
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">
              Premium Creative Services
            </h2>
          </div>
          <div className="mt-10 divide-y divide-white/10">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-start gap-4">
                  <span className="text-xs text-white/60">{`(${String(
                    index + 1
                  ).padStart(2, "0")})`}</span>
                  <div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="mt-2 text-sm text-white/70">
                      {service.description}
                    </p>
                  </div>
                </div>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-xs font-semibold text-white/80 hover:bg-white/10"
                >
                  Learn More
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] items-center">
            <div className="rounded-3xl border border-slate-100 bg-white shadow-sm p-8">
              <h3 className="text-2xl font-semibold text-slate-900">
                Why Brands Trust Us
              </h3>
              <p className="mt-4 text-slate-600">
                We combine strategy, premium design, and measurable performance to build
                brands that win trust and loyalty.
              </p>
              <div className="mt-6 space-y-3 text-sm text-slate-600">
                {[
                  "Dedicated senior-led teams",
                  "Transparent timelines and reporting",
                  "Award-winning creative direction",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl bg-slate-900 text-white p-8">
              <div className="flex items-center gap-3">
                <Trophy className="h-6 w-6 text-white/70" />
                <h4 className="text-lg font-semibold">Award-Winning Work</h4>
              </div>
              <p className="mt-3 text-sm text-white/70">
                Recognized across design, branding, and digital experiences.
              </p>
              <div className="mt-6 space-y-4 text-sm text-white/70">
                {projects.slice(0, 3).map((project) => (
                  <div key={project.slug} className="flex items-start gap-3">
                    <Award className="h-4 w-4 text-white/60 mt-0.5" />
                    <div>
                      <p className="text-white">{project.title}</p>
                      <p className="text-xs text-white/60">{project.client}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex gap-4 text-xs text-white/70">
                <div>
                  <p className="text-xl font-semibold text-white">40+</p>
                  <p>Industry Awards</p>
                </div>
                <div>
                  <p className="text-xl font-semibold text-white">120+</p>
                  <p>Launches</p>
                </div>
                <div>
                  <p className="text-xl font-semibold text-white">5x</p>
                  <p>Client Growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-secondary text-white">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">
              From Start to Finish
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">
              A Process Built For Scale
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <p className="text-xs text-white/50">{step.number}</p>
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-white/70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Testimonials
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-slate-900">
              What Our Clients Say
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm"
              >
                <p className="text-sm text-slate-600 leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="mt-6">
                  <p className="text-sm font-semibold text-slate-900">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                Blog & News
              </p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-slate-900">
                Our Latest Blogs & News
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2 text-xs font-semibold text-white"
            >
              All Blog
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => (
              <article
                key={post.slug}
                className="rounded-3xl border border-slate-100 bg-white shadow-sm overflow-hidden"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-flex rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600">
                    {post.category}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-500">
                    by {post.author} · {post.date}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <CTASection />
      </section>
    </>
  );
}







