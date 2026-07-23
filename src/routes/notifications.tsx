import { createFileRoute } from "@tanstack/react-router";
import { NeoBadge, NeoButton } from "@/components/neo";
import { MOCK_NOTIFICATIONS } from "@/lib/mock-data";
import {
  Bell,
  Users,
  Trophy,
  Heart,
  Sparkles,
  Check,
  Filter,
  type LucideIcon,
} from "lucide-react";
import noticeTeam from "@/assets/notice-team.jpg";
import noticeMatch from "@/assets/notice-match.jpg";
import noticeReaction from "@/assets/notice-reaction.jpg";
import noticeDrop from "@/assets/notice-drop.jpg";
import noticeHero from "@/assets/notice-hero.jpg";


export const Route = createFileRoute("/notifications")({
  head: () => ({
    meta: [
      { title: "Notifications — The Shooter" },
      { name: "description", content: "Event alerts, team updates, and Discord activity." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Notifications,
});

type NoteKind = {
  icon: LucideIcon;
  label: string;
  tone: string;
  chip: "primary" | "secondary" | "accent" | "muted" | "success" | "destructive";
  bg: string;
};

const KINDS: NoteKind[] = [
  { icon: Users, label: "Team", tone: "bg-secondary text-secondary-foreground", chip: "secondary", bg: noticeTeam },
  { icon: Trophy, label: "Match", tone: "bg-primary text-primary-foreground", chip: "primary", bg: noticeMatch },
  { icon: Heart, label: "Reaction", tone: "bg-accent text-accent-foreground", chip: "accent", bg: noticeReaction },
  { icon: Sparkles, label: "New Drop", tone: "bg-[color:var(--success)] text-black", chip: "success", bg: noticeDrop },

];

function Notifications() {
  const unreadCount = MOCK_NOTIFICATIONS.filter((n) => n.unread).length;

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      {/* Hero banner */}
      <section className="relative neo-border neo-shadow bg-card overflow-hidden rounded-lg mb-5">
        <div className="grid grid-cols-[1.4fr_1fr] items-stretch">
          <div className="p-4 md:p-6 flex flex-col justify-center">
            <NeoBadge variant="accent">
              <Bell className="h-3 w-3" /> Alerts
            </NeoBadge>
            <h1 className="font-display text-3xl md:text-4xl mt-2 leading-none tracking-tight">
              INBOX<br />
              <span className="text-primary">RING RING</span>
            </h1>
            <p className="mt-2 text-xs text-muted-foreground">
              <span className="font-black text-foreground">{unreadCount} unread</span> · Bot synced 12s ago
            </p>
            <div className="mt-3 flex gap-2">
              <NeoButton size="sm" variant="ghost">
                <Filter className="h-3 w-3" />
              </NeoButton>
              <NeoButton size="sm" variant="secondary">
                <Check className="h-3 w-3" /> Read all
              </NeoButton>
            </div>
          </div>
          <div className="relative border-l-4 border-border bg-secondary/30 overflow-hidden">
            <img
              src={noticeHero}
              alt="Notification bell"
              width={1024}
              height={1024}
              className="absolute inset-0 h-full w-full object-contain p-2"
            />
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-destructive animate-pulse" />
          </div>
        </div>
      </section>


      {/* Filter chips */}
      <div className="mt-5 flex flex-wrap gap-1.5">
        {["All", "Unread", "Team", "Match", "Reaction"].map((f, i) => (
          <button
            key={f}
            className={`neo-border neo-shadow-sm rounded-md px-2.5 py-1 text-[10px] font-black uppercase tracking-widest ${
              i === 0 ? "bg-foreground text-background" : "bg-card"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Notifications list — compact cards with embedded bg image */}
      <div className="mt-4 space-y-2.5">
        {MOCK_NOTIFICATIONS.map((n, idx) => {
          const kind = KINDS[idx % KINDS.length];
          const Icon = kind.icon;
          return (
            <article
              key={n.id}
              className={`group relative overflow-hidden neo-border rounded-md transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 ${
                n.unread ? "neo-shadow" : "neo-shadow-sm opacity-90"
              }`}
            >
              {/* Embedded background image */}
              <div
                aria-hidden
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${kind.bg})` }}
              />
              {/* Readability veil — theme-aware */}
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background: n.unread
                    ? "linear-gradient(90deg, color-mix(in oklab, var(--color-card) 88%, transparent) 0%, color-mix(in oklab, var(--color-card) 55%, transparent) 55%, color-mix(in oklab, var(--color-card) 15%, transparent) 100%)"
                    : "linear-gradient(90deg, color-mix(in oklab, var(--color-muted) 90%, transparent) 0%, color-mix(in oklab, var(--color-muted) 60%, transparent) 100%)",
                }}
              />

              {/* Left accent rail for unread */}
              {n.unread && (
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-destructive border-r-2 border-border z-10" />
              )}

              <div className="relative z-10 p-3 flex gap-3 items-center">
                <div className={`shrink-0 neo-border neo-shadow-sm rounded-md p-2 ${kind.tone}`}>
                  <Icon className="h-4 w-4" strokeWidth={2.5} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <NeoBadge variant={kind.chip} className="!text-[9px] !px-1.5 !py-0">
                      {kind.label}
                    </NeoBadge>
                    <span className="text-[9px] uppercase tracking-widest text-muted-foreground">
                      {n.time}
                    </span>
                    {n.unread && (
                      <span className="ml-auto h-1.5 w-1.5 rounded-full bg-destructive animate-pulse" />
                    )}
                  </div>
                  <p
                    className={`text-xs leading-snug line-clamp-2 ${
                      n.unread ? "font-bold text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {n.text}
                  </p>
                </div>

                <button
                  aria-label="View"
                  className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity neo-border neo-shadow-sm rounded-md bg-background text-[9px] font-black uppercase tracking-widest px-2 py-1"
                >
                  View
                </button>
              </div>
            </article>
          );
        })}
      </div>

      {/* Footer chip */}
      <div className="mt-6 neo-border neo-shadow-sm bg-card rounded-md p-2.5 text-center">
        <p className="text-[10px] uppercase tracking-widest font-black text-muted-foreground">
          You're all caught up
        </p>
      </div>
    </div>
  );
}
