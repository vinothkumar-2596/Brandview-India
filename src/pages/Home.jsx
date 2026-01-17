import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CTASection from "@/components/CTASection";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Trophy,
  CheckCircle2,
  Play,
  MessageCircleQuestion,
  PenTool,
  Monitor,
  Target,
} from "lucide-react";
import { projects } from "@/content/projects";
import { blogPosts } from "@/content/blog";

const testimonialVideo = {
  title: "Collaboration in Action",
  image:
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&h=900&fit=crop",
};

const featuredTestimonial = {
  quote:
    "Working with BrandView India was a game-changer for our brand. Their creativity and strategic insights transformed our vision into a campaign that truly resonated with our audience. They listened, understood, and delivered beyond expectations.",
  name: "Max Palmer",
  role: "Marketing Director",
  avatar:
    "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=200&h=200&fit=crop&crop=faces",
};

const testimonialCards = [
  {
    quote:
      "The team brought fresh ideas and a level of passion we had not experienced before. They delivered a design that captured our essence perfectly.",
    name: "Kate Jacobs",
    role: "Head of Marketing",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=200&h=200&fit=crop&crop=faces",
  },
  {
    quote:
      "From start to finish, communication was clear and collaboration seamless. Their approach helped launch a product that looks amazing and performs even better.",
    name: "Bud Walker",
    role: "Brand Manager",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces",
  },
  {
    quote:
      "Working with BrandView India was a turning point. They reimagined how we tell our story, and every step felt intentional and collaborative.",
    name: "Lillian Austin",
    role: "Creative Lead",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop&crop=faces",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery & Briefing",
    description:
      "We begin by understanding your brand, goals, and challenges to set a strong foundation.",
    icon: MessageCircleQuestion,
  },
  {
    number: "02",
    title: "Research",
    description:
      "Our team explores market trends, audience insights, and creative opportunities.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Development",
    description:
      "With strategy in place, we design and build tailored solutions that align with your vision.",
    icon: Monitor,
  },
  {
    number: "04",
    title: "Delivery",
    description:
      "We finalize the project, ensuring quality results that help your brand grow and stand out.",
    icon: Target,
  },
];

const homeServices = [
  {
    title: "Branding & Identity",
    description:
      "We craft bold, memorable brand systems that set you apart and build trust.",
  },
  {
    title: "UI/UX Design",
    description:
      "User-first experiences that feel intuitive, elegant, and conversion-ready.",
  },
  {
    title: "Content Creation",
    description:
      "Strategic content that tells your story and connects with the right audience.",
  },
  {
    title: "Digital Marketing",
    description:
      "Data-driven campaigns that grow visibility, engagement, and revenue.",
  },
];

export default function Home() {
  const dynamicPhrases = [
    "Winning hearts and awards",
    "Curating unforgettable brand experiences",
    "Designing experiences that truly connect",
  ];
  const [activePhrase, setActivePhrase] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePhrase((prev) => (prev + 1) % dynamicPhrases.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [dynamicPhrases.length]);

  useEffect(() => {
    const nodes = document.querySelectorAll("[data-reveal]");
    if (!nodes.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.2 }
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);
  return (
    <div className="bg-[#f7f3ef]">
      <section id="home" className="pb-24 pt-28 sm:pb-28 sm:pt-32">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col items-center text-center reveal mt-12 mb-32" data-reveal>
              <h1 className="hero-title mt-6 max-w-5xl text-4xl font-semibold text-slate-900 tracking-tight sm:text-5xl lg:text-6xl lg:leading-[1]">
                <span className="hero-line hero-line-1 block">
                  We're a Global Branding Design Agency Curating Experiences That
                </span>
                <span className="hero-line hero-line-2 dynamic-phrase-wrap block">
                  <span
                    key={activePhrase}
                    className="dynamic-phrase-text text-[#C4B38D] font-bold"
                  >
                    {dynamicPhrases[activePhrase]}
                  </span>
                </span>
              </h1>
            </div>

            <div id="about" className="grid gap-8 lg:grid-cols-[1.2fr_1fr] items-center reveal reveal-delay-1" data-reveal>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">About</p>
                <h3 className="mt-4 text-2xl sm:text-3xl font-semibold text-slate-900">
                  We Create Strategic, Elegant Digital Experiences
                </h3>
                <p className="mt-4 text-slate-600">
                  At BrandView India, we focus on transforming ideas into premium digital
                  experiences. Our work combines clarity, storytelling, and performance.
                </p>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white"
                >
                  Let's Talk
                  <ArrowRight className="h-3 w-3" />
                </Link>
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
                  <img
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1000&h=750&fit=crop"
                    alt="Studio team"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between reveal" data-reveal>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                Selected Projects
              </p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-slate-900 select-none">
                Our Latest Work
              </h2>
            </div>
            <Link
              to="/works"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2 text-xs font-semibold text-white"
            >
              View All Works
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {projects.slice(0, 2).map((project) => {
              const tags = [
                project.category,
                project.services?.[1] ? project.services[1] : "Design",
              ];

              return (
                <article
                  key={project.slug}
                  className="group rounded-3xl border border-slate-100 bg-white shadow-sm overflow-hidden reveal"
                  data-reveal
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <Link
                      to={`/works/${project.slug}`}
                      className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-900 shadow-md transition hover:scale-105"
                      aria-label={`Open ${project.title}`}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        {tags.map((tag) => (
                          <span
                            key={`${project.slug}-${tag}`}
                            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {projects.slice(2, 3).map((project) => {
            const tags = [
              project.category,
              project.services?.[1] ? project.services[1] : "Design",
            ];

            return (
              <article
                key={project.slug}
                className="mt-6 group rounded-3xl border border-slate-100 bg-white shadow-sm overflow-hidden reveal"
                data-reveal
              >
                <div className="relative aspect-[16/7] overflow-hidden">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <Link
                    to={`/works/${project.slug}`}
                    className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-900 shadow-md transition hover:scale-105"
                    aria-label={`Open ${project.title}`}
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      {tags.map((tag) => (
                        <span
                          key={`${project.slug}-${tag}`}
                          className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section
        id="services"
        className="py-20 sm:py-28 bg-[#0b1220] text-white"
      >
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
          <div className="text-center reveal" data-reveal>
            <p className="text-xs uppercase tracking-[0.35em] text-white/70">
              Our Services
            </p>
            <h2 className="mt-4 text-4xl sm:text-5xl font-semibold leading-tight">
              What We Do Best
            </h2>
            <p className="mt-3 text-sm sm:text-base text-white/70">
              We are a full-service creative agency built for bold brands and ambitious ideas.
            </p>
          </div>
          <div className="mt-12 divide-y divide-white/10">
            {homeServices.map((service, index) => (
              <div
                key={service.title}
                className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between reveal"
                data-reveal
              >
                <div className="flex items-start gap-4">
                  <span className="text-sm text-white/70">{`(${String(
                    index + 1
                  ).padStart(2, "0")})`}</span>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-semibold">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm sm:text-base text-white/70 max-w-xl">
                      {service.description}
                    </p>
                  </div>
                </div>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-xs font-semibold text-slate-900 hover:bg-white/90"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] items-center">
            <div className="rounded-[28px] border border-white/80 bg-white/85 p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl">
              <h3 className="text-2xl font-semibold text-slate-900">
                Why Brands Trust Us
              </h3>
              <p className="mt-4 text-slate-600">
                We combine strategy, premium design, and measurable performance to build brands
                that win trust and loyalty.
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
            <div className="rounded-[28px] bg-[#0b1220] text-white p-8 shadow-[0_24px_60px_rgba(15,23,42,0.18)]">
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

      <section className="py-20 sm:py-24 bg-primary text-primary-foreground">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
          <div className="text-center reveal" data-reveal>
            <p className="text-xs uppercase tracking-[0.32em] text-white/70">
              Work Process
            </p>
            <h2 className="mt-4 text-4xl sm:text-5xl font-semibold">
              From Start to Finish
            </h2>
            <p className="mt-4 text-sm sm:text-base text-white/70">
              A refined workflow designed to deliver consistent, high-quality results.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="flex min-h-[240px] flex-col justify-between rounded-[24px] border border-white/15 bg-white/10 p-8 reveal"
                data-reveal
              >
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="text-sm text-white/75">{step.description}</p>
                </div>
                <div className="mt-8 flex items-center justify-between text-white/70">
                  <step.icon className="h-6 w-6" />
                  <span className="text-base font-semibold">{step.number}.</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
          <div className="max-w-2xl reveal" data-reveal>
            <p className="text-xs uppercase tracking-[0.32em] text-slate-500">
              Testimonials
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-slate-900">
              What Our Clients Say
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-500">
              Uncover the experiences that shaped groundbreaking campaigns and lasting
              partnerships.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
            <div className="relative overflow-hidden rounded-3xl bg-slate-200 shadow-sm reveal" data-reveal>
              <img
                src={testimonialVideo.image}
                alt={testimonialVideo.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-secondary/70" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                <p className="text-lg font-semibold">{testimonialVideo.title}</p>
                <button
                  type="button"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-md"
                  aria-label="Play testimonial video"
                >
                  <Play className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="rounded-3xl bg-secondary p-8 text-white shadow-sm reveal" data-reveal>
              <p className="text-base sm:text-lg leading-relaxed">
                "{featuredTestimonial.quote}"
              </p>
              <div className="mt-8 flex items-center gap-4">
                <img
                  src={featuredTestimonial.avatar}
                  alt={featuredTestimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-semibold">{featuredTestimonial.name}</p>
                  <p className="text-xs text-white/70">{featuredTestimonial.role}</p>
                </div>
                <span className="ml-auto text-4xl font-semibold text-white/30">"</span>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonialCards.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-sm reveal"
                data-reveal
              >
                <p className="text-sm text-slate-600 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="h-10 w-10 rounded-full object-cover"
                      loading="lazy"
                    />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-slate-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <span className="text-3xl font-semibold text-primary">"</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between reveal" data-reveal>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                Blog & News
              </p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-slate-900">
                Our Latest Blogs & News
              </h2>
            </div>
            <Link
              to="/blog"
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
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
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
    </div>
  );
}


