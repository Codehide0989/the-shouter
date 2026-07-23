import { createFileRoute } from "@tanstack/react-router";
import { NeoBadge, NeoCard } from "@/components/neo";

export const Route = createFileRoute("/rules")({
  head: () => ({
    meta: [
      { title: "Rules — THE SHOOTERS" },
      { name: "description", content: "Community rules, event guidelines, and fair play policy." },
      { property: "og:title", content: "Rules" },
      { property: "og:description", content: "How events work on THE SHOOTERS." },
    ],
  }),
  component: Rules,
});

const SECTIONS = [
  {
    title: "General",
    items: [
      "Be a member of the host Discord server.",
      "One account per player. No smurfing.",
      "Respect staff decisions and event moderators.",
    ],
  },
  {
    title: "Tournaments",
    items: [
      "Team leader registers and adds Discord IDs for each member.",
      "All members must verify via bot DM before check-in.",
      "Submit IGN, game ID, and region at check-in.",
      "Sensitive game details unlock only after team verification.",
    ],
  },
  {
    title: "Artwork & Pic Battles",
    items: [
      "Original work only. AI-generated art must be disclosed.",
      "One submission per round unless the event states otherwise.",
      "Voting happens on Discord — reactions mirror to the site live.",
    ],
  },
  {
    title: "Fair Play",
    items: [
      "Cheating, hacks, or third-party tools = permanent ban.",
      "Toxicity, harassment, or slurs = removal from event.",
      "Appeals via the #support channel.",
    ],
  },
];

function Rules() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <NeoBadge variant="accent">Playbook</NeoBadge>
      <h1 className="text-5xl mt-3">Rules of engagement</h1>
      <p className="text-muted-foreground mt-2">Read before you register. Applies to every event on the platform.</p>

      <div className="mt-8 space-y-5">
        {SECTIONS.map((s) => (
          <NeoCard key={s.title}>
            <h2 className="text-2xl">{s.title}</h2>
            <ul className="mt-3 space-y-2 text-sm list-disc list-inside text-muted-foreground">
              {s.items.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </NeoCard>
        ))}
      </div>
    </div>
  );
}
