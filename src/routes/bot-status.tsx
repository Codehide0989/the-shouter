import { createFileRoute } from "@tanstack/react-router";
import { NeoBadge, NeoCard, SectionHeader } from "@/components/neo";
import { Bot, Radio, Zap, Terminal, Activity, Server, Plug } from "lucide-react";
import botMascot from "@/assets/bot-mascot.jpg";
import botCommands from "@/assets/bot-commands.jpg";
import botActivity from "@/assets/bot-activity.jpg";
import botStats from "@/assets/bot-stats.jpg";
import botIntegrations from "@/assets/bot-integrations.jpg";

export const Route = createFileRoute("/bot-status")({
  head: () => ({
    meta: [
      { title: "Bot Status — The Shooter" },
      { name: "description", content: "Live Discord bot uptime, command usage, and sync stats." },
      { property: "og:title", content: "Bot Status" },
      { property: "og:description", content: "Real-time Discord bot health." },
    ],
  }),
  component: BotStatus,
});

const STATS = [
  { k: "99.9%", v: "Uptime (30d)", tone: "bg-[color:var(--success)] text-black" },
  { k: "12", v: "Servers", tone: "bg-secondary text-secondary-foreground" },
  { k: "38k", v: "Users", tone: "bg-primary text-primary-foreground" },
  { k: "142ms", v: "Avg latency", tone: "bg-accent text-accent-foreground" },
];

const COMMANDS: [string, string][] = [
  ["!help", "Show the help card"],
  ["!register <event>", "Register for an event"],
  ["!team create <name>", "Create a team"],
  ["!team invite @user", "Invite a member"],
  ["!leaderboard", "Show leaderboard card"],
  ["!bracket <event>", "Show tournament bracket"],
  ["!vote <group>", "Cast a vote"],
  ["!remind", "Get event reminder card"],
];

const ACTIVITY = [
  "Posted registration card in #bgmi-clash",
  "Created temp category: PIC-BATTLE-SUMMER",
  "Synced 24 reactions from #artwork-neon",
  "Sent DM verification to raven#4210",
  "!leaderboard used by boss#2020",
];

const INTEGRATIONS = [
  { name: "Discord API", status: "Healthy", tone: "bg-[color:var(--success)] text-black" },
  { name: "Postgres", status: "Healthy", tone: "bg-[color:var(--success)] text-black" },
  { name: "Redis cache", status: "Degraded", tone: "bg-accent text-accent-foreground" },
  { name: "CDN uploads", status: "Healthy", tone: "bg-[color:var(--success)] text-black" },
];

function ImageHeader({ src, label, tint }: { src: string; label: string; tint: string }) {
  return (
    <div className="relative h-32 overflow-hidden border-b-4 border-border rounded-t-md">
      <img src={src} alt={label} width={1024} height={1024} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div aria-hidden className={`absolute inset-0 bg-gradient-to-tr ${tint} mix-blend-multiply`} />
      <span className="absolute bottom-2 left-2 neo-border bg-background text-foreground font-display text-xs px-2 py-1">
        {label}
      </span>
    </div>
  );
}

function BotStatus() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      {/* Hero */}
      <section className="relative neo-border neo-shadow bg-card overflow-hidden rounded-lg">
        <div className="grid md:grid-cols-[1.4fr_1fr] items-stretch">
          <div className="p-6 md:p-10 flex flex-col justify-center">
            <NeoBadge variant="success">
              <Radio className="h-3 w-3" /> Online · synced 12s ago
            </NeoBadge>
            <h1 className="font-display text-4xl md:text-6xl mt-3 leading-[0.95] tracking-tight flex items-center gap-3">
              <Bot className="h-10 w-10 md:h-14 md:w-14" /> SHOOTERS BOT
            </h1>
            <p className="text-muted-foreground mt-4 max-w-md">
              Prefix commands only. Canva-style card responses. Real-time Discord sync — every reaction, vote, and check-in mirrors to the site.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <NeoBadge>v4.2.0</NeoBadge>
              <NeoBadge variant="accent">Slash-free</NeoBadge>
              <NeoBadge variant="secondary">12 servers</NeoBadge>
            </div>
          </div>
          <div className="relative min-h-56 md:min-h-full bg-secondary/30 border-t-4 md:border-t-0 md:border-l-4 border-border overflow-hidden">
            <img src={botMascot} alt="Shooters bot mascot" width={1024} height={1024} className="absolute inset-0 h-full w-full object-contain p-4" />
            <span className="absolute top-3 right-3 neo-border neo-shadow-sm bg-[color:var(--success)] text-black font-display text-xs px-2 py-1 rotate-3">
              ● LIVE
            </span>
          </div>
        </div>
      </section>

      {/* Stats — with image tile */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 mt-8">
        <NeoCard className="!p-0 overflow-hidden lg:row-span-1">
          <ImageHeader src={botStats} label="RIG HEALTH" tint="from-primary/60 to-transparent" />
          <div className="p-3 text-[10px] uppercase tracking-widest text-muted-foreground font-black">
            Uplink stable
          </div>
        </NeoCard>
        {STATS.map((s) => (
          <NeoCard key={s.v} className="text-center relative overflow-hidden">
            <span className={`absolute -top-1 -right-1 neo-border ${s.tone} text-[9px] font-black uppercase tracking-widest px-1.5 py-0.5 rotate-3`}>
              ok
            </span>
            <div className="font-display text-4xl">{s.k}</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{s.v}</div>
          </NeoCard>
        ))}
      </div>

      {/* Commands & Activity */}
      <div className="grid gap-6 md:grid-cols-2 mt-10">
        <div>
          <SectionHeader eyebrow="Commands" title="Prefix commands" />
          <NeoCard className="!p-0 overflow-hidden">
            <ImageHeader src={botCommands} label="TERMINAL" tint="from-secondary/60 to-transparent" />
            <div className="p-4 space-y-2 font-mono text-sm">
              {COMMANDS.map(([cmd, desc]) => (
                <div key={cmd} className="neo-border rounded-md bg-muted px-3 py-2 flex justify-between gap-3 items-center">
                  <span className="flex items-center gap-2 font-bold">
                    <Terminal className="h-3 w-3 text-accent" />
                    {cmd}
                  </span>
                  <span className="text-muted-foreground text-xs">{desc}</span>
                </div>
              ))}
            </div>
          </NeoCard>
        </div>

        <div>
          <SectionHeader eyebrow="Live" title="Recent activity" />
          <NeoCard className="!p-0 overflow-hidden">
            <ImageHeader src={botActivity} label="PULSE" tint="from-accent/60 to-transparent" />
            <ul className="p-4 space-y-2 text-sm">
              {ACTIVITY.map((a, i) => (
                <li key={i} className="neo-border rounded-md bg-background px-3 py-2 flex items-center gap-2">
                  <Zap className="h-3 w-3 text-accent shrink-0" />
                  <span className="flex-1">{a}</span>
                  <span className="text-[9px] uppercase tracking-widest text-muted-foreground">{i * 3 + 1}m</span>
                </li>
              ))}
            </ul>
          </NeoCard>
        </div>
      </div>

      {/* Integrations */}
      <div className="mt-10">
        <SectionHeader eyebrow="Wired up" title="Integrations & services" />
        <div className="grid gap-5 md:grid-cols-[1fr_1.4fr]">
          <NeoCard className="!p-0 overflow-hidden">
            <ImageHeader src={botIntegrations} label="PLUGGED" tint="from-secondary/60 to-transparent" />
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Plug className="h-4 w-4 text-secondary-foreground" />
                <span className="font-display text-lg">Wired services</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Everything that keeps the bot answering, storing, and syncing in real time.
              </p>
            </div>
          </NeoCard>
          <NeoCard>
            <ul className="space-y-2.5">
              {INTEGRATIONS.map((i) => (
                <li key={i.name} className="neo-border rounded-md bg-background px-3 py-2 flex items-center justify-between">
                  <span className="flex items-center gap-2 font-bold">
                    <Server className="h-4 w-4" /> {i.name}
                  </span>
                  <span className={`neo-border ${i.tone} font-black text-[10px] uppercase tracking-widest px-2 py-1`}>
                    {i.status}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
              <Activity className="h-3 w-3" /> Last health probe: 8s ago
            </div>
          </NeoCard>
        </div>
      </div>
    </div>
  );
}
