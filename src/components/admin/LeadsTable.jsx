import { cn } from "@/lib/utils";

export default function LeadsTable({
  leads = [],
  renderActions,
  onRowClick,
  className,
  emptyMessage = "No leads found.",
}) {
  const columnCount = renderActions ? 6 : 5;

  return (
    <div className={cn("overflow-x-auto rounded-lg border", className)}>
      <table className="min-w-full text-sm">
        <thead className="border-b text-left text-xs uppercase text-muted-foreground">
          <tr>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Email</th>
            <th className="px-4 py-3">Phone</th>
            <th className="px-4 py-3">Source</th>
            <th className="px-4 py-3">Status</th>
            {renderActions ? <th className="px-4 py-3">Actions</th> : null}
          </tr>
        </thead>
        <tbody>
          {leads.length === 0 ? (
            <tr>
              <td
                className="px-4 py-6 text-center text-muted-foreground"
                colSpan={columnCount}
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            leads.map((lead) => (
              <tr
                key={lead.id || lead._id}
                className="border-b last:border-0"
                onClick={() => onRowClick?.(lead)}
              >
                <td className="px-4 py-3">{lead.name || "-"}</td>
                <td className="px-4 py-3">{lead.email || "-"}</td>
                <td className="px-4 py-3">{lead.phone || "-"}</td>
                <td className="px-4 py-3">{lead.source || "-"}</td>
                <td className="px-4 py-3">{lead.status || "-"}</td>
                {renderActions ? (
                  <td className="px-4 py-3">{renderActions(lead)}</td>
                ) : null}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
