import { createFileRoute } from "@tanstack/react-router";
import { BotSectionDetail } from "@/components/bot-section-detail";

export const Route = createFileRoute("/bot/commands")({
  head: () => ({
    meta: [
      { title: "Prefix Commands — The Shouter" },
      { name: "description", content: "! prefix commands with aliases, arguments, cooldowns and examples." },
      { property: "og:title", content: "Prefix Commands — The Shouter" },
      { property: "og:description", content: "! prefix commands with aliases, arguments, cooldowns and examples." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <BotSectionDetail
      eyebrow="Bot · Core"
      title="Prefix Commands"
      tagline="Every ! command the Shouter bot ships with — searchable, with syntax, args, examples and expected output."
      heroKey="bot-mascot"
      stats={[
        { label: "Total", value: 84 },
        { label: "Guilds", value: 48 },
        { label: "Errors 24h", value: 0 },
        { label: "Avg latency", value: "43ms" },
      ]}
      commands={[
        { name: "help", aliases: ["h", "?"], syntax: "!help [command]", desc: "Show the command list or details for one command.", cooldown: "3s",
          example: "!help register", output: "📖 !register <event-id> · joins an event solo or as captain." },
        { name: "ping", syntax: "!ping", desc: "Round-trip latency to Discord and back.", cooldown: "5s", output: "🏓 Pong! 43ms (WS) · 62ms (REST)" },
        { name: "register", aliases: ["reg"], syntax: "!register <event-id>", desc: "Register for an event.",
          args: [{ name: "event-id", desc: "Numeric event ID or slug", required: true }],
          example: "!register grand-finals-4", output: "✅ Registered! Check-in opens 15m before start." },
        { name: "team", syntax: "!team <create|invite|kick|leave> [args]", desc: "Full team management from Discord.", perms: "None (captain for kick)",
          example: "!team invite @pixel", output: "📨 Invitation sent to @pixel." },
        { name: "profile", aliases: ["me"], syntax: "!profile [@user]", desc: "Show a player's stat card with badges and season rank.", cooldown: "5s" },
        { name: "rank", syntax: "!rank [@user]", desc: "Your season rank card with decay timer.", cooldown: "5s" },
        { name: "top", syntax: "!top [xp|wins|mvp] [n]", desc: "Leaderboard for a metric.", example: "!top wins 10" },
        { name: "vote", syntax: "!vote <battle-id> <option>", desc: "Vote in an art battle or poll.", cooldown: "10s" },
        { name: "react", syntax: "!react <event-id> <emoji>", desc: "Mirror a reaction into your dashboard timeline.", cooldown: "3s" },
        { name: "coin", aliases: ["coins", "$"], syntax: "!coin", desc: "Show your coin balance and 7-day earnings." },
        { name: "boost", syntax: "!boost <xp|coin> <duration>", desc: "Spend coins to boost XP or coin gain temporarily.", example: "!boost xp 1h" },
        { name: "daily", syntax: "!daily", desc: "Claim your daily coin drop and streak bonus.", cooldown: "24h", output: "🎁 +120 coins · 🔥 streak 12" },
        { name: "remind", aliases: ["remindme"], syntax: "!remind <duration> <message>", desc: "DM yourself a reminder.", example: "!remind 2h grand finals starts" },
        { name: "poll", syntax: "!poll <question> | <opt1> | <opt2> ...", desc: "Create a reaction poll (up to 10 options).", perms: "Add Reactions" },
        { name: "purge", syntax: "!purge <count>", desc: "Delete the last N messages in the channel.", perms: "Manage Messages", cooldown: "5s" },
        { name: "warn", syntax: "!warn <@user> <reason>", desc: "Issue a formal warning.", perms: "Kick Members" },
        { name: "mute", aliases: ["timeout"], syntax: "!mute <@user> <duration> [reason]", desc: "Timeout a member.", perms: "Moderate Members" },
        { name: "kick", syntax: "!kick <@user> [reason]", desc: "Remove a member.", perms: "Kick Members" },
        { name: "ban", syntax: "!ban <@user> [days] [reason]", desc: "Ban and purge messages.", perms: "Ban Members" },
        { name: "prefix", syntax: "!prefix <new>", desc: "Change the server's command prefix.", perms: "Manage Server" },
        { name: "announce", syntax: "!announce <#channel> <message>", desc: "Post an announcement embed.", perms: "Manage Server" },
        { name: "bracket", syntax: "!bracket <event-id>", desc: "Post the current bracket image." },
        { name: "report", syntax: "!report <match-id> <score> [proof]", desc: "Submit a match result." },
      ]}
    />
  );
}
