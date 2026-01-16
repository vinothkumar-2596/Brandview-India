import { Palette, Monitor, Figma, Code, TrendingUp, Play } from 'lucide-react';

const iconMap = {
  Palette: Palette,
  Monitor: Monitor,
  Figma: Figma,
  Code: Code,
  TrendingUp: TrendingUp,
  Play: Play,
};

export default function ServiceCard({ service }) {
  const Icon = iconMap[service.icon] || Palette;

  return (
    <div className="group p-6 sm:p-8 rounded-2xl border border-white/10 bg-card hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
        <Icon className="h-7 w-7 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
    </div>
  );
}