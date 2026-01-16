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
    <div className="group p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl hover:bg-white/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
      <div className="w-14 h-14 rounded-xl bg-primary/20 backdrop-blur-lg border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
        <Icon className="h-7 w-7 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
    </div>
  );
}