import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid } from "@/components/dashboard-page";
import { NeoCard, NeoBadge, NeoButton, SectionHeader } from "@/components/neo";
import { MOCK_EVENTS } from "@/lib/mock-data";
import { EVENT_IMAGE } from "@/lib/event-images";
import { Ticket, Download, X, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/dashboard/registered")({
  head: () => ({ meta: [{ title: "Registered Events — Dashboard · The Shouter" }, { name: "robots", content: "noindex" }] }),
  component: Page,
});

const REG = MOCK_EVENTS.slice(0, 4).map((e, i) => ({
  ...e,
  slot: `#SLOT-${String(i + 8).padStart(2, "0")}`,
  role: i === 0 ? "Captain" : i === 1 ? "Solo" : "Member",
  regStatus: i === 2 ? "Awaiting check-in" : "Confirmed",
  regDate: `Jul 0${i + 1}, 2026`,
}));

function Page() {
  return (
    <DashboardPage
      eyebrow="Play"
      title="Registered Events"
      tagline="Events you're locked into — check-in, download tickets, view schedule, or cancel."
      heroKey="cover-tournament"
    >
      <StatGrid
        items={[
          { label: "Registered", value: 6, hint: "Active slots" },
          { label: "Live now", value: 1, hint: "Playing today" },
          { label: "Awaiting check-in", value: 2, hint: "Confirm 15m early" },
          { label: "Completed", value: 14, hint: "Season total" },
        ]}
      />

      <SectionHeader eyebrow="My registrations" title="Confirmed slots" />
      <div className="space-y-3">
        {REG.map((e) => (
          <NeoCard key={e.id} className="p-0 overflow-hidden">
            <div className="grid gap-3 sm:grid-cols-[8rem_1fr_auto] items-stretch">
              <div className="relative h-28 sm:h-full">
                <img src={EVENT_IMAGE[e.type]} alt="" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <NeoBadge variant="accent" className="absolute bottom-2 left-2">{e.slot}</NeoBadge>
              </div>
              <div className="p-3 sm:py-4 min-w-0">
                <div className="flex flex-wrap gap-2 mb-1">
                  <NeoBadge variant={e.regStatus === "Confirmed" ? "success" : "muted"}>{e.regStatus}</NeoBadge>
                  <NeoBadge variant="secondary">{e.role}</NeoBadge>
                </div>
                <div className="font-display text-base sm:text-lg truncate">{e.title}</div>
                <div className="text-[11px] text-muted-foreground mt-1">
                  {e.server} · Registered {e.regDate} · Prize {e.prize}
                </div>
              </div>
              <div className="p-3 sm:pr-4 flex sm:flex-col gap-2 sm:justify-center">
                <NeoButton size="sm" variant="ghost" className="!px-2"><Ticket className="h-3.5 w-3.5" />Ticket</NeoButton>
                <NeoButton size="sm" variant="ghost" className="!px-2"><Download className="h-3.5 w-3.5" />PDF</NeoButton>
                <NeoButton size="sm" variant="ghost" className="!px-2"><X className="h-3.5 w-3.5" />Cancel</NeoButton>
                <NeoButton size="sm" className="!px-2">Open<ChevronRight className="h-3.5 w-3.5" /></NeoButton>
              </div>
            </div>
          </NeoCard>
        ))}
      </div>
    </DashboardPage>
  );
}
