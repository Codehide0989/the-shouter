import { createFileRoute, Link } from "@tanstack/react-router";
import { NeoBadge, NeoCard, SectionHeader } from "@/components/neo";
import { EventCard } from "@/components/event-card";
import { MOCK_EVENTS, MOCK_NOTIFICATIONS } from "@/lib/mock-data";
import { Trophy, Users, Flame, Star } from "lucide-react";
import { DashboardPage, StatGrid } from "@/components/dashboard-page";
import winsImg from "@/assets/stat-wins.jpg";
import streakImg from "@/assets/stat-streak.jpg";
import teamsImg from "@/assets/stat-teams.jpg";
import reactionsImg from "@/assets/stat-reactions.jpg";

export const Route = createFileRoute("/dashboard/")({
  component: DashboardIndex,
});

const STATS = [
  { icon: Trophy, label: "Wins", value: 12, img: winsImg, tint: "bg-primary/30" },
  { icon: Flame, label: "Streak", value: 4, img: streakImg, tint: "bg-destructive/30" },
  { icon: Users, label: "Teams", value: 3, img: teamsImg, tint: "bg-secondary/30" },
  { icon: Star, label: "Reactions", value: 842, img: reactionsImg, tint: "bg-accent/30" },
];

function DashboardIndex() {
  const registered = MOCK_EVENTS.slice(0, 2);
  return (
    <DashboardPage
      eyebrow="Signed in as shadow#0001"
      title="Your Command Center"
      tagline="Track your wins, teams, streaks, and every ping from the squad — all in one loud dashboard."
      heroKey="dash-overview"
      actions={
        <>
          <Link to="/settings"><NeoBadge variant="muted">Settings →</NeoBadge></Link>
          <Link to="/explore"><NeoBadge variant="secondary">Find Events →</NeoBadge></Link>
        </>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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

      <StatGrid
        items={[
          { label: "XP this season", value: "12,480", hint: "Level 24 · 62% to next" },
          { label: "Coins", value: "3,120", hint: "Spend in the Store" },
          { label: "MVP count", value: 7, hint: "Across all events" },
          { label: "Win rate", value: "68%", hint: "Last 30 days" },
        ]}
      />

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
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
    </DashboardPage>
  );
}
