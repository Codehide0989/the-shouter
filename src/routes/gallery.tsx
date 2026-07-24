import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { NeoCard, NeoBadge, NeoButton, SectionHeader } from "@/components/neo";
import { heroUrl } from "@/components/dashboard-page";
import { Heart, MessageCircle, Share2, Download, Search, X, Sparkles, TrendingUp, Camera } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — The Shouter" },
      { name: "description", content: "Community art, screenshots, and event highlights curated by moderators." },
      { property: "og:title", content: "Gallery — The Shouter" },
      { property: "og:description", content: "Featured creators, trending artwork, and the loudest visuals from the community." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const CATS = ["All", "Artwork", "Photography", "Screenshots", "Logos", "Video"];

const ART = [
  { id: 1, key: "cover-artwork", title: "Neon Skyline", artist: "pixel.exe", cat: "Artwork", likes: 1240, tall: true },
  { id: 2, key: "cover-picbattle", title: "Dawn Patrol", artist: "shadow#0001", cat: "Photography", likes: 892 },
  { id: 3, key: "dash-tournament", title: "Grand Finals", artist: "axeman", cat: "Screenshots", likes: 2104, tall: true },
  { id: 4, key: "cover-community", title: "Movie Night", artist: "ember", cat: "Photography", likes: 512 },
  { id: 5, key: "cover-tournament", title: "Bracket Chaos", artist: "nova.exe", cat: "Screenshots", likes: 1782 },
  { id: 6, key: "notice-drop", title: "Season Drop", artist: "pixel.exe", cat: "Artwork", likes: 943, tall: true },
  { id: 7, key: "stat-wins", title: "MVP Trophy", artist: "captain", cat: "Artwork", likes: 655 },
  { id: 8, key: "dash-team", title: "Squad Portrait", artist: "ghost", cat: "Photography", likes: 1120 },
  { id: 9, key: "notice-reaction", title: "Emoji Storm", artist: "meme.god", cat: "Video", likes: 401 },
];

const CREATORS = [
  { name: "pixel.exe", tag: "Featured", works: 48, followers: "12.4K" },
  { name: "shadow#0001", tag: "Rising", works: 32, followers: "8.1K" },
  { name: "ember", tag: "Verified", works: 21, followers: "5.7K" },
  { name: "axeman", tag: "Legend", works: 60, followers: "18.2K" },
];

function Page() {
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");
  const [open, setOpen] = useState<number | null>(null);
  const filtered = ART.filter((a) => (cat === "All" || a.cat === cat) && (q === "" || a.title.toLowerCase().includes(q.toLowerCase()) || a.artist.toLowerCase().includes(q.toLowerCase())));
  const featured = ART[0];
  const openArt = open !== null ? ART.find((a) => a.id === open) : null;

  return (
    <div className="mx-auto max-w-7xl px-3 sm:px-6 py-6 sm:py-10 space-y-10">
      {/* Split hero */}
      <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        <div className="relative neo-border neo-shadow-lg rounded-2xl overflow-hidden bg-card aspect-[16/10] lg:aspect-auto lg:min-h-[380px]">
          <img src={heroUrl(featured.key)} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <span className="absolute top-4 left-4 -rotate-2 neo-border neo-shadow-sm bg-accent text-accent-foreground rounded-md px-3 py-1.5 font-display text-[10px] uppercase tracking-widest">🎨 Featured Today</span>
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
            <div className="font-display text-2xl sm:text-4xl leading-tight">{featured.title}</div>
            <div className="text-sm text-muted-foreground mt-1">by {featured.artist}</div>
            <div className="mt-3 flex flex-wrap gap-2">
              <NeoButton size="sm" variant="primary" onClick={() => setOpen(featured.id)}><Sparkles className="h-3.5 w-3.5" /> View</NeoButton>
              <NeoButton size="sm" variant="ghost"><Heart className="h-3.5 w-3.5" /> {featured.likes}</NeoButton>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {[ART[1], ART[2], ART[3], ART[4]].map((a) => (
            <button key={a.id} onClick={() => setOpen(a.id)} className="group relative neo-border neo-shadow-sm rounded-xl overflow-hidden aspect-square text-left">
              <img src={heroUrl(a.key)} alt={a.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-2.5">
                <div className="font-display text-xs sm:text-sm truncate">{a.title}</div>
                <div className="text-[10px] text-muted-foreground truncate">{a.artist}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Stats strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { l: "Total artwork", v: "12,480", i: Sparkles },
          { l: "This week", v: "348", i: TrendingUp },
          { l: "Active creators", v: "1,204", i: Camera },
          { l: "Reactions today", v: "8.2K", i: Heart },
        ].map((s) => {
          const I = s.i;
          return (
            <NeoCard key={s.l} className="p-4 flex items-center gap-3">
              <span className="neo-border neo-shadow-sm bg-accent text-accent-foreground rounded-lg h-10 w-10 grid place-items-center shrink-0"><I className="h-4 w-4" /></span>
              <div className="min-w-0">
                <div className="font-display text-lg sm:text-xl leading-none">{s.v}</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1 truncate">{s.l}</div>
              </div>
            </NeoCard>
          );
        })}
      </div>

      {/* Filters + search */}
      <div className="neo-border neo-shadow-sm bg-card rounded-xl p-3 sm:p-4 flex flex-col sm:flex-row gap-3 sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search artwork, artists, tags…" className="w-full neo-border bg-background rounded-md pl-9 pr-3 py-2 text-sm" />
        </div>
        <div className="flex gap-1.5 overflow-x-auto -mx-1 px-1 sm:mx-0 sm:px-0">
          {CATS.map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`shrink-0 neo-border rounded-md px-3 py-1.5 text-[11px] font-display uppercase tracking-wide transition-transform hover:-translate-y-0.5 ${cat === c ? "bg-primary text-primary-foreground neo-shadow-sm" : "bg-background"}`}>{c}</button>
          ))}
        </div>
      </div>

      {/* Masonry grid */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-3 sm:gap-4 [column-fill:_balance]">
        {filtered.map((a) => (
          <button key={a.id} onClick={() => setOpen(a.id)} className={`group mb-3 sm:mb-4 block w-full neo-border neo-shadow-sm rounded-xl overflow-hidden bg-card relative break-inside-avoid text-left transition-transform hover:-translate-y-1 hover:neo-shadow-lg ${a.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
            <img src={heroUrl(a.key)} alt={a.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/10 to-transparent opacity-90" />
            <div className="absolute top-2 right-2"><NeoBadge variant="muted">{a.cat}</NeoBadge></div>
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <div className="font-display text-sm truncate">{a.title}</div>
              <div className="flex items-center justify-between mt-1">
                <span className="text-[10px] text-muted-foreground truncate">{a.artist}</span>
                <span className="flex items-center gap-1 text-[10px]"><Heart className="h-3 w-3" /> {a.likes}</span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Popular artists — horizontal scroll */}
      <div>
        <SectionHeader eyebrow="Creators" title="Popular this week" />
        <div className="flex gap-3 overflow-x-auto pb-3 -mx-3 px-3 sm:mx-0 sm:px-0">
          {CREATORS.map((c) => (
            <NeoCard key={c.name} className="p-4 min-w-[220px] shrink-0 relative overflow-hidden">
              <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-primary/20 neo-border" />
              <div className="relative">
                <NeoBadge variant="accent">{c.tag}</NeoBadge>
                <div className="font-display text-lg mt-2">{c.name}</div>
                <div className="text-[11px] text-muted-foreground mt-1">{c.works} works · {c.followers} followers</div>
                <NeoButton size="sm" variant="ghost" className="mt-3 w-full">Follow</NeoButton>
              </div>
            </NeoCard>
          ))}
        </div>
      </div>

      {/* Categories bento */}
      <div>
        <SectionHeader eyebrow="Browse" title="Categories" />
        <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {["Artwork", "Photography", "Screenshots", "Logos", "Video", "Fan Art"].map((k, i) => (
            <div key={k} className="relative neo-border neo-shadow-sm rounded-xl overflow-hidden aspect-square bg-card group cursor-pointer hover:-translate-y-1 transition-transform">
              <img src={heroUrl(["cover-artwork", "cover-picbattle", "dash-tournament", "notice-drop", "notice-reaction", "cover-community"][i])} alt="" className="absolute inset-0 h-full w-full object-cover opacity-70 group-hover:opacity-100 transition" />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              <div className="absolute bottom-2 left-2 right-2 font-display text-xs sm:text-sm uppercase">{k}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <NeoCard className="p-6 sm:p-8 bg-secondary text-secondary-foreground relative overflow-hidden">
        <div className="pointer-events-none absolute -right-10 -bottom-10 h-48 w-48 rounded-full bg-accent/40 neo-border" />
        <div className="relative grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
          <div>
            <div className="text-[10px] uppercase tracking-widest opacity-80">Show off</div>
            <div className="font-display text-2xl sm:text-3xl mt-1">Submit your artwork</div>
            <p className="text-sm opacity-90 mt-2 max-w-md">Featured drops go straight to the front page and every partnered guild.</p>
          </div>
          <Link to="/explore"><NeoButton variant="accent">Start uploading</NeoButton></Link>
        </div>
      </NeoCard>

      {/* Fullscreen viewer */}
      {openArt && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl grid place-items-center p-3 sm:p-6 animate-in fade-in duration-200">
          <div className="relative w-full max-w-5xl max-h-full grid lg:grid-cols-[1fr_320px] gap-4">
            <button onClick={() => setOpen(null)} aria-label="Close" className="absolute -top-2 -right-2 z-10 neo-border neo-shadow-sm bg-destructive text-white rounded-full h-9 w-9 grid place-items-center"><X className="h-4 w-4" /></button>
            <div className="relative neo-border neo-shadow-lg rounded-xl overflow-hidden bg-card aspect-[4/3] lg:aspect-auto">
              <img src={heroUrl(openArt.key)} alt={openArt.title} className="absolute inset-0 h-full w-full object-contain bg-black" />
            </div>
            <NeoCard className="p-5 space-y-3 overflow-y-auto max-h-[70vh] lg:max-h-full">
              <NeoBadge variant="accent">{openArt.cat}</NeoBadge>
              <div className="font-display text-2xl">{openArt.title}</div>
              <div className="text-xs text-muted-foreground">by {openArt.artist}</div>
              <div className="grid grid-cols-2 gap-2 pt-2">
                <NeoButton size="sm" variant="primary"><Heart className="h-3.5 w-3.5" /> {openArt.likes}</NeoButton>
                <NeoButton size="sm" variant="ghost"><MessageCircle className="h-3.5 w-3.5" /> 42</NeoButton>
                <NeoButton size="sm" variant="ghost"><Share2 className="h-3.5 w-3.5" /> Share</NeoButton>
                <NeoButton size="sm" variant="ghost"><Download className="h-3.5 w-3.5" /> Save</NeoButton>
              </div>
              <div className="flex flex-wrap gap-1 pt-2">
                {["#neon", "#featured", "#community", `#${openArt.cat.toLowerCase()}`].map((t) => (
                  <span key={t} className="neo-border rounded-md bg-background px-2 py-0.5 text-[10px] font-mono">{t}</span>
                ))}
              </div>
              <div className="pt-3 border-t-2 border-border">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">Comments</div>
                <div className="space-y-2">
                  {[{ u: "nova", c: "Insane lighting 🔥" }, { u: "ember", c: "Poster please!" }].map((c) => (
                    <div key={c.u} className="text-xs neo-border rounded-md bg-background p-2">
                      <span className="font-display uppercase text-[10px] mr-1">{c.u}:</span> {c.c}
                    </div>
                  ))}
                </div>
              </div>
            </NeoCard>
          </div>
        </div>
      )}
    </div>
  );
}
