import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel } from "@/components/dashboard-page";


export const Route = createFileRoute("/tournaments/formats/battle-royale")({
  head: () => ({
    meta: [
      { title: "Battle Royale — The Shouter" },
      { name: "description", content: "Last squad standing wins." },
      { property: "og:title", content: "Battle Royale — The Shouter" },
      { property: "og:description", content: "Last squad standing wins." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Format"
      title="Battle Royale"
      tagline="Last squad standing wins."
      heroKey="cover-tournament"
    >
      <StatGrid items={[{"label":"Rounds","value":"7"},{"label":"Teams","value":"32"},{"label":"Duration","value":"2 days"},{"label":"Format","value":"Battle Royale"}]} />
      <ListPanel title="Sample bracket" items={[
        {id:"1",primary:"Round 1 · Match A",secondary:"Team Alpha vs Team Bravo",meta:"14:00",tag:"Upcoming"},
        {id:"2",primary:"Round 1 · Match B",secondary:"Team Gamma vs Team Delta",meta:"14:30",tag:"Upcoming"},
        {id:"3",primary:"Round 1 · Match C",secondary:"Team Echo vs Team Foxtrot",meta:"15:00",tag:"Upcoming"},
        {id:"4",primary:"Round 2 · TBD",secondary:"Winner A vs Winner B",meta:"16:00",tag:"Locked"},
      ]} />
    </DashboardPage>
  );
}
