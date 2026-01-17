import SectionHeading from "@/components/SectionHeading";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import { faqs } from "@/content/faqs";

export default function FaqPage() {
  return (
    <>
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-background" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              FAQ
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mt-4 mb-6">
              Answers to Common Questions
            </h1>
            <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed">
              Everything you need to know about working with BrandView.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Need Help?"
            title="Frequently Asked Questions"
            description="Find quick answers to the most common questions about our services."
          />
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
