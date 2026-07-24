import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { NeoCard, NeoBadge, NeoButton, SectionHeader } from "@/components/neo";
import { heroUrl } from "@/components/dashboard-page";
import {
  Search, Rocket, MessageCircle, Trophy, Bot, UserPlus, LifeBuoy, Video,
  BookOpen, PlayCircle, Wrench, Sparkles, ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/help")({
  head: () => ({
    meta: [
      { title: "Help Center — The Shouter" },
      { name: "description", content: "Guides, tutorials, and troubleshooting from the crew." },
      { property: "og:title", content: "Help Center — The Shouter" },
      { property: "og:description", content: "Getting started, Discord setup, tournaments, bot, and support — all in one place." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/help" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/help" }],
  }),
  component: Page,
});

type Cat = "Getting Started" | "Discord Setup" | "Event Creation" | "Tournament Guide" | "Bot Guide" | "Registration" | "Troubleshooting";

const CATS: { key: Cat; label: string; icon: typeof Rocket; heroKey: string; tint: string }[] = [
  { key: "Getting Started", label: "Getting Started", icon: Rocket, heroKey: "dash-overview", tint: "bg-primary text-primary-foreground" },
  { key: "Discord Setup", label: "Discord Setup", icon: MessageCircle, heroKey: "bot-mascot", tint: "bg-secondary text-secondary-foreground" },
  { key: "Event Creation", label: "Event Creation", icon: Sparkles, heroKey: "cover-tournament", tint: "bg-accent text-accent-foreground" },
  { key: "Tournament Guide", label: "Tournaments", icon: Trophy, heroKey: "dash-tournament", tint: "bg-card" },
  { key: "Bot Guide", label: "Bot", icon: Bot, heroKey: "bot-mascot", tint: "bg-card" },
  { key: "Registration", label: "Registration", icon: UserPlus, heroKey: "cover-tournament", tint: "bg-card" },
  { key: "Troubleshooting", label: "Troubleshooting", icon: Wrench, heroKey: "dash-security", tint: "bg-card" },
];

const QUICK = [
  { label: "Add bot to server", to: "/bot-status", icon: Bot },
  { label: "Register your team", to: "/teams", icon: UserPlus },
  { label: "Host a tournament", to: "/tournaments", icon: Trophy },
  { label: "Open a ticket", to: "/support", icon: LifeBuoy },
];

interface Guide {
  title: string; desc: string; cat: Cat; minutes: number; heroKey: string;
  tag?: "New" | "Popular" | "Video"; to: string;
}

const GUIDES: Guide[] = [
  { title: "Link Discord in 60 seconds", desc: "Connect your account and pull rank, avatar, and reactions instantly.", cat: "Getting Started", minutes: 2, heroKey: "dash-overview", tag: "Popular", to: "/dashboard" },
  { title: "Pick a seasonal theme", desc: "Summer, Halloween, Winter, Spring, Cyber — swap the whole vibe.", cat: "Getting Started", minutes: 1, heroKey: "settings-hero", to: "/dashboard/theme" },
  { title: "Complete your profile", desc: "Show off badges, teams, and streaks on your public card.", cat: "Getting Started", minutes: 3, heroKey: "dashboard-hero", to: "/dashboard/profile" },
  { title: "Invite the bot", desc: "Two-click install with Manage Server permissions.", cat: "Discord Setup", minutes: 2, heroKey: "bot-mascot", tag: "Popular", to: "/bot-status" },
  { title: "Configure prefixes", desc: "Change ! to any character per server or per channel.", cat: "Discord Setup", minutes: 3, heroKey: "bot-mascot", to: "/bot/prefixes" },
  { title: "Auto-role new joins", desc: "Level gates, verification, and role stacks.", cat: "Discord Setup", minutes: 5, heroKey: "bot-mascot", to: "/bot/auto-roles" },
  { title: "Create your first event", desc: "Solo or team, custom art, Discord embed, and calendar sync.", cat: "Event Creation", minutes: 6, heroKey: "cover-tournament", tag: "New", to: "/admin/manage/tournaments" },
  { title: "Design a bracket", desc: "Single elim, double elim, Swiss, RR, or BR.", cat: "Event Creation", minutes: 8, heroKey: "cover-tournament", to: "/tournaments/bracket-generator" },
  { title: "Add sponsors & prizes", desc: "Cash pools, coin drops, cosmetic bundles.", cat: "Event Creation", minutes: 4, heroKey: "cover-artwork", to: "/sponsors" },
  { title: "Run a tournament day", desc: "Check-in, brackets, reporting, and appeals.", cat: "Tournament Guide", minutes: 10, heroKey: "dash-tournament", tag: "Popular", to: "/tournaments" },
  { title: "Report a match result", desc: "Screenshots, VOD, or bot auto-detect.", cat: "Tournament Guide", minutes: 3, heroKey: "cover-tournament", to: "/tournaments/match-reporting" },
  { title: "Handle no-shows", desc: "Ready-check timers and reserves.", cat: "Tournament Guide", minutes: 4, heroKey: "dash-team", to: "/teams/ready-check" },
  { title: "Anti-cheat basics", desc: "Verification, replay review, and appeals process.", cat: "Tournament Guide", minutes: 6, heroKey: "dash-security", to: "/tournaments/anti-cheat" },
  { title: "Bot module toggles", desc: "Enable only what you need — the rest goes silent.", cat: "Bot Guide", minutes: 3, heroKey: "bot-mascot", to: "/bot/modules" },
  { title: "Temp channels & categories", desc: "Auto-spawn VC per squad, auto-cleanup.", cat: "Bot Guide", minutes: 5, heroKey: "bot-mascot", to: "/bot/temp-channels" },
  { title: "Webhooks", desc: "Wire lifecycle events to Slack, Zapier, or custom endpoints.", cat: "Bot Guide", minutes: 6, heroKey: "bot-mascot", tag: "Video", to: "/bot/webhooks" },
  { title: "Solo registration", desc: "One tap, DM confirmation, and calendar entry.", cat: "Registration", minutes: 2, heroKey: "cover-tournament", to: "/explore" },
  { title: "Team registration", desc: "Captain flow, reserves, and captain transfer.", cat: "Registration", minutes: 5, heroKey: "dash-team", to: "/teams" },
  { title: "Check-in explained", desc: "The 15-minute window before start.", cat: "Registration", minutes: 2, heroKey: "dash-calendar", to: "/teams/check-in" },
  { title: "Bot commands not firing", desc: "Prefix, cooldowns, and permission checklist.", cat: "Troubleshooting", minutes: 4, heroKey: "bot-mascot", to: "/bot/logs" },
  { title: "Reactions not syncing", desc: "How the bot mirrors Discord reacts to your dashboard.", cat: "Troubleshooting", minutes: 3, heroKey: "notice-reaction", to: "/dashboard/reactions" },
  { title: "Can't log in?", desc: "Discord OAuth scopes and revoked tokens.", cat: "Troubleshooting", minutes: 3, heroKey: "dash-security", to: "/dashboard/sessions" },
];

const VIDEOS = [
  { title: "The Shouter in 90 seconds", heroKey: "cover-community", length: "1:30" },
  { title: "Hosting your first tournament", heroKey: "dash-tournament", length: "6:12" },
  { title: "Bot install walkthrough", heroKey: "bot-mascot", length: "3:45" },
  { title: "Seasonal themes tour", heroKey: "settings-hero", length: "2:18" },
];

function Page() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<Cat | "All">("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return GUIDES.filter((g) =>
      (active === "All" || g.cat === active) &&
      (!q || g.title.toLowerCase().includes(q) || g.desc.toLowerCase().includes(q)),
    );
  }, [query, active]);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-12 space-y-10">
      {/* Hero */}
      <div className="relative neo-border neo-shadow-lg rounded-lg overflow-hidden bg-card">
        <img src={heroUrl("cover-community")} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/40" />
        <span className="absolute top-4 right-4 -rotate-6 neo-border neo-shadow-sm bg-secondary text-secondary-foreground rounded-md px-3 py-2 font-display text-[11px] uppercase">
          Guides · Videos · Fixes
        </span>
        <div className="relative p-6 sm:p-10 max-w-2xl">
          <NeoBadge variant="accent">Support</NeoBadge>
          <h1 className="font-display text-3xl sm:text-5xl mt-3 leading-tight">Help Center</h1>
          <p className="text-sm sm:text-base text-muted-foreground mt-2 max-w-lg">
            Walkthroughs, video tutorials and battle-tested fixes from the crew that ships the platform.
          </p>
          <div className="mt-5 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search guides..."
              className="w-full neo-border neo-shadow-sm bg-background rounded-md py-3 pl-10 pr-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {QUICK.map((q) => (
              <Link key={q.label} to={q.to}>
                <NeoButton size="sm" variant="ghost"><q.icon className="h-3.5 w-3.5" /> {q.label}</NeoButton>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Categories grid */}
      <div>
        <SectionHeader eyebrow="Browse" title="Categories" />
        <div className="grid gap-3 sm:gap-4 grid-cols-2 lg:grid-cols-4">
          <button
            onClick={() => setActive("All")}
            className={cn(
              "neo-border neo-shadow-sm rounded-md p-4 text-left transition-all hover:-translate-y-0.5",
              active === "All" ? "bg-primary text-primary-foreground" : "bg-card",
            )}
          >
            <Sparkles className="h-5 w-5" />
            <div className="font-display text-sm mt-2 uppercase">All Guides</div>
            <div className="text-[11px] opacity-80 mt-1">{GUIDES.length} articles</div>
          </button>
          {CATS.map((c) => {
            const count = GUIDES.filter((g) => g.cat === c.key).length;
            const on = active === c.key;
            return (
              <button
                key={c.key}
                onClick={() => setActive(c.key)}
                className={cn(
                  "relative overflow-hidden neo-border neo-shadow-sm rounded-md p-0 text-left transition-all hover:-translate-y-0.5 group",
                  on ? "bg-primary text-primary-foreground" : c.tint,
                )}
              >
                <div className="relative h-20 w-full overflow-hidden">
                  <img src={heroUrl(c.heroKey)} alt="" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
                </div>
                <div className="p-3">
                  <c.icon className="h-4 w-4" />
                  <div className="font-display text-sm mt-1 uppercase leading-tight">{c.label}</div>
                  <div className="text-[11px] opacity-80 mt-0.5">{count} articles</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Guides */}
      <div>
        <SectionHeader
          eyebrow={active === "All" ? "All Guides" : active}
          title={query ? `Results (${filtered.length})` : `${filtered.length} guides`}
        />
        {filtered.length === 0 ? (
          <NeoCard className="p-8 text-center">
            <BookOpen className="mx-auto h-10 w-10 text-muted-foreground" />
            <div className="font-display text-lg mt-3">No guides matched.</div>
            <div className="mt-4"><Link to="/support"><NeoButton size="sm" variant="accent">Ask the crew</NeoButton></Link></div>
          </NeoCard>
        ) : (
          <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((g) => (
              <Link key={g.title} to={g.to} className="block group">
                <NeoCard className="p-0 overflow-hidden h-full transition-all duration-200 group-hover:-translate-y-1 group-hover:neo-shadow-lg">
                  <div className="relative h-32 overflow-hidden">
                    <img src={heroUrl(g.heroKey)} alt="" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                    {g.tag ? (
                      <span className="absolute top-2 right-2">
                        <NeoBadge variant={g.tag === "New" ? "success" : g.tag === "Video" ? "accent" : "primary"}>{g.tag}</NeoBadge>
                      </span>
                    ) : null}
                    <span className="absolute bottom-2 left-2">
                      <NeoBadge variant="muted">{g.cat}</NeoBadge>
                    </span>
                  </div>
                  <div className="p-4">
                    <div className="font-display text-base leading-snug">{g.title}</div>
                    <p className="text-[12px] text-muted-foreground mt-1 line-clamp-2">{g.desc}</p>
                    <div className="mt-3 flex items-center justify-between text-[11px] text-muted-foreground">
                      <span>{g.minutes} min read</span>
                      <span className="inline-flex items-center gap-1 font-display uppercase group-hover:text-accent">Read <ChevronRight className="h-3 w-3" /></span>
                    </div>
                  </div>
                </NeoCard>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Video tutorials */}
      <div>
        <SectionHeader eyebrow="Watch" title="Video tutorials" />
        <div className="grid gap-3 sm:gap-4 grid-cols-2 lg:grid-cols-4">
          {VIDEOS.map((v) => (
            <NeoCard key={v.title} className="p-0 overflow-hidden group cursor-pointer transition-all hover:-translate-y-1 hover:neo-shadow-lg">
              <div className="relative aspect-video overflow-hidden">
                <img src={heroUrl(v.heroKey)} alt="" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors grid place-items-center">
                  <PlayCircle className="h-12 w-12 text-primary-foreground drop-shadow-lg" />
                </div>
                <span className="absolute bottom-2 right-2 neo-border neo-shadow-sm bg-background/90 rounded px-2 py-0.5 text-[10px] font-display">{v.length}</span>
              </div>
              <div className="p-3">
                <Video className="h-3.5 w-3.5 text-muted-foreground" />
                <div className="font-display text-sm mt-1 leading-tight">{v.title}</div>
              </div>
            </NeoCard>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <NeoCard className="p-6 sm:p-8 bg-secondary text-secondary-foreground relative overflow-hidden">
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/40 neo-border" />
        <div className="pointer-events-none absolute -left-6 -bottom-6 h-24 w-24 rounded-full bg-primary/30 neo-border" />
        <div className="relative grid gap-4 sm:grid-cols-[1fr_auto] items-center">
          <div>
            <div className="text-[10px] uppercase tracking-widest opacity-80">Human support</div>
            <div className="font-display text-2xl sm:text-3xl mt-1">Can't find your answer?</div>
            <p className="text-sm opacity-90 mt-1">The crew is on Discord 16h a day. Median first response: 22 minutes.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link to="/support"><NeoButton variant="primary"><LifeBuoy className="h-4 w-4" /> Contact support</NeoButton></Link>
            <Link to="/faq"><NeoButton variant="accent">Browse FAQ</NeoButton></Link>
          </div>
        </div>
      </NeoCard>
    </div>
  );
}
