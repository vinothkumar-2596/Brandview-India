import ContactForm from "@/components/ContactForm";
import { ArrowUpRight, BadgeCheck, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <section className="pt-28 pb-20 sm:pt-32 sm:pb-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-6 border-b border-secondary/10 pb-10">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-secondary/10 bg-white/70 px-3 py-1 text-xs text-secondary/70">
                <BadgeCheck className="h-4 w-4 text-[#B3A380]" />
                Contact page
              </div>
              <h1 className="contact-title text-4xl sm:text-5xl font-semibold text-secondary">
                Get in touch
              </h1>
              <p className="contact-subtitle text-base text-secondary/70">
                hello@brandview.in
              </p>
            </div>
            <a
              href="mailto:hello@brandview.in"
              className="contact-link inline-flex items-center gap-3 text-base font-semibold text-secondary"
            >
              Email us
              <ArrowUpRight className="h-5 w-5 text-[#B3A380]" />
            </a>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[0.5fr_1fr]">
            <aside className="space-y-8">
              <div className="contact-surface rounded-[32px] border border-secondary/10 bg-white/60 p-8">
                <p className="contact-eyebrow text-xs uppercase tracking-[0.2em] text-secondary/50">
                  Offers
                </p>
                <h2 className="contact-section-title mt-4 text-xl font-semibold text-secondary">
                  Let's work together
                </h2>
                <p className="contact-copy mt-3 text-sm text-secondary/70">
                  Start a new conversation if you have an interesting idea that fits
                  BrandView India's focus on strategic branding.
                </p>
                <div className="contact-copy mt-6 grid gap-4 text-sm text-secondary/70">
                  <div className="border-b border-secondary/10 pb-3">
                    Full name
                  </div>
                  <div className="border-b border-secondary/10 pb-3">
                    Email
                  </div>
                  <div className="border-b border-secondary/10 pb-3">
                    Company name
                  </div>
                  <div className="h-24 rounded-2xl border border-secondary/10 bg-white/40 p-3">
                    Your message
                  </div>
                </div>
              </div>

              <div className="contact-surface rounded-[32px] border border-secondary/10 bg-white/60 p-8">
                <p className="contact-eyebrow text-xs uppercase tracking-[0.2em] text-secondary/50">
                  Trust
                </p>
                <h2 className="contact-section-title mt-4 text-xl font-semibold text-secondary">
                  Why clients choose us
                </h2>
                <div className="contact-copy mt-4 space-y-4 text-sm text-secondary/70">
                  <div className="border-b border-secondary/10 pb-3">
                    <p className="text-secondary">Clear process</p>
                    <p>Weekly updates, shared timelines, and no surprises.</p>
                  </div>
                  <div className="border-b border-secondary/10 pb-3">
                    <p className="text-secondary">Senior-led teams</p>
                    <p>Strategy and design reviewed by leadership every week.</p>
                  </div>
                  <div className="border-b border-secondary/10 pb-3">
                    <p className="text-secondary">Transparent pricing</p>
                    <p>Detailed scope and pricing in INR before we begin.</p>
                  </div>
                  <div>
                    <p className="text-secondary">Fast response</p>
                    <p>We reply within 24 hours, even on weekends.</p>
                  </div>
                </div>
              </div>

              <div className="contact-surface rounded-[32px] border border-secondary/10 bg-white/60 p-8">
                <p className="contact-eyebrow text-xs uppercase tracking-[0.2em] text-secondary/50">
                  Our locations
                </p>
                <h2 className="contact-section-title mt-4 text-xl font-semibold text-secondary">
                  Around the world
                </h2>
                <p className="contact-copy mt-3 text-sm text-secondary/70">
                  We collaborate with clients across India and global markets.
                </p>
                <div className="contact-copy mt-6 space-y-4 text-sm text-secondary/70">
                  <div>
                    <p className="text-secondary">Chennai</p>
                    <p>Anna Salai, 600002</p>
                  </div>
                  <div>
                    <p className="text-secondary">Bengaluru</p>
                    <p>MG Road, 560001</p>
                  </div>
                  <div>
                    <p className="text-secondary">Dubai</p>
                    <p>Business Bay</p>
                  </div>
                </div>
              </div>
            </aside>

            <div className="space-y-10">
              <div className="contact-surface rounded-[32px] border border-secondary/10 bg-white/60 p-8">
                <h2 className="contact-section-title text-2xl font-semibold text-secondary">
                  Let's work together
                </h2>
                <p className="contact-copy mt-2 text-sm text-secondary/70">
                  Share your goals, timelines, and budget range. We will respond within
                  24 hours.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>

              <div className="grid gap-10 border-t border-secondary/10 pt-10 lg:grid-cols-2">
                <div>
                  <p className="contact-eyebrow text-xs uppercase tracking-[0.2em] text-secondary/50">
                    Our offices
                  </p>
                  <h3 className="contact-section-title mt-4 text-2xl font-semibold text-secondary">
                    India headquarters
                  </h3>
                  <p className="contact-copy mt-3 text-sm text-secondary/70">
                    BrandView India, Chennai 600001
                  </p>
                  <p className="contact-copy mt-2 text-sm text-secondary/70">
                    Phone: +91 98 4012 3456
                  </p>
                  <div className="contact-copy mt-6 space-y-4 text-sm text-secondary/70">
                    <div className="border-t border-secondary/10 pt-4">
                      <p className="text-secondary">Corporate hub</p>
                      <p>World Trade Center, Bengaluru</p>
                    </div>
                    <div className="border-t border-secondary/10 pt-4">
                      <p className="text-secondary">Design studio</p>
                      <p>T Nagar, Chennai</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="contact-eyebrow text-xs uppercase tracking-[0.2em] text-secondary/50">
                    Around the world
                  </p>
                  <h3 className="contact-section-title mt-4 text-2xl font-semibold text-secondary">
                    Global collaboration
                  </h3>
                  <p className="contact-copy mt-3 text-sm text-secondary/70">
                    Wherever you are, we can support you with branding and digital experiences.
                  </p>
                  <div className="contact-copy mt-6 grid gap-4 text-sm text-secondary/70 sm:grid-cols-2">
                    <div>
                      <p className="text-secondary">Singapore</p>
                      <p>Marina Bay</p>
                    </div>
                    <div>
                      <p className="text-secondary">London</p>
                      <p>South Bank</p>
                    </div>
                    <div>
                      <p className="text-secondary">Riyadh</p>
                      <p>King Abdullah Rd</p>
                    </div>
                    <div>
                      <p className="text-secondary">Toronto</p>
                      <p>Financial District</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-secondary/10 pt-10">
            <h2 className="contact-section-title text-3xl sm:text-4xl font-semibold text-secondary">
              Let's start to work
            </h2>
            <a
              href="mailto:hello@brandview.in"
              className="contact-link inline-flex items-center gap-3 text-base font-semibold text-secondary"
            >
              Start a project
              <ArrowUpRight className="h-5 w-5 text-[#B3A380]" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
