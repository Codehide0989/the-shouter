import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { NeoBadge, NeoButton, NeoCard, SectionHeader } from "@/components/neo";
import { heroUrl } from "@/components/dashboard-page";
import avatarShadow from "@/assets/avatar-shadow.jpg";
import coverArtwork from "@/assets/cover-artwork.jpg";
import badgesSheet from "@/assets/badges-sheet.jpg";
import rewardsSheet from "@/assets/rewards-sheet.jpg";
import trophyHero from "@/assets/hero-trophy.jpg";
import {
  Trophy, Flame, Users, Star, MessageSquare, UserPlus, Share2, Flag, Edit3, Package,
  Shield, Globe, MapPin, Clock, Link2, Twitter, Youtube, Twitch, Instagram, CheckCircle2,
  Coins, Ticket, Palette, Sparkles, Crown, Award, Gamepad2, Camera, Heart, MessagesSquare,
  BarChart3, Activity, Bookmark, Image as ImageIcon, ChevronRight, Grid3x3, TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "shadow#0001 — Profile · The Shouter" },
      { name: "description", content: "Public profile, achievements, teams, tournament history and stats." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Profile,
});

const TABS = [
  "About", "Achievements", "Badges", "Gallery", "Rewards", "Inventory",
  "History", "Teams", "Stats", "Activity", "Friends", "Following", "Analytics",
] as const;
type Tab = typeof TABS[number];

const HERO_KEYS = [
  "cover-tournament", "cover-artwork", "cover-picbattle", "cover-community",
  "dash-rewards", "dash-team", "dash-tournament", "dash-overview",
  "notice-drop", "notice-reaction", "notice-hero", "settings-hero",
];

function Profile() {
  const [tab, setTab] = useState<Tab>("About");

  return (
    <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-6">
      <ProfileHeader />
      <ProfileActions />
      <ProfileStats />

      {/* Tabs */}
      <div className="sticky top-16 z-20 -mx-3 sm:mx-0">
        <div className="neo-border neo-shadow-sm bg-card/95 backdrop-blur rounded-md px-2 py-2 flex gap-1 overflow-x-auto no-scrollbar">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`shrink-0 px-3 py-1.5 text-[11px] sm:text-xs font-display uppercase tracking-widest rounded-md neo-border transition ${
                tab === t ? "bg-primary text-primary-foreground neo-shadow-sm" : "bg-background hover:bg-muted"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="animate-fade-in">
        {tab === "About" && <TabAbout />}
        {tab === "Achievements" && <TabAchievements />}
        {tab === "Badges" && <TabBadges />}
        {tab === "Gallery" && <TabGallery />}
        {tab === "Rewards" && <TabRewards />}
        {tab === "Inventory" && <TabInventory />}
        {tab === "History" && <TabHistory />}
        {tab === "Teams" && <TabTeams />}
        {tab === "Stats" && <TabStats />}
        {tab === "Activity" && <TabActivity />}
        {tab === "Friends" && <TabFriends />}
        {tab === "Following" && <TabFriends following />}
        {tab === "Analytics" && <TabAnalytics />}
      </div>
    </div>
  );
}

/* ================= HEADER ================= */

function ProfileHeader() {
  return (
    <div className="relative">
      {/* Cover */}
      <div className="relative neo-border neo-shadow-lg rounded-lg overflow-hidden h-40 sm:h-56 bg-gradient-to-br from-orange-500 via-rose-500 to-fuchsia-600">
        <img src={coverArtwork} alt="" className="absolute inset-0 h-full w-full object-cover mix-blend-multiply opacity-70" />
        <img src={trophyHero} alt="" className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-60 mix-blend-screen animate-fade-in" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
        {/* stickers */}
        <span className="absolute top-3 left-3 sm:top-4 sm:left-4">
          <NeoBadge variant="accent">Season 7 · Blaze</NeoBadge>
        </span>
        <span className="absolute top-3 right-3 rotate-6">
          <NeoBadge variant="success"><CheckCircle2 className="h-3 w-3" /> Verified</NeoBadge>
        </span>
      </div>

      {/* Card */}
      <NeoCard className="relative -mt-16 sm:-mt-20 grid gap-5 sm:grid-cols-[auto_minmax(0,1fr)_auto] items-start">
        <div className="relative shrink-0">
          <div className="absolute -inset-1 rounded-md bg-gradient-to-br from-primary via-accent to-secondary blur-sm opacity-70" />
          <img
            src={avatarShadow}
            alt="avatar"
            className="relative h-24 w-24 sm:h-32 sm:w-32 rounded-md neo-border neo-shadow object-cover"
          />
          <span className="absolute -bottom-2 -right-2 h-6 w-6 rounded-full neo-border bg-[color:var(--success)] grid place-items-center">
            <span className="h-2 w-2 rounded-full bg-black" />
          </span>
        </div>

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-display truncate">shadow<span className="text-muted-foreground">#0001</span></h1>
            <NeoBadge variant="secondary"><Shield className="h-3 w-3" /> Team Leader</NeoBadge>
            <NeoBadge variant="primary"><Crown className="h-3 w-3" /> Legendary</NeoBadge>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            BGMI enjoyer · Digital artist · 3 active teams · Casting since '21
          </p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-muted-foreground">
            <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" /> India · IN</span>
            <span className="inline-flex items-center gap-1"><Globe className="h-3 w-3" /> English · Hindi</span>
            <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> Active 3m ago</span>
            <span className="inline-flex items-center gap-1"><Link2 className="h-3 w-3" /> shadow.gg</span>
            <span className="inline-flex items-center gap-1">Joined Jan 2025</span>
          </div>
          {/* socials */}
          <div className="mt-3 flex gap-2">
            {[Twitter, Twitch, Youtube, Instagram].map((I, i) => (
              <a key={i} href="#" className="neo-border neo-shadow-sm bg-background rounded-md h-8 w-8 grid place-items-center hover:bg-muted">
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick meta */}
        <div className="grid grid-cols-2 gap-2 min-w-[160px]">
          <MiniStat k="Lv 34" v="XP 54,210" />
          <MiniStat k="#128" v="Global rank" />
          <MiniStat k="12" v="Wins" />
          <MiniStat k="4" v="Streak" />
        </div>
      </NeoCard>
    </div>
  );
}

function MiniStat({ k, v }: { k: string; v: string }) {
  return (
    <div className="neo-border neo-shadow-sm rounded-md bg-muted/40 p-2 text-center">
      <div className="font-display text-sm">{k}</div>
      <div className="text-[9px] uppercase tracking-widest text-muted-foreground">{v}</div>
    </div>
  );
}

/* ================= ACTIONS ================= */

function ProfileActions() {
  const actions = [
    { label: "Follow", icon: UserPlus, v: "primary" as const },
    { label: "Message", icon: MessageSquare, v: "secondary" as const },
    { label: "Invite team", icon: Users, v: "accent" as const },
    { label: "Inventory", icon: Package, v: "ghost" as const },
    { label: "Share", icon: Share2, v: "ghost" as const },
    { label: "Report", icon: Flag, v: "ghost" as const },
    { label: "Edit profile", icon: Edit3, v: "ghost" as const },
    { label: "Discord", icon: MessagesSquare, v: "primary" as const },
  ];
  return (
    <div className="flex flex-wrap gap-2">
      {actions.map((a) => (
        <NeoButton key={a.label} size="sm" variant={a.v}>
          <a.icon className="h-3.5 w-3.5" /> {a.label}
        </NeoButton>
      ))}
    </div>
  );
}

/* ================= STATS ================= */

function ProfileStats() {
  const stats = [
    { k: "12", v: "Wins", Icon: Trophy, art: trophyHero },
    { k: "48", v: "Events joined", Icon: Gamepad2, art: heroUrl("cover-tournament") },
    { k: "24", v: "Badges", Icon: Award, art: badgesSheet },
    { k: "36", v: "Achievements", Icon: Star, art: rewardsSheet },
    { k: "54,210", v: "XP", Icon: TrendingUp, art: heroUrl("dash-overview") },
    { k: "12,480", v: "Coins", Icon: Coins, art: heroUrl("dash-rewards") },
    { k: "842", v: "Reactions", Icon: Heart, art: heroUrl("notice-reaction") },
    { k: "1.2K", v: "Followers", Icon: Users, art: heroUrl("cover-community") },
    { k: "342", v: "Following", Icon: UserPlus, art: heroUrl("dash-team") },
    { k: "189", v: "Friends", Icon: Users, art: heroUrl("cover-picbattle") },
    { k: "9", v: "MVP", Icon: Flame, art: heroUrl("dash-tournament") },
    { k: "128", v: "Uploads", Icon: Camera, art: heroUrl("cover-artwork") },
  ];
  return (
    <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
      {stats.map((s) => (
        <div key={s.v} className="relative neo-border neo-shadow-sm rounded-md overflow-hidden bg-card group">
          <img src={s.art} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25 group-hover:opacity-40 transition" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/60 to-transparent" />
          <div className="relative p-3 text-center">
            <s.Icon className="h-5 w-5 mx-auto text-accent" />
            <div className="font-display text-xl mt-1">{s.k}</div>
            <div className="text-[9px] uppercase tracking-widest text-muted-foreground">{s.v}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ================= TABS ================= */

function TabAbout() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      <NeoCard className="lg:col-span-2 space-y-4">
        <SectionHeader eyebrow="Bio" title="About shadow" />
        <p className="text-sm leading-relaxed text-muted-foreground">
          Squad captain of Team Shouter · Digital artist making neon dreamscapes.
          Casting local BGMI cups on weekends. Building a community around
          Discord-first tournaments and picture battles. Coffee, chicken dinners
          and pixel art — in that order.
        </p>
        <div className="grid sm:grid-cols-2 gap-3 pt-2">
          {[
            ["Favorite game", "BGMI"],
            ["Current team", "Team Shouter"],
            ["Favorite category", "Tournaments"],
            ["Timezone", "Asia/Kolkata (IST)"],
            ["Website", "shadow.gg"],
            ["Discord since", "Jan 2025"],
          ].map(([k, v]) => (
            <div key={k} className="neo-border rounded-md bg-muted/40 px-3 py-2">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{k}</div>
              <div className="font-display text-sm">{v}</div>
            </div>
          ))}
        </div>
      </NeoCard>

      <NeoCard className="space-y-3">
        <SectionHeader eyebrow="Highlights" title="Signature moments" />
        {[
          ["🥇 BGMI Clash #13 Winner", "2 weeks ago"],
          ["🎨 Featured art: Neon Dreams", "1 month ago"],
          ["🔥 4-week win streak", "Ongoing"],
          ["💬 500+ reactions on a single post", "3 months ago"],
        ].map(([t, s]) => (
          <div key={t} className="neo-border rounded-md bg-background px-3 py-2">
            <div className="text-sm font-display">{t}</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{s}</div>
          </div>
        ))}
      </NeoCard>
    </div>
  );
}

function TabAchievements() {
  const items = [
    { t: "Tournament Master", d: "Win 10 tournaments", p: 8, of: 10, art: trophyHero },
    { t: "Art Connoisseur", d: "Upload 50 artworks", p: 42, of: 50, art: heroUrl("cover-artwork") },
    { t: "Reaction Legend", d: "Earn 1,000 reactions", p: 842, of: 1000, art: heroUrl("notice-reaction") },
    { t: "Squad Builder", d: "Join 5 teams", p: 3, of: 5, art: heroUrl("dash-team") },
    { t: "Season Grinder", d: "Reach Level 50", p: 34, of: 50, art: heroUrl("dash-overview") },
    { t: "Community Voice", d: "Post 100 comments", p: 76, of: 100, art: heroUrl("cover-community") },
  ];
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((a) => {
        const pct = Math.round((a.p / a.of) * 100);
        return (
          <NeoCard key={a.t} className="p-0 overflow-hidden">
            <div className="relative aspect-[16/8]">
              <img src={a.art} alt="" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 to-transparent" />
              <div className="absolute top-2 right-2"><NeoBadge variant="accent">{pct}%</NeoBadge></div>
            </div>
            <div className="p-4">
              <div className="font-display text-lg">{a.t}</div>
              <div className="text-xs text-muted-foreground">{a.d}</div>
              <div className="mt-3 h-2 neo-border rounded-full bg-muted overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary via-accent to-secondary" style={{ width: `${pct}%` }} />
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">{a.p}/{a.of}</div>
            </div>
          </NeoCard>
        );
      })}
    </div>
  );
}

function TabBadges() {
  const RARITY: Record<string, { badge: "primary" | "secondary" | "accent" | "destructive" | "success"; glow: string }> = {
    Legendary: { badge: "primary", glow: "from-primary/50 to-accent/50" },
    Epic: { badge: "accent", glow: "from-accent/50 to-secondary/50" },
    Rare: { badge: "secondary", glow: "from-secondary/50 to-primary/40" },
    Common: { badge: "success", glow: "from-muted/40 to-muted/20" },
  };
  const badges = [
    { t: "Season Champion", r: "Legendary", d: "Unlocked 12/04/24" },
    { t: "MVP Master", r: "Epic", d: "Unlocked 02/04/24" },
    { t: "Artistic One", r: "Rare", d: "Unlocked 25/06/24" },
    { t: "Active Member", r: "Common", d: "Unlocked 10/05/24" },
    { t: "First Blood", r: "Rare", d: "Unlocked 03/02/24" },
    { t: "Community Star", r: "Epic", d: "Unlocked 18/03/24" },
    { t: "Bracket Buster", r: "Legendary", d: "Unlocked 06/07/24" },
    { t: "Streak King", r: "Rare", d: "Unlocked 22/06/24" },
  ];
  return (
    <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
      {badges.map((b) => {
        const r = RARITY[b.r];
        return (
          <div key={b.t} className="relative group">
            <div className={`absolute -inset-1 rounded-lg bg-gradient-to-br ${r.glow} blur opacity-60 group-hover:opacity-100 transition`} />
            <NeoCard className="relative text-center p-4 space-y-2">
              <img src={badgesSheet} alt="" className="h-20 w-20 mx-auto rounded-md neo-border object-cover" />
              <div className="font-display text-sm">{b.t}</div>
              <NeoBadge variant={r.badge}>{b.r}</NeoBadge>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{b.d}</div>
            </NeoCard>
          </div>
        );
      })}
    </div>
  );
}

function TabGallery() {
  const items = useMemo(() => HERO_KEYS.map((k, i) => ({ k, span: i % 5 === 0 ? "row-span-2" : "" })), []);
  return (
    <div>
      <SectionHeader eyebrow="Portfolio" title="128 uploads" action={<NeoButton size="sm" variant="accent"><Grid3x3 className="h-3 w-3" /> Fullscreen</NeoButton>} />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[140px]">
        {items.map((it, i) => (
          <div key={i} className={`relative neo-border neo-shadow-sm rounded-md overflow-hidden group cursor-zoom-in ${it.span}`}>
            <img src={heroUrl(it.k)} alt="" className="absolute inset-0 h-full w-full object-cover transition group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
            <div className="absolute bottom-2 left-2 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition">
              <NeoBadge variant="muted"><Heart className="h-3 w-3" /> 42</NeoBadge>
              <NeoBadge variant="muted"><MessagesSquare className="h-3 w-3" /> 8</NeoBadge>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TabRewards() {
  const items = [
    { t: "Golden Crate", d: "Opened last night", art: rewardsSheet },
    { t: "Season Badge", d: "Claimed", art: badgesSheet },
    { t: "Nitro 1 month", d: "Available", art: heroUrl("dash-rewards") },
    { t: "Bracket Boost", d: "Available", art: heroUrl("dash-tournament") },
  ];
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((r) => (
        <NeoCard key={r.t} className="p-0 overflow-hidden">
          <div className="relative aspect-[4/3]">
            <img src={r.art} alt="" className="absolute inset-0 h-full w-full object-cover" />
          </div>
          <div className="p-4">
            <div className="font-display text-base">{r.t}</div>
            <div className="text-[11px] text-muted-foreground">{r.d}</div>
            <NeoButton size="sm" className="mt-3 w-full">Claim</NeoButton>
          </div>
        </NeoCard>
      ))}
    </div>
  );
}

function TabInventory() {
  const items = [
    { t: "Coins", v: "12,480", Icon: Coins },
    { t: "Tickets", v: "8", Icon: Ticket },
    { t: "Frames", v: "14", Icon: ImageIcon },
    { t: "Avatars", v: "22", Icon: Users },
    { t: "Themes", v: "6", Icon: Palette },
    { t: "Titles", v: "11", Icon: Star },
    { t: "Effects", v: "9", Icon: Sparkles },
    { t: "Pets", v: "3", Icon: Flame },
    { t: "Borders", v: "17", Icon: Shield },
    { t: "Cards", v: "42", Icon: Award },
  ];
  return (
    <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
      {items.map((i) => (
        <NeoCard key={i.t} className="text-center p-4">
          <i.Icon className="h-6 w-6 mx-auto text-accent" />
          <div className="font-display text-xl mt-2">{i.v}</div>
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{i.t}</div>
        </NeoCard>
      ))}
    </div>
  );
}

function TabHistory() {
  const rows = [
    ["BGMI Clash #13", "🥇 1st", "2w ago", "cover-tournament"],
    ["Neon Dreams #4", "🥉 3rd", "1mo ago", "cover-artwork"],
    ["Summer Pic Battle #2", "Semifinal", "1mo ago", "cover-picbattle"],
    ["Free Fire Cup #1", "Registered", "2mo ago", "cover-community"],
    ["Minecraft Build Battle", "🥈 2nd", "3mo ago", "dash-tournament"],
    ["Valorant Duo Cup", "Quarterfinal", "4mo ago", "dash-team"],
  ];
  return (
    <div className="space-y-2">
      {rows.map(([t, r, d, k]) => (
        <div key={t} className="neo-border neo-shadow-sm rounded-md bg-card overflow-hidden grid grid-cols-[80px_minmax(0,1fr)_auto] items-center gap-3">
          <img src={heroUrl(k)} alt="" className="h-16 w-full object-cover" />
          <div className="min-w-0 py-2">
            <div className="font-display truncate">{t}</div>
            <div className="text-[11px] text-muted-foreground">{d}</div>
          </div>
          <div className="pr-3"><NeoBadge variant="accent">{r}</NeoBadge></div>
        </div>
      ))}
    </div>
  );
}

function TabTeams() {
  const teams = [
    { t: "Team Shouter", role: "Captain", m: 4, k: "dash-team" },
    { t: "Neon Ateliers", role: "Member", m: 12, k: "cover-artwork" },
    { t: "Blaze Squad", role: "Coach", m: 6, k: "cover-tournament" },
  ];
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {teams.map((tm) => (
        <NeoCard key={tm.t} className="p-0 overflow-hidden">
          <div className="relative aspect-[16/9]">
            <img src={heroUrl(tm.k)} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
            <div className="absolute bottom-2 left-2"><NeoBadge variant="accent">{tm.role}</NeoBadge></div>
          </div>
          <div className="p-4">
            <div className="font-display text-lg">{tm.t}</div>
            <div className="text-[11px] text-muted-foreground">{tm.m} members</div>
            <div className="mt-3 flex gap-2">
              <NeoButton size="sm">Open</NeoButton>
              <NeoButton size="sm" variant="ghost">Leave</NeoButton>
            </div>
          </div>
        </NeoCard>
      ))}
    </div>
  );
}

function TabStats() {
  const stats = [
    { t: "Win Rate", v: "62%", sub: "48 of 78" },
    { t: "KDA", v: "3.4", sub: "Avg per match" },
    { t: "Accuracy", v: "41%", sub: "Head + body" },
    { t: "MVP", v: "9", sub: "This season" },
    { t: "Kills", v: "1,284", sub: "Career total" },
    { t: "Assists", v: "462", sub: "Career total" },
  ];
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {stats.map((s) => (
        <NeoCard key={s.t} className="p-5">
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{s.t}</div>
          <div className="font-display text-4xl mt-1">{s.v}</div>
          <div className="text-[11px] text-muted-foreground">{s.sub}</div>
          <div className="mt-4 h-1.5 rounded-full bg-muted overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary via-accent to-secondary" style={{ width: `${40 + Math.random() * 60}%` }} />
          </div>
        </NeoCard>
      ))}
    </div>
  );
}

function TabActivity() {
  const rows = [
    { Icon: Trophy, t: "You joined BGMI Clash #13", d: "2h ago", k: "cover-tournament" },
    { Icon: Award, t: "You unlocked Season Champion badge", d: "6h ago", k: "badges-sheet" as string },
    { Icon: Ticket, t: "You claimed Golden Crate", d: "12h ago", k: "dash-rewards" },
    { Icon: ImageIcon, t: "You uploaded a new artwork", d: "1d ago", k: "cover-artwork" },
    { Icon: Heart, t: "You earned 50 reactions", d: "1d ago", k: "notice-reaction" },
    { Icon: Star, t: "You reached Level 34", d: "3d ago", k: "dash-overview" },
  ];
  return (
    <div className="relative">
      <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary rounded-full" />
      <div className="space-y-3">
        {rows.map((r, i) => (
          <div key={i} className="relative pl-10">
            <span className="absolute left-1 top-2 h-6 w-6 rounded-full neo-border neo-shadow-sm bg-accent text-accent-foreground grid place-items-center">
              <r.Icon className="h-3 w-3" />
            </span>
            <NeoCard className="p-3 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
              <div className="min-w-0">
                <div className="text-sm font-display truncate">{r.t}</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{r.d}</div>
              </div>
              <img src={heroUrl(r.k)} alt="" className="h-12 w-20 object-cover rounded-md neo-border" />
            </NeoCard>
          </div>
        ))}
      </div>
    </div>
  );
}

function TabFriends({ following = false }: { following?: boolean }) {
  const names = ["axel#1010", "nova#0212", "kite#7420", "rhea#8080", "zed#2201", "milo#3033", "cora#5510", "puck#9090"];
  return (
    <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
      {names.map((n) => (
        <NeoCard key={n} className="flex items-center gap-3 p-3">
          <img src={avatarShadow} alt="" className="h-10 w-10 rounded-md neo-border object-cover shrink-0" />
          <div className="min-w-0 flex-1">
            <div className="font-display text-sm truncate">{n}</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{following ? "Following" : "Friend · online"}</div>
          </div>
          <NeoButton size="sm" variant={following ? "ghost" : "primary"}>{following ? "Unfollow" : "Message"}</NeoButton>
        </NeoCard>
      ))}
    </div>
  );
}

function TabAnalytics() {
  // simple SVG line chart
  const pts = [10, 24, 18, 34, 40, 32, 46, 52, 48, 60, 68, 74, 82, 78, 88];
  const w = 600, h = 160, pad = 8;
  const step = (w - pad * 2) / (pts.length - 1);
  const max = Math.max(...pts);
  const path = pts.map((y, i) => `${i === 0 ? "M" : "L"} ${pad + i * step} ${h - pad - (y / max) * (h - pad * 2)}`).join(" ");
  const heatmap = Array.from({ length: 84 }, () => Math.floor(Math.random() * 5));

  return (
    <div className="grid gap-4 lg:grid-cols-3">
      <NeoCard className="lg:col-span-2">
        <SectionHeader eyebrow="XP Progress" title="Last 30 days" />
        <div className="relative">
          <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-40">
            <defs>
              <linearGradient id="gline" x1="0" x2="1">
                <stop offset="0%" stopColor="var(--primary)" />
                <stop offset="100%" stopColor="var(--accent)" />
              </linearGradient>
            </defs>
            <path d={`${path} L ${w - pad} ${h - pad} L ${pad} ${h - pad} Z`} fill="url(#gline)" opacity="0.15" />
            <path d={path} fill="none" stroke="url(#gline)" strokeWidth="3" />
          </svg>
        </div>
        <div className="grid grid-cols-3 gap-3 mt-4">
          <MiniStat k="54,210" v="Total XP" />
          <MiniStat k="Lv 34" v="Current level" />
          <MiniStat k="+18%" v="vs last month" />
        </div>
      </NeoCard>

      <NeoCard>
        <SectionHeader eyebrow="Consistency" title="Activity heatmap" />
        <div className="grid grid-cols-12 gap-1">
          {heatmap.map((v, i) => (
            <div
              key={i}
              className="aspect-square neo-border rounded-sm"
              style={{
                background: `color-mix(in oklab, var(--primary) ${v * 22}%, var(--muted))`,
              }}
              title={`${v} events`}
            />
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between text-[10px] uppercase tracking-widest text-muted-foreground">
          <span>12 weeks</span><span>Today</span>
        </div>
      </NeoCard>

      <NeoCard className="lg:col-span-3">
        <SectionHeader eyebrow="Breakdown" title="Participation" />
        <div className="grid gap-3 sm:grid-cols-4">
          {[
            ["Win rate", "62%", "primary"],
            ["Events joined", "48", "accent"],
            ["Tournaments", "18", "secondary"],
            ["Pic battles", "22", "success"],
          ].map(([t, v, c]) => (
            <div key={t} className="neo-border rounded-md bg-muted/40 p-3">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{t}</div>
              <div className="font-display text-2xl">{v}</div>
              <div className="mt-2 h-1.5 rounded-full bg-background overflow-hidden">
                <div className={`h-full bg-${c}`} style={{ width: `${40 + Math.random() * 55}%`, background: `var(--${c})` }} />
              </div>
            </div>
          ))}
        </div>
      </NeoCard>
    </div>
  );
}
