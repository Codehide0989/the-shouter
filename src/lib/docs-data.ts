export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export interface DocArticle {
  slug: string;
  title: string;
  description: string;
  category: string;
  categoryIcon: string; // lucide icon name
  heroKey: string;
  readMin: number;
  difficulty: Difficulty;
  updated: string;
  tags: string[];
  toc: { id: string; label: string }[];
  body: DocBlock[];
}

export type DocBlock =
  | { type: "p"; text: string }
  | { type: "h2"; id: string; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "code"; lang: string; code: string }
  | { type: "callout"; kind: "note" | "tip" | "warning"; title: string; text: string }
  | { type: "img"; heroKey: string; caption?: string };

const S = (title: string): { id: string; label: string } => ({
  id: title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
  label: title,
});

export const DOC_ARTICLES: DocArticle[] = [
  {
    slug: "getting-started",
    title: "Getting Started with The Shouter",
    description: "Wire your Discord server to The Shouter in under 5 minutes and run your first event.",
    category: "Basics",
    categoryIcon: "Rocket",
    heroKey: "settings-hero",
    readMin: 5,
    difficulty: "Beginner",
    updated: "2 days ago",
    tags: ["setup", "discord", "onboarding"],
    toc: [S("Overview"), S("Invite the bot"), S("Link your server"), S("Create your first event"), S("Next steps")],
    body: [
      { type: "p", text: "The Shouter is a Discord-first event platform. This guide walks you through connecting your server, inviting the bot, and shipping your first live event." },
      { type: "h2", id: "overview", text: "Overview" },
      { type: "p", text: "You'll need Manage Server permissions on the Discord guild you want to connect. Everything else — roles, channels, categories — is created automatically." },
      { type: "img", heroKey: "dash-overview", caption: "The Shouter overview dashboard after linking your server." },
      { type: "h2", id: "invite-the-bot", text: "Invite the bot" },
      { type: "ol", items: [
        "Open the Bot page from the main menu.",
        "Click Invite and pick the target Discord server.",
        "Grant the recommended scopes (bot + applications.commands).",
      ]},
      { type: "callout", kind: "tip", title: "Recommended scopes", text: "Leave the default permissions checked — Auto-Threads, Registration, and Tournament modules all need them." },
      { type: "h2", id: "link-your-server", text: "Link your server" },
      { type: "p", text: "Back on the web, open Dashboard → Servers and pick the guild you just added the bot to. The link handshake finishes in a couple of seconds." },
      { type: "code", lang: "bash", code: "!link\n# → ✅ Server linked to The Shouter · dashboard ready" },
      { type: "h2", id: "create-your-first-event", text: "Create your first event" },
      { type: "ol", items: [
        "Go to Explore → New Event.",
        "Pick a category (Tournament, Meme, Picture Battle, …).",
        "Set the schedule, prize pool, and registration window.",
        "Publish. The bot posts the event card in the announcement channel.",
      ]},
      { type: "img", heroKey: "cover-tournament", caption: "Tournament template with bracket generation enabled." },
      { type: "h2", id: "next-steps", text: "Next steps" },
      { type: "ul", items: [
        "Read the Registration flow guide.",
        "Wire up Auto-Threads for match discussion.",
        "Turn on the Leaderboard module for season points.",
      ]},
    ],
  },
  {
    slug: "bot-commands",
    title: "Bot Commands Reference",
    description: "Every prefix command the bot exposes, grouped by module, with syntax, aliases, and permissions.",
    category: "Bot",
    categoryIcon: "Terminal",
    heroKey: "bot-mascot",
    readMin: 12,
    difficulty: "Intermediate",
    updated: "today",
    tags: ["bot", "commands", "reference"],
    toc: [S("Prefix"), S("Core"), S("Registration"), S("Tournament"), S("Moderation")],
    body: [
      { type: "p", text: "The bot uses prefix commands by default (! is the default prefix, configurable per guild). Slash commands are opt-in." },
      { type: "h2", id: "prefix", text: "Prefix" },
      { type: "code", lang: "bash", code: "!prefix ?\n# → Prefix set to ?" },
      { type: "h2", id: "core", text: "Core" },
      { type: "ul", items: ["!ping — latency", "!help — command index", "!status — service health"] },
      { type: "h2", id: "registration", text: "Registration" },
      { type: "code", lang: "bash", code: "!register <event-id>\n!team create \"Night Owls\"\n!team invite @user" },
      { type: "callout", kind: "note", title: "Cooldowns", text: "Registration commands have a 5s per-user cooldown to prevent double-clicks." },
      { type: "h2", id: "tournament", text: "Tournament" },
      { type: "ul", items: ["!bracket — post current bracket", "!report <match-id> <score>", "!checkin"] },
      { type: "h2", id: "moderation", text: "Moderation" },
      { type: "ul", items: ["!warn @user <reason>", "!mute @user <duration>", "!raidshield auto"] },
    ],
  },
  {
    slug: "tournament-formats",
    title: "Tournament Formats Explained",
    description: "Single elim, double elim, Swiss, round-robin, and battle royale — when to use each.",
    category: "Tournaments",
    categoryIcon: "Trophy",
    heroKey: "dash-tournament",
    readMin: 8,
    difficulty: "Intermediate",
    updated: "1 week ago",
    tags: ["tournament", "bracket", "format"],
    toc: [S("Single elimination"), S("Double elimination"), S("Swiss"), S("Round robin"), S("Battle royale")],
    body: [
      { type: "p", text: "The Shouter ships five bracket engines. Pick the format that matches your player count, time budget, and fairness needs." },
      { type: "h2", id: "single-elimination", text: "Single elimination" },
      { type: "p", text: "Fastest to run. One loss and you're out. Best for 8-64 teams with a tight time window." },
      { type: "img", heroKey: "dash-tournament", caption: "Single-elim bracket auto-generated from a seeded team list." },
      { type: "h2", id: "double-elimination", text: "Double elimination" },
      { type: "p", text: "Adds a losers bracket — teams get a second chance. Doubles run time; much fairer for majors." },
      { type: "h2", id: "swiss", text: "Swiss" },
      { type: "p", text: "Fixed number of rounds, paired by score. Great for 32+ teams with no eliminations mid-event." },
      { type: "h2", id: "round-robin", text: "Round robin" },
      { type: "p", text: "Everyone plays everyone. Only viable up to ~10 teams." },
      { type: "h2", id: "battle-royale", text: "Battle royale" },
      { type: "callout", kind: "warning", title: "Match reporting", text: "BR formats need multi-team match reporting; enable the BR reporter in Bot → Tournament." },
    ],
  },
  {
    slug: "registration-flow",
    title: "Registration Flow",
    description: "How solo and team registration works end-to-end, from the Discord command to the dashboard.",
    category: "Events",
    categoryIcon: "Users",
    heroKey: "cover-community",
    readMin: 6,
    difficulty: "Beginner",
    updated: "4 days ago",
    tags: ["registration", "teams", "events"],
    toc: [S("Solo"), S("Team"), S("Verification"), S("Check-in")],
    body: [
      { type: "p", text: "Registration is a two-step handshake between the bot and the web dashboard. Both surfaces stay in sync via realtime sockets." },
      { type: "h2", id: "solo", text: "Solo" },
      { type: "code", lang: "bash", code: "!register <event-id>" },
      { type: "h2", id: "team", text: "Team" },
      { type: "ol", items: ["Captain runs !team create \"Name\".", "Invite members with !team invite @user.", "Register the team once you hit min roster."] },
      { type: "h2", id: "verification", text: "Verification" },
      { type: "p", text: "Anti-cheat can require in-game handle verification. See Tournaments → Anti-Cheat." },
      { type: "h2", id: "check-in", text: "Check-in" },
      { type: "callout", kind: "tip", title: "Auto-DQ", text: "Enable check-in windows in event settings to auto-DQ no-shows and free up slots." },
    ],
  },
  {
    slug: "auto-threads",
    title: "Auto-Threads Module",
    description: "Spin up per-match threads with pinned scoreboards, mentions, and auto-archive.",
    category: "Bot",
    categoryIcon: "MessagesSquare",
    heroKey: "dash-overview",
    readMin: 4,
    difficulty: "Intermediate",
    updated: "3 days ago",
    tags: ["bot", "threads", "matches"],
    toc: [S("Enable"), S("Configure"), S("Templates")],
    body: [
      { type: "h2", id: "enable", text: "Enable" },
      { type: "code", lang: "bash", code: "!autothreads on" },
      { type: "h2", id: "configure", text: "Configure" },
      { type: "ul", items: ["Channel: pick a parent channel", "Archive: 1h / 24h / 3d / 1w", "Naming: {team-a} vs {team-b}"] },
      { type: "h2", id: "templates", text: "Templates" },
      { type: "p", text: "Templates let you post a pinned scoreboard embed automatically when the thread opens." },
    ],
  },
  {
    slug: "seasons-and-rewards",
    title: "Seasons and Rewards",
    description: "How season points, XP, coins, and cosmetic drops flow from events into user profiles.",
    category: "Progression",
    categoryIcon: "Sparkles",
    heroKey: "dash-rewards",
    readMin: 7,
    difficulty: "Intermediate",
    updated: "1 week ago",
    tags: ["season", "rewards", "xp"],
    toc: [S("Points"), S("XP"), S("Cosmetics")],
    body: [
      { type: "h2", id: "points", text: "Points" },
      { type: "p", text: "Season points accrue from placement, MVPs, and reactions. Configure the weights per event." },
      { type: "h2", id: "xp", text: "XP" },
      { type: "p", text: "XP is a flat participation currency; it always ticks up." },
      { type: "h2", id: "cosmetics", text: "Cosmetics" },
      { type: "callout", kind: "note", title: "Drop pools", text: "Drop rarity is deterministic per event — nothing is loot-boxed." },
    ],
  },
  {
    slug: "api-and-webhooks",
    title: "API and Webhooks",
    description: "Public REST endpoints and outbound webhook payloads for integrating with your own stack.",
    category: "Developers",
    categoryIcon: "Code2",
    heroKey: "admin-hero",
    readMin: 10,
    difficulty: "Advanced",
    updated: "5 days ago",
    tags: ["api", "webhooks", "developers"],
    toc: [S("Auth"), S("Events endpoint"), S("Webhooks")],
    body: [
      { type: "h2", id: "auth", text: "Auth" },
      { type: "code", lang: "bash", code: "curl -H 'Authorization: Bearer $KEY' \\\n  https://api.theshouter.gg/v1/events" },
      { type: "h2", id: "events-endpoint", text: "Events endpoint" },
      { type: "code", lang: "json", code: "{\n  \"id\": \"evt_01H\",\n  \"title\": \"Summer Cup\",\n  \"status\": \"live\"\n}" },
      { type: "h2", id: "webhooks", text: "Webhooks" },
      { type: "callout", kind: "warning", title: "Verify signatures", text: "Every outbound webhook is HMAC-signed. Reject unsigned payloads." },
    ],
  },
  {
    slug: "security-and-anti-cheat",
    title: "Security and Anti-Cheat",
    description: "Raid shield, alt-account detection, phishing filters, and match-report verification.",
    category: "Safety",
    categoryIcon: "ShieldCheck",
    heroKey: "dash-security",
    readMin: 9,
    difficulty: "Advanced",
    updated: "2 weeks ago",
    tags: ["security", "moderation", "anti-cheat"],
    toc: [S("Raid shield"), S("Alt detection"), S("Match reports")],
    body: [
      { type: "h2", id: "raid-shield", text: "Raid shield" },
      { type: "p", text: "Auto-detect join spikes and lock down the server until a mod releases it." },
      { type: "h2", id: "alt-detection", text: "Alt detection" },
      { type: "p", text: "Scores account age, avatar entropy, and prior joins across linked guilds." },
      { type: "h2", id: "match-reports", text: "Match reports" },
      { type: "callout", kind: "tip", title: "Screenshot required", text: "Enable the screenshot requirement in Tournaments → Match Reporting." },
    ],
  },
];

export const DOC_CATEGORIES = Array.from(new Set(DOC_ARTICLES.map((a) => a.category)));
