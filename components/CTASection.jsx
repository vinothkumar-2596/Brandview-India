import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
            Ready to Transform Your Brand?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Let's collaborate to create something extraordinary. Start your journey with us today.
          </p>
          <Link href="/contact">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}