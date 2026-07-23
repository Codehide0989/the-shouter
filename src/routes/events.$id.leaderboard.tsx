import { createFileRoute, notFound } from "@tanstack/react-router";
import { NeoBadge, NeoCard } from "@/components/neo";
import { eventById, MOCK_LEADERBOARD, type MockEvent } from "@/lib/mock-data";
import { Crown, Trophy } from "lucide-react";

export const Route = createFileRoute("/events/$id/leaderboard")({
  loader: ({ params }) => {
    const event = eventById(params.id);
    if (!event) throw notFound();
    return { event };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `Leaderboard — ${loaderData.event.title}` },
          { name: "description", content: `Live rankings for ${loaderData.event.title}.` },
        ]
      : [{ title: "Leaderboard" }, { name: "robots", content: "noindex" }],
  }),
  notFoundComponent: () => <div className="p-10 text-center">Event not found</div>,
  errorComponent: ({ error }) => <div className="p-10 text-center">{error.message}</div>,
  component: Leaderboard,
});

function Leaderboard() {
  const { event } = Route.useLoaderData() as { event: MockEvent };
  const [gold, silver, bronze, ...rest] = MOCK_LEADERBOARD;
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <NeoBadge variant="accent">Leaderboard</NeoBadge>
      <h1 className="text-4xl mt-3">{event.title}</h1>

      <div className="grid gap-4 md:grid-cols-3 mt-8">
        {[gold, silver, bronze].map((p, i) => (
          <NeoCard key={p.name} className={i === 0 ? "bg-secondary text-secondary-foreground md:-translate-y-3" : ""}>
            <div className="flex items-center gap-2 text-4xl">
              {i === 0 ? <Crown className="h-8 w-8" /> : <Trophy className="h-7 w-7" />}
              <span className="font-display">#{p.rank}</span>
            </div>
            <div className="mt-3 font-display text-2xl">{p.name}</div>
            <div className="text-sm mt-1 opacity-80">{p.points} pts · {p.wins} wins</div>
          </NeoCard>
        ))}
      </div>

      <NeoCard className="mt-8 p-0 overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-muted font-display uppercase text-xs">
            <tr>
              <th className="p-3 text-left">Rank</th>
              <th className="p-3 text-left">Player / Team</th>
              <th className="p-3 text-right">Points</th>
              <th className="p-3 text-right">Wins</th>
            </tr>
          </thead>
          <tbody>
            {rest.map((r) => (
              <tr key={r.name} className="border-t-3 border-border">
                <td className="p-3 font-display">#{r.rank}</td>
                <td className="p-3">{r.name}</td>
                <td className="p-3 text-right font-bold">{r.points}</td>
                <td className="p-3 text-right">{r.wins}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </NeoCard>
    </div>
  );
}
