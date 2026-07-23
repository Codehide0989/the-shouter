import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { NeoBadge, NeoButton, NeoCard } from "@/components/neo";
import { eventById, STATUS_LABEL, TYPE_LABEL, type MockEvent } from "@/lib/mock-data";
import { Users, Trophy, Radio, Calendar, Hash, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/events/$id")({
  loader: ({ params }): { event: MockEvent } => {
    const event = eventById(params.id);
    if (!event) throw notFound();
    return { event };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.event.title} — THE SHOOTERS` },
          { name: "description", content: loaderData.event.description },
          { property: "og:title", content: loaderData.event.title },
          { property: "og:description", content: loaderData.event.description },
        ]
      : [{ title: "Event not found" }, { name: "robots", content: "noindex" }],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl p-10 text-center">
      <h1 className="text-4xl">Event not found</h1>
      <Link to="/explore" className="mt-4 inline-block underline">Back to events</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-2xl p-10 text-center">
      <h1 className="text-3xl">Something broke</h1>
      <p className="text-muted-foreground mt-2">{error.message}</p>
    </div>
  ),
  component: EventDetail,
});

function EventDetail() {
  const { event } = Route.useLoaderData() as { event: MockEvent };

  const isTeam = event.type === "tournament";
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className={`neo-border neo-shadow-lg bg-gradient-to-br ${event.cover} rounded-lg p-8 md:p-12`}>
        <div className="flex flex-wrap gap-2 mb-4">
          <NeoBadge variant="secondary">{TYPE_LABEL[event.type]}</NeoBadge>
          {event.game && <NeoBadge variant="accent">{event.game}</NeoBadge>}
          {event.status === "live" && (
            <NeoBadge variant="destructive"><Radio className="h-3 w-3" /> Live</NeoBadge>
          )}
          {event.status !== "live" && <NeoBadge variant="muted">{STATUS_LABEL[event.status]}</NeoBadge>}
        </div>
        <h1 className="text-5xl md:text-7xl text-white drop-shadow-[4px_4px_0_rgba(0,0,0,0.4)]">
          {event.title}
        </h1>
        <p className="mt-3 text-white/90 max-w-2xl">{event.description}</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr] mt-8">
        <div className="space-y-6">
          <NeoCard>
            <h2 className="text-2xl mb-4">Overview</h2>
            <p className="text-muted-foreground">
              This event runs on <span className="font-bold text-foreground">{event.server}</span>.
              Bot posts live registration cards, opens a temporary category, and mirrors reactions
              between Discord and the dashboard.
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2 text-sm">
              <li>✅ Discord-verified registration</li>
              <li>✅ Live participant feed</li>
              <li>✅ Reaction-synced voting</li>
              <li>✅ Real-time dashboard</li>
              {isTeam && <li>✅ Team leader verification flow</li>}
              {isTeam && <li>✅ Mandatory game IDs at check-in</li>}
            </ul>
          </NeoCard>

          <NeoCard>
            <h2 className="text-2xl mb-4">Rules snapshot</h2>
            <ol className="space-y-2 text-sm list-decimal list-inside text-muted-foreground">
              <li>Must be a member of {event.server} on Discord.</li>
              <li>Registration closes 30 minutes before start.</li>
              {isTeam && <li>Team size: {event.teamSize} verified members.</li>}
              {isTeam && <li>Submit game IGN, ID, and region at check-in.</li>}
              {event.type !== "tournament" && <li>One submission per player per round.</li>}
              <li>Toxicity, cheating, or smurfing = instant ban.</li>
            </ol>
            <Link to="/rules" className="mt-4 inline-flex text-sm font-display uppercase underline">
              Full rules <ArrowRight className="h-3 w-3 ml-1" />
            </Link>
          </NeoCard>

          <NeoCard>
            <h2 className="text-2xl mb-4">Live activity</h2>
            <ul className="space-y-2 text-sm">
              {[
                "shadow#0001 registered",
                "raven#4210 joined team Ghost Recon",
                "boss#2020 uploaded submission",
                "🔥 42 reactions on group A",
              ].map((a, i) => (
                <li key={i} className="neo-border rounded-md bg-background px-3 py-2 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[color:var(--success)] animate-pulse" />
                  {a}
                </li>
              ))}
            </ul>
          </NeoCard>
        </div>

        <aside className="space-y-4">
          <NeoCard>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-accent" /> {new Date(event.startsAt).toLocaleString()}</div>
              <div className="flex items-center gap-2"><Users className="h-4 w-4 text-accent" /> {event.registered} / {event.capacity} registered</div>
              <div className="flex items-center gap-2"><Trophy className="h-4 w-4 text-accent" /> {event.prize}</div>
              <div className="flex items-center gap-2"><Hash className="h-4 w-4 text-accent" /> #{event.server.toLowerCase().replace(/\s+/g, "-")}</div>
              {isTeam && <div>👥 Team size: {event.teamSize}</div>}
            </div>
            <div className="mt-5 h-2 neo-border rounded-full bg-muted overflow-hidden">
              <div
                className="h-full bg-primary"
                style={{ width: `${(event.registered / event.capacity) * 100}%` }}
              />
            </div>
            <Link
              to={isTeam ? "/register/team/$id" : "/register/$id"}
              params={{ id: event.id }}
              className="mt-5 block"
            >
              <NeoButton size="lg" variant="primary" className="w-full">
                {isTeam ? "Register Team" : "Register Now"}
              </NeoButton>
            </Link>
          </NeoCard>

          <NeoCard className="bg-secondary text-secondary-foreground">
            <h3 className="text-xl">Bot commands</h3>
            <div className="mt-3 space-y-2 text-xs font-mono">
              <div className="neo-border rounded-md bg-background text-foreground px-2 py-1">!register {event.id}</div>
              <div className="neo-border rounded-md bg-background text-foreground px-2 py-1">!status {event.id}</div>
              <div className="neo-border rounded-md bg-background text-foreground px-2 py-1">!leaderboard</div>
            </div>
          </NeoCard>
        </aside>
      </div>
    </div>
  );
}
