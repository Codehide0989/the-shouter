import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid } from "@/components/dashboard-page";
import { NeoCard, NeoBadge, NeoButton, SectionHeader } from "@/components/neo";
import { MOCK_EVENTS } from "@/lib/mock-data";
import { EVENT_IMAGE } from "@/lib/event-images";
import { Radio, Eye, PlayCircle, Users } from "lucide-react";

export const Route = createFileRoute("/dashboard/live")({
  head: () => ({ meta: [{ title: "Live Events — Dashboard · The Shouter" }, { name: "robots", content: "noindex" }] }),
  component: Page,
});

const LIVE = MOCK_EVENTS.slice(0, 3).map((e, i) => ({
  ...e,
  viewers: [1284, 622, 341][i],
  round: ["Quarterfinals", "Round 3", "Group C"][i],
  score: ["12 - 9", "3 - 2", "8 - 8"][i],
}));

function Page() {
  return (
    <DashboardPage
      eyebrow="Play"
      title="Live Now"
      tagline="Tune in, watch friends, and jump into brackets that are already rolling."
      heroKey="cover-tournament"
      actions={<NeoBadge variant="destructive"><Radio className="h-3 w-3" /> 3 streams live</NeoBadge>}
    >
      <StatGrid
        items={[
          { label: "Live events", value: 3, hint: "Right now" },
          { label: "Viewers", value: "2.2K", hint: "Combined" },
          { label: "Your matches", value: 1, hint: "In play" },
          { label: "Brackets watched", value: 5, hint: "This week" },
        ]}
      />

      <SectionHeader eyebrow="Streaming" title="Live matches" />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {LIVE.map((e) => (
          <NeoCard key={e.id} className="p-0 overflow-hidden group">
            <div className="relative h-40 border-b-4 border-border overflow-hidden">
              <img src={EVENT_IMAGE[e.type]} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute top-2 left-2 flex gap-2">
                <NeoBadge variant="destructive" className="animate-pulse"><Radio className="h-3 w-3" /> LIVE</NeoBadge>
                <NeoBadge variant="muted"><Eye className="h-3 w-3" /> {e.viewers}</NeoBadge>
              </div>
              <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
                <div>
                  <div className="text-white font-display text-sm leading-tight drop-shadow">{e.title}</div>
                  <div className="text-white/80 text-[10px] uppercase tracking-widest">{e.round}</div>
                </div>
                <div className="neo-border neo-shadow-sm bg-background/95 rounded-md px-2 py-1 font-display text-sm">{e.score}</div>
              </div>
            </div>
            <div className="p-3 flex items-center justify-between gap-2">
              <div className="text-[11px] text-muted-foreground flex items-center gap-1"><Users className="h-3 w-3" />{e.registered}/{e.capacity}</div>
              <div className="flex gap-2">
                <NeoButton size="sm" variant="ghost">Bracket</NeoButton>
                <NeoButton size="sm"><PlayCircle className="h-3.5 w-3.5" />Watch</NeoButton>
              </div>
            </div>
          </NeoCard>
        ))}
      </div>

      <SectionHeader eyebrow="Scoreboard" title="Trending brackets" />
      <NeoCard className="p-0 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted text-[10px] uppercase tracking-widest">
            <tr>
              <th className="text-left p-3">Match</th>
              <th className="text-left p-3 hidden sm:table-cell">Round</th>
              <th className="text-left p-3">Score</th>
              <th className="text-left p-3 hidden md:table-cell">Viewers</th>
            </tr>
          </thead>
          <tbody>
            {LIVE.map((e, i) => (
              <tr key={e.id} className={i % 2 ? "bg-background" : "bg-card"}>
                <td className="p-3 font-display truncate">{e.title}</td>
                <td className="p-3 hidden sm:table-cell text-muted-foreground">{e.round}</td>
                <td className="p-3">{e.score}</td>
                <td className="p-3 hidden md:table-cell text-muted-foreground">{e.viewers}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </NeoCard>
    </DashboardPage>
  );
}
