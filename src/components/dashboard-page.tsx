import type { ReactNode } from "react";
import { NeoBadge, NeoCard, SectionHeader } from "@/components/neo";
import emptyImg from "@/assets/empty-state.jpg";

// Central image resolver — imports all hero assets
import overview from "@/assets/dash-overview.jpg";
import calendar from "@/assets/dash-calendar.jpg";
import rewards from "@/assets/dash-rewards.jpg";
import security from "@/assets/dash-security.jpg";
import team from "@/assets/dash-team.jpg";
import tournament from "@/assets/dash-tournament.jpg";
import bot from "@/assets/bot-mascot.jpg";
import events from "@/assets/cover-tournament.jpg";
import artwork from "@/assets/cover-artwork.jpg";
import picbattle from "@/assets/cover-picbattle.jpg";
import community from "@/assets/cover-community.jpg";
import notifs from "@/assets/notice-hero.jpg";
import reactions from "@/assets/notice-reaction.jpg";
import drop from "@/assets/notice-drop.jpg";
import admin from "@/assets/admin-hero.jpg";
import profile from "@/assets/dashboard-hero.jpg";
import settings from "@/assets/settings-hero.jpg";
import statWins from "@/assets/stat-wins.jpg";
import statTeams from "@/assets/stat-teams.jpg";
import statReactions from "@/assets/stat-reactions.jpg";
import statStreak from "@/assets/stat-streak.jpg";

const HERO_MAP: Record<string, string> = {
  "dash-overview": overview,
  "dash-calendar": calendar,
  "dash-rewards": rewards,
  "dash-security": security,
  "dash-team": team,
  "dash-tournament": tournament,
  "bot-mascot": bot,
  "cover-tournament": events,
  "cover-artwork": artwork,
  "cover-picbattle": picbattle,
  "cover-community": community,
  "notice-hero": notifs,
  "notice-reaction": reactions,
  "notice-drop": drop,
  "admin-hero": admin,
  "dashboard-hero": profile,
  "settings-hero": settings,
};

// Themed stat card artwork rotation — keyed by label keyword
const STAT_ART: Array<{ match: RegExp; src: string; tint: string }> = [
  { match: /win|match|victor|mvp|champ/i, src: statWins, tint: "from-primary/25 via-transparent" },
  { match: /team|squad|member|player|assist/i, src: statTeams, tint: "from-secondary/25 via-transparent" },
  { match: /react|emoji|vote|like/i, src: statReactions, tint: "from-accent/25 via-transparent" },
  { match: /streak|xp|coin|reward|badge|level|rank/i, src: statStreak, tint: "from-primary/20 via-transparent" },
  { match: /event|tour|bracket|kill/i, src: tournament, tint: "from-accent/25 via-transparent" },
];

function statArt(label: string) {
  return STAT_ART.find((s) => s.match.test(label)) ?? { src: rewards, tint: "from-primary/20 via-transparent" };
}

export function heroUrl(key: string) {
  return HERO_MAP[key] ?? overview;
}

interface Props {
  title: string;
  eyebrow: string;
  tagline: string;
  heroKey: string;
  actions?: ReactNode;
  children?: ReactNode;
}

export function DashboardPage({ title, eyebrow, tagline, heroKey, actions, children }: Props) {
  const src = heroUrl(heroKey);
  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="relative neo-border neo-shadow rounded-lg overflow-hidden bg-card">
        <img src={src} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/75 to-background/20" />
        {/* Decorative sticker */}
        <span className="absolute top-3 right-3 sm:top-5 sm:right-5 rotate-6 neo-border neo-shadow-sm bg-accent text-accent-foreground rounded-full h-14 w-14 sm:h-16 sm:w-16 grid place-items-center font-display text-[10px] uppercase text-center leading-none">
          Live<br />Now
        </span>
        <div className="relative p-5 sm:p-8">
          <NeoBadge variant="accent">{eyebrow}</NeoBadge>
          <h1 className="font-display text-2xl sm:text-4xl mt-2 leading-tight">{title}</h1>
          <p className="text-sm text-muted-foreground mt-2 max-w-xl">{tagline}</p>
          {actions ? <div className="mt-4 flex flex-wrap gap-2">{actions}</div> : null}
        </div>
      </div>

      {children}
    </div>
  );
}

export function EmptyState({
  title,
  hint,
  action,
}: {
  title: string;
  hint?: string;
  action?: ReactNode;
}) {
  return (
    <NeoCard className="p-8 text-center relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-muted/40 via-transparent to-accent/10" />
      <img
        src={emptyImg}
        alt=""
        className="relative mx-auto h-32 w-32 object-contain animate-fade-in"
        loading="lazy"
      />
      <div className="relative font-display text-lg mt-3">{title}</div>
      {hint ? <p className="relative text-xs text-muted-foreground mt-1 max-w-sm mx-auto">{hint}</p> : null}
      {action ? <div className="relative mt-4">{action}</div> : null}
    </NeoCard>
  );
}

function parsePercent(value: string | number): number | null {
  const s = String(value);
  const m = s.match(/^(\d+(?:\.\d+)?)\s*%$/);
  if (m) return Math.min(100, parseFloat(m[1]));
  return null;
}

export function StatGrid({
  items,
}: {
  items: Array<{ label: string; value: string | number; hint?: string }>;
}) {
  return (
    <div className="grid gap-3 sm:gap-4 grid-cols-2 lg:grid-cols-4">
      {items.map((s, i) => {
        const art = statArt(s.label);
        const pct = parsePercent(s.value);
        return (
          <NeoCard
            key={s.label}
            className="relative overflow-hidden p-4 sm:p-5 min-h-[9rem] transition-all duration-200 hover:-translate-y-0.5 hover:neo-shadow-lg group"
          >
            {/* Background artwork */}
            <img
              src={art.src}
              alt=""
              className="pointer-events-none absolute -right-6 -bottom-6 h-28 w-28 sm:h-32 sm:w-32 object-cover rounded-full neo-border opacity-70 group-hover:opacity-90 group-hover:rotate-6 transition-all duration-300"
              loading="lazy"
            />
            {/* Gradient overlay */}
            <div className={`pointer-events-none absolute inset-0 bg-gradient-to-tr ${art.tint} to-transparent`} />
            {/* Floating decoration */}
            <span
              className="pointer-events-none absolute top-2 right-2 h-2 w-2 rounded-full bg-accent neo-border animate-pulse"
              style={{ animationDelay: `${i * 120}ms` }}
            />
            <div className="relative">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{s.label}</div>
              <div className="font-display text-2xl sm:text-3xl mt-1 leading-none">{s.value}</div>
              {pct !== null ? (
                <div className="mt-3 h-2 w-full neo-border rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-700 ease-out"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              ) : null}
              {s.hint ? <div className="text-[11px] text-muted-foreground mt-2 relative">{s.hint}</div> : null}
            </div>
          </NeoCard>
        );
      })}
    </div>
  );
}

export function ListPanel({
  title,
  items,
  empty = "Nothing here yet.",
}: {
  title: string;
  items: Array<{ id: string; primary: string; secondary?: string; meta?: string; tag?: string }>;
  empty?: string;
}) {
  return (
    <div>
      <SectionHeader eyebrow="List" title={title} />
      {items.length === 0 ? (
        <EmptyState title={empty} />
      ) : (
        <div className="space-y-2">
          {items.map((it, i) => (
            <NeoCard
              key={it.id}
              className="p-3 flex items-center gap-3 transition-all duration-200 hover:-translate-y-0.5 hover:translate-x-0.5 hover:neo-shadow-lg relative overflow-hidden group"
            >
              <div className="absolute inset-y-0 left-0 w-1 bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span
                className="shrink-0 h-8 w-8 grid place-items-center neo-border neo-shadow-sm rounded-md bg-secondary text-secondary-foreground font-display text-[10px]"
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1 min-w-0">
                <div className="font-display text-sm truncate">{it.primary}</div>
                {it.secondary ? (
                  <div className="text-[11px] text-muted-foreground truncate">{it.secondary}</div>
                ) : null}
              </div>
              {it.tag ? <NeoBadge variant="muted">{it.tag}</NeoBadge> : null}
              {it.meta ? <div className="text-[10px] text-muted-foreground shrink-0 hidden sm:block">{it.meta}</div> : null}
            </NeoCard>
          ))}
        </div>
      )}
    </div>
  );
}
