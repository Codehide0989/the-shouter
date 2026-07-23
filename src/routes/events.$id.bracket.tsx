import { createFileRoute, notFound } from "@tanstack/react-router";
import { NeoBadge, NeoCard } from "@/components/neo";
import { eventById } from "@/lib/mock-data";

export const Route = createFileRoute("/events/$id/bracket")({
  loader: ({ params }) => {
    const event = eventById(params.id);
    if (!event) throw notFound();
    return { event };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `Bracket — ${loaderData.event.title}` },
          { name: "description", content: `Live tournament bracket for ${loaderData.event.title}.` },
        ]
      : [{ title: "Bracket" }, { name: "robots", content: "noindex" }],
  }),
  notFoundComponent: () => <div className="p-10 text-center">Event not found</div>,
  errorComponent: ({ error }) => <div className="p-10 text-center">{error.message}</div>,
  component: Bracket,
});

const ROUNDS = [
  {
    name: "Quarterfinals",
    matches: [
      ["Chicken Kings", "Rift Hunters"],
      ["Ghost Recon", "Shadow Ops"],
      ["Neon Ninjas", "Pixel Wolves"],
      ["Blaze Squad", "Zero Cool"],
    ],
  },
  {
    name: "Semifinals",
    matches: [
      ["Chicken Kings", "Ghost Recon"],
      ["Neon Ninjas", "Blaze Squad"],
    ],
  },
  { name: "Final", matches: [["Chicken Kings", "Neon Ninjas"]] },
];

function Bracket() {
  const { event } = Route.useLoaderData();
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <NeoBadge variant="accent">Bracket</NeoBadge>
      <h1 className="text-4xl mt-3">{event.title}</h1>

      <div className="mt-8 grid gap-6 lg:grid-cols-3 overflow-x-auto">
        {ROUNDS.map((r) => (
          <div key={r.name} className="space-y-4 min-w-[240px]">
            <div className="font-display text-xs uppercase tracking-widest text-muted-foreground">{r.name}</div>
            {r.matches.map((m, i) => (
              <NeoCard key={i} className="p-0 overflow-hidden">
                {m.map((team, j) => (
                  <div key={team} className={`px-4 py-3 flex items-center justify-between ${j === 0 ? "border-b-3 border-border bg-primary/10" : ""}`}>
                    <span className="font-bold text-sm">{team}</span>
                    <span className="font-display text-lg">{Math.floor(Math.random() * 3)}</span>
                  </div>
                ))}
              </NeoCard>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
