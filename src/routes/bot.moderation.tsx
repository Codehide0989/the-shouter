import { createFileRoute } from "@tanstack/react-router";
import { BotSectionDetail } from "@/components/bot-section-detail";

export const Route = createFileRoute("/bot/moderation")({
  head: () => ({ meta: [{ title: "Moderation — Bot · The Shouter" }, { name: "description", content: "Warns, mutes, kicks, bans and appeals." }] }),
  component: Page,
});

function Page() {
  return (
    <BotSectionDetail
      eyebrow="Bot · Safety"
      title="Moderation"
      tagline="Warns, mutes, kicks, bans, appeals and a full case audit log."
      heroKey="dash-security"
      stats={[{ label: "Cases", value: 128 }, { label: "Open appeals", value: 3 }, { label: "Actions 24h", value: 14 }]}
      commands={[
        { name: "warn", syntax: "!warn <@user> <reason>", desc: "Issue a formal warning tracked in the case log.", perms: "Kick Members", cooldown: "2s",
          args: [{ name: "user", desc: "Target member", required: true }, { name: "reason", desc: "Displayed in DM + audit", required: true }],
          example: "!warn @noob spamming #general", output: "⚠️ #WARN-812 · @noob warned · reason logged." },
        { name: "mute", aliases: ["timeout"], syntax: "!mute <@user> <duration> [reason]", desc: "Timeout a member for a duration (5m, 1h, 24h).", perms: "Moderate Members", example: "!mute @toxic 1h flame" },
        { name: "kick", syntax: "!kick <@user> [reason]", desc: "Remove a member from the server.", perms: "Kick Members" },
        { name: "ban", syntax: "!ban <@user> [days] [reason]", desc: "Ban a member and purge N days of messages.", perms: "Ban Members", example: "!ban @raider 7 raid" },
        { name: "unban", syntax: "!unban <id>", desc: "Lift a ban.", perms: "Ban Members" },
        { name: "case", syntax: "!case <id>", desc: "Look up a moderation case with full context.", example: "!case 812" },
        { name: "appeal", syntax: "!appeal <id>", desc: "Open an appeal thread for a case.", cooldown: "1h" },
      ]}
    />
  );
}
