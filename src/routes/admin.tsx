import { createFileRoute, Link } from "@tanstack/react-router";
import { NeoBadge, NeoButton, NeoCard, SectionHeader } from "@/components/neo";
import { MOCK_EVENTS, TYPE_LABEL, STATUS_LABEL } from "@/lib/mock-data";
import { Bot, Radio, Palette, ShieldCheck, PlusCircle, BarChart3 } from "lucide-react";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin — THE SHOOTERS" },
      { name: "description", content: "Manage events, teams, submissions, and bot sync." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Admin,
});

function Admin() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <NeoBadge variant="accent">Admin Control</NeoBadge>
          <h1 className="text-4xl mt-3">Server Command</h1>
        </div>
        <NeoButton variant="primary"><PlusCircle className="h-4 w-4" /> New Event</NeoButton>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-8">
        {[
          { icon: Radio, label: "Live now", value: 3 },
          { icon: ShieldCheck, label: "Pending approvals", value: 12 },
          { icon: Bot, label: "Bot uptime", value: "99.9%" },
          { icon: BarChart3, label: "This month", value: 28 },
        ].map((s) => (
          <NeoCard key={s.label} className="flex items-center gap-4">
            <div className="neo-border bg-accent text-accent-foreground rounded-md p-3">
              <s.icon className="h-6 w-6" />
            </div>
            <div>
              <div className="font-display text-3xl">{s.value}</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{s.label}</div>
            </div>
          </NeoCard>
        ))}
      </div>

      <div className="mt-10">
        <SectionHeader eyebrow="Events" title="Manage all events" />
        <NeoCard className="overflow-x-auto p-0">
          <table className="w-full text-sm">
            <thead className="bg-muted text-left font-display uppercase text-xs">
              <tr>
                <th className="p-3">Event</th>
                <th className="p-3">Type</th>
                <th className="p-3">Status</th>
                <th className="p-3">Regs</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_EVENTS.map((e) => (
                <tr key={e.id} className="border-t-4 border-border">
                  <td className="p-3">
                    <Link to="/events/$id" params={{ id: e.id }} className="font-bold hover:underline">{e.title}</Link>
                    <div className="text-xs text-muted-foreground">{e.server}</div>
                  </td>
                  <td className="p-3">{TYPE_LABEL[e.type]}</td>
                  <td className="p-3"><NeoBadge variant={e.status === "live" ? "destructive" : e.status === "upcoming" ? "secondary" : "muted"}>{STATUS_LABEL[e.status]}</NeoBadge></td>
                  <td className="p-3">{e.registered}/{e.capacity}</td>
                  <td className="p-3 flex gap-1 flex-wrap">
                    <NeoButton size="sm" variant="ghost">Edit</NeoButton>
                    <NeoButton size="sm" variant="secondary">{e.status === "live" ? "Stop" : "Start"}</NeoButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </NeoCard>
      </div>

      <div className="grid gap-6 md:grid-cols-2 mt-10">
        <NeoCard>
          <h2 className="text-2xl mb-3">Discord Sync</h2>
          <ul className="space-y-2 text-sm">
            {["Bot online in 12 servers", "3 event channels active", "Live reaction sync running", "Last ping: 8s ago"].map((s, i) => (
              <li key={i} className="neo-border rounded-md bg-background px-3 py-2 flex gap-2 items-center">
                <span className="h-2 w-2 rounded-full bg-[color:var(--success)] animate-pulse" />{s}
              </li>
            ))}
          </ul>
          <Link to="/bot-status" className="mt-4 inline-block text-sm underline font-display uppercase">Bot dashboard →</Link>
        </NeoCard>
        <NeoCard className="bg-secondary text-secondary-foreground">
          <h2 className="text-2xl mb-3 flex items-center gap-2"><Palette className="h-5 w-5" /> Seasonal Theme</h2>
          <p className="text-sm">Rotate the whole platform theme for a season, weekend, or event. Users see it instantly.</p>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {["🔥 Summer", "🎃 Halloween", "❄️ Winter", "🌸 Spring"].map((t) => (
              <button key={t} className="neo-border neo-shadow-sm rounded-md bg-background text-foreground px-3 py-2 text-xs font-display uppercase">{t}</button>
            ))}
          </div>
        </NeoCard>
      </div>
    </div>
  );
}
