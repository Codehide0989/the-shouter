import { createFileRoute } from "@tanstack/react-router";
import { BotSectionDetail } from "@/components/bot-section-detail";

export const Route = createFileRoute("/bot/settings")({
  head: () => ({ meta: [{ title: "Bot Settings — The Shouter" }, { name: "description", content: "Global bot preferences and API keys." }] }),
  component: Page,
});

function Page() {
  return (
    <BotSectionDetail
      eyebrow="Bot · Core"
      title="Settings"
      tagline="Global bot preferences: presence, locale, timezone, API keys and webhooks."
      heroKey="settings-hero"
      stats={[{ label: "Profile", value: 1 }, { label: "API keys", value: 3 }, { label: "Locale", value: "en-US" }]}
      commands={[
        { name: "config", syntax: "!config <key> [value]", desc: "Read or write a config key.", perms: "Administrator", example: "!config prefix ?" },
        { name: "presence", syntax: "!presence <online|idle|dnd> [status]", desc: "Change the bot's Discord presence.", example: "!presence dnd Grand Finals live" },
        { name: "reset", syntax: "!reset <module>", desc: "Reset a module to defaults (destructive).", perms: "Administrator" },
        { name: "export", syntax: "!export <json|yaml>", desc: "Export the guild config for backup.", cooldown: "30s" },
        { name: "import", syntax: "!import <url>", desc: "Import a previously exported config.", perms: "Administrator" },
      ]}
    />
  );
}
