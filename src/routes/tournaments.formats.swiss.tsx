import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel } from "@/components/dashboard-page";


export const Route = createFileRoute("/tournaments/formats/swiss")({
  head: () => ({
    meta: [
      { title: "Swiss System — The Shouter" },
      { name: "description", content: "Matched by score every round." },
      { property: "og:title", content: "Swiss System — The Shouter" },
      { property: "og:description", content: "Matched by score every round." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Format"
      title="Swiss System"
      tagline="Matched by score every round."
      heroKey="dash-tournament"
    >
      <StatGrid items={[{"label":"Rounds","value":"7"},{"label":"Teams","value":"32"},{"label":"Duration","value":"2 days"},{"label":"Format","value":"Swiss System"}]} />
      <ListPanel title="Sample bracket" items={[
        {id:"1",primary:"Round 1 · Match A",secondary:"Team Alpha vs Team Bravo",meta:"14:00",tag:"Upcoming"},
        {id:"2",primary:"Round 1 · Match B",secondary:"Team Gamma vs Team Delta",meta:"14:30",tag:"Upcoming"},
        {id:"3",primary:"Round 1 · Match C",secondary:"Team Echo vs Team Foxtrot",meta:"15:00",tag:"Upcoming"},
        {id:"4",primary:"Round 2 · TBD",secondary:"Winner A vs Winner B",meta:"16:00",tag:"Locked"},
      ]} />
    </DashboardPage>
  );
}
