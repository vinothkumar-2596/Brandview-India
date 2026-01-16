import { Quote } from 'lucide-react';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-card">
      <Quote className="h-10 w-10 text-primary/30 mb-4" />
      <p className="text-lg leading-relaxed mb-6">
        "{testimonial.quote}"
      </p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
          {testimonial.name.charAt(0)}
        </div>
        <div className="ml-4">
          <p className="font-semibold">{testimonial.name}</p>
          <p className="text-muted-foreground text-sm">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}