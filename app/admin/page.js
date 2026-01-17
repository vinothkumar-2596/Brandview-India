"use client";

import { useMemo, useState } from "react";
import KpiCard from "@/components/admin/KpiCard";
import DateRangePicker from "@/components/admin/DateRangePicker";
import LeadsTable from "@/components/admin/LeadsTable";
import StatusPill from "@/components/admin/StatusPill";
import { useAdminDashboard } from "@/hooks/useAdminDashboard";
import { useAdminLeads } from "@/hooks/useAdminLeads";
import { useSeoMetrics } from "@/hooks/useSeoMetrics";
import { useAdsMetrics } from "@/hooks/useAdsMetrics";

const NAV_ITEMS = [
  { id: "overview", label: "Overview" },
  { id: "leads", label: "Leads" },
  { id: "seo", label: "SEO" },
  { id: "ads", label: "Ads" },
];

const LEAD_STATUSES = ["new", "contacted", "qualified", "closed"];

export default function AdminPage() {
  const [range, setRange] = useState({ from: "", to: "" });
  const [leadRange, setLeadRange] = useState({ from: "", to: "" });
  const [statusFilter, setStatusFilter] = useState("");
  const [sourceFilter, setSourceFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const dashboard = useAdminDashboard(range);
  const leads = useAdminLeads({
    status: statusFilter || undefined,
    source: sourceFilter || undefined,
    from: leadRange.from || undefined,
    to: leadRange.to || undefined,
    search: searchTerm || undefined,
    page: 1,
    limit: 8,
  });
  const seo = useSeoMetrics(range);
  const ads = useAdsMetrics({
    platform: "google",
    from: range.from || undefined,
    to: range.to || undefined,
  });

  const leadRows = useMemo(() => {
    if (Array.isArray(leads.data)) return leads.data;
    return leads.data?.items || leads.data?.leads || [];
  }, [leads.data]);

  const displayLeads = useMemo(
    () =>
      leadRows.map((lead) => ({
        ...lead,
        status: <StatusPill status={lead.status || "new"} />,
      })),
    [leadRows]
  );

  const summary = dashboard.data || {};
  const kpis = [
    {
      title: "Total Leads",
      value: summary.totalLeads ?? summary.kpis?.totalLeads ?? "--",
      delta: summary.deltaLeads ? `${summary.deltaLeads}%` : null,
    },
    {
      title: "Qualified",
      value: summary.qualifiedLeads ?? summary.kpis?.qualifiedLeads ?? "--",
      delta: summary.deltaQualified ? `${summary.deltaQualified}%` : null,
    },
    {
      title: "Conversion",
      value: summary.conversionRate ?? summary.kpis?.conversionRate ?? "--",
      delta: summary.deltaConversion ? `${summary.deltaConversion}%` : null,
    },
    {
      title: "Active Campaigns",
      value: summary.activeCampaigns ?? summary.kpis?.activeCampaigns ?? "--",
      delta: summary.deltaCampaigns ? `${summary.deltaCampaigns}%` : null,
    },
  ];

  const seoRows = Array.isArray(seo.data) ? seo.data : seo.data?.items || [];
  const adsRows = Array.isArray(ads.data) ? ads.data : ads.data?.items || [];

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(191,219,254,0.7),_transparent_45%),radial-gradient(circle_at_top_right,_rgba(153,246,228,0.6),_transparent_40%)]" />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-6 px-4 py-8 lg:grid-cols-[240px_1fr] lg:px-6">
        <aside className="flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Brandview
              </p>
              <h1 className="text-lg font-semibold">Admin Space</h1>
            </div>
            <span className="h-2 w-2 rounded-full bg-primary" />
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2">
            <input
              className="w-full bg-transparent text-sm text-slate-600 placeholder:text-slate-400 focus:outline-none"
              placeholder="Search admin..."
            />
          </div>
          <nav className="flex flex-col gap-1 text-sm">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="flex items-center justify-between rounded-xl px-3 py-2 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
              >
                <span>{item.label}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
              </a>
            ))}
          </nav>
          <div className="mt-auto rounded-2xl border border-slate-200 bg-slate-900 px-4 py-3 text-slate-50">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-300">
              Today
            </p>
            <p className="text-lg font-semibold">Operations Pulse</p>
            <p className="text-xs text-slate-300">
              Keep an eye on lead velocity.
            </p>
          </div>
        </aside>

        <div className="flex flex-col gap-6">
          <header className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Admin Dashboard
              </p>
              <h2 className="text-2xl font-semibold tracking-tight">
                Growth Command Center
              </h2>
              <p className="text-sm text-slate-500">
                Live snapshot of leads, campaigns, and search momentum.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <DateRangePicker value={range} onChange={setRange} />
              <button
                type="button"
                className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800"
                onClick={dashboard.refetch}
              >
                Refresh
              </button>
            </div>
          </header>

          <section id="overview" className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-lg font-semibold">Performance Overview</h3>
              {dashboard.isLoading ? (
                <span className="text-xs text-slate-400">Loading summary...</span>
              ) : dashboard.error ? (
                <span className="text-xs text-rose-500">
                  {dashboard.error.message}
                </span>
              ) : null}
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {kpis.map((item, index) => (
                <KpiCard
                  key={item.title}
                  title={item.title}
                  value={item.value}
                  delta={item.delta}
                  className="bg-white"
                />
              ))}
            </div>
          </section>

          <section
            id="leads"
            className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold">Leads Pipeline</h3>
                <p className="text-sm text-slate-500">
                  Review new inquiries and monitor lead status.
                </p>
              </div>
              <DateRangePicker value={leadRange} onChange={setLeadRange} />
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
              <input
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                className="min-w-[180px] rounded-full border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 placeholder:text-slate-400 focus:outline-none"
                placeholder="Search name, email..."
              />
              <select
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value)}
                className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 focus:outline-none"
              >
                <option value="">All statuses</option>
                {LEAD_STATUSES.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
              <input
                value={sourceFilter}
                onChange={(event) => setSourceFilter(event.target.value)}
                className="min-w-[140px] rounded-full border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 placeholder:text-slate-400 focus:outline-none"
                placeholder="Source"
              />
              {leads.isLoading ? (
                <span className="text-xs text-slate-400">Loading leads...</span>
              ) : leads.error ? (
                <span className="text-xs text-rose-500">
                  {leads.error.message}
                </span>
              ) : null}
            </div>
            <div className="mt-4">
              <LeadsTable
                leads={displayLeads}
                renderActions={
                  leads.canMutate
                    ? (lead) => (
                        <button
                          type="button"
                          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
                        >
                          Update
                        </button>
                      )
                    : undefined
                }
                emptyMessage={
                  leads.isLoading
                    ? "Loading leads..."
                    : "No leads match the current filters."
                }
                className="bg-white"
              />
            </div>
          </section>

          <section id="seo" className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">SEO Daily Pulse</h3>
                {seo.isLoading ? (
                  <span className="text-xs text-slate-400">Loading...</span>
                ) : seo.error ? (
                  <span className="text-xs text-rose-500">
                    {seo.error.message}
                  </span>
                ) : null}
              </div>
              <div className="mt-4 space-y-3">
                {seoRows.length === 0 ? (
                  <p className="text-sm text-slate-400">
                    No SEO metrics yet for this range.
                  </p>
                ) : (
                  seoRows.slice(0, 5).map((row, index) => (
                    <div
                      key={row.date || index}
                      className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm"
                    >
                      <div>
                        <p className="font-medium text-slate-700">
                          {row.date || row.day || "Day"}
                        </p>
                        <p className="text-xs text-slate-400">
                          Impressions {row.impressions ?? "--"}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-slate-800">
                          {row.clicks ?? row.visits ?? "--"}
                        </p>
                        <p className="text-xs text-slate-400">Clicks</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-900 p-6 text-slate-50 shadow-sm">
              <h3 className="text-lg font-semibold">SEO Focus</h3>
              <p className="mt-2 text-sm text-slate-300">
                Track the landing pages and keyword clusters driving qualified
                traffic.
              </p>
              <div className="mt-6 space-y-4">
                {["Landing pages", "Brand keywords", "Technical health"].map(
                  (label) => (
                    <div key={label} className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      <div>
                        <p className="text-sm font-medium">{label}</p>
                        <p className="text-xs text-slate-400">
                          Weekly checklist aligned with goals.
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </section>

          <section id="ads" className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-semibold">Ads Performance</h3>
              {ads.isLoading ? (
                <span className="text-xs text-slate-400">Loading...</span>
              ) : ads.error ? (
                <span className="text-xs text-rose-500">
                  {ads.error.message}
                </span>
              ) : null}
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {(adsRows.length ? adsRows.slice(0, 6) : []).map((row, index) => (
                <div
                  key={row.campaignName || index}
                  className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-slate-700">
                      {row.campaignName || "Campaign"}
                    </p>
                    <StatusPill status={row.status || "active"} />
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-2 text-xs text-slate-500">
                    <div>
                      <p className="text-[10px] uppercase tracking-wide text-slate-400">
                        Clicks
                      </p>
                      <p className="text-sm font-semibold text-slate-800">
                        {row.clicks ?? "--"}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wide text-slate-400">
                        Spend
                      </p>
                      <p className="text-sm font-semibold text-slate-800">
                        {row.cost ?? row.spend ?? "--"}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wide text-slate-400">
                        Conversions
                      </p>
                      <p className="text-sm font-semibold text-slate-800">
                        {row.conversions ?? "--"}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              {!adsRows.length ? (
                <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-6 text-sm text-slate-400">
                  No ad metrics for this range yet.
                </div>
              ) : null}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
