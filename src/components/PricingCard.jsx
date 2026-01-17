import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function PricingCard({ plan }) {
  return (
    <div
      className={`relative p-8 rounded-2xl backdrop-blur-xl shadow-2xl transition-all duration-300 ${
        plan.highlighted
          ? 'bg-primary/10 border-2 border-primary/50 scale-105'
          : 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20'
      }`}
    >
      {plan.highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-primary text-primary-foreground text-xs font-medium px-4 py-1.5 rounded-full shadow-lg shadow-primary/30">
            Most Popular
          </span>
        </div>
      )}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
        <p className="text-muted-foreground mb-4">{plan.tagline}</p>
        <div className="text-4xl font-bold text-primary">{plan.price}</div>
      </div>
      <ul className="space-y-4 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
      <Link to="/contact" className="block">
        <Button
          className={`w-full rounded-full ${
            plan.highlighted
              ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30'
              : 'bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 text-foreground'
          }`}
        >
          Get Started
        </Button>
      </Link>
    </div>
  );
}
