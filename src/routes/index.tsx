import { createFileRoute, Link } from "@tanstack/react-router";
import { NeoBadge, NeoButton, NeoCard, SectionHeader } from "@/components/neo";
import { EventCard } from "@/components/event-card";
import { heroUrl } from "@/components/dashboard-page";
import { MOCK_EVENTS } from "@/lib/mock-data";
import heroSquad from "@/assets/hero-squad.jpg";
import heroTrophy from "@/assets/hero-trophy.jpg";
import coverTournament from "@/assets/type-tournament.jpg";
import coverArtwork from "@/assets/type-artwork.jpg";
import coverPicbattle from "@/assets/type-picbattle.jpg";
import coverCommunity from "@/assets/type-community.jpg";
import featureBot from "@/assets/feature-bot.jpg";
import featureLive from "@/assets/feature-live.jpg";
import featureTeams from "@/assets/feature-teams.jpg";
import featureAdmin from "@/assets/feature-admin.jpg";

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
  Terminal,
  CalendarPlus,
  Rocket,
  Quote,
  HelpCircle,
  CheckCircle2,
} from "lucide-react";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Shouter — Discord Event Platform" },
      {
        name: "description",
        content:
          "Run tournaments, artwork showcases, and pic battles from Discord. Team registration, live reaction sync, admin tooling — all in one bold neobrutalist hub.",
      },
      { property: "og:title", content: "The Shouter — Discord Event Platform" },
      {
        property: "og:description",
        content: "Discord-first event platform for creators and squads: tournaments, pic battles and live reaction sync.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
    image: featureBot,
  },
  {
    icon: Radio,
    title: "Live Sync",
    copy: "Reactions, registrations, and team updates mirrored to the dashboard instantly.",
    number: "02",
    image: featureLive,
  },
  {
    icon: Trophy,
    title: "Team Registration",
    copy: "Configurable squad sizes with per-member Discord verification & waitlists.",
    number: "03",
    image: featureTeams,
  },
  {
    icon: ShieldCheck,
    title: "Admin Control",
    copy: "Manage events, teams, submissions, themes and bot sync from one console.",
    number: "04",
    image: featureAdmin,
  },

];

const STEPS = [
  {
    icon: Bot,
    step: "Step 01",
    title: "Invite the bot",
    copy: "One link, one click. The bot lands in your server, sets up its category and permissions, and says hi.",
    art: "bot-mascot",
    cmd: "!shouter setup",
  },
  {
    icon: CalendarPlus,
    step: "Step 02",
    title: "Spin up an event",
    copy: "Pick a format, slot count and prize pool. Registration channels, embeds and reminders generate themselves.",
    art: "cover-tournament",
    cmd: "!event create bgmi 64",
  },
  {
    icon: Rocket,
    step: "Step 03",
    title: "Go live and track",
    copy: "Watch registrations, reactions and brackets update on the dashboard in real time. Export results when it's done.",
    art: "dash-overview",
    cmd: "!event start #clash-14",
  },
];

const PROOF = [
  { k: "220+", v: "Events hosted", art: "cover-tournament" },
  { k: "38k", v: "Players registered", art: "dash-team" },
  { k: "150+", v: "Discord servers", art: "bot-mascot" },
  { k: "2.1M", v: "Reactions synced", art: "notice-reaction" },
];

const TESTIMONIALS = [
  {
    quote:
      "We used to run a 64-team bracket off three spreadsheets and a prayer. Now the bot does check-ins while I'm asleep.",
    name: "riven",
    role: "Owner · NeonArena (18k members)",
    art: "rank-gold",
  },
  {
    quote:
      "The artwork showcase reactions sync straight from Discord to the leaderboard. Our creators actually compete now.",
    name: "mochi.png",
    role: "Mod · PixelForge",
    art: "cover-artwork",
  },
  {
    quote:
      "Setup was one command. The admin console replaced four tools we were paying for.",
    name: "hexlord",
    role: "Community lead · Skirmish.gg",
    art: "admin-hero",
  },
];

const FAQS = [
  { q: "Do players need an account?", a: "No. They register with the Discord identity they already have — verification happens in-server." },
  { q: "Slash or prefix commands?", a: "Prefix commands by design, so your existing moderators keep the muscle memory they already have." },
  { q: "Can I run private server-only events?", a: "Yes. Lock any event to a guild, a role, or an invite list from the admin console." },
  { q: "What does it cost to start?", a: "The core event tooling is free. Premium unlocks bigger brackets, custom branding and analytics." },
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
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-accent/20 blur-3xl"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 grid gap-12 lg:gap-14 lg:grid-cols-[1.05fr_1fr] items-center">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <NeoBadge variant="accent">
                <Zap className="h-3 w-3" /> Discord-First Event Platform
              </NeoBadge>
              <NeoBadge variant="muted">Season 4 live</NeoBadge>
            </div>
            <h1 className="text-[2.75rem] sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9]">
              RUN EVENTS
              <br />
              <span className="text-primary">STRAIGHT FROM</span>
              <br />
              DISCORD.
            </h1>
            <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              Tournaments, pic battles, artwork wars — all powered by a bot that creates channels,
              tracks registrations, and syncs reactions to a premium dashboard.
            </p>

            {/* Command line teaser */}
            <div className="mt-6 max-w-md neo-border neo-shadow-sm bg-card rounded-md px-3 py-2.5 flex items-center gap-2 overflow-hidden">
              <Terminal className="h-4 w-4 shrink-0 text-accent" />
              <code className="font-mono text-xs sm:text-sm truncate">!event create bgmi 64 --prize 25k</code>
              <span className="ml-auto h-4 w-2 bg-foreground animate-pulse shrink-0" />
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
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

            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[11px] uppercase tracking-widest font-black text-muted-foreground">
              {["Free to start", "No card needed", "Setup in 2 min"].map((t) => (
                <li key={t} className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[color:var(--success)]" /> {t}
                </li>
              ))}
            </ul>

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
          <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none px-3 sm:px-5 pt-6 pb-6 lg:mt-0 lg:pl-6">
            <div className="relative neo-border neo-shadow-lg bg-card rounded-lg overflow-hidden rotate-1">
              <img
                src={heroSquad}
                alt="Squad of gamers with headsets in a bold neobrutalist collage"
                width={1600}
                height={1600}
                className="block w-full h-auto aspect-[4/5] sm:aspect-square object-cover"
              />
              <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/80 to-transparent" />
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
            <div className="absolute top-1 right-0 sm:right-1 lg:-right-2 w-16 sm:w-20 md:w-28 neo-border neo-shadow bg-card rounded-md overflow-hidden -rotate-6">
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
            <div className="absolute bottom-1 left-0 sm:left-1 lg:left-2 neo-border neo-shadow-sm bg-secondary text-secondary-foreground rounded-md px-2 py-1 -rotate-3 flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-destructive" />
              </span>
              <Radio className="h-3 w-3" />
              <span className="font-display text-[10px] uppercase tracking-widest">Live feed</span>
            </div>


            {/* Rating sticker */}
            <div className="absolute top-10 sm:top-14 left-0 sm:left-1 lg:left-2 neo-border neo-shadow bg-accent text-accent-foreground rounded-md px-2.5 py-1.5 sm:px-3 sm:py-2 -rotate-12 flex items-center gap-1">
              <Star className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-current" />
              <span className="font-display text-xs sm:text-sm">4.9</span>
            </div>

          </div>
        </div>
      </section>

      {/* PROOF BAND */}
      <section className="border-b-4 border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {PROOF.map((p) => (
            <div key={p.v} className="flex items-center gap-3 min-w-0">
              <div className="h-12 w-12 shrink-0 neo-border neo-shadow-sm rounded-md overflow-hidden">
                <img src={heroUrl(p.art)} alt="" aria-hidden loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="min-w-0">
                <div className="font-display text-2xl sm:text-3xl leading-none">{p.k}</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground truncate mt-1">{p.v}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EVENT TYPES */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <SectionHeader
          eyebrow="Event Types"
          title="Four ways to run the show"
          subtitle="From casual pic battles to bracketed BGMI wars — the platform bends to your server."
          action={
            <Link to="/categories">
              <NeoButton size="sm" variant="ghost">
                All categories <ArrowRight className="h-3 w-3" />
              </NeoButton>
            </Link>
          }
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

      {/* HOW IT WORKS */}
      <section className="border-y-4 border-border bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <SectionHeader
            eyebrow="How it works"
            title="From invite to trophy in three moves"
            subtitle="No migrations, no onboarding calls. The bot does the boring parts while you hype the room."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {STEPS.map((s) => (
              <NeoCard key={s.title} className="p-0 overflow-hidden h-full flex flex-col transition-transform hover:-translate-y-1 hover:neo-shadow-lg">
                <div className="relative h-36 overflow-hidden border-b-4 border-border">
                  <img src={heroUrl(s.art)} alt="" aria-hidden loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/25 to-transparent" />
                  <span className="absolute top-2 left-2"><NeoBadge variant="primary">{s.step}</NeoBadge></span>
                  <div className="absolute -bottom-4 right-4 neo-border neo-shadow-sm bg-accent text-accent-foreground rounded-md p-2.5">
                    <s.icon className="h-5 w-5" strokeWidth={2.5} />
                  </div>
                </div>
                <div className="p-5 pt-6 flex-1 flex flex-col">
                  <h3 className="font-display text-xl uppercase leading-tight">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{s.copy}</p>
                  <code className="mt-4 block neo-border bg-background rounded-md px-2.5 py-1.5 font-mono text-[11px] overflow-x-auto whitespace-nowrap">
                    {s.cmd}
                  </code>
                </div>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED EVENTS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <SectionHeader
          eyebrow="Featured"
          title="Live and upcoming"
          subtitle="Jump into a bracket tonight — registration stays open until the lobby locks."
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

      {/* FEATURES / WHY SHOUTERS */}
      <section className="border-y-4 border-border bg-card/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <SectionHeader
            eyebrow="Why Shouters"
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
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <SectionHeader
          eyebrow="Server talk"
          title="What the mods are saying"
          subtitle="Real feedback from community leads running weekly events on The Shouter."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <NeoCard key={t.name} className="h-full flex flex-col p-5">
              <Quote className="h-6 w-6 text-accent" />
              <p className="mt-3 text-sm leading-relaxed flex-1">{t.quote}</p>
              <div className="mt-5 pt-4 border-t-2 border-dashed border-border/60 flex items-center gap-3">
                <div className="h-10 w-10 shrink-0 neo-border rounded-md overflow-hidden">
                  <img src={heroUrl(t.art)} alt="" aria-hidden loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="min-w-0">
                  <div className="font-display text-sm truncate">{t.name}</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground truncate">{t.role}</div>
                </div>
                <div className="ml-auto flex gap-0.5 shrink-0">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-current text-accent" />
                  ))}
                </div>
              </div>
            </NeoCard>
          ))}
        </div>
      </section>

      {/* FAQ TEASER */}
      <section className="border-y-4 border-border bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 grid gap-8 lg:grid-cols-[1fr_1.4fr] items-start">
          <div>
            <NeoBadge variant="accent" className="mb-3"><HelpCircle className="h-3 w-3" /> FAQ</NeoBadge>
            <h2 className="text-3xl md:text-4xl">Questions before you load in?</h2>
            <p className="mt-3 text-muted-foreground max-w-md">
              The short answers live here. The long ones — bot commands, bracket formats, API — live in the docs.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link to="/faq"><NeoButton size="sm" variant="primary">Full FAQ <ArrowRight className="h-3 w-3" /></NeoButton></Link>
              <Link to="/docs"><NeoButton size="sm" variant="ghost">Read docs</NeoButton></Link>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {FAQS.map((f) => (
              <NeoCard key={f.q} className="p-4 h-full">
                <div className="font-display text-sm uppercase leading-tight">{f.q}</div>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{f.a}</p>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="relative overflow-hidden neo-border neo-shadow-lg bg-primary text-primary-foreground rounded-lg p-8 sm:p-12 md:p-14 text-center">
          <div aria-hidden className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-accent/40 neo-border" />
          <div aria-hidden className="pointer-events-none absolute -right-12 -bottom-12 h-48 w-48 rounded-full bg-secondary/40 neo-border" />
          <div className="relative">
            <NeoBadge variant="accent" className="mb-4">Free to start</NeoBadge>
            <h2 className="text-4xl md:text-6xl">READY TO LOAD IN?</h2>
            <p className="mt-3 max-w-xl mx-auto opacity-90">
              Sign in with Discord, connect your server, and drop your first event in minutes.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
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
        </div>
      </section>
    </div>
  );
}
