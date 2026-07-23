import { createFileRoute, Link } from "@tanstack/react-router";
import { NeoBadge, NeoButton, NeoCard, SectionHeader } from "@/components/neo";
import { EventCard } from "@/components/event-card";
import { MOCK_EVENTS } from "@/lib/mock-data";
import heroSquad from "@/assets/hero-squad.jpg";
import heroTrophy from "@/assets/hero-trophy.jpg";
import {
  Bot,
  Users,
  Trophy,
  Palette,
  Camera,
  Gamepad2,
  Zap,
  ArrowRight,
  Radio,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "THE SHOOTERS — Discord Event Platform" },
      {
        name: "description",
        content:
          "Run tournaments, artwork showcases, and pic battles from Discord. Team registration, live reaction sync, admin tooling — all in one bold neobrutalist hub.",
      },
      { property: "og:title", content: "THE SHOOTERS" },
      { property: "og:description", content: "Discord-first event platform for creators and squads." },
    ],
  }),
  component: Landing,
});

const EVENT_TYPES = [
  {
    icon: Palette,
    title: "Artwork Showcase",
    copy: "Drop your art. Community votes on Discord in real time.",
    tag: "Creative",
    accent: "bg-secondary text-secondary-foreground",
    stat: "1.2k drops",
  },
  {
    icon: Camera,
    title: "Pic Battle",
    copy: "1v1 bracketed photo battles with live reactions & judges.",
    tag: "Bracket",
    accent: "bg-accent text-accent-foreground",
    stat: "64-slot",
  },
  {
    icon: Gamepad2,
    title: "Game Tournaments",
    copy: "BGMI, Free Fire, Minecraft, Roblox — auto lobbies included.",
    tag: "Esports",
    accent: "bg-primary text-primary-foreground",
    stat: "Prize pools",
  },
  {
    icon: Users,
    title: "Community Events",
    copy: "Custom formats for your server. Fully configurable modules.",
    tag: "Flex",
    accent: "bg-[color:var(--success)] text-black",
    stat: "Any size",
  },
];

const FEATURES = [
  {
    icon: Bot,
    title: "Bot-Powered",
    copy: "Prefix commands, Canva-style embeds, temp event channels spun up on demand.",
    number: "01",
  },
  {
    icon: Radio,
    title: "Live Sync",
    copy: "Reactions, registrations, and team updates mirrored to the dashboard instantly.",
    number: "02",
  },
  {
    icon: Trophy,
    title: "Team Registration",
    copy: "Configurable squad sizes with per-member Discord verification & waitlists.",
    number: "03",
  },
  {
    icon: ShieldCheck,
    title: "Admin Control",
    copy: "Manage events, teams, submissions, themes and bot sync from one console.",
    number: "04",
  },
];

function Landing() {
  const featured = MOCK_EVENTS.slice(0, 3);
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b-4 border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 grid gap-10 lg:grid-cols-[1.2fr_1fr] items-center">
          <div>
            <NeoBadge variant="accent" className="mb-5">
              <Zap className="h-3 w-3" /> Discord-First Event Platform
            </NeoBadge>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9]">
              RUN EVENTS
              <br />
              <span className="text-primary">STRAIGHT FROM</span>
              <br />
              DISCORD.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Tournaments, pic battles, artwork wars — all powered by a bot that creates channels,
              tracks registrations, and syncs reactions to a premium dashboard.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/explore">
                <NeoButton size="lg" variant="primary">
                  Browse Events <ArrowRight className="h-4 w-4" />
                </NeoButton>
              </Link>
              <Link to="/profile">
                <NeoButton size="lg" variant="secondary">
                  Login with Discord
                </NeoButton>
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3 max-w-md">
              {[
                { k: "220+", v: "Events" },
                { k: "38k", v: "Players" },
                { k: "150+", v: "Servers" },
              ].map((s) => (
                <div
                  key={s.v}
                  className="neo-border neo-shadow-sm bg-card rounded-md p-3 text-center"
                >
                  <div className="font-display text-2xl">{s.k}</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Discord card mock */}
          <div className="relative">
            <div className="neo-border neo-shadow-lg bg-card rounded-lg p-5 rotate-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full neo-border bg-primary flex items-center justify-center">
                  <Bot className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-display text-sm">SHOOTERS BOT</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-widest">
                    Today at 20:00
                  </div>
                </div>
                <NeoBadge variant="accent" className="ml-auto">BOT</NeoBadge>
              </div>
              <div className="neo-border rounded-md bg-gradient-to-br from-orange-500 to-rose-600 p-5">
                <div className="text-white/90 text-[10px] uppercase font-black tracking-widest">
                  Registration Card
                </div>
                <div className="mt-2 font-display text-white text-3xl leading-none">
                  BGMI CLASH #14
                </div>
                <div className="mt-3 flex items-center gap-4 text-white text-sm">
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" /> 62 / 64 squads
                  </span>
                  <span className="flex items-center gap-1">
                    <Trophy className="h-4 w-4" /> ₹25,000
                  </span>
                </div>
                <div className="mt-4 flex gap-2">
                  <span className="neo-border neo-shadow-sm rounded-md bg-white text-black px-3 py-1 text-xs font-black uppercase">
                    !register
                  </span>
                  <span className="neo-border neo-shadow-sm rounded-md bg-black text-white px-3 py-1 text-xs font-black uppercase">
                    !bracket
                  </span>
                </div>
              </div>
              <div className="mt-3 flex gap-2 flex-wrap">
                {["🔥 128", "⚔️ 74", "🎯 41", "👑 22"].map((r) => (
                  <span
                    key={r}
                    className="neo-border rounded-md bg-background px-2 py-1 text-xs font-bold"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 neo-border neo-shadow bg-secondary text-secondary-foreground rounded-md p-3 -rotate-3 hidden md:block">
              <div className="font-display text-xs">LIVE FEED</div>
              <div className="text-[10px]">shadow#0001 joined</div>
              <div className="text-[10px]">raven#4210 joined</div>
              <div className="text-[10px]">kite#9910 joined</div>
            </div>
          </div>
        </div>
      </section>

      {/* EVENT TYPES */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <SectionHeader
          eyebrow="Event Types"
          title="Four ways to run the show"
          subtitle="From casual pic battles to bracketed BGMI wars — the platform bends to your server."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {EVENT_TYPES.map((t) => (
            <NeoCard key={t.title} className="flex flex-col gap-3">
              <div className="neo-border rounded-md bg-primary text-primary-foreground p-2 w-fit">
                <t.icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl">{t.title}</h3>
              <p className="text-sm text-muted-foreground">{t.copy}</p>
            </NeoCard>
          ))}
        </div>
      </section>

      {/* FEATURED EVENTS */}
      <section className="mx-auto max-w-7xl px-4 py-8">
        <SectionHeader
          eyebrow="Featured"
          title="Live and upcoming"
          action={
            <Link to="/explore">
              <NeoButton size="sm" variant="secondary">
                See all <ArrowRight className="h-3 w-3" />
              </NeoButton>
            </Link>
          }
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((e) => (
            <EventCard key={e.id} event={e} />
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <SectionHeader eyebrow="Why Shooters" title="Discord is the source of truth" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <NeoCard key={f.title}>
              <f.icon className="h-6 w-6 text-accent mb-3" />
              <h3 className="text-lg">{f.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.copy}</p>
            </NeoCard>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="neo-border neo-shadow-lg bg-primary text-primary-foreground rounded-lg p-10 md:p-14 text-center">
          <h2 className="text-4xl md:text-6xl">READY TO LOAD IN?</h2>
          <p className="mt-3 max-w-xl mx-auto opacity-80">
            Sign in with Discord, connect your server, and drop your first event in minutes.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/profile">
              <NeoButton size="lg" variant="ghost">
                Login with Discord
              </NeoButton>
            </Link>
            <Link to="/explore">
              <NeoButton size="lg" variant="accent">
                Browse events
              </NeoButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
