import { cn } from "@/lib/utils";

export default function DateRangePicker({ value, onChange, className }) {
  const from = value?.from || "";
  const to = value?.to || "";

  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      <input
        type="date"
        value={from}
        onChange={(event) =>
          onChange?.({ from: event.target.value, to })
        }
        className="rounded-md border px-2 py-1 text-sm"
      />
      <span className="text-sm text-muted-foreground">to</span>
      <input
        type="date"
        value={to}
        onChange={(event) =>
          onChange?.({ from, to: event.target.value })
        }
        className="rounded-md border px-2 py-1 text-sm"
      />
    </div>
  );
}
