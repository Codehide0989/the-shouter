import { createFileRoute, Link } from "@tanstack/react-router";
import { NeoBadge, NeoButton, SectionHeader } from "@/components/neo";
import { EventCard } from "@/components/event-card";
import { MOCK_EVENTS } from "@/lib/mock-data";
import heroSquad from "@/assets/hero-squad.jpg";
import heroTrophy from "@/assets/hero-trophy.jpg";
import coverTournament from "@/assets/cover-tournament.jpg";
import coverArtwork from "@/assets/cover-artwork.jpg";
import coverPicbattle from "@/assets/cover-picbattle.jpg";
import coverCommunity from "@/assets/cover-community.jpg";
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
        {/* Decorative background scribbles */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(currentColor 1.5px, transparent 1.5px)",
            backgroundSize: "22px 22px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-14 md:py-24 grid gap-10 lg:grid-cols-[1.1fr_1fr] items-center">
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

          {/* Hero image collage */}
          <div className="relative">
            <div className="relative neo-border neo-shadow-lg bg-card rounded-lg overflow-hidden rotate-1">
              <img
                src={heroSquad}
                alt="Squad of gamers with headsets in a bold neobrutalist collage"
                width={1600}
                height={1600}
                className="block w-full h-auto aspect-square object-cover"
              />
              {/* Sticker overlay: bot card */}
              <div className="absolute left-3 bottom-3 right-3 neo-border neo-shadow bg-background/95 backdrop-blur rounded-md p-3 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full neo-border bg-primary flex items-center justify-center shrink-0">
                  <Bot className="h-4 w-4 text-primary-foreground" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-display text-xs truncate">BGMI CLASH #14 — LIVE</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    62 / 64 squads · ₹25,000
                  </div>
                </div>
                <NeoBadge variant="destructive" className="animate-pulse">Live</NeoBadge>
              </div>
            </div>

            {/* Floating trophy sticker */}
            <div className="absolute -top-4 -right-3 md:-right-6 w-24 md:w-32 neo-border neo-shadow bg-card rounded-md overflow-hidden -rotate-6">
              <img
                src={heroTrophy}
                alt="Neobrutalist trophy and controller"
                width={1200}
                height={1200}
                loading="lazy"
                className="block w-full h-auto"
              />
            </div>

            {/* Live feed chip */}
            <div className="absolute -bottom-5 -left-3 md:-left-6 neo-border neo-shadow bg-secondary text-secondary-foreground rounded-md p-3 -rotate-3 hidden sm:block">
              <div className="font-display text-xs flex items-center gap-1">
                <Radio className="h-3 w-3" /> LIVE FEED
              </div>
              <div className="text-[10px]">shadow#0001 joined</div>
              <div className="text-[10px]">raven#4210 joined</div>
              <div className="text-[10px]">kite#9910 joined</div>
            </div>

            {/* Rating sticker */}
            <div className="absolute top-6 -left-3 neo-border neo-shadow bg-accent text-accent-foreground rounded-md px-3 py-2 -rotate-12 hidden md:flex items-center gap-1">
              <Star className="h-4 w-4 fill-current" />
              <span className="font-display text-sm">4.9</span>
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
          {EVENT_TYPES.map((t, i) => (
            <div
              key={t.title}
              className="group relative neo-border neo-shadow bg-card text-card-foreground rounded-md p-5 flex flex-col gap-4 transition-transform hover:-translate-y-1 hover:-translate-x-1 hover:neo-shadow-lg"
            >
              <span className="absolute top-3 right-3 font-display text-xs opacity-40">
                0{i + 1}
              </span>
              <div className="flex items-center gap-3">
                <div className={`neo-border neo-shadow-sm rounded-md p-3 ${t.accent}`}>
                  <t.icon className="h-6 w-6" strokeWidth={2.5} />
                </div>
                <NeoBadge variant="muted">{t.tag}</NeoBadge>
              </div>
              <div>
                <h3 className="font-display text-xl uppercase leading-tight">{t.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.copy}</p>
              </div>
              <div className="mt-auto pt-3 border-t-2 border-dashed border-border/60 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest font-black">
                  {t.stat}
                </span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
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

      {/* FEATURES / WHY SHOOTERS */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <SectionHeader
          eyebrow="Why Shooters"
          title="Discord is the source of truth"
          subtitle="Built for community managers who want less spreadsheet, more hype."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="group relative neo-border neo-shadow bg-card text-card-foreground rounded-md overflow-hidden transition-transform hover:-translate-y-1 hover:-translate-x-1 hover:neo-shadow-lg"
            >
              {/* Top color strip */}
              <div className="h-2 bg-accent border-b-4 border-border" />
              <div className="p-5">
                <div className="flex items-start justify-between mb-4">
                  <div className="neo-border neo-shadow-sm rounded-md bg-background p-3">
                    <f.icon className="h-6 w-6 text-accent" strokeWidth={2.5} />
                  </div>
                  <span className="font-display text-3xl leading-none opacity-20">
                    {f.number}
                  </span>
                </div>
                <h3 className="font-display text-lg uppercase leading-tight">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.copy}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-[10px] uppercase tracking-widest font-black text-accent">
                  <Sparkles className="h-3 w-3" /> Ready out of the box
                </div>
              </div>
            </div>
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
