import { createFileRoute } from "@tanstack/react-router";
import { BotSectionDetail } from "@/components/bot-section-detail";

export const Route = createFileRoute("/bot/security")({
  head: () => ({ meta: [{ title: "Security — Bot · The Shouter" }, { name: "description", content: "Raid shield, alt detection, phishing filters." }] }),
  component: Page,
});

function Page() {
  return (
    <BotSectionDetail
      eyebrow="Bot · Safety"
      title="Security"
      tagline="Raid shield, alt-account detection, phishing/link filters, and lockdown mode."
      heroKey="dash-security"
      stats={[{ label: "Layers", value: 4 }, { label: "Blocked 24h", value: 47 }, { label: "False positives", value: 1 }]}
      commands={[
        { name: "raidshield", syntax: "!raidshield <on|off|auto>", desc: "Toggle the raid shield or set auto-trigger on join spikes.", perms: "Administrator", example: "!raidshield auto" },
        { name: "lockdown", syntax: "!lockdown [duration]", desc: "Lock every channel except staff. Auto-lift after duration.", perms: "Administrator", example: "!lockdown 30m", output: "🔒 Server locked for 30m." },
        { name: "altcheck", syntax: "!altcheck <@user>", desc: "Score account age, avatar entropy and prior joins.", perms: "Manage Server" },
        { name: "phishguard", syntax: "!phishguard <on|off>", desc: "Filter known phishing domains with auto-warn.", perms: "Administrator" },
        { name: "verify", syntax: "!verify", desc: "Prompt new members with a captcha embed.", cooldown: "10s" },
      ]}
    />
  );
}
