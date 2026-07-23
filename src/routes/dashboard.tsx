import { createFileRoute, Link } from "@tanstack/react-router";
import { NeoBadge, NeoCard, SectionHeader } from "@/components/neo";
import { EventCard } from "@/components/event-card";
import { MOCK_EVENTS, MOCK_NOTIFICATIONS } from "@/lib/mock-data";
import { Trophy, Users, Flame, Star } from "lucide-react";
import heroUrl from "@/assets/dashboard-hero.jpg";
import winsImg from "@/assets/stat-wins.jpg";
import streakImg from "@/assets/stat-streak.jpg";
import teamsImg from "@/assets/stat-teams.jpg";
import reactionsImg from "@/assets/stat-reactions.jpg";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "My Dashboard — The Shouter" },
      { name: "description", content: "Your registered events, teams, and activity." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Dashboard,
});

const STATS = [
  { icon: Trophy, label: "Wins", value: 12, img: winsImg, tint: "bg-primary/30" },
  { icon: Flame, label: "Streak", value: 4, img: streakImg, tint: "bg-destructive/30" },
  { icon: Users, label: "Teams", value: 3, img: teamsImg, tint: "bg-secondary/30" },
  { icon: Star, label: "Reactions", value: 842, img: reactionsImg, tint: "bg-accent/30" },
];

function Dashboard() {
  const registered = MOCK_EVENTS.slice(0, 2);
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      {/* Hero */}
      <div className="relative neo-border neo-shadow rounded-lg overflow-hidden bg-card">
        <img
          src={heroUrl}
          alt="Command center desk with monitors and trophies"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/60 to-transparent" />
        <div className="relative p-6 sm:p-10 max-w-2xl">
          <NeoBadge variant="accent">Signed in as shadow#0001</NeoBadge>
          <h1 className="text-4xl sm:text-5xl mt-3">Your Command Center</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Track your wins, teams, streaks, and every ping from the squad — all in one loud dashboard.
          </p>
          <div className="mt-5 flex gap-2 flex-wrap">
            <Link to="/settings"><NeoBadge variant="muted">Settings →</NeoBadge></Link>
            <Link to="/explore"><NeoBadge variant="secondary">Find Events →</NeoBadge></Link>
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-8">
        {STATS.map((s) => (
          <NeoCard key={s.label} className="relative overflow-hidden p-0">
            <div className="relative h-24 border-b-4 border-border overflow-hidden">
              <img src={s.img} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
              <div className={`absolute inset-0 mix-blend-multiply ${s.tint}`} />
              <div className="absolute top-2 left-2 neo-border bg-background rounded-md p-1.5">
                <s.icon className="h-4 w-4" />
              </div>
            </div>
            <div className="p-4">
              <div className="font-display text-3xl leading-none">{s.value}</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{s.label}</div>
            </div>
          </NeoCard>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr] mt-10">
        <div>
          <SectionHeader eyebrow="Registered" title="Your active events" />
          <div className="grid gap-5 sm:grid-cols-2">
            {registered.map((e) => (
              <EventCard key={e.id} event={e} />
            ))}
          </div>
        </div>

        <div>
          <SectionHeader eyebrow="Alerts" title="Recent activity" />
          <NeoCard className="space-y-3">
            {MOCK_NOTIFICATIONS.map((n) => (
              <div key={n.id} className={`neo-border rounded-md p-3 ${n.unread ? "bg-secondary text-secondary-foreground" : "bg-muted"}`}>
                <div className="text-sm">{n.text}</div>
                <div className="text-[10px] uppercase tracking-widest opacity-70 mt-1">{n.time}</div>
              </div>
            ))}
          </NeoCard>
        </div>
      </div>
    </div>
  );
}
