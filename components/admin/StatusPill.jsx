import { cn } from "@/lib/utils";

const STATUS_STYLES = {
  new: "bg-blue-100 text-blue-700",
  contacted: "bg-amber-100 text-amber-700",
  qualified: "bg-emerald-100 text-emerald-700",
  closed: "bg-slate-200 text-slate-700",
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
