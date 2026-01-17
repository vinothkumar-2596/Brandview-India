import { cn } from "@/lib/utils";

const STATUS_STYLES = {
  new: "bg-primary/15 text-primary",
  contacted: "bg-secondary/10 text-secondary",
  qualified: "bg-accent text-secondary",
  closed: "bg-secondary/20 text-secondary",
};

export default function StatusPill({ status = "new", className }) {
  const key = status?.toLowerCase?.() || "new";
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
        STATUS_STYLES[key] || "bg-slate-100 text-slate-700",
        className
      )}
    >
      {status}
    </span>
  );
}
