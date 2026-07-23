import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { NeoBadge, NeoButton, NeoCard } from "@/components/neo";
import { eventById, MOCK_TEAMS } from "@/lib/mock-data";
import { Trophy, Users, Radio } from "lucide-react";

export const Route = createFileRoute("/events/$id/dashboard")({
  loader: ({ params }) => {
    const event = eventById(params.id);
    if (!event) throw notFound();
    return { event };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `Event Dashboard — ${loaderData.event.title}` },
          { name: "description", content: `Live dashboard for ${loaderData.event.title}.` },
          { name: "robots", content: "noindex" },
        ]
      : [{ title: "Event Dashboard" }, { name: "robots", content: "noindex" }],
  }),
  notFoundComponent: () => <div className="p-10 text-center">Event not found</div>,
  errorComponent: ({ error }) => <div className="p-10 text-center">{error.message}</div>,
  component: EventDashboard,
});

function EventDashboard() {
  const { event } = Route.useLoaderData();
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <NeoBadge variant="accent">Event dashboard</NeoBadge>
          <h1 className="text-4xl mt-3">{event.title}</h1>
        </div>
        <div className="flex gap-2">
          <Link to="/events/$id/leaderboard" params={{ id: event.id }}>
            <NeoButton variant="secondary" size="sm">Leaderboard</NeoButton>
          </Link>
          {event.type === "tournament" && (
            <Link to="/events/$id/bracket" params={{ id: event.id }}>
              <NeoButton variant="secondary" size="sm">Bracket</NeoButton>
            </Link>
          )}
          {(event.type === "artwork" || event.type === "picbattle") && (
            <Link to="/events/$id/gallery" params={{ id: event.id }}>
              <NeoButton variant="secondary" size="sm">Gallery</NeoButton>
            </Link>
          )}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3 mt-8">
        <NeoCard><div className="flex items-center gap-3"><Users className="h-6 w-6 text-accent" /><div><div className="font-display text-3xl">{event.registered}</div><div className="text-xs uppercase text-muted-foreground">Registered</div></div></div></NeoCard>
        <NeoCard><div className="flex items-center gap-3"><Trophy className="h-6 w-6 text-accent" /><div><div className="font-display text-3xl">{event.prize}</div><div className="text-xs uppercase text-muted-foreground">Prize</div></div></div></NeoCard>
        <NeoCard><div className="flex items-center gap-3"><Radio className="h-6 w-6 text-accent" /><div><div className="font-display text-3xl">Live</div><div className="text-xs uppercase text-muted-foreground">Discord sync</div></div></div></NeoCard>
      </div>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr] mt-8">
        <NeoCard>
          <h2 className="text-2xl mb-4">Teams / Participants</h2>
          <div className="space-y-3">
            {MOCK_TEAMS.map((t) => (
              <div key={t.id} className="neo-border rounded-md bg-muted p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-display text-lg">{t.name}</div>
                    <div className="text-xs uppercase text-muted-foreground">Leader: {t.leader}</div>
                  </div>
                  <NeoBadge variant={t.status === "verified" ? "success" : "muted"}>{t.status}</NeoBadge>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {t.members.map((m, i) => (
                    <span key={i} className={`neo-border rounded-md px-2 py-1 text-xs ${m.verified ? "bg-[color:var(--success)] text-black" : "bg-background"}`}>
                      {m.discord}{m.ign ? ` · ${m.ign}` : ""}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </NeoCard>

        <NeoCard>
          <h2 className="text-2xl mb-4">Live feed</h2>
          <ul className="space-y-2 text-sm">
            {["Chicken Kings joined bracket A", "🔥 24 new reactions", "shadow#0001 checked in", "Ghost Recon awaiting player 4", "Bot posted round 1 card"].map((f, i) => (
              <li key={i} className="neo-border rounded-md bg-background px-3 py-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[color:var(--success)] animate-pulse" />{f}
              </li>
            ))}
          </ul>
        </NeoCard>
      </div>
    </div>
  );
}
