import { Linkedin, Twitter, Instagram, Dribbble } from "lucide-react";
import CTASection from "@/components/CTASection";
import { teamMembers } from "@/content/team";

export default function TeamPage() {
  return (
    <>
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-background" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              Our Team
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mt-4 mb-6">
              Meet the Minds Behind BrandView
            </h1>
            <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed">
              A talented team of designers, developers, and strategists united by a passion for
              creating exceptional digital experiences.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="group text-center">
                <div className="aspect-square relative rounded-2xl overflow-hidden mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex justify-center space-x-4">
                      {member.socials.linkedin && (
                        <a
                          href={member.socials.linkedin}
                          className="text-white hover:text-primary transition-colors"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                      )}
                      {member.socials.twitter && (
                        <a
                          href={member.socials.twitter}
                          className="text-white hover:text-primary transition-colors"
                          aria-label="Twitter"
                        >
                          <Twitter className="h-5 w-5" />
                        </a>
                      )}
                      {member.socials.dribbble && (
                        <a
                          href={member.socials.dribbble}
                          className="text-white hover:text-primary transition-colors"
                          aria-label="Dribbble"
                        >
                          <Dribbble className="h-5 w-5" />
                        </a>
                      )}
                      {member.socials.instagram && (
                        <a
                          href={member.socials.instagram}
                          className="text-white hover:text-primary transition-colors"
                          aria-label="Instagram"
                        >
                          <Instagram className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">Careers</span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mt-4 mb-6">
              Want to Join Our Team?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We're always looking for talented individuals who share our passion for design and
              technology. Check out our open positions and become part of something amazing.
            </p>
            <a
              href="mailto:careers@brandview.com"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-colors"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
