import { cn } from "@/lib/utils";

export default function KpiCard({ title, value, delta, className }) {
  return (
    <div className={cn("rounded-2xl border border-slate-100 p-4 shadow-sm", className)}>
      <div className="mb-3 h-1 w-10 rounded-full bg-primary" />
      {title ? <p className="text-sm text-muted-foreground">{title}</p> : null}
      <div className="mt-2 flex items-baseline gap-2">
        <p className="text-2xl font-semibold">{value}</p>
        {delta ? <span className="text-xs text-muted-foreground">{delta}</span> : null}
      </div>
    </div>
  );
}
