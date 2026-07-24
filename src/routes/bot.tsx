import { createFileRoute, Link } from "@tanstack/react-router";
import { NeoCard, NeoBadge, SectionHeader } from "@/components/neo";
import { heroUrl } from "@/components/dashboard-page";
import {
  Terminal, Shield, Hash, Timer, Puzzle, ScrollText, Settings2,
  UserPlus, Volume2, Layers, Trash2, Webhook, MessageSquare,
  Users, MessagesSquare, ShieldAlert, Lock, Megaphone, ClipboardList,
  Trophy, BarChart3, Cog, ArrowUpRight, Activity, Bot as BotIcon,
} from "lucide-react";

export const Route = createFileRoute("/bot")({
  head: () => ({
    meta: [
      { title: "Bot Control — The Shouter" },
      { name: "description", content: "Commands, permissions, modules, logs, guild settings, temp channels and webhooks." },
      { property: "og:title", content: "Bot Control — The Shouter" },
      { property: "og:description", content: "Commands, permissions, modules, logs, guild settings, temp channels and webhooks." },
    ],
  }),
  component: Page,
});

type Cat = {
  slug: string; label: string; desc: string; icon: typeof Terminal;
  hero: string; tint: string; count: string; updated: string; status: "live" | "beta" | "idle";
};

const CATEGORIES: Cat[] = [
  { slug: "commands", label: "Commands", desc: "! prefix commands with aliases, args and cooldowns.", icon: Terminal, hero: "bot-mascot", tint: "from-primary/30", count: "84 cmds", updated: "2m ago", status: "live" },
  { slug: "permissions", label: "Permissions", desc: "Role gates, channel scopes, overrides per command.", icon: Shield, hero: "dash-security", tint: "from-secondary/30", count: "23 rules", updated: "1h ago", status: "live" },
  { slug: "prefixes", label: "Prefixes", desc: "Per-guild prefix, aliases and mention-mode fallback.", icon: Hash, hero: "settings-hero", tint: "from-accent/30", count: "!, ?, .", updated: "yesterday", status: "live" },
  { slug: "cooldowns", label: "Cooldowns", desc: "Per-user, per-channel and per-guild throttles.", icon: Timer, hero: "dash-tournament", tint: "from-primary/25", count: "17 rules", updated: "3h ago", status: "live" },
  { slug: "modules", label: "Modules", desc: "Toggle feature packs — events, xp, moderation, music.", icon: Puzzle, hero: "cover-community", tint: "from-secondary/25", count: "12 modules", updated: "5m ago", status: "live" },
  { slug: "logs", label: "Logs", desc: "Command traces, errors and audit trail with filters.", icon: ScrollText, hero: "notice-hero", tint: "from-accent/25", count: "1.2K events", updated: "live", status: "live" },
  { slug: "guild-settings", label: "Guild Settings", desc: "Locale, timezone, greeting channel and defaults.", icon: Settings2, hero: "admin-hero", tint: "from-primary/20", count: "48 guilds", updated: "12m ago", status: "live" },
  { slug: "auto-roles", label: "Auto Roles", desc: "Role stacks on join, level gates and verification.", icon: UserPlus, hero: "dash-team", tint: "from-secondary/30", count: "9 flows", updated: "1d ago", status: "live" },
  { slug: "auto-channels", label: "Auto Channels", desc: "Hub joins spawn dynamic voice + text channels.", icon: Volume2, hero: "cover-community", tint: "from-accent/25", count: "4 hubs", updated: "6h ago", status: "live" },
  { slug: "temp-channels", label: "Temp Channels", desc: "Ephemeral VCs that despawn when empty.", icon: Volume2, hero: "cover-picbattle", tint: "from-primary/25", count: "14 alive", updated: "live", status: "live" },
  { slug: "temp-categories", label: "Temp Categories", desc: "Group temp channels under season categories.", icon: Layers, hero: "dash-calendar", tint: "from-secondary/20", count: "3 groups", updated: "yesterday", status: "live" },
  { slug: "cleanup", label: "Cleanup", desc: "Auto-delete old messages, purge stale threads.", icon: Trash2, hero: "settings-hero", tint: "from-destructive/25", count: "7 jobs", updated: "1h ago", status: "live" },
  { slug: "webhooks", label: "Webhooks", desc: "Outbound event streams to any endpoint.", icon: Webhook, hero: "admin-hero", tint: "from-accent/30", count: "22 hooks", updated: "just now", status: "live" },
  { slug: "templates", label: "Message Templates", desc: "Reusable embeds with variables and previews.", icon: MessageSquare, hero: "notice-drop", tint: "from-primary/25", count: "31 templates", updated: "3h ago", status: "live" },
  { slug: "auto-threads", label: "Auto Threads", desc: "Spin threads on hot messages, art drops, replies.", icon: MessagesSquare, hero: "cover-artwork", tint: "from-secondary/25", count: "6 rules", updated: "20m ago", status: "beta" },
  { slug: "moderation", label: "Moderation", desc: "Warns, mutes, kick/ban, appeals and audit log.", icon: ShieldAlert, hero: "dash-security", tint: "from-destructive/30", count: "128 cases", updated: "live", status: "live" },
  { slug: "security", label: "Security", desc: "Raid shield, alt detection and phishing filters.", icon: Lock, hero: "dash-security", tint: "from-primary/25", count: "4 layers", updated: "live", status: "live" },
  { slug: "announcements", label: "Announcements", desc: "Scheduled broadcasts with role pings and embeds.", icon: Megaphone, hero: "notice-drop", tint: "from-accent/30", count: "7 scheduled", updated: "in 2h", status: "live" },
  { slug: "registration", label: "Registration", desc: "!register flow, forms and waitlist promotion.", icon: ClipboardList, hero: "cover-tournament", tint: "from-primary/30", count: "162 opens", updated: "8m ago", status: "live" },
  { slug: "tournament", label: "Tournament", desc: "Brackets, seeding, ready-check and reporting.", icon: Trophy, hero: "dash-tournament", tint: "from-secondary/30", count: "18 live", updated: "live", status: "live" },
  { slug: "leaderboard", label: "Leaderboard", desc: "XP, wins, MVP and seasonal ranking commands.", icon: BarChart3, hero: "stat-wins", tint: "from-accent/25", count: "Top 100", updated: "5m ago", status: "live" },
  { slug: "settings", label: "Settings", desc: "Global bot preferences, presence and API keys.", icon: Cog, hero: "settings-hero", tint: "from-primary/20", count: "1 profile", updated: "yesterday", status: "live" },
];

function StatusDot({ status }: { status: Cat["status"] }) {
  const cls =
    status === "live" ? "bg-[color:var(--success)]"
    : status === "beta" ? "bg-secondary"
    : "bg-muted-foreground";
  return (
    <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest">
      <span className={`relative inline-flex h-2 w-2 rounded-full ${cls}`}>
        {status === "live" && <span className={`absolute inset-0 rounded-full ${cls} animate-ping opacity-60`} />}
      </span>
      {status}
    </span>
  );
}

function BotCard({ c }: { c: Cat }) {
  const Icon = c.icon;
  return (
    <Link
      to={`/bot/${c.slug}` as never}
      className="block h-full group focus:outline-none"
    >
      <NeoCard className="relative overflow-hidden p-0 h-full transition-transform duration-200 group-hover:-translate-y-1 group-hover:neo-shadow-lg">
        {/* Artwork header */}
        <div className="relative h-28 sm:h-32 overflow-hidden border-b-[3px] border-border">
          <img src={heroUrl(c.hero)} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
          <div className={`absolute inset-0 bg-gradient-to-br ${c.tint} via-transparent to-background/70`} />
          <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{
            backgroundImage: "repeating-linear-gradient(45deg, var(--color-border) 0 1px, transparent 1px 8px)",
          }} />
          <div className="absolute top-2 left-2 flex items-center gap-2">
            <span className="neo-border neo-shadow-sm bg-card text-card-foreground rounded-md h-9 w-9 grid place-items-center rotate-[-4deg] group-hover:rotate-[4deg] transition-transform">
              <Icon className="h-4 w-4" />
            </span>
            <NeoBadge variant="muted">Bot</NeoBadge>
          </div>
          <div className="absolute top-2 right-2 neo-border neo-shadow-sm bg-card text-card-foreground rounded-md px-2 py-1">
            <StatusDot status={c.status} />
          </div>
          <ArrowUpRight className="absolute bottom-2 right-2 h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity text-foreground" />
        </div>
        {/* Body */}
        <div className="p-4 sm:p-5 space-y-3">
          <div className="font-display text-lg sm:text-xl leading-tight">{c.label}</div>
          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{c.desc}</p>
          <div className="flex items-center justify-between pt-2 border-t-2 border-border/40 text-[10px] font-display uppercase tracking-widest">
            <span className="inline-flex items-center gap-1 text-foreground/80"><Activity className="h-3 w-3" />{c.count}</span>
            <span className="text-muted-foreground">{c.updated}</span>
          </div>
        </div>
      </NeoCard>
    </Link>
  );
}

function Page() {
  const live = CATEGORIES.filter((c) => c.status === "live").length;
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      {/* Hero */}
      <div className="relative neo-border neo-shadow-lg rounded-lg overflow-hidden bg-card">
        <img src={heroUrl("bot-mascot")} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-transparent" />
        <span className="absolute top-4 right-4 rotate-6 neo-border neo-shadow-sm bg-accent text-accent-foreground rounded-full h-16 w-16 grid place-items-center font-display text-[10px] uppercase text-center leading-none">
          Bot<br/>Control
        </span>
        <div className="relative p-6 sm:p-10 max-w-2xl">
          <NeoBadge variant="accent">Discord</NeoBadge>
          <h1 className="font-display text-3xl sm:text-5xl mt-3 leading-tight">Command the Shouter bot.</h1>
          <p className="text-sm sm:text-base text-muted-foreground mt-2 max-w-lg">
            {CATEGORIES.length} modules, {live} live. Configure commands, permissions, moderation, temp channels, webhooks and more.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <NeoBadge variant="success">● {live} online</NeoBadge>
            <NeoBadge variant="secondary"><BotIcon className="h-3 w-3" /> 48 guilds</NeoBadge>
            <NeoBadge variant="muted">Ping 43ms</NeoBadge>
          </div>
        </div>
      </div>

      <SectionHeader eyebrow="Modules" title="Every knob, every command" subtitle="Tap any module for full documentation, live status and interactive command reference." />

      <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {CATEGORIES.map((c) => <BotCard key={c.slug} c={c} />)}
      </div>
    </div>
  );
}
