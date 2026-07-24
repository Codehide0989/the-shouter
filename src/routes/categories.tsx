import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { NeoCard, NeoBadge, NeoButton, SectionHeader } from "@/components/neo";
import { heroUrl } from "@/components/dashboard-page";
import {
  Camera, Video, Blocks, Palette, Image as ImageIcon, Smile, Gamepad2,
  Users, Mic, Film, Music, Radio, Brain, Sparkles, Search, Trophy, Flame,
} from "lucide-react";

export const Route = createFileRoute("/categories")({
  head: () => ({
    meta: [
      { title: "Event Categories — The Shouter" },
      { name: "description", content: "14 categories — from BGMI brackets and Minecraft builds to art battles and quiz nights." },
      { property: "og:title", content: "Event Categories — The Shouter" },
      { property: "og:description", content: "Every discipline the community competes in — with live events, top winners and reward tiers." },
    ],
  }),
  component: Page,
});

type Cat = {
  slug: string;
  label: string;
  tag: string;
  desc: string;
  icon: typeof Camera;
  img: string;
  tint: string;
  events: number;
  players: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  reward: string;
  featured?: boolean;
};

const CATEGORIES: Cat[] = [
  { slug: "photography", label: "Photography", tag: "Capture the shot", desc: "Landscape, portrait, macro — the eye behind the lens takes the crown.", icon: Camera, img: "cover-picbattle", tint: "from-primary/30", events: 12, players: "2.4K", difficulty: "Beginner", reward: "500 coins", featured: true },
  { slug: "video", label: "Video Contests", tag: "60-second reels", desc: "Cinematic edits, montages, viral shorts. Judged on pacing, sound and story.", icon: Video, img: "notice-drop", tint: "from-accent/30", events: 6, players: "1.8K", difficulty: "Intermediate", reward: "1,200 coins" },
  { slug: "minecraft", label: "Minecraft", tag: "Build & PvP", desc: "Build battles, speedruns and PvP arenas across community servers.", icon: Blocks, img: "cover-community", tint: "from-secondary/30", events: 18, players: "5.1K", difficulty: "Intermediate", reward: "2,000 coins", featured: true },
  { slug: "logo", label: "Logo Design", tag: "Mark makers", desc: "Design a mark for a real Discord server. Winners get creator credit.", icon: Palette, img: "cover-artwork", tint: "from-primary/25", events: 4, players: "900", difficulty: "Advanced", reward: "3,500 coins" },
  { slug: "banner", label: "Banner Design", tag: "Server art", desc: "Server banners, profile art, event posters — vector or raster.", icon: ImageIcon, img: "cover-artwork", tint: "from-accent/25", events: 8, players: "1.1K", difficulty: "Intermediate", reward: "1,500 coins" },
  { slug: "meme", label: "Meme Battles", tag: "Funniest wins", desc: "Weekly prompts, community voting, ruthless brackets.", icon: Smile, img: "notice-reaction", tint: "from-secondary/25", events: 22, players: "8.7K", difficulty: "Beginner", reward: "300 coins" },
  { slug: "tournament", label: "Game Tournaments", tag: "BGMI · Valorant · FF", desc: "Ladder-based brackets with anti-cheat and match-reporting bots.", icon: Gamepad2, img: "cover-tournament", tint: "from-primary/30", events: 14, players: "12.4K", difficulty: "Advanced", reward: "10,000 coins", featured: true },
  { slug: "community", label: "Community", tag: "Hangouts", desc: "Movie nights, watch parties, ice-breakers — just show up.", icon: Users, img: "cover-community", tint: "from-secondary/25", events: 26, players: "6.2K", difficulty: "Beginner", reward: "200 coins" },
  { slug: "voice", label: "Voice Events", tag: "Karaoke & impressions", desc: "Voice-only stages: karaoke, impressions, live podcasts.", icon: Mic, img: "notice-hero", tint: "from-accent/25", events: 9, players: "1.4K", difficulty: "Intermediate", reward: "800 coins" },
  { slug: "movie-night", label: "Movie Nights", tag: "Sync watch", desc: "Server-wide synced screenings with reaction voting.", icon: Film, img: "cover-community", tint: "from-secondary/25", events: 7, players: "3.8K", difficulty: "Beginner", reward: "150 coins" },
  { slug: "music", label: "Music Nights", tag: "DJ & listening", desc: "DJ sessions, listening parties, playlist wars.", icon: Music, img: "notice-drop", tint: "from-primary/25", events: 5, players: "2.1K", difficulty: "Beginner", reward: "400 coins" },
  { slug: "streaming", label: "Streaming", tag: "Sim-streams & raids", desc: "Coordinated multi-streamer nights with shared bracket overlays.", icon: Radio, img: "bot-mascot", tint: "from-accent/30", events: 3, players: "1.6K", difficulty: "Advanced", reward: "5,000 coins" },
  { slug: "quiz", label: "Quiz & Trivia", tag: "Fast fingers", desc: "Buzzer rounds, category duels, lightning finals.", icon: Brain, img: "dash-overview", tint: "from-primary/25", events: 11, players: "4.3K", difficulty: "Intermediate", reward: "600 coins" },
  { slug: "custom", label: "Custom Events", tag: "Anything goes", desc: "Server-owner sandbox — invent your own format.", icon: Sparkles, img: "dash-rewards", tint: "from-accent/25", events: 32, players: "9.8K", difficulty: "Beginner", reward: "Varies" },
];

function Page() {
  const [q, setQ] = useState("");
  const [diff, setDiff] = useState<"All" | Cat["difficulty"]>("All");
  const filtered = CATEGORIES.filter((c) =>
    (diff === "All" || c.difficulty === diff) &&
    (q === "" || c.label.toLowerCase().includes(q.toLowerCase()) || c.desc.toLowerCase().includes(q.toLowerCase()))
  );
  const featured = CATEGORIES.filter((c) => c.featured);

  return (
    <div className="mx-auto max-w-7xl px-3 sm:px-6 py-6 sm:py-10 space-y-12">
      {/* Bento hero */}
      <div className="grid gap-3 sm:grid-cols-4 sm:grid-rows-2 min-h-[380px]">
        <div className="relative neo-border neo-shadow-lg rounded-2xl overflow-hidden bg-card sm:col-span-2 sm:row-span-2 p-6 sm:p-8 flex flex-col justify-between">
          <img src={heroUrl("cover-community")} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/70 to-transparent" />
          <div className="relative">
            <NeoBadge variant="accent">14 disciplines</NeoBadge>
            <h1 className="font-display text-3xl sm:text-5xl mt-3 leading-tight">Every event, one hub.</h1>
            <p className="text-sm text-muted-foreground mt-3 max-w-md">Photography to Minecraft, karaoke to Valorant — pick a lane, join a bracket, take the crown.</p>
          </div>
          <div className="relative flex flex-wrap gap-2">
            <NeoButton variant="primary"><Flame className="h-4 w-4" /> Trending</NeoButton>
            <NeoButton variant="ghost">Browse all →</NeoButton>
          </div>
        </div>
        {featured.slice(0, 3).map((f) => {
          const I = f.icon;
          return (
            <Link key={f.slug} to="/categories/$slug" params={{ slug: f.slug }} className="relative neo-border neo-shadow-sm rounded-2xl overflow-hidden bg-card group hover:-translate-y-1 transition-transform">
              <img src={heroUrl(f.img)} alt="" className="absolute inset-0 h-full w-full object-cover" />
              <div className={`absolute inset-0 bg-gradient-to-tr ${f.tint} to-background/95`} />
              <div className="relative p-3 sm:p-4 h-full flex flex-col justify-between min-h-[110px]">
                <span className="neo-border neo-shadow-sm bg-accent text-accent-foreground rounded-lg h-9 w-9 grid place-items-center self-start"><I className="h-4 w-4" /></span>
                <div>
                  <div className="font-display text-base sm:text-lg leading-tight">{f.label}</div>
                  <div className="text-[10px] text-muted-foreground">{f.events} events · {f.players} players</div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Filter bar */}
      <div className="neo-border neo-shadow-sm bg-card rounded-xl p-3 flex flex-col sm:flex-row gap-3 sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search categories…" className="w-full neo-border bg-background rounded-md pl-9 pr-3 py-2 text-sm" />
        </div>
        <div className="flex gap-1.5 overflow-x-auto -mx-1 px-1 sm:mx-0 sm:px-0">
          {(["All", "Beginner", "Intermediate", "Advanced"] as const).map((d) => (
            <button key={d} onClick={() => setDiff(d)} className={`shrink-0 neo-border rounded-md px-3 py-1.5 text-[11px] font-display uppercase tracking-wide ${diff === d ? "bg-primary text-primary-foreground neo-shadow-sm" : "bg-background"}`}>{d}</button>
          ))}
        </div>
      </div>

      {/* Category rich cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((c) => {
          const I = c.icon;
          return (
            <Link key={c.slug} to="/categories/$slug" params={{ slug: c.slug }}>
              <NeoCard className="p-0 overflow-hidden h-full transition-all duration-200 hover:-translate-y-1 hover:neo-shadow-lg group">
                <div className={`relative h-36 bg-gradient-to-br ${c.tint} to-background border-b-[3px] border-border overflow-hidden`}>
                  <img src={heroUrl(c.img)} alt="" className="absolute inset-0 h-full w-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
                  <div className={`absolute inset-0 bg-gradient-to-tr ${c.tint} to-transparent`} />
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "repeating-linear-gradient(-45deg, var(--color-border) 0 1px, transparent 1px 12px)" }} />
                  <span className="absolute top-3 left-3 neo-border neo-shadow-sm bg-card rounded-lg h-10 w-10 grid place-items-center"><I className="h-5 w-5" /></span>
                  <span className="absolute top-3 right-3"><NeoBadge variant="muted">{c.difficulty}</NeoBadge></span>
                  <span className="absolute bottom-2 right-2 neo-border neo-shadow-sm bg-background rounded-md px-2 py-0.5 font-display text-[10px] flex items-center gap-1"><Trophy className="h-3 w-3" /> {c.reward}</span>
                </div>
                <div className="p-4 space-y-2">
                  <NeoBadge variant="accent">{c.tag}</NeoBadge>
                  <div className="font-display text-lg">{c.label}</div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
                  <div className="pt-2 flex items-center justify-between text-[11px] text-muted-foreground border-t-2 border-border mt-2">
                    <span><b className="text-foreground">{c.events}</b> live</span>
                    <span><b className="text-foreground">{c.players}</b> players</span>
                    <span className="text-primary font-display uppercase text-[10px]">Enter →</span>
                  </div>
                </div>
              </NeoCard>
            </Link>
          );
        })}
      </div>

      {/* Recent winners */}
      <div>
        <SectionHeader eyebrow="Fresh crowns" title="Recent category winners" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { c: "Photography", n: "shadow#0001", ev: "Dawn Patrol", img: "cover-picbattle" },
            { c: "Minecraft", n: "blockmaster", ev: "Sky Build #12", img: "cover-community" },
            { c: "Tournament", n: "Neon Kings", ev: "S5 Grand Finals", img: "dash-tournament" },
            { c: "Meme Battle", n: "meme.god", ev: "Weekly Prompt 44", img: "notice-reaction" },
          ].map((w) => (
            <NeoCard key={w.n} className="p-0 overflow-hidden">
              <div className="relative h-24">
                <img src={heroUrl(w.img)} alt="" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <span className="absolute top-2 right-2"><NeoBadge variant="accent">🏆 Winner</NeoBadge></span>
              </div>
              <div className="p-3">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{w.c}</div>
                <div className="font-display text-sm mt-0.5">{w.n}</div>
                <div className="text-[11px] text-muted-foreground truncate">{w.ev}</div>
              </div>
            </NeoCard>
          ))}
        </div>
      </div>
    </div>
  );
}
