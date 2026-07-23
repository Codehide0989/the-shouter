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
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/20" />
        <div className="relative p-5 sm:p-8">
          <NeoBadge variant="accent">{eyebrow}</NeoBadge>
          <h1 className="font-display text-3xl sm:text-4xl mt-2 leading-tight">{title}</h1>
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
    <NeoCard className="p-8 text-center">
      <img
        src={emptyImg}
        alt=""
        className="mx-auto h-32 w-32 object-contain"
        loading="lazy"
      />
      <div className="font-display text-lg mt-3">{title}</div>
      {hint ? <p className="text-xs text-muted-foreground mt-1 max-w-sm mx-auto">{hint}</p> : null}
      {action ? <div className="mt-4">{action}</div> : null}
    </NeoCard>
  );
}

export function StatGrid({
  items,
}: {
  items: Array<{ label: string; value: string | number; hint?: string }>;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((s) => (
        <NeoCard key={s.label} className="p-4">
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{s.label}</div>
          <div className="font-display text-3xl mt-1 leading-none">{s.value}</div>
          {s.hint ? <div className="text-[11px] text-muted-foreground mt-2">{s.hint}</div> : null}
        </NeoCard>
      ))}
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
          {items.map((it) => (
            <NeoCard key={it.id} className="p-3 flex items-center gap-3">
              <div className="flex-1 min-w-0">
                <div className="font-display text-sm truncate">{it.primary}</div>
                {it.secondary ? (
                  <div className="text-[11px] text-muted-foreground truncate">{it.secondary}</div>
                ) : null}
              </div>
              {it.tag ? <NeoBadge variant="muted">{it.tag}</NeoBadge> : null}
              {it.meta ? <div className="text-[10px] text-muted-foreground shrink-0">{it.meta}</div> : null}
            </NeoCard>
          ))}
        </div>
      )}
    </div>
  );
}
