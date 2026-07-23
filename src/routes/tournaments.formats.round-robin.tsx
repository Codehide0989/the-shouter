import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel } from "@/components/dashboard-page";


export const Route = createFileRoute("/tournaments/formats/round-robin")({
  head: () => ({
    meta: [
      { title: "Round Robin — The Shouter" },
      { name: "description", content: "Everyone plays everyone." },
      { property: "og:title", content: "Round Robin — The Shouter" },
      { property: "og:description", content: "Everyone plays everyone." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Format"
      title="Round Robin"
      tagline="Everyone plays everyone."
      heroKey="dash-tournament"
    >
      <StatGrid items={[{"label":"Rounds","value":"7"},{"label":"Teams","value":"32"},{"label":"Duration","value":"2 days"},{"label":"Format","value":"Round Robin"}]} />
      <ListPanel title="Sample bracket" items={[
        {id:"1",primary:"Round 1 · Match A",secondary:"Team Alpha vs Team Bravo",meta:"14:00",tag:"Upcoming"},
        {id:"2",primary:"Round 1 · Match B",secondary:"Team Gamma vs Team Delta",meta:"14:30",tag:"Upcoming"},
        {id:"3",primary:"Round 1 · Match C",secondary:"Team Echo vs Team Foxtrot",meta:"15:00",tag:"Upcoming"},
        {id:"4",primary:"Round 2 · TBD",secondary:"Winner A vs Winner B",meta:"16:00",tag:"Locked"},
      ]} />
    </DashboardPage>
  );
}
