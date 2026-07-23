import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel, EmptyState } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/dashboard/bookmarks")({
  head: () => ({ meta: [{ title: "Bookmarks — Dashboard · The Shouter" }, { name: "robots", content: "noindex" }] }),
  component: Page,
});

function Page() {
  return (
    <DashboardPage
      eyebrow="Activity"
      title="Bookmarks"
      tagline="Saved for later."
      heroKey="cover-artwork"
    >
      <ListPanel title="Bookmarked" items={[{"id":"1","primary":"How Swiss format works","secondary":"Docs · Tournaments"},{"id":"2","primary":"Neon color palette guide","secondary":"Artwork · Community post"}]} empty="Save any post or event to find it here." />
    </DashboardPage>
  );
}
