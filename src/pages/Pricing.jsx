import SectionHeading from "@/components/SectionHeading";
import PricingCard from "@/components/PricingCard";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import { pricingPlans } from "@/content/pricing";
import { faqs } from "@/content/faqs";

export default function PricingPage() {
  return (
    <>
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-background" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              Pricing
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mt-4 mb-6">
              Transparent Pricing for Every Budget
            </h1>
            <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed">
              Choose the perfect plan for your needs. No hidden fees, no surprises, just
              exceptional value.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-card">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="FAQ"
            title="Common Questions"
            description="Find answers to frequently asked questions about our pricing and services."
          />
          <FAQAccordion faqs={faqs.slice(0, 5)} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
