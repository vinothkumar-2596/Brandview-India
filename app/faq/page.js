import SectionHeading from '@/components/SectionHeading';
import FAQAccordion from '@/components/FAQAccordion';
import CTASection from '@/components/CTASection';
import { faqs } from '@/content/faqs';

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">FAQ</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mt-4 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed">
              Have questions? We have answers. Find everything you need to know about our services and process.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* Contact Prompt */}
      <section className="py-16 sm:py-20 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6">
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Can't find what you're looking for? Our team is here to help. Reach out and we'll get back to you within 24 hours.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}