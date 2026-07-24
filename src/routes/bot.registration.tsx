import { createFileRoute } from "@tanstack/react-router";
import { BotSectionDetail } from "@/components/bot-section-detail";

export const Route = createFileRoute("/bot/registration")({
  head: () => ({ meta: [{ title: "Registration — Bot · The Shouter" }, { name: "description", content: "Event signups, forms, and waitlist promotion." }] }),
  component: Page,
});

function Page() {
  return (
    <BotSectionDetail
      eyebrow="Bot · Events"
      title="Registration"
      tagline="!register flow, custom forms, team invites and automatic waitlist promotion."
      heroKey="cover-tournament"
      stats={[{ label: "Opens 24h", value: 162 }, { label: "Waitlist", value: 34 }, { label: "Auto-promotes", value: 9 }]}
      commands={[
        { name: "register", aliases: ["reg"], syntax: "!register <event-id>", desc: "Join an event solo or as team captain.", cooldown: "10s",
          args: [{ name: "event-id", desc: "Numeric event ID or slug", required: true }],
          example: "!register grand-finals-4", output: "✅ You're in! Check-in opens 15m before start." },
        { name: "unregister", syntax: "!unregister <event-id>", desc: "Leave an event, refunds XP boost if used.", cooldown: "1m" },
        { name: "invite", syntax: "!invite <@user> <event-id>", desc: "Invite a friend to your team roster.", example: "!invite @pixel grand-finals-4" },
        { name: "waitlist", syntax: "!waitlist <event-id>", desc: "Show your position and auto-promote status." },
        { name: "checkin", syntax: "!checkin", desc: "Confirm you're online in the pre-match window.", cooldown: "15m" },
      ]}
    />
  );
}
