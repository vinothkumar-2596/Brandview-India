import { Link } from "react-router-dom";
import {
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Twitter,
  Instagram,
  Dribbble,
  ArrowRight,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Footer() {
  const quickLinks = [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/works", label: "Our Works" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  const services = [
    "Brand Identity",
    "Web Design",
    "UI/UX Design",
    "Web Development",
    "Digital Marketing",
  ];

  return (
    <footer className="px-4 sm:px-6 lg:px-8 pb-16">
      <div className="mx-auto w-full max-w-[1280px] min-h-[640px] rounded-[40px] bg-secondary text-secondary-foreground shadow-2xl overflow-hidden">
        <div className="px-10 sm:px-14 lg:px-20 pt-20 pb-16 border-b border-white/10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                Start a project
              </p>
              <h2 className="mt-4 text-4xl sm:text-5xl font-semibold">
                Start Your Project With BrandView India
              </h2>
              <Dialog>
                <DialogTrigger asChild>
                  <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-md transition hover:bg-primary/90">
                    Contact Us
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-xl">
                  <DialogHeader>
                    <DialogTitle>Start a project</DialogTitle>
                    <DialogDescription>
                      Share a few details and we will reach out within 24 hours.
                    </DialogDescription>
                  </DialogHeader>
                  <form className="grid gap-4">
                    <input
                      type="text"
                      placeholder="Full name"
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm"
                    />
                    <input
                      type="email"
                      placeholder="Work email"
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm"
                    />
                    <textarea
                      placeholder="Tell us about your project"
                      rows={4}
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm"
                    />
                    <button
                      type="button"
                      className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground"
                    >
                      Send Request
                    </button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 p-5 shadow-[0_18px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
              <p className="text-base font-semibold">Subscribe Our Newsletter</p>
              <p className="mt-2 text-sm text-white/60">
                Monthly insights on branding, design, and growth.
              </p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <div className="flex-1 rounded-full border border-white/0 bg-white/3 px-4 py-3 text-xs text-white/70 backdrop-blur-xl">
                  Enter your email
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="rounded-full bg-primary px-6 py-3 text-xs font-semibold text-primary-foreground">
                      Subscribe
                    </button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Subscribe to updates</DialogTitle>
                      <DialogDescription>
                        Get curated insights and agency news in your inbox.
                      </DialogDescription>
                    </DialogHeader>
                    <form className="grid gap-4">
                      <input
                        type="email"
                        placeholder="Email address"
                        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm"
                      />
                      <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground"
                      >
                        Confirm Subscription
                      </button>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>

        <div className="px-10 sm:px-14 lg:px-20 py-16">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-6">
              <Link to="/" className="inline-flex items-center gap-2 text-2xl font-semibold">
                BrandView India
              </Link>
              <p className="text-sm text-white/70 leading-relaxed">
                At BrandView India, our focus is to craft intuitive, engaging, and user-centered digital
                experiences.
              </p>
              <div className="flex items-center gap-3 text-white/70">
                <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" aria-label="Twitter" className="hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" aria-label="Dribbble" className="hover:text-white transition-colors">
                  <Dribbble className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-base font-semibold uppercase tracking-[0.2em] text-white/70 mb-5">
                Quick Links
              </h3>
              <ul className="space-y-3 text-sm text-white/70">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link to={link.href} className="hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold uppercase tracking-[0.2em] text-white/70 mb-5">
                Services
              </h3>
              <ul className="space-y-3 text-sm text-white/70">
                {services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold uppercase tracking-[0.2em] text-white/70 mb-5">
                Contact
              </h3>
              <ul className="space-y-4 text-sm text-white/70">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-white/80 mt-0.5" />
                  <span>Jalan By Pass Ngurah Rai, Denpasar, Bali, Indonesia</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-white/80" />
                  <a
                    href="mailto:hello@zesty.agency"
                    className="hover:text-white transition-colors"
                  >
                    hello@zesty.agency
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-white/80" />
                  <a href="tel:+1234567890" className="hover:text-white transition-colors">
                    +1 (234) 567-890
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>Copyright 2025 BrandView India. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
