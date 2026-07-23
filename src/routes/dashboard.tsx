import { createFileRoute, Link } from "@tanstack/react-router";
import { NeoBadge, NeoCard, SectionHeader } from "@/components/neo";
import { EventCard } from "@/components/event-card";
import { MOCK_EVENTS, MOCK_NOTIFICATIONS } from "@/lib/mock-data";
import { Trophy, Users, Flame, Star } from "lucide-react";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "My Dashboard — The Shooter" },
      { name: "description", content: "Your registered events, teams, and activity." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Dashboard,
});

const STATS = [
  { icon: Trophy, label: "Wins", value: 12 },
  { icon: Flame, label: "Streak", value: 4 },
  { icon: Users, label: "Teams", value: 3 },
  { icon: Star, label: "Reactions", value: 842 },
];

function Dashboard() {
  const registered = MOCK_EVENTS.slice(0, 2);
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <NeoBadge variant="accent">Signed in as shadow#0001</NeoBadge>
          <h1 className="text-4xl mt-3">Your Command Center</h1>
        </div>
        <Link to="/settings">
          <NeoBadge variant="muted">Settings →</NeoBadge>
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-8">
        {STATS.map((s) => (
          <NeoCard key={s.label} className="flex items-center gap-4">
            <div className="neo-border bg-primary text-primary-foreground rounded-md p-3">
              <s.icon className="h-6 w-6" />
            </div>
            <div>
              <div className="font-display text-3xl">{s.value}</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{s.label}</div>
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
