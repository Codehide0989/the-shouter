import { createFileRoute, Link } from "@tanstack/react-router";
import { NeoCard, NeoBadge, NeoButton, SectionHeader } from "@/components/neo";
import { heroUrl } from "@/components/dashboard-page";
import {
  Users, Crown, Shield, UserPlus, Send, MessageSquare, Notebook,
  CheckCheck, ClipboardCheck, UserMinus, Repeat, Trophy, Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/teams")({
  head: () => ({
    meta: [
      { title: "Team System — The Shouter" },
      { name: "description", content: "Recruit, invite, verify and manage your squad — with ready-checks, reserves, chat and tournament history." },
      { property: "og:title", content: "Team System — The Shouter" },
      { property: "og:description", content: "Everything a competitive squad needs: invites, verification, chat, notes, ready-checks and check-in." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const FEATURED_TEAMS = [
  { name: "Neon Kings", tag: "NK", tint: "from-primary/40", captain: "shadow#0001", wr: 78, size: 5, badge: "S5 Champs" },
  { name: "Shadow Ops", tag: "SO", tint: "from-secondary/40", captain: "ghostpixel", wr: 71, size: 5, badge: "Rising" },
  { name: "Rift Angels", tag: "RA", tint: "from-accent/40", captain: "nova.exe", wr: 68, size: 5, badge: "Verified" },
];

const TOP_TEAMS = [
  { r: 1, name: "Neon Kings", pts: 12480, trophies: 8 },
  { r: 2, name: "Shadow Ops", pts: 11020, trophies: 6 },
  { r: 3, name: "Rift Angels", pts: 9870, trophies: 5 },
  { r: 4, name: "Void Runners", pts: 8940, trophies: 4 },
  { r: 5, name: "Sable Circuit", pts: 8210, trophies: 3 },
];

const FEATURES = [
  { slug: "invitations", label: "Invitations", tag: "Send & receive", icon: Send },
  { slug: "verification", label: "Verification", tag: "Confirm every member", icon: Shield },
  { slug: "captain-transfer", label: "Captain Transfer", tag: "Hand over the reins", icon: Crown },
  { slug: "kick-replace", label: "Kick & Replace", tag: "Manage roster", icon: UserMinus },
  { slug: "reserves", label: "Reserves", tag: "Backup slots", icon: Repeat },
  { slug: "chat", label: "Team Chat", tag: "Squad-only channel", icon: MessageSquare },
  { slug: "notes", label: "Team Notes", tag: "Strategy board", icon: Notebook },
  { slug: "ready-check", label: "Ready Check", tag: "Everyone lock-in", icon: CheckCheck },
  { slug: "check-in", label: "Check-In", tag: "Confirm attendance", icon: ClipboardCheck },
];

const ROSTER = [
  { name: "shadow#0001", role: "Captain", tag: "IGL", icon: "👑" },
  { name: "ghostpixel", role: "Duelist", tag: "Entry", icon: "⚔️" },
  { name: "nova.exe", role: "Support", tag: "Utility", icon: "🛡️" },
  { name: "ember", role: "Sentinel", tag: "Anchor", icon: "🔒" },
  { name: "axeman", role: "Flex", tag: "Sub", icon: "🎯" },
];

function Page() {
  return (
    <div className="mx-auto max-w-7xl px-3 sm:px-6 py-6 sm:py-10 space-y-12">
      {/* Hero split */}
      <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        <div className="relative neo-border neo-shadow-lg rounded-2xl overflow-hidden bg-card min-h-[320px]">
          <img src={heroUrl("dash-team")} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
          <span className="absolute top-4 right-4 -rotate-6 neo-border neo-shadow-sm bg-secondary text-secondary-foreground rounded-md px-3 py-2 font-display text-[11px] uppercase">👥 Squads</span>
          <div className="relative p-6 sm:p-10 max-w-lg h-full flex flex-col justify-center">
            <NeoBadge variant="accent">Team system</NeoBadge>
            <h1 className="font-display text-3xl sm:text-5xl mt-3 leading-tight">Louder with a <span className="text-primary">squad</span>.</h1>
            <p className="text-sm text-muted-foreground mt-3 max-w-md">Invite friends, verify identity, coordinate rosters and win as a unit. Everything a competitive team needs — in Discord.</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <NeoButton variant="primary"><UserPlus className="h-4 w-4" /> Create team</NeoButton>
              <NeoButton variant="ghost">Join with invite</NeoButton>
            </div>
          </div>
        </div>

        {/* Stat pill panel */}
        <div className="grid grid-cols-2 gap-3">
          {[
            { l: "Active teams", v: "1,248", i: Users },
            { l: "Champions", v: "312", i: Trophy },
            { l: "Invites today", v: "84", i: Send },
            { l: "Verified", v: "97%", i: Shield },
          ].map((s) => {
            const I = s.i;
            return (
              <NeoCard key={s.l} className="p-4 flex flex-col justify-between min-h-[120px] relative overflow-hidden">
                <span className="neo-border neo-shadow-sm bg-accent text-accent-foreground rounded-lg h-9 w-9 grid place-items-center"><I className="h-4 w-4" /></span>
                <div>
                  <div className="font-display text-xl sm:text-2xl">{s.v}</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{s.l}</div>
                </div>
              </NeoCard>
            );
          })}
        </div>
      </div>

      {/* Featured teams — banner strip */}
      <div>
        <SectionHeader eyebrow="Featured" title="Squads to watch" />
        <div className="grid gap-4 md:grid-cols-3">
          {FEATURED_TEAMS.map((t) => (
            <NeoCard key={t.name} className="p-0 overflow-hidden group hover:-translate-y-1 transition-transform">
              <div className={`relative h-28 bg-gradient-to-br ${t.tint} to-background border-b-[3px] border-border`}>
                <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "repeating-linear-gradient(-45deg, var(--color-border) 0 1px, transparent 1px 10px)" }} />
                <span className="absolute top-2 right-2"><NeoBadge variant="accent">{t.badge}</NeoBadge></span>
                <div className="absolute -bottom-6 left-4 h-14 w-14 rounded-lg neo-border neo-shadow-sm bg-card grid place-items-center font-display text-lg">{t.tag}</div>
              </div>
              <div className="pt-8 p-4">
                <div className="font-display text-lg">{t.name}</div>
                <div className="text-[11px] text-muted-foreground">Captain: {t.captain}</div>
                <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                  <div className="neo-border rounded-md bg-background p-2"><div className="font-display text-sm">{t.wr}%</div><div className="text-[9px] uppercase text-muted-foreground">WR</div></div>
                  <div className="neo-border rounded-md bg-background p-2"><div className="font-display text-sm">{t.size}</div><div className="text-[9px] uppercase text-muted-foreground">Roster</div></div>
                  <div className="neo-border rounded-md bg-background p-2"><div className="font-display text-sm">S5</div><div className="text-[9px] uppercase text-muted-foreground">Season</div></div>
                </div>
                <NeoButton size="sm" variant="ghost" className="w-full mt-3">View squad</NeoButton>
              </div>
            </NeoCard>
          ))}
        </div>
      </div>

      {/* Two-column: roster + top teams table */}
      <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
        <NeoCard className="p-0 overflow-hidden">
          <div className="p-4 sm:p-5 border-b-[3px] border-border flex items-center justify-between gap-3">
            <div>
              <NeoBadge variant="accent">Your roster</NeoBadge>
              <div className="font-display text-xl mt-2">Neon Kings</div>
              <div className="text-[11px] text-muted-foreground">5 members · verified · S5 champions</div>
            </div>
            <NeoButton size="sm" variant="primary"><UserPlus className="h-3.5 w-3.5" /> Invite</NeoButton>
          </div>
          <div className="divide-y-[3px] divide-border">
            {ROSTER.map((m) => (
              <div key={m.name} className="p-3 sm:p-4 flex items-center gap-3 hover:bg-muted/40 transition-colors">
                <span className="neo-border neo-shadow-sm bg-secondary text-secondary-foreground h-10 w-10 rounded-lg grid place-items-center text-lg shrink-0">{m.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="font-display text-sm truncate">{m.name}</div>
                  <div className="text-[11px] text-muted-foreground truncate">{m.role} · {m.tag}</div>
                </div>
                <NeoBadge variant={m.role === "Captain" ? "accent" : "muted"}>{m.role === "Captain" ? "C" : m.tag}</NeoBadge>
              </div>
            ))}
          </div>
        </NeoCard>

        <NeoCard className="p-0 overflow-hidden">
          <div className="p-4 sm:p-5 border-b-[3px] border-border">
            <NeoBadge variant="secondary">Top teams</NeoBadge>
            <div className="font-display text-xl mt-2">Global ranking</div>
          </div>
          <div className="divide-y-[3px] divide-border">
            {TOP_TEAMS.map((t) => (
              <div key={t.name} className="p-3 sm:p-4 flex items-center gap-3">
                <div className="font-display text-xl w-6 text-center">{t.r}</div>
                <div className="flex-1 min-w-0">
                  <div className="font-display text-sm truncate">{t.name}</div>
                  <div className="text-[10px] text-muted-foreground">{t.trophies} trophies</div>
                </div>
                <div className="text-right">
                  <div className="font-display text-sm">{t.pts.toLocaleString()}</div>
                  <div className="text-[9px] uppercase text-muted-foreground">Pts</div>
                </div>
              </div>
            ))}
          </div>
        </NeoCard>
      </div>

      {/* Feature grid */}
      <div>
        <SectionHeader eyebrow="Toolkit" title="Everything a captain needs" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => {
            const I = f.icon;
            return (
              <Link key={f.slug} to={"/teams/$slug".replace("$slug", f.slug) as never} className="block">
                <NeoCard className="p-5 h-full hover:-translate-y-1 transition-transform group">
                  <span className="neo-border neo-shadow-sm bg-accent text-accent-foreground rounded-lg h-10 w-10 grid place-items-center rotate-[-4deg] group-hover:rotate-[4deg] transition-transform"><I className="h-4 w-4" /></span>
                  <div className="font-display text-lg mt-3">{f.label}</div>
                  <div className="text-xs text-muted-foreground mt-1">{f.tag}</div>
                </NeoCard>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Recruitment CTA */}
      <NeoCard className="p-6 sm:p-8 bg-secondary text-secondary-foreground relative overflow-hidden">
        <div className="pointer-events-none absolute -right-10 -bottom-10 h-48 w-48 rounded-full bg-accent/40 neo-border" />
        <div className="relative grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
          <div>
            <div className="text-[10px] uppercase tracking-widest opacity-80">Recruiting</div>
            <div className="font-display text-2xl sm:text-3xl mt-1">Open the recruitment board</div>
            <p className="text-sm opacity-90 mt-2 max-w-md">Post an open slot, tag your rank, and let the community come to you.</p>
          </div>
          <div className="flex gap-2 flex-wrap">
            <NeoButton variant="primary"><Sparkles className="h-4 w-4" /> Post opening</NeoButton>
            <NeoButton variant="accent">Browse open slots</NeoButton>
          </div>
        </div>
      </NeoCard>
    </div>
  );
}
