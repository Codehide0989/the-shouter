import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel, EmptyState } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/dashboard/activity")({
  head: () => ({ meta: [{ title: "Activity Timeline — Dashboard · The Shouter" }, { name: "robots", content: "noindex" }] }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Activity"
      title="Activity Timeline"
      tagline="Your full story."
      heroKey="dash-overview"
    >
      <NeoCard className="p-5">
        <ol className="relative border-l-4 border-foreground/40 space-y-4 pl-5">
          {[
            ["12m","Joined BGMI Clash #14 — Quarterfinals"],
            ["2h","Uploaded Neon Dreams #024"],
            ["1d","Team RIOT changed roster"],
            ["3d","Earned MVP badge — Ace"],
            ["5d","Redeemed 800 coins for Season Pass"],
          ].map(([t,txt],i)=>(
            <li key={i} className="relative">
              <span className="absolute -left-[29px] h-3 w-3 rounded-full bg-primary neo-border" />
              <div className="text-[10px] uppercase text-muted-foreground">{t}</div>
              <div className="text-sm">{txt}</div>
            </li>
          ))}
        </ol>
      </NeoCard>
    </DashboardPage>
  );
}
