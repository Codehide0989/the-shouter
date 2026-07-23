import { createFileRoute, Link } from "@tanstack/react-router";
import { NeoBadge, NeoButton, NeoCard, SectionHeader } from "@/components/neo";
import { MOCK_EVENTS, TYPE_LABEL, STATUS_LABEL } from "@/lib/mock-data";
import { Bot, Radio, Palette, ShieldCheck, PlusCircle, BarChart3 } from "lucide-react";
import heroUrl from "@/assets/admin-hero.jpg";
import liveImg from "@/assets/feature-live.jpg";
import approvalsImg from "@/assets/feature-admin.jpg";
import botImg from "@/assets/feature-bot.jpg";
import statsImg from "@/assets/bot-stats.jpg";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin — The Shouter" },
      { name: "description", content: "Manage events, teams, submissions, and bot sync." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Admin,
});

const STATS = [
  { icon: Radio, label: "Live now", value: 3, img: liveImg, tint: "bg-destructive/30" },
  { icon: ShieldCheck, label: "Pending approvals", value: 12, img: approvalsImg, tint: "bg-accent/30" },
  { icon: Bot, label: "Bot uptime", value: "99.9%", img: botImg, tint: "bg-secondary/30" },
  { icon: BarChart3, label: "This month", value: 28, img: statsImg, tint: "bg-primary/30" },
];

function Admin() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      {/* Hero */}
      <div className="relative neo-border neo-shadow rounded-lg overflow-hidden bg-card">
        <img
          src={heroUrl}
          alt="Admin control room with dashboards and bot mascot"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/55 to-transparent" />
        <div className="relative p-6 sm:p-10 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <NeoBadge variant="accent">Admin Control</NeoBadge>
            <h1 className="text-4xl sm:text-5xl mt-3">Server Command</h1>
            <p className="mt-3 text-sm text-muted-foreground">
              Launch events, moderate submissions, and keep the bot loud — from one control room.
            </p>
          </div>
          <NeoButton variant="primary"><PlusCircle className="h-4 w-4" /> New Event</NeoButton>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-8">
        {STATS.map((s) => (
          <NeoCard key={s.label} className="relative overflow-hidden p-0">
            <div className="relative h-24 border-b-4 border-border overflow-hidden">
              <img src={s.img} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
              <div className={`absolute inset-0 mix-blend-multiply ${s.tint}`} />
              <div className="absolute top-2 left-2 neo-border bg-background rounded-md p-1.5">
                <s.icon className="h-4 w-4" />
              </div>
            </div>
            <div className="p-4">
              <div className="font-display text-3xl leading-none">{s.value}</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{s.label}</div>
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
