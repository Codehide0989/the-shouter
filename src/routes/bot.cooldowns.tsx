import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel } from "@/components/dashboard-page";


export const Route = createFileRoute("/bot/cooldowns")({
  head: () => ({
    meta: [
      { title: "Cooldowns — The Shouter" },
      { name: "description", content: "Rate-limit spammy commands." },
      { property: "og:title", content: "Cooldowns — The Shouter" },
      { property: "og:description", content: "Rate-limit spammy commands." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Bot"
      title="Cooldowns"
      tagline="Rate-limit spammy commands."
      heroKey="bot-mascot"
    >
      <StatGrid items={[{"label":"Configured","value":"48 guilds"},{"label":"Last used","value":"2m ago"},{"label":"Health","value":"OK"},{"label":"Errors 24h","value":0}]} />
      <ListPanel title="Recent activity" items={[
        {id:"1",primary:"!register invoked",secondary:"Shouters HQ · #general",meta:"just now",tag:"OK"},
        {id:"2",primary:"Permission updated",secondary:"@Mod can run !seed",meta:"14m",tag:"Change"},
        {id:"3",primary:"Cooldown hit",secondary:"@user tried !ping ×5",meta:"1h",tag:"Throttled"},
        {id:"4",primary:"Webhook fired",secondary:"match.report → discord",meta:"3h",tag:"200 OK"},
      ]} />
    </DashboardPage>
  );
}
