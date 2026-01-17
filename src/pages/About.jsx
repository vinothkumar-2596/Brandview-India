import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Users,
  Award,
  Briefcase,
  Target,
  Lightbulb,
  Heart,
  Zap,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { teamMembers } from "@/content/team";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We push boundaries and explore new possibilities to deliver cutting-edge solutions.",
  },
  {
    icon: Heart,
    title: "Passion",
    description:
      "We pour our hearts into every project, treating each one as if it were our own.",
  },
  {
    icon: Target,
    title: "Excellence",
    description:
      "We maintain the highest standards in everything we do, never settling for mediocrity.",
  },
  {
    icon: Zap,
    title: "Impact",
    description:
      "We focus on creating meaningful results that drive real business growth.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-background" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mt-4 mb-6">
              We're Passionate About Creating Impactful Design
            </h1>
            <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed">
              Founded in 2015, BrandView has grown from a small design studio to a full-service
              creative agency, helping brands worldwide achieve their digital potential.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560714443-d7c7a6d62ea4?w=800&h=600&fit=crop"
                  alt="Our Office"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/20 rounded-2xl -z-10" />
            </div>
            <div>
              <span className="text-primary text-sm font-medium tracking-wider uppercase">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mt-4 mb-6">
                From Humble Beginnings to Industry Leaders
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  What started as a passion project in a small apartment has evolved into a
                  thriving creative agency with a global client base. Our journey has been
                  defined by our relentless pursuit of excellence and our commitment to helping
                  brands succeed.
                </p>
                <p>
                  Today, our team of 20+ talented designers, developers, and strategists work
                  together to deliver exceptional digital experiences. We've had the privilege
                  of working with startups, Fortune 500 companies, and everything in between.
                </p>
                <p>
                  Our success is measured not by the awards we've won, but by the success of our
                  clients and the lasting relationships we've built along the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">200+</div>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">50+</div>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">15+</div>
              <p className="text-muted-foreground">Industry Awards</p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">10+</div>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Values"
            title="What Drives Us"
            description="Our core values guide everything we do and shape how we work with our clients."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="p-6 rounded-2xl border border-white/10 bg-card text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12">
            <SectionHeading
              label="Our Team"
              title="Meet the Experts"
              description="Our talented team brings diverse skills and perspectives to every project."
              centered={false}
            />
            <Link to="/team" className="mt-4 sm:mt-0">
              <Button variant="outline" className="rounded-full px-6 border-white/20 hover:bg-white/5">
                View Full Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.slice(0, 4).map((member) => (
              <div key={member.name} className="group text-center">
                <div className="aspect-square relative rounded-2xl overflow-hidden mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
