import { createFileRoute } from "@tanstack/react-router";
import { BotSectionDetail } from "@/components/bot-section-detail";

export const Route = createFileRoute("/bot/announcements")({
  head: () => ({ meta: [{ title: "Announcements — Bot · The Shouter" }, { name: "description", content: "Scheduled broadcasts with pings and embeds." }] }),
  component: Page,
});

function Page() {
  return (
    <BotSectionDetail
      eyebrow="Bot · Comms"
      title="Announcements"
      tagline="Scheduled broadcasts with role pings, rich embeds and cross-guild send."
      heroKey="notice-drop"
      stats={[{ label: "Scheduled", value: 7 }, { label: "Sent this week", value: 12 }, { label: "Guilds", value: 48 }]}
      commands={[
        { name: "announce", aliases: ["a"], syntax: "!announce <#channel> <message>", desc: "Post an announcement embed with server branding.", perms: "Manage Server", example: "!announce #news Season 4 drops Friday", output: "📣 Sent to #news (reach 2,481)" },
        { name: "schedule", syntax: "!schedule <when> <#channel> <message>", desc: "Queue an announcement for a specific time.", example: "!schedule 2026-08-01T20:00 #news Grand finals live" },
        { name: "ping", syntax: "!ping <@role> <message>", desc: "Ping a role only in announcement channels.", perms: "Mention @everyone" },
        { name: "embed", syntax: "!embed <template> [vars]", desc: "Send a saved template embed.", example: "!embed hype title=Grand-Finals" },
      ]}
    />
  );
}
