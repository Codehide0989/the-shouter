import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { NeoCard, NeoBadge, NeoButton, SectionHeader } from "@/components/neo";
import { heroUrl } from "@/components/dashboard-page";
import { useReveal, useCountUp } from "@/hooks/use-reveal";
import {
  LifeBuoy, MessageCircle, Mail, Ticket, Clock, ShieldCheck, Zap, ArrowRight,
  Bug, CreditCard, User, Trophy, Bot, Cog,
} from "lucide-react";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Support — The Shouter" },
      { name: "description", content: "Open a ticket, chat with a human on Discord, or browse triage playbooks. Median first reply under 12 minutes." },
      { property: "og:title", content: "Support — The Shouter" },
      { property: "og:description", content: "Open a ticket or ping the moderators on Discord. Median first reply under 12 minutes." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/support" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/support" }],
  }),
  component: Page,
});

const CATEGORIES = [
  { icon: User, label: "Account & login", tint: "bg-primary/20" },
  { icon: Trophy, label: "Tournaments", tint: "bg-accent/20" },
  { icon: Bot, label: "Bot & commands", tint: "bg-secondary/25" },
  { icon: CreditCard, label: "Payments", tint: "bg-primary/15" },
  { icon: Bug, label: "Bug reports", tint: "bg-destructive/20" },
  { icon: Cog, label: "Server setup", tint: "bg-muted" },
];

const CHANNELS = [
  { icon: MessageCircle, title: "Discord live chat", meta: "Avg 4 min", desc: "Fastest path. Mods online 24/7.", cta: "Open Discord", tone: "bg-primary text-primary-foreground" },
  { icon: Ticket, title: "Priority ticket", meta: "Avg 12 min", desc: "For account, payment and match issues.", cta: "New ticket", tone: "bg-accent text-accent-foreground" },
  { icon: Mail, title: "Email", meta: "Within 24h", desc: "help@theshouter.gg — great for long context.", cta: "Send email", tone: "bg-secondary text-secondary-foreground" },
];

const TICKETS = [
  { id: "#48219", subject: "Bracket seeding wrong in Neon Cup", status: "In progress", tone: "primary" },
  { id: "#48204", subject: "Payout stuck for Winter Finals", status: "Escalated", tone: "accent" },
  { id: "#48187", subject: "Discord role not syncing after link", status: "Resolved", tone: "success" },
  { id: "#48166", subject: "Bot ignoring !register in DMs", status: "Waiting on you", tone: "muted" },
] as const;

function Stat({ n, label, suffix = "" }: { n: number; label: string; suffix?: string }) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  const v = useCountUp(n, 1100, shown);
  return (
    <div ref={ref} className={`neo-border neo-shadow-sm bg-background rounded-md p-3 text-center ${shown ? "reveal-in" : "reveal-init"}`}>
      <div className="font-display text-2xl sm:text-3xl">{v.toLocaleString()}{suffix}</div>
      <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

function Page() {
  const [q, setQ] = useState("");
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* Hero — comic panel */}
      <div className="relative neo-border neo-shadow-lg rounded-lg overflow-hidden bg-card">
        <img src={heroUrl("cover-community")} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0" style={{
          backgroundImage: "repeating-linear-gradient(45deg, transparent 0 22px, color-mix(in oklab, var(--color-border) 10%, transparent) 22px 23px)",
        }} />
        <span className="absolute -top-2 -left-2 rotate-[-8deg] neo-border neo-shadow-sm bg-accent text-accent-foreground rounded-md px-4 py-2 font-display text-xs uppercase">
          🆘 Help desk
        </span>
        <span className="absolute top-4 right-4 rotate-6 neo-border neo-shadow-sm bg-[color:var(--success)] text-black rounded-full px-3 py-1.5 font-display text-[10px] uppercase animate-pulse">
          ● All channels online
        </span>
        <div className="relative grid gap-8 p-6 sm:p-10 lg:grid-cols-[3fr_2fr] items-center">
          <div>
            <NeoBadge variant="secondary">Support</NeoBadge>
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl mt-3 leading-[0.95] tracking-tight">
              Stuck? <span className="text-accent">We got you.</span>
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground mt-3 max-w-xl leading-relaxed">
              Median first reply is under 12 minutes — from a real human, not a bot. Pick a channel, describe the pain, we take it from there.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-5 flex gap-2 max-w-lg">
              <div className="relative flex-1">
                <LifeBuoy className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  value={q} onChange={(e) => setQ(e.target.value)}
                  placeholder="Describe your issue…"
                  className="w-full neo-border neo-shadow-sm bg-background rounded-md pl-9 pr-3 py-2.5 text-sm"
                />
              </div>
              <NeoButton variant="primary">Search</NeoButton>
            </form>
            <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
              <NeoBadge variant="muted"><Clock className="h-3 w-3" /> 24/7 mods</NeoBadge>
              <NeoBadge variant="muted"><ShieldCheck className="h-3 w-3" /> Encrypted tickets</NeoBadge>
              <NeoBadge variant="muted"><Zap className="h-3 w-3" /> Live status feed</NeoBadge>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Stat n={12} label="min avg reply" />
            <Stat n={98} label="csat" suffix="%" />
            <Stat n={30421} label="tickets solved" />
            <Stat n={247} label="mods online" />
          </div>
        </div>
      </div>

      {/* Channels */}
      <div>
        <SectionHeader eyebrow="Talk to a human" title="Pick your channel" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CHANNELS.map((c) => {
            const Icon = c.icon;
            return (
              <NeoCard key={c.title} className={`p-0 overflow-hidden h-full transition-transform hover:-translate-y-1 hover:neo-shadow-lg`}>
                <div className={`${c.tone} p-5 border-b-[3px] border-border relative`}>
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: "radial-gradient(circle at 20% 30%, currentColor 1px, transparent 2px)",
                    backgroundSize: "18px 18px",
                  }} />
                  <div className="relative flex items-center gap-3">
                    <span className="neo-border neo-shadow-sm bg-background text-foreground rounded-md h-11 w-11 grid place-items-center">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="font-display text-lg leading-tight">{c.title}</div>
                      <div className="text-[10px] uppercase tracking-widest opacity-90">{c.meta}</div>
                    </div>
                  </div>
                </div>
                <div className="p-5 space-y-3">
                  <p className="text-sm text-muted-foreground">{c.desc}</p>
                  <NeoButton variant="ghost" className="w-full">{c.cta} <ArrowRight className="h-3.5 w-3.5" /></NeoButton>
                </div>
              </NeoCard>
            );
          })}
        </div>
      </div>

      {/* Category triage */}
      <div>
        <SectionHeader eyebrow="Browse by topic" title="What's going wrong?" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {CATEGORIES.map((c, i) => {
            const Icon = c.icon;
            return (
              <button
                key={c.label}
                className={`group neo-border neo-shadow-sm rounded-md p-4 text-left bg-card hover:-translate-y-1 hover:neo-shadow-lg transition-transform reveal-in`}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span className={`inline-grid place-items-center h-10 w-10 rounded-md neo-border ${c.tint} mb-3`}>
                  <Icon className="h-4 w-4" />
                </span>
                <div className="font-display text-sm leading-tight">{c.label}</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">Open guides →</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Ticket tracker + form */}
      <div className="grid gap-6 lg:grid-cols-[3fr_2fr]">
        <NeoCard className="p-0 overflow-hidden">
          <div className="flex items-center justify-between p-5 border-b-[3px] border-border bg-muted">
            <div>
              <NeoBadge variant="primary">Your tickets</NeoBadge>
              <div className="font-display text-xl mt-2">Recent activity</div>
            </div>
            <Link to="/dashboard/tickets"><NeoButton variant="ghost">View all <ArrowRight className="h-3.5 w-3.5" /></NeoButton></Link>
          </div>
          <ul className="divide-y-[3px] divide-border">
            {TICKETS.map((t) => (
              <li key={t.id} className="flex items-center gap-3 p-4 hover:bg-muted/40 transition-colors">
                <span className="font-mono text-xs neo-border rounded px-2 py-1 bg-background">{t.id}</span>
                <span className="flex-1 text-sm truncate">{t.subject}</span>
                <NeoBadge variant={t.tone as never}>{t.status}</NeoBadge>
              </li>
            ))}
          </ul>
        </NeoCard>

        <NeoCard className="p-6 sm:p-7 bg-secondary text-secondary-foreground relative overflow-hidden">
          <div className="pointer-events-none absolute -right-10 -bottom-10 h-44 w-44 rounded-full bg-accent/40 neo-border" />
          <div className="relative">
            <div className="text-[10px] uppercase tracking-widest opacity-80">New ticket</div>
            <div className="font-display text-2xl mt-1">Open a case</div>
            <p className="text-sm opacity-90 mt-2">One short form. We route it to the right mod within minutes.</p>
            <form className="mt-4 space-y-3">
              <input placeholder="Subject" className="w-full neo-border neo-shadow-sm bg-background text-foreground rounded-md px-3 py-2.5 text-sm" />
              <select className="w-full neo-border neo-shadow-sm bg-background text-foreground rounded-md px-3 py-2.5 text-sm">
                <option>Category — Account</option>
                <option>Category — Tournament</option>
                <option>Category — Bot</option>
                <option>Category — Payments</option>
                <option>Category — Bug report</option>
              </select>
              <textarea placeholder="Tell us what happened…" rows={4} className="w-full neo-border neo-shadow-sm bg-background text-foreground rounded-md px-3 py-2.5 text-sm" />
              <NeoButton type="button" variant="accent" className="w-full">Submit ticket</NeoButton>
            </form>
          </div>
        </NeoCard>
      </div>
    </div>
  );
}
