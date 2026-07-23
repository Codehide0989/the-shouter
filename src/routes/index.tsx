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
    copy: "Drop your best pieces. The community reacts in real time and top drops climb the podium — zero spreadsheets, all vibes.",
    tag: "Creative",
    accent: "bg-secondary text-secondary-foreground",
    stat: "1.2k drops",
    image: coverArtwork,
  },
  {
    icon: Camera,
    title: "Pic Battle",
    copy: "Head-to-head photo brackets with live reaction scoring, judge overrides, and instant next-round matchups.",
    tag: "Bracket",
    accent: "bg-accent text-accent-foreground",
    stat: "64-slot",
    image: coverPicbattle,
  },
  {
    icon: Gamepad2,
    title: "Game Tournaments",
    copy: "BGMI, Free Fire, Minecraft, Roblox — auto lobbies, room codes on demand, and prize pool tracking baked in.",
    tag: "Esports",
    accent: "bg-primary text-primary-foreground",
    stat: "Prize pools",
    image: coverTournament,
  },
  {
    icon: Users,
    title: "Community Events",
    copy: "Design any custom format your server dreams up. Modules for quizzes, raids, watch-parties — all fully configurable.",
    tag: "Flex",
    accent: "bg-[color:var(--success)] text-black",
    stat: "Any size",
    image: coverCommunity,
  },
];

const FEATURES = [
  {
    icon: Bot,
    title: "Bot-Powered",
    copy: "Prefix commands, Canva-style embeds, temp event channels spun up on demand.",
    number: "01",
    image: coverTournament,
  },
  {
    icon: Radio,
    title: "Live Sync",
    copy: "Reactions, registrations, and team updates mirrored to the dashboard instantly.",
    number: "02",
    image: coverPicbattle,
  },
  {
    icon: Trophy,
    title: "Team Registration",
    copy: "Configurable squad sizes with per-member Discord verification & waitlists.",
    number: "03",
    image: coverArtwork,
  },
  {
    icon: ShieldCheck,
    title: "Admin Control",
    copy: "Manage events, teams, submissions, themes and bot sync from one console.",
    number: "04",
    image: coverCommunity,
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
              {/* Sticker overlay: bot card — compact */}
              <div className="absolute left-2 bottom-2 right-2 sm:left-3 sm:bottom-3 sm:right-auto sm:max-w-[70%] neo-border neo-shadow-sm bg-background/90 backdrop-blur rounded-md px-2 py-1.5 flex items-center gap-2">
                <div className="h-6 w-6 rounded-full neo-border bg-primary flex items-center justify-center shrink-0">
                  <Bot className="h-3 w-3 text-primary-foreground" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-display text-[10px] truncate leading-tight">BGMI CLASH #14</div>
                  <div className="text-[8px] uppercase tracking-widest text-muted-foreground leading-tight">
                    62/64 · ₹25k
                  </div>
                </div>
                <span className="text-[9px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded bg-destructive text-white neo-border animate-pulse">Live</span>
              </div>
            </div>

            {/* Floating trophy sticker */}
            <div className="absolute -top-4 -right-3 md:-right-6 w-20 md:w-28 neo-border neo-shadow bg-card rounded-md overflow-hidden -rotate-6">
              <img
                src={heroTrophy}
                alt="Neobrutalist trophy and controller"
                width={1200}
                height={1200}
                loading="lazy"
                className="block w-full h-auto"
              />
            </div>

            {/* Live feed chip — compact */}
            <div className="absolute -bottom-4 -left-2 md:-left-5 neo-border neo-shadow-sm bg-secondary text-secondary-foreground rounded-md px-2 py-1 -rotate-3 hidden sm:flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-destructive" />
              </span>
              <Radio className="h-3 w-3" />
              <span className="font-display text-[10px] uppercase tracking-widest">Live feed</span>
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
              className="group relative neo-border neo-shadow bg-card text-card-foreground rounded-md overflow-hidden flex flex-col transition-transform hover:-translate-y-1 hover:-translate-x-1 hover:neo-shadow-lg"
            >
              {/* Image header */}
              <div className="relative h-32 overflow-hidden border-b-4 border-border">
                <img
                  src={t.image}
                  alt={t.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
                <span className="absolute top-2 right-2 font-display text-xs bg-background/90 neo-border rounded px-1.5 py-0.5">
                  0{i + 1}
                </span>
                <div className="absolute bottom-2 left-2 flex items-center gap-2">
                  <div className={`neo-border neo-shadow-sm rounded-md p-2 ${t.accent}`}>
                    <t.icon className="h-4 w-4" strokeWidth={2.5} />
                  </div>
                  <NeoBadge variant="muted">{t.tag}</NeoBadge>
                </div>
              </div>
              <div className="p-5 flex flex-col gap-3 flex-1">
                <h3 className="font-display text-xl uppercase leading-tight tracking-tight">{t.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.copy}</p>
                <div className="mt-auto pt-3 border-t-2 border-dashed border-border/60 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest font-black">
                    {t.stat}
                  </span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
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
              className="group relative neo-border neo-shadow bg-card text-card-foreground rounded-md overflow-hidden transition-transform hover:-translate-y-1 hover:-translate-x-1 hover:neo-shadow-lg flex flex-col"
            >
              {/* Image header with duotone treatment */}
              <div className="relative h-28 overflow-hidden border-b-4 border-border">
                <img
                  src={f.image}
                  alt=""
                  aria-hidden
                  className="absolute inset-0 h-full w-full object-cover mix-blend-luminosity opacity-70 transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-accent/50 via-transparent to-primary/40" />
                <span className="absolute top-2 right-3 font-display text-4xl leading-none text-background/90 drop-shadow-[2px_2px_0_var(--color-border)]">
                  {f.number}
                </span>
                <div className="absolute -bottom-4 left-3 neo-border neo-shadow-sm rounded-md bg-background p-2.5">
                  <f.icon className="h-5 w-5 text-accent" strokeWidth={2.5} />
                </div>
              </div>
              <div className="p-5 pt-6 flex-1 flex flex-col">
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
