import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage } from "@/components/dashboard-page";
import { Link } from "@tanstack/react-router";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/tournaments")({
  head: () => ({
    meta: [
      { title: "Tournament System — The Shouter" },
      { name: "description", content: "Formats, brackets, schedules, reports and appeals — one stack." },
      { property: "og:title", content: "Tournament System — The Shouter" },
      { property: "og:description", content: "Formats, brackets, schedules, reports and appeals — one stack." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Compete"
      title="Tournament System"
      tagline="Formats, brackets, schedules, reports and appeals — one stack."
      heroKey="dash-tournament"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[{slug:"single-elim",label:"Single Elimination",tag:"One loss and you're out."},{slug:"double-elim",label:"Double Elimination",tag:"Losers bracket keeps hope alive."},{slug:"round-robin",label:"Round Robin",tag:"Everyone plays everyone."},{slug:"swiss",label:"Swiss System",tag:"Matched by score every round."},{slug:"battle-royale",label:"Battle Royale",tag:"Last squad standing wins."}].map((f) => (
          <Link key={f.slug} to={"/tournaments/formats/$slug" as any} params={{slug:f.slug}}>
            <NeoCard className="p-5 hover:-translate-y-1 transition-transform h-full">
              <NeoBadge variant="secondary">Format</NeoBadge>
              <div className="font-display text-xl mt-2">{f.label}</div>
              <div className="text-xs text-muted-foreground mt-2">{f.tag}</div>
            </NeoCard>
          </Link>
        ))}
        {[
          {slug:"bracket-generator",label:"Bracket Generator",tag:"Auto-seed brackets"},
          {slug:"schedule-generator",label:"Schedule Generator",tag:"Auto match times"},
          {slug:"match-reporting",label:"Match Reporting",tag:"Score submissions"},
          {slug:"appeals",label:"Appeals",tag:"Contest a result"},
          {slug:"verification",label:"Verification",tag:"Prove your identity"},
          {slug:"anti-cheat",label:"Anti-Cheat",tag:"Keep it fair"},
        ].map((f) => (
          <Link key={f.slug} to={"/tournaments/$slug" as any} params={{slug:f.slug}}>
            <NeoCard className="p-5 hover:-translate-y-1 transition-transform h-full bg-secondary text-secondary-foreground">
              <NeoBadge variant="destructive">Tool</NeoBadge>
              <div className="font-display text-xl mt-2">{f.label}</div>
              <div className="text-xs opacity-80 mt-2">{f.tag}</div>
            </NeoCard>
          </Link>
        ))}
      </div>
    </DashboardPage>
  );
}
