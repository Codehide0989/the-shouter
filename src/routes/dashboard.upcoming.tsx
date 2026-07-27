import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid } from "@/components/dashboard-page";
import { EventCard } from "@/components/event-card";
import { NeoCard, NeoBadge, NeoButton, SectionHeader } from "@/components/neo";
import { MOCK_EVENTS } from "@/lib/mock-data";
import { CalendarDays, Filter } from "lucide-react";

export const Route = createFileRoute("/dashboard/upcoming")({
  head: () => ({ meta: [{ title: "Upcoming Events — Dashboard · The Shouter" }, { name: "robots", content: "noindex" }] }),
  component: Page,
});

const FILTERS = ["All", "Tournament", "Artwork", "Pic Battle", "Community"];

function Countdown({ label, value }: { label: string; value: string }) {
  return (
    <div className="neo-border rounded-md bg-background p-2 text-center min-w-[3.5rem]">
      <div className="font-display text-xl leading-none">{value}</div>
      <div className="text-[9px] uppercase tracking-widest text-muted-foreground mt-0.5">{label}</div>
    </div>
  );
}

function Page() {
  const upcoming = MOCK_EVENTS.filter((e) => e.status !== "ended");
  return (
    <DashboardPage
      eyebrow="Play"
      title="Upcoming Events"
      tagline="What's on the horizon — filter by format, jump into any bracket, or hold your saved slots."
      heroKey="dash-calendar"
      actions={
        <>
          <NeoBadge variant="secondary">4 this week</NeoBadge>
          <NeoBadge variant="accent">2 priority</NeoBadge>
        </>
      }
    >
      <StatGrid
        items={[
          { label: "This week", value: 4, hint: "Across all formats" },
          { label: "This month", value: 11, hint: "Registration open" },
          { label: "Priority", value: 2, hint: "Marked by you" },
          { label: "Saved", value: 6, hint: "In your calendar" },
        ]}
      />

      {/* Featured countdown */}
      <NeoCard className="p-5 relative overflow-hidden">
        <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-primary/20 blur-2xl" />
        <div className="relative flex flex-wrap items-center justify-between gap-4">
          <div>
            <NeoBadge variant="accent">Next up</NeoBadge>
            <div className="font-display text-2xl mt-2">Neon Dreams — Artwork Showcase</div>
            <div className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
              <CalendarDays className="h-3 w-3" /> Jul 20 · 12:00 PM · Neon Ateliers
            </div>
          </div>
          <div className="flex gap-2">
            <Countdown label="Days" value="00" />
            <Countdown label="Hrs" value="05" />
            <Countdown label="Min" value="24" />
            <Countdown label="Sec" value="12" />
          </div>
          <NeoButton size="sm">Open event</NeoButton>
        </div>
      </NeoCard>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-2">
        <Filter className="h-4 w-4 text-muted-foreground" />
        {FILTERS.map((f, i) => (
          <button
            key={f}
            className={`neo-border neo-shadow-sm rounded-md px-3 py-1.5 text-[11px] font-display uppercase tracking-wide ${
              i === 0 ? "bg-primary text-primary-foreground" : "bg-card hover:bg-muted"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <SectionHeader eyebrow="Coming up" title="All upcoming events" />
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {upcoming.map((e) => (
          <EventCard key={e.id} event={e} />
        ))}
      </div>
    </DashboardPage>
  );
}
