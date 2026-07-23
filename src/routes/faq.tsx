import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, StatGrid, ListPanel } from "@/components/dashboard-page";
import { NeoCard, NeoBadge } from "@/components/neo";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — The Shouter" },
      { name: "description", content: "Answers to the loudest questions in the server." },
      { property: "og:title", content: "FAQ — The Shouter" },
      { property: "og:description", content: "Answers to the loudest questions in the server." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/faq" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <DashboardPage
        eyebrow="Help"
        title="FAQ"
        tagline="Answers to the loudest questions in the server."
        heroKey="cover-community"
        actions={<><NeoBadge variant="accent">Help</NeoBadge><NeoBadge variant="muted">Public</NeoBadge></>}
      >
        <StatGrid items={[{"label":"Total","value":"120"},{"label":"This week","value":"8"},{"label":"Change","value":"+3%"},{"label":"Popular","value":"Trending"}]} />
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <ListPanel title="Highlights" items={[{"id":"faq-0","primary":"How do I register for an event?","secondary":"Head to /explore and pick an event, then hit Register.","meta":"Beginner","tag":"Guide"},{"id":"faq-1","primary":"Is the bot free?","secondary":"Yes — the bot is free for every Discord server.","meta":"Bot","tag":"Free"},{"id":"faq-2","primary":"Can I host my own tournament?","secondary":"Yes — Premium unlocks unlimited event creation.","meta":"Hosting","tag":"Premium"},{"id":"faq-3","primary":"What happens if my team drops mid-match?","secondary":"Reserves can sub in and appeals are one click away.","meta":"Teams","tag":"Support"}]} />
          <NeoCard className="p-5 space-y-3 bg-secondary text-secondary-foreground">
            <div className="text-[10px] uppercase tracking-widest opacity-80">Get involved</div>
            <div className="font-display text-2xl leading-tight">Join the loudest server on Discord</div>
            <p className="text-sm opacity-90">The Shouter is open to every squad, streamer, and artist. Jump in and make some noise.</p>
            <a href="/explore" className="inline-block neo-border neo-shadow-sm bg-background text-foreground rounded-md px-3 py-2 text-xs font-display uppercase">Explore events →</a>
          </NeoCard>
        </div>
      </DashboardPage>
    </div>
  );
}
