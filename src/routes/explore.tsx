import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { EventCard } from "@/components/event-card";
import { NeoBadge, SectionHeader } from "@/components/neo";
import { MOCK_EVENTS, TYPE_LABEL, type EventType } from "@/lib/mock-data";
import { Search } from "lucide-react";

export const Route = createFileRoute("/explore")({
  head: () => ({
    meta: [
      { title: "Explore Events — THE SHOOTERS" },
      { name: "description", content: "Browse live tournaments, artwork showcases, pic battles, and community events across Discord servers." },
      { property: "og:title", content: "Explore Events" },
      { property: "og:description", content: "Find your next Discord battleground." },
    ],
  }),
  component: Explore,
});

const FILTERS: (EventType | "all")[] = ["all", "tournament", "artwork", "picbattle", "community"];

function Explore() {
  const [filter, setFilter] = useState<EventType | "all">("all");
  const [q, setQ] = useState("");
  const events = MOCK_EVENTS.filter(
    (e) =>
      (filter === "all" || e.type === filter) &&
      (q === "" || e.title.toLowerCase().includes(q.toLowerCase())),
  );
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <SectionHeader
        eyebrow="Explore"
        title="All events"
        subtitle="Filter by type, search by name. All updates land here in real time."
      />
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <div className="neo-border neo-shadow-sm bg-card rounded-md flex items-center gap-2 px-3 py-2 flex-1 min-w-[220px]">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search events..."
            className="bg-transparent outline-none text-sm flex-1"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`neo-border neo-shadow-sm rounded-md px-3 py-2 text-xs font-display uppercase tracking-wide ${
                filter === f ? "bg-primary text-primary-foreground" : "bg-card"
              }`}
            >
              {f === "all" ? "All" : TYPE_LABEL[f]}
            </button>
          ))}
        </div>
      </div>
      {events.length === 0 ? (
        <div className="neo-border neo-shadow bg-card rounded-md p-12 text-center">
          <h3 className="text-2xl">Nothing on the range</h3>
          <p className="text-muted-foreground mt-2">Try a different filter.</p>
        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {events.map((e) => (
            <EventCard key={e.id} event={e} />
          ))}
        </div>
      )}
      <div className="mt-6">
        <NeoBadge variant="muted">{events.length} events</NeoBadge>
      </div>
    </div>
  );
}
