import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { Palette, Monitor, Figma, Code, ArrowRight } from "lucide-react";

const detailedServices = [
  {
    id: "branding",
    title: "Brand Identity",
    description:
      "We create compelling brand identities that resonate with your audience and set you apart from the competition.",
    icon: "Palette",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Visual Identity",
      "Brand Strategy",
      "Naming & Messaging",
      "Brand Collateral",
    ],
  },
  {
    id: "web-design",
    title: "Web Design",
    description:
      "Beautiful, responsive websites that deliver exceptional user experiences and drive conversions.",
    icon: "Monitor",
    features: [
      "Responsive Design",
      "Landing Pages",
      "E-commerce",
      "WordPress",
      "Webflow",
      "Design Systems",
    ],
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    description:
      "User-centered design solutions that combine aesthetics with functionality for seamless interactions.",
    icon: "Figma",
    features: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Usability Testing",
      "Interface Design",
      "Design Sprints",
    ],
  },
  {
    id: "development",
    title: "Web Development",
    description:
      "Robust, scalable web applications built with cutting-edge technologies and best practices.",
    icon: "Code",
    features: [
      "Frontend Development",
      "Backend Development",
      "API Integration",
      "CMS Development",
      "Performance Optimization",
      "Maintenance",
    ],
  },
];

const iconMap = {
  Palette: Palette,
  Monitor: Monitor,
  Figma: Figma,
  Code: Code,
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-background" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mt-4 mb-6">
              Creative Solutions for Modern Brands
            </h1>
            <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed">
              From brand strategy to digital execution, we offer comprehensive services to help
              your business thrive in the digital age.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {detailedServices.map((service, index) => {
              const Icon = iconMap[service.icon] || Palette;
              return (
                <div
                  key={service.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center">
                          <ArrowRight className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="aspect-[4/3] rounded-2xl bg-accent/40 border border-white/10 flex items-center justify-center">
                      <Icon className="h-32 w-32 text-primary/30" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="How It Works"
            title="Our Proven Process"
            description="We follow a structured approach to ensure every project delivers outstanding results."
          />
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "Understanding your goals, audience, and competition.",
              },
              { step: "02", title: "Strategy", desc: "Developing a roadmap for success." },
              { step: "03", title: "Creation", desc: "Bringing ideas to life with precision." },
              { step: "04", title: "Launch", desc: "Deploying and optimizing for results." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-5xl font-bold text-[#B3A380] mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
