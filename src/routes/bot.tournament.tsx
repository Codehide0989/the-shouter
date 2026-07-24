import { createFileRoute } from "@tanstack/react-router";
import { BotSectionDetail } from "@/components/bot-section-detail";

export const Route = createFileRoute("/bot/tournament")({
  head: () => ({ meta: [{ title: "Tournament — Bot · The Shouter" }, { name: "description", content: "Brackets, seeding, ready-check, and reporting." }] }),
  component: Page,
});

function Page() {
  return (
    <BotSectionDetail
      eyebrow="Bot · Events"
      title="Tournament"
      tagline="Generate brackets, seed teams, run ready-checks and report scores — all from Discord."
      heroKey="dash-tournament"
      stats={[{ label: "Live", value: 18 }, { label: "Matches today", value: 92 }, { label: "Auto-reports", value: 71 }]}
      commands={[
        { name: "bracket", syntax: "!bracket <event-id>", desc: "Post the current bracket image with match links.", example: "!bracket grand-finals-4" },
        { name: "seed", syntax: "!seed <event-id> [rank|random]", desc: "Seed teams by season rank or randomize.", perms: "Manage Events" },
        { name: "ready", syntax: "!ready", desc: "Mark your team ready in the pre-match window.", cooldown: "30s", output: "🟢 Team Alpha ready · 3/5 opponents ready" },
        { name: "report", syntax: "!report <match-id> <score> [proof]", desc: "Submit a match result with optional VOD link.", example: "!report m-812 3-1 https://youtu.be/x" },
        { name: "dispute", syntax: "!dispute <match-id> <reason>", desc: "Open a dispute — pauses bracket for staff review.", cooldown: "5m" },
        { name: "matches", syntax: "!matches [event-id]", desc: "List your upcoming matches with countdowns." },
      ]}
    />
  );
}
