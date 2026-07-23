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

export const Route = createFileRoute("/notifications")({
  head: () => ({
    meta: [
      { title: "Notifications — THE SHOOTERS" },
      { name: "description", content: "Event alerts, team updates, and Discord activity." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Notifications,
});

type NoteKind = {
  icon: LucideIcon;
  label: string;
  tone: string; // tailwind classes for icon tile
  chip: "primary" | "secondary" | "accent" | "muted" | "success" | "destructive";
};

const KINDS: NoteKind[] = [
  { icon: Users, label: "Team", tone: "bg-secondary text-secondary-foreground", chip: "secondary" },
  { icon: Trophy, label: "Match", tone: "bg-primary text-primary-foreground", chip: "primary" },
  { icon: Heart, label: "Reaction", tone: "bg-accent text-accent-foreground", chip: "accent" },
  { icon: Sparkles, label: "New Drop", tone: "bg-[color:var(--success)] text-black", chip: "success" },
];

function Notifications() {
  const unreadCount = MOCK_NOTIFICATIONS.filter((n) => n.unread).length;

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      {/* Header */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <NeoBadge variant="accent">
            <Bell className="h-3 w-3" /> Alerts
          </NeoBadge>
          <h1 className="text-4xl md:text-5xl mt-3 leading-none">Notifications</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            You have{" "}
            <span className="font-black text-foreground">{unreadCount} unread</span> updates
            from your squads.
          </p>
        </div>
        <div className="flex gap-2">
          <NeoButton size="sm" variant="ghost">
            <Filter className="h-3 w-3" /> Filter
          </NeoButton>
          <NeoButton size="sm" variant="secondary">
            <Check className="h-3 w-3" /> Mark all read
          </NeoButton>
        </div>
      </div>

      {/* Filter chips */}
      <div className="mt-6 flex flex-wrap gap-2">
        {["All", "Unread", "Team", "Match", "Reaction"].map((f, i) => (
          <button
            key={f}
            className={`neo-border neo-shadow-sm rounded-md px-3 py-1.5 text-[11px] font-black uppercase tracking-widest ${
              i === 0 ? "bg-foreground text-background" : "bg-card"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Notifications list */}
      <div className="mt-6 space-y-3">
        {MOCK_NOTIFICATIONS.map((n, idx) => {
          const kind = KINDS[idx % KINDS.length];
          const Icon = kind.icon;
          return (
            <article
              key={n.id}
              className={`group relative neo-border ${
                n.unread ? "neo-shadow bg-card" : "neo-shadow-sm bg-muted/50"
              } rounded-md p-4 flex gap-4 transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5`}
            >
              {/* Left color rail for unread */}
              {n.unread && (
                <span className="absolute left-0 top-0 bottom-0 w-1.5 bg-destructive border-r-2 border-border rounded-l-md" />
              )}

              <div
                className={`shrink-0 neo-border neo-shadow-sm rounded-md p-2.5 ${kind.tone}`}
              >
                <Icon className="h-5 w-5" strokeWidth={2.5} />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <NeoBadge variant={kind.chip}>{kind.label}</NeoBadge>
                  {n.unread && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-destructive">
                      <span className="h-1.5 w-1.5 rounded-full bg-destructive animate-pulse" />
                      New
                    </span>
                  )}
                </div>
                <p
                  className={`text-sm leading-snug ${
                    n.unread ? "font-bold text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {n.text}
                </p>
                <div className="mt-2 flex items-center justify-between gap-3">
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    {n.time}
                  </span>
                  <div className="flex gap-2">
                    <button className="text-[10px] font-black uppercase tracking-widest underline-offset-4 hover:underline">
                      View
                    </button>
                    <button className="text-[10px] font-black uppercase tracking-widest opacity-60 hover:opacity-100">
                      Dismiss
                    </button>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Empty-state footer chip */}
      <div className="mt-8 neo-border neo-shadow-sm bg-card rounded-md p-4 text-center">
        <p className="text-xs uppercase tracking-widest font-black text-muted-foreground">
          You're all caught up · Bot last synced 12s ago
        </p>
      </div>
    </div>
  );
}
