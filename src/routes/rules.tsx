import { createFileRoute } from "@tanstack/react-router";
import { NeoBadge, NeoCard } from "@/components/neo";
import {
  ShieldCheck,
  Swords,
  Palette,
  Scale,
  CheckCircle2,
  ClipboardList,
  Medal,
  AlertTriangle,
} from "lucide-react";
import rulesHero from "@/assets/rules-hero.jpg";
import ruleGeneral from "@/assets/rule-general.jpg";
import ruleTournament from "@/assets/rule-tournament.jpg";
import ruleArtwork from "@/assets/rule-artwork.jpg";
import ruleFairplay from "@/assets/rule-fairplay.jpg";
import ruleRegistration from "@/assets/rule-registration.jpg";
import ruleRewards from "@/assets/rule-rewards.jpg";

export const Route = createFileRoute("/rules")({
  head: () => ({
    meta: [
      { title: "Rules — The Shooter" },
      { name: "description", content: "Community rules, event guidelines, and fair play policy." },
      { property: "og:title", content: "Rules" },
      { property: "og:description", content: "How events work on The Shooter." },
    ],
  }),
  component: Rules,
});

const SECTIONS = [
  {
    title: "General",
    tag: "01",
    icon: ShieldCheck,
    accent: "bg-primary text-primary-foreground",
    image: ruleGeneral,
    tint: "from-primary/70 to-transparent",
    tagline: "Baseline etiquette for the whole squad.",
    items: [
      "Be a member of the host Discord server.",
      "One account per player. No smurfing, no alt farming.",
      "Respect staff, moderators, and community volunteers.",
      "Keep chat in-language for the channel you're posting in.",
      "Report bugs via #support, not by spamming @everyone.",
    ],
  },
  {
    title: "Registration",
    tag: "02",
    icon: ClipboardList,
    accent: "bg-[color:var(--success)] text-black",
    image: ruleRegistration,
    tint: "from-[color:var(--success)]/70 to-transparent",
    tagline: "How to get on the roster without headaches.",
    items: [
      "Use the bot registration card — DMs to staff won't be honored.",
      "Fill IGN, game ID, region, and squad tag exactly as in-game.",
      "Verify via the DM the bot sends within 10 minutes.",
      "Registration closes 30 minutes before kickoff — no exceptions.",
      "Withdrawals must be posted in #withdraw before check-in.",
    ],
  },
  {
    title: "Tournaments",
    tag: "03",
    icon: Swords,
    accent: "bg-secondary text-secondary-foreground",
    image: ruleTournament,
    tint: "from-secondary/70 to-transparent",
    tagline: "Team play, brackets, and match conduct.",
    items: [
      "Team leader registers and adds Discord IDs for each member.",
      "All members must verify via bot DM before check-in.",
      "Submit IGN, game ID, and region at check-in.",
      "Sensitive match details unlock only after team verification.",
      "Screenshots of final scoreboard required within 5 min of match end.",
      "No-shows after 10 minutes = walkover to the opposing team.",
    ],
  },
  {
    title: "Artwork & Pic Battles",
    tag: "04",
    icon: Palette,
    accent: "bg-accent text-accent-foreground",
    image: ruleArtwork,
    tint: "from-accent/70 to-transparent",
    tagline: "Creative rounds, voting, and originality.",
    items: [
      "Original work only. AI-generated art must be disclosed with the prompt.",
      "One submission per round unless the event states otherwise.",
      "Voting happens on Discord — reactions mirror to the site live.",
      "Watermarks and social handles allowed, no external links.",
      "Submissions after the deadline are visible but ineligible.",
    ],
  },
  {
    title: "Fair Play",
    tag: "05",
    icon: Scale,
    accent: "bg-destructive text-destructive-foreground",
    image: ruleFairplay,
    tint: "from-destructive/70 to-transparent",
    tagline: "The line — and what happens if you cross it.",
    items: [
      "Cheating, hacks, or third-party tools = permanent ban.",
      "Toxicity, harassment, or slurs = removal from event.",
      "Account sharing during a live match = full team disqualification.",
      "Stream sniping opponents = round forfeit + review.",
      "Appeals via the #support channel within 24 hours of ruling.",
    ],
  },
  {
    title: "Rewards & Ranks",
    tag: "06",
    icon: Medal,
    accent: "bg-primary text-primary-foreground",
    image: ruleRewards,
    tint: "from-primary/70 to-transparent",
    tagline: "How prizes, points, and season ranks are handed out.",
    items: [
      "Prize payouts within 7 days of the final match, via the event's stated method.",
      "Season points update every Monday at 00:00 IST.",
      "Top 3 of each season get a permanent role on the Discord.",
      "MVP is voted by staff + community — decision is final.",
      "Rewards are non-transferable between accounts.",
    ],
  },
];

function Rules() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      {/* Hero */}
      <section className="relative neo-border neo-shadow bg-card overflow-hidden rounded-lg">
        <div className="grid md:grid-cols-2 items-stretch">
          <div className="p-6 md:p-10 flex flex-col justify-center">
            <NeoBadge variant="accent">Playbook</NeoBadge>
            <h1 className="font-display text-4xl md:text-6xl mt-3 leading-[0.95] tracking-tight">
              RULES OF<br />ENGAGEMENT
            </h1>
            <p className="text-muted-foreground mt-4 max-w-md">
              Read before you register. These apply to every event on the platform — tournaments, art battles, community drops.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <NeoBadge>Fair Play</NeoBadge>
              <NeoBadge variant="accent">Discord verified</NeoBadge>
              <NeoBadge>Zero tolerance</NeoBadge>
            </div>
          </div>
          <div className="relative min-h-64 md:min-h-full bg-secondary/30 border-t-4 md:border-t-0 md:border-l-4 border-border overflow-hidden">
            <img
              src={rulesHero}
              alt="Rulebook illustration"
              width={1536}
              height={1024}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <span className="absolute top-3 right-3 neo-border neo-shadow-sm bg-primary text-primary-foreground font-display text-xs px-2 py-1 rotate-3">
              READ ME
            </span>
          </div>
        </div>
      </section>

      {/* Rule cards */}
      <div className="mt-8 grid md:grid-cols-2 gap-5">
        {SECTIONS.map((s) => {
          const Icon = s.icon;
          return (
            <NeoCard key={s.title} className="relative overflow-hidden !p-0">
              {/* Image header */}
              <div className="relative h-40 overflow-hidden border-b-4 border-border">
                <img
                  src={s.image}
                  alt={s.title}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div
                  aria-hidden
                  className={`absolute inset-0 bg-gradient-to-r ${s.tint} mix-blend-multiply`}
                />
                <span
                  aria-hidden
                  className="absolute -top-2 right-2 font-display text-7xl leading-none text-background/40 select-none"
                >
                  {s.tag}
                </span>
                <div className="absolute bottom-2 left-2 flex items-center gap-2">
                  <span className={`neo-border neo-shadow-sm ${s.accent} rounded-md p-1.5`}>
                    <Icon className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                  <span className="neo-border bg-background text-foreground font-display text-xs px-2 py-1">
                    RULE · {s.tag}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h2 className="font-display text-2xl tracking-tight">{s.title}</h2>
                <p className="text-xs text-muted-foreground mt-1">{s.tagline}</p>
                <ul className="mt-4 space-y-2.5">
                  {s.items.map((i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-primary" strokeWidth={2.5} />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </NeoCard>
          );
        })}
      </div>

      {/* Warning strip */}
      <div className="mt-8 neo-border neo-shadow bg-destructive text-destructive-foreground rounded-lg p-5 flex items-start gap-4">
        <AlertTriangle className="h-8 w-8 shrink-0" strokeWidth={2.5} />
        <div>
          <div className="font-display text-xl">Break a rule → forfeit the run.</div>
          <div className="text-sm opacity-90 mt-1">
            Every ruling is logged on Discord and mirrored to your profile timeline. Appeals through #support within 24 hours.
          </div>
        </div>
      </div>

      {/* Footer stamp */}
      <div className="mt-4 neo-border neo-shadow-sm bg-accent text-accent-foreground rounded-lg p-4 flex flex-wrap items-center gap-4 justify-between">
        <div className="text-sm font-black uppercase tracking-widest">Playbook v2.6 · updated weekly</div>
        <span className="neo-border bg-background text-foreground font-display text-xs px-3 py-1.5 rotate-[-3deg]">
          Signed by staff
        </span>
      </div>
    </div>
  );
}
