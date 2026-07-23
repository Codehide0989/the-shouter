import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel, EmptyState } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/dashboard/voting")({
  head: () => ({ meta: [{ title: "Voting History — Dashboard · The Shouter" }, { name: "robots", content: "noindex" }] }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Play"
      title="Voting History"
      tagline="Every vote you cast."
      heroKey="cover-community"
    >
      <ListPanel title="Your votes" items={[{"id":"1","primary":"Voted on Neon Dreams #024","secondary":"Artwork · Jul 19","tag":"👍"},{"id":"2","primary":"Voted on Summer Vibes #012","secondary":"Pic Battle · Jul 18","tag":"👍"},{"id":"3","primary":"Voted on Community Meme Off","secondary":"Meme · Jul 15","tag":"❤️"}]} empty="Nothing here yet." />
    </DashboardPage>
  );
}
