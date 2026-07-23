import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/teams")({
  head: () => ({
    meta: [
      { title: "Team System — The Shouter" },
      { name: "description", content: "Invitations, roles, reserves, chat, notes, ready-checks and check-in." },
      { property: "og:title", content: "Team System — The Shouter" },
      { property: "og:description", content: "Invitations, roles, reserves, chat, notes, ready-checks and check-in." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Squad"
      title="Team System"
      tagline="Invitations, roles, reserves, chat, notes, ready-checks and check-in."
      heroKey="dash-team"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {slug:"invitations",label:"Invitations",tag:"Send & receive"},
          {slug:"verification",label:"Team Verification",tag:"Confirm every member"},
          {slug:"captain-transfer",label:"Captain Transfer",tag:"Hand over the reins"},
          {slug:"kick-replace",label:"Kick & Replace",tag:"Manage roster"},
          {slug:"reserves",label:"Reserves",tag:"Backup slots"},
          {slug:"chat",label:"Team Chat",tag:"Squad-only channel"},
          {slug:"notes",label:"Team Notes",tag:"Strategy board"},
          {slug:"ready-check",label:"Ready Check",tag:"Everyone lock-in"},
          {slug:"check-in",label:"Check-In",tag:"Confirm attendance"},
        ].map((f) => (
          <a key={f.slug} href={`/teams/$slug`.replace("$slug", f.slug)}>
            <NeoCard className="p-5 hover:-translate-y-1 transition-transform h-full">
              <NeoBadge variant="accent">Team</NeoBadge>
              <div className="font-display text-xl mt-2">{f.label}</div>
              <div className="text-xs text-muted-foreground mt-2">{f.tag}</div>
            </NeoCard>
          </a>
        ))}
      </div>
    </DashboardPage>
  );
}
