export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export interface DocArticle {
  slug: string;
  title: string;
  description: string;
  category: string;
  categoryIcon: string;
  heroKey: string;
  readMin: number;
  difficulty: Difficulty;
  updated: string;
  published?: string;
  author?: string;
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

// Rich content template pieces reused across articles for consistent depth
const introBlocks = (topic: string, blurb: string): DocBlock[] => [
  { type: "h2", id: "introduction", text: "Introduction" },
  { type: "p", text: blurb },
  { type: "p", text: `This guide walks you through ${topic} end-to-end — from the very first setup step through advanced configuration, troubleshooting, and answers to the questions we get most often.` },
];

const overviewBlocks = (heroKey: string, what: string): DocBlock[] => [
  { type: "h2", id: "overview", text: "Overview" },
  { type: "p", text: what },
  { type: "img", heroKey, caption: "Overview at a glance." },
  { type: "ul", items: [
    "Runs entirely inside Discord — no context switching.",
    "Live-syncs with the web dashboard over WebSockets.",
    "Seasonal themes and per-guild overrides supported out of the box.",
  ]},
];

const requirementsBlocks = (extra: string[] = []): DocBlock[] => [
  { type: "h2", id: "requirements", text: "Requirements" },
  { type: "ul", items: [
    "A Discord server you own or have Manage Server permission on.",
    "The Shouter bot invited with recommended scopes.",
    "A linked account on the dashboard.",
    ...extra,
  ]},
];

const installBlocks = (): DocBlock[] => [
  { type: "h2", id: "installation", text: "Installation" },
  { type: "ol", items: [
    "Open the Bot page and press Invite.",
    "Pick the target server and grant the recommended scopes.",
    "Return to the dashboard — the guild appears in Servers within a few seconds.",
  ]},
  { type: "code", lang: "bash", code: "!link\n# → ✅ Server linked · dashboard is ready" },
];

const troubleshootBlocks = (items: string[]): DocBlock[] => [
  { type: "h2", id: "troubleshooting", text: "Troubleshooting" },
  { type: "ul", items },
  { type: "callout", kind: "warning", title: "Still stuck?", text: "Open a ticket from Support and include your server ID plus the exact command you ran — we usually respond within a few hours." },
];

const faqBlocks = (rows: [string, string][]): DocBlock[] => [
  { type: "h2", id: "faq", text: "FAQ" },
  ...rows.flatMap(([q, a]): DocBlock[] => [
    { type: "h3", text: q },
    { type: "p", text: a },
  ]),
];

const summaryBlocks = (points: string[]): DocBlock[] => [
  { type: "h2", id: "summary", text: "Summary" },
  { type: "ul", items: points },
  { type: "callout", kind: "tip", title: "You're set", text: "Bookmark this page — we update it every time the module ships a change." },
];

export const DOC_ARTICLES: DocArticle[] = [
  {
    slug: "getting-started",
    title: "Getting Started with The Shouter",
    description: "Wire your Discord server to The Shouter in under 5 minutes and run your first event.",
    category: "Basics",
    categoryIcon: "Rocket",
    heroKey: "settings-hero",
    readMin: 8,
    difficulty: "Beginner",
    updated: "2 days ago",
    published: "Mar 12, 2025",
    author: "The Shouter Team",
    tags: ["setup", "discord", "onboarding"],
    toc: [S("Introduction"), S("Overview"), S("Requirements"), S("Installation"), S("Setup Guide"), S("Configuration"), S("Discord Examples"), S("Tips"), S("Troubleshooting"), S("FAQ"), S("Summary")],
    body: [
      ...introBlocks("getting your server onto The Shouter", "The Shouter is a Discord-first event platform. Every match, tournament, and season lives in your server and mirrors live on the web."),
      ...overviewBlocks("dash-overview", "You'll invite the bot, link the guild, and publish your first event. All three take about five minutes."),
      ...requirementsBlocks(),
      ...installBlocks(),
      { type: "h2", id: "setup-guide", text: "Setup Guide" },
      { type: "ol", items: [
        "Choose a default prefix (! by default, configurable per guild).",
        "Pick an announcement channel — the bot posts event cards here.",
        "Enable the modules you plan to use: Registration, Tournament, Auto-Threads.",
        "Assign a Moderator role so trusted members can run privileged commands.",
      ]},
      { type: "img", heroKey: "dash-overview", caption: "The onboarding wizard walks you through each module." },
      { type: "h2", id: "configuration", text: "Configuration" },
      { type: "p", text: "Fine-tune the bot from Bot → Guild Settings. Every setting is per-guild — a single bot instance can host hundreds of servers with wildly different rules." },
      { type: "code", lang: "bash", code: "!config prefix ?\n!config timezone Asia/Kolkata\n!config lang en" },
      { type: "h2", id: "discord-examples", text: "Discord Examples" },
      { type: "code", lang: "bash", code: "!event create \"Friday Night Rumble\" --format=single-elim --slots=32\n!register 42\n!bracket" },
      { type: "callout", kind: "note", title: "Prefix commands only", text: "The Shouter uses prefix commands by default. Slash commands are opt-in per module." },
      { type: "h2", id: "tips", text: "Tips" },
      { type: "ul", items: [
        "Run !preview before publishing — it renders the event card without posting.",
        "Bind !checkin to a dedicated channel to keep announcement chatter clean.",
        "Use seasons to bucket events; season points reset without affecting XP.",
      ]},
      ...troubleshootBlocks([
        "Bot doesn't appear online — re-invite with the recommended scopes.",
        "Slash commands missing — sync them from Bot → Commands → Resync.",
        "Announcements not posting — check the channel permissions for the bot role.",
      ]),
      ...faqBlocks([
        ["Do I need a separate account?", "No. Login with Discord and your server list appears automatically."],
        ["Can I run multiple servers?", "Yes — each guild has its own settings, events, and seasons."],
        ["Is there a free tier?", "Yes. Premium unlocks cosmetics and higher event caps, everything core is free."],
      ]),
      ...summaryBlocks([
        "Invite the bot with the recommended scopes.",
        "Link the guild from the dashboard.",
        "Publish your first event — the bot handles the rest.",
      ]),
    ],
  },
  {
    slug: "bot-commands",
    title: "Bot Commands Reference",
    description: "Every prefix command the bot exposes, grouped by module, with syntax, aliases, and permissions.",
    category: "Bot",
    categoryIcon: "Terminal",
    heroKey: "bot-mascot",
    readMin: 14,
    difficulty: "Intermediate",
    updated: "today",
    published: "Feb 8, 2025",
    author: "Bot Team",
    tags: ["bot", "commands", "reference"],
    toc: [S("Introduction"), S("Overview"), S("Setup Guide"), S("Prefix"), S("Core"), S("Registration"), S("Tournament"), S("Moderation"), S("Discord Examples"), S("Tips"), S("Troubleshooting"), S("FAQ"), S("Summary")],
    body: [
      ...introBlocks("every command exposed by the bot", "The bot exposes a compact, memorable set of prefix commands. This reference is the source of truth."),
      ...overviewBlocks("bot-mascot", "Commands are grouped by module. Each command lists its syntax, aliases, cooldowns, and the permission needed to run it."),
      { type: "h2", id: "setup-guide", text: "Setup Guide" },
      { type: "p", text: "Enable only the modules you plan to use. Fewer modules = smaller command surface = happier moderators." },
      { type: "code", lang: "bash", code: "!modules enable registration tournament moderation" },
      { type: "h2", id: "prefix", text: "Prefix" },
      { type: "code", lang: "bash", code: "!prefix ?\n# → Prefix set to ?" },
      { type: "h2", id: "core", text: "Core" },
      { type: "ul", items: ["!ping — latency check", "!help [module] — command index", "!status — service health", "!about — bot version and uptime"] },
      { type: "h2", id: "registration", text: "Registration" },
      { type: "code", lang: "bash", code: "!register <event-id>\n!team create \"Night Owls\"\n!team invite @user\n!team leave" },
      { type: "callout", kind: "note", title: "Cooldowns", text: "Registration commands have a 5s per-user cooldown to prevent double-clicks." },
      { type: "h2", id: "tournament", text: "Tournament" },
      { type: "ul", items: ["!bracket — post current bracket", "!report <match-id> <score>", "!checkin", "!seed reshuffle"] },
      { type: "img", heroKey: "dash-tournament", caption: "Bracket auto-generated from a seeded team list." },
      { type: "h2", id: "moderation", text: "Moderation" },
      { type: "ul", items: ["!warn @user <reason>", "!mute @user <duration>", "!raidshield auto", "!purge <count>"] },
      { type: "h2", id: "discord-examples", text: "Discord Examples" },
      { type: "code", lang: "bash", code: "!register 128\n!team create \"Sky Rats\"\n!report 42 3-1\n!bracket" },
      { type: "h2", id: "tips", text: "Tips" },
      { type: "ul", items: [
        "Alias frequently-typed commands via !alias add.",
        "Keep the prefix short (? or . work well on mobile).",
        "Restrict !purge and !raidshield to a Moderator role.",
      ]},
      ...troubleshootBlocks([
        "Command silently ignored — check the cooldown table with !cooldowns.",
        "\"Missing permission\" — the bot role must be above the target's highest role.",
        "Prefix conflict with another bot — set a unique prefix with !prefix.",
      ]),
      ...faqBlocks([
        ["Can I disable specific commands?", "Yes — !command disable <name> removes it from the guild."],
        ["Is there a global prefix?", "No. Prefix is always per-guild for safety."],
      ]),
      ...summaryBlocks([
        "Prefix is per-guild.",
        "Group by module — enable only what you use.",
        "Cooldowns and permissions are configurable.",
      ]),
    ],
  },
  {
    slug: "tournament-formats",
    title: "Tournament Formats Explained",
    description: "Single elim, double elim, Swiss, round-robin, and battle royale — when to use each.",
    category: "Tournaments",
    categoryIcon: "Trophy",
    heroKey: "dash-tournament",
    readMin: 12,
    difficulty: "Intermediate",
    updated: "1 week ago",
    published: "Jan 22, 2025",
    author: "Tournaments Team",
    tags: ["tournament", "bracket", "format"],
    toc: [S("Introduction"), S("Overview"), S("Single elimination"), S("Double elimination"), S("Swiss"), S("Round robin"), S("Battle royale"), S("Tournament Examples"), S("Configuration"), S("Tips"), S("Troubleshooting"), S("FAQ"), S("Summary")],
    body: [
      ...introBlocks("picking a tournament format", "The Shouter ships five bracket engines. Pick the format that matches your player count, time budget, and fairness needs."),
      ...overviewBlocks("dash-tournament", "Each format has different pacing and fairness trade-offs. This guide compares them side-by-side and shows the exact commands to run each one."),
      { type: "h2", id: "single-elimination", text: "Single elimination" },
      { type: "p", text: "Fastest to run. One loss and you're out. Best for 8–64 teams with a tight time window." },
      { type: "img", heroKey: "dash-tournament", caption: "Single-elim bracket auto-generated from a seeded team list." },
      { type: "h2", id: "double-elimination", text: "Double elimination" },
      { type: "p", text: "Adds a losers bracket — teams get a second chance. Doubles run time; much fairer for majors." },
      { type: "h2", id: "swiss", text: "Swiss" },
      { type: "p", text: "Fixed number of rounds, paired by score. Great for 32+ teams with no eliminations mid-event." },
      { type: "h2", id: "round-robin", text: "Round robin" },
      { type: "p", text: "Everyone plays everyone. Only viable up to ~10 teams." },
      { type: "h2", id: "battle-royale", text: "Battle royale" },
      { type: "callout", kind: "warning", title: "Match reporting", text: "BR formats need multi-team match reporting; enable the BR reporter in Bot → Tournament." },
      { type: "h2", id: "tournament-examples", text: "Tournament Examples" },
      { type: "code", lang: "bash", code: "!event create \"Summer Cup\" --format=double-elim --slots=32\n!event create \"Weekly Rumble\" --format=swiss --rounds=5" },
      { type: "h2", id: "configuration", text: "Configuration" },
      { type: "ul", items: [
        "Seeding: manual, random, or by past season points.",
        "Best-of: BO1 / BO3 / BO5 per round.",
        "Tie-break rules: head-to-head, then buchholz, then random.",
      ]},
      { type: "h2", id: "tips", text: "Tips" },
      { type: "ul", items: [
        "Always run a test bracket with placeholder teams before opening registration.",
        "Set match check-in windows to auto-DQ no-shows.",
        "Post the prize pool on the event card — it drives sign-ups.",
      ]},
      ...troubleshootBlocks([
        "Odd team count — enable Bye seeds in bracket options.",
        "BR match not reporting — verify the BR reporter is enabled.",
      ]),
      ...faqBlocks([
        ["Can I switch format mid-event?", "No — re-open registration under a new event instead."],
        ["Which format is fairest?", "Double-elim if you have the time budget; Swiss for larger fields."],
      ]),
      ...summaryBlocks([
        "Single-elim is fastest, double-elim is fairest.",
        "Swiss scales best beyond 32 teams.",
        "BR needs the multi-team reporter.",
      ]),
    ],
  },
  {
    slug: "registration-flow",
    title: "Registration Flow",
    description: "How solo and team registration works end-to-end, from the Discord command to the dashboard.",
    category: "Events",
    categoryIcon: "Users",
    heroKey: "cover-community",
    readMin: 9,
    difficulty: "Beginner",
    updated: "4 days ago",
    published: "Feb 2, 2025",
    author: "Events Team",
    tags: ["registration", "teams", "events"],
    toc: [S("Introduction"), S("Overview"), S("Setup Guide"), S("Solo"), S("Team"), S("Verification"), S("Check-in"), S("Discord Examples"), S("Tips"), S("Troubleshooting"), S("FAQ"), S("Summary")],
    body: [
      ...introBlocks("registering for events", "Registration is a two-step handshake between the bot and the web dashboard. Both surfaces stay in sync via realtime sockets."),
      ...overviewBlocks("cover-community", "Solo registration is one command. Team registration is captain-driven and inheritance-friendly across seasons."),
      { type: "h2", id: "setup-guide", text: "Setup Guide" },
      { type: "ol", items: [
        "Enable the Registration module.",
        "Pick a registration channel.",
        "Set slot cap, min roster, and check-in window on the event.",
      ]},
      { type: "h2", id: "solo", text: "Solo" },
      { type: "code", lang: "bash", code: "!register <event-id>" },
      { type: "h2", id: "team", text: "Team" },
      { type: "ol", items: ["Captain runs !team create \"Name\".", "Invite members with !team invite @user.", "Register the team once you hit min roster."] },
      { type: "img", heroKey: "cover-community", caption: "Team roster view in the dashboard." },
      { type: "h2", id: "verification", text: "Verification" },
      { type: "p", text: "Anti-cheat can require in-game handle verification. See Tournaments → Anti-Cheat." },
      { type: "h2", id: "check-in", text: "Check-in" },
      { type: "callout", kind: "tip", title: "Auto-DQ", text: "Enable check-in windows in event settings to auto-DQ no-shows and free up slots." },
      { type: "h2", id: "discord-examples", text: "Discord Examples" },
      { type: "code", lang: "bash", code: "!register 42\n!team create \"Comet Kids\"\n!team invite @alex\n!checkin 42" },
      { type: "h2", id: "tips", text: "Tips" },
      { type: "ul", items: [
        "Close registration 1h before start — check-in cleans the roster.",
        "Use waitlists so no slot goes unused.",
      ]},
      ...troubleshootBlocks([
        "\"Roster too small\" — invite more members or lower min roster.",
        "Captain left the server — transfer captaincy via Teams → Captain Transfer.",
      ]),
      ...faqBlocks([
        ["Can I swap players last minute?", "Yes — use Teams → Kick/Replace before check-in closes."],
        ["Is verification mandatory?", "Only if the event enables it."],
      ]),
      ...summaryBlocks([
        "Solo = one command, team = captain + invites.",
        "Check-in prevents no-show waste.",
        "Everything syncs to the web dashboard live.",
      ]),
    ],
  },
  {
    slug: "auto-threads",
    title: "Auto-Threads Module",
    description: "Spin up per-match threads with pinned scoreboards, mentions, and auto-archive.",
    category: "Bot",
    categoryIcon: "MessagesSquare",
    heroKey: "dash-overview",
    readMin: 7,
    difficulty: "Intermediate",
    updated: "3 days ago",
    published: "Feb 20, 2025",
    author: "Bot Team",
    tags: ["bot", "threads", "matches"],
    toc: [S("Introduction"), S("Overview"), S("Requirements"), S("Enable"), S("Configure"), S("Templates"), S("Discord Examples"), S("Tips"), S("Troubleshooting"), S("FAQ"), S("Summary")],
    body: [
      ...introBlocks("auto-threads for matches", "Auto-Threads spins up a Discord thread per match with a pinned scoreboard and auto-archive."),
      ...overviewBlocks("dash-overview", "Threads keep match chatter out of the main channel and give every match a shareable, permanent home."),
      ...requirementsBlocks(["The bot needs Manage Threads in the parent channel."]),
      { type: "h2", id: "enable", text: "Enable" },
      { type: "code", lang: "bash", code: "!autothreads on" },
      { type: "h2", id: "configure", text: "Configure" },
      { type: "ul", items: ["Channel: pick a parent channel", "Archive: 1h / 24h / 3d / 1w", "Naming: {team-a} vs {team-b}"] },
      { type: "h2", id: "templates", text: "Templates" },
      { type: "p", text: "Templates let you post a pinned scoreboard embed automatically when the thread opens." },
      { type: "h2", id: "discord-examples", text: "Discord Examples" },
      { type: "code", lang: "bash", code: "!autothreads template set match-standard\n!autothreads archive 24h" },
      { type: "h2", id: "tips", text: "Tips" },
      { type: "ul", items: [
        "Keep archive at 24h — long enough for VOD chatter, short enough to stay tidy.",
        "Pin the scoreboard so late-joiners see the score first.",
      ]},
      ...troubleshootBlocks([
        "Threads not opening — check Manage Threads permission.",
        "Scoreboard not pinning — bot role needs Manage Messages in the parent channel.",
      ]),
      ...faqBlocks([
        ["Can I use a private parent channel?", "Yes — Auto-Threads inherits the parent channel's visibility."],
      ]),
      ...summaryBlocks([
        "Enable per parent channel.",
        "Templates handle pinned scoreboards.",
        "Archive keeps the channel list clean.",
      ]),
    ],
  },
  {
    slug: "seasons-and-rewards",
    title: "Seasons and Rewards",
    description: "How season points, XP, coins, and cosmetic drops flow from events into user profiles.",
    category: "Progression",
    categoryIcon: "Sparkles",
    heroKey: "dash-rewards",
    readMin: 10,
    difficulty: "Intermediate",
    updated: "1 week ago",
    published: "Jan 30, 2025",
    author: "Progression Team",
    tags: ["season", "rewards", "xp"],
    toc: [S("Introduction"), S("Overview"), S("Points"), S("XP"), S("Cosmetics"), S("Configuration"), S("Discord Examples"), S("Tips"), S("Troubleshooting"), S("FAQ"), S("Summary")],
    body: [
      ...introBlocks("season progression", "Seasons are the backbone of long-term engagement. Points, XP, and cosmetics all attach to a season and roll over predictably."),
      ...overviewBlocks("dash-rewards", "Points reset per season, XP is permanent, cosmetics drop from placements and streaks."),
      { type: "h2", id: "points", text: "Points" },
      { type: "p", text: "Season points accrue from placement, MVPs, and reactions. Configure the weights per event." },
      { type: "h2", id: "xp", text: "XP" },
      { type: "p", text: "XP is a flat participation currency; it always ticks up." },
      { type: "img", heroKey: "dash-rewards", caption: "Season XP curve with placement bonuses." },
      { type: "h2", id: "cosmetics", text: "Cosmetics" },
      { type: "callout", kind: "note", title: "Drop pools", text: "Drop rarity is deterministic per event — nothing is loot-boxed." },
      { type: "h2", id: "configuration", text: "Configuration" },
      { type: "ul", items: [
        "Season length: 30 / 60 / 90 days.",
        "Point weights: placement × 3, MVP × 2, reactions × 0.1.",
        "Legendary drops: top-3 placements only.",
      ]},
      { type: "h2", id: "discord-examples", text: "Discord Examples" },
      { type: "code", lang: "bash", code: "!season status\n!rewards claim daily\n!leaderboard season" },
      { type: "h2", id: "tips", text: "Tips" },
      { type: "ul", items: [
        "Announce point weights at the start of the season for fairness.",
        "Ship a mid-season cosmetic drop to re-engage lapsed players.",
      ]},
      ...troubleshootBlocks([
        "Points not counting — event finalization must be marked complete.",
        "Cosmetic missing — check the drop pool config for that placement.",
      ]),
      ...faqBlocks([
        ["Do XP and points reset together?", "No — only points reset per season."],
        ["Can I gift cosmetics?", "Premium members can gift one cosmetic per month."],
      ]),
      ...summaryBlocks([
        "Points reset per season, XP persists.",
        "Cosmetics are deterministic, not gambled.",
        "Season length is configurable.",
      ]),
    ],
  },
  {
    slug: "api-and-webhooks",
    title: "API and Webhooks",
    description: "Public REST endpoints and outbound webhook payloads for integrating with your own stack.",
    category: "Developers",
    categoryIcon: "Code2",
    heroKey: "admin-hero",
    readMin: 13,
    difficulty: "Advanced",
    updated: "5 days ago",
    published: "Jan 10, 2025",
    author: "Platform Team",
    tags: ["api", "webhooks", "developers"],
    toc: [S("Introduction"), S("Overview"), S("Requirements"), S("Auth"), S("Events endpoint"), S("Webhooks"), S("Discord Examples"), S("Tips"), S("Troubleshooting"), S("FAQ"), S("Summary")],
    body: [
      ...introBlocks("integrating with the public API", "The public API mirrors everything the dashboard shows. Webhooks push realtime events to your own stack."),
      ...overviewBlocks("admin-hero", "REST + JSON, HMAC-signed webhooks, cursor-paginated lists. All standard, no surprises."),
      ...requirementsBlocks(["A Premium plan for API access.", "An API key from Dashboard → API Keys."]),
      { type: "h2", id: "auth", text: "Auth" },
      { type: "code", lang: "bash", code: "curl -H 'Authorization: Bearer $KEY' \\\n  https://api.theshouter.gg/v1/events" },
      { type: "h2", id: "events-endpoint", text: "Events endpoint" },
      { type: "code", lang: "json", code: "{\n  \"id\": \"evt_01H\",\n  \"title\": \"Summer Cup\",\n  \"status\": \"live\",\n  \"format\": \"double-elim\",\n  \"slots\": 32\n}" },
      { type: "h2", id: "webhooks", text: "Webhooks" },
      { type: "callout", kind: "warning", title: "Verify signatures", text: "Every outbound webhook is HMAC-signed. Reject unsigned payloads." },
      { type: "code", lang: "js", code: "const sig = req.headers['x-shouter-signature'];\nconst expected = hmac('sha256', SECRET).update(body).digest('hex');\nif (sig !== expected) return res.status(401).end();" },
      { type: "h2", id: "discord-examples", text: "Discord Examples" },
      { type: "p", text: "Wire a webhook to a Discord relay bot to post match results in a partner server." },
      { type: "h2", id: "tips", text: "Tips" },
      { type: "ul", items: [
        "Rotate API keys quarterly.",
        "Cache list responses for 30s — payloads are stable.",
      ]},
      ...troubleshootBlocks([
        "401 responses — verify the Bearer token and account plan.",
        "Missing webhook deliveries — check retry log in API → Deliveries.",
      ]),
      ...faqBlocks([
        ["Are there rate limits?", "60 req/min per key. Contact us for higher limits."],
        ["Is there a sandbox?", "Yes — api.sandbox.theshouter.gg mirrors prod."],
      ]),
      ...summaryBlocks([
        "Bearer-token auth over HTTPS.",
        "HMAC-signed webhooks with retries.",
        "Sandbox available for testing.",
      ]),
    ],
  },
  {
    slug: "security-and-anti-cheat",
    title: "Security and Anti-Cheat",
    description: "Raid shield, alt-account detection, phishing filters, and match-report verification.",
    category: "Safety",
    categoryIcon: "ShieldCheck",
    heroKey: "dash-security",
    readMin: 12,
    difficulty: "Advanced",
    updated: "2 weeks ago",
    published: "Jan 5, 2025",
    author: "Trust & Safety",
    tags: ["security", "moderation", "anti-cheat"],
    toc: [S("Introduction"), S("Overview"), S("Raid shield"), S("Alt detection"), S("Match reports"), S("Configuration"), S("Discord Examples"), S("Tips"), S("Troubleshooting"), S("FAQ"), S("Summary")],
    body: [
      ...introBlocks("safety and anti-cheat", "Every competitive server needs guardrails. The Shouter ships raid shield, alt detection, and match-report verification out of the box."),
      ...overviewBlocks("dash-security", "Layered defenses: shield the server, verify the accounts, and audit the results."),
      { type: "h2", id: "raid-shield", text: "Raid shield" },
      { type: "p", text: "Auto-detect join spikes and lock down the server until a mod releases it." },
      { type: "h2", id: "alt-detection", text: "Alt detection" },
      { type: "p", text: "Scores account age, avatar entropy, and prior joins across linked guilds." },
      { type: "img", heroKey: "dash-security", caption: "Alt detection dashboard with confidence scores." },
      { type: "h2", id: "match-reports", text: "Match reports" },
      { type: "callout", kind: "tip", title: "Screenshot required", text: "Enable the screenshot requirement in Tournaments → Match Reporting." },
      { type: "h2", id: "configuration", text: "Configuration" },
      { type: "ul", items: [
        "Raid shield threshold: joins/minute.",
        "Alt sensitivity: low / med / high.",
        "Match audit: random 10% or 100% of finals.",
      ]},
      { type: "h2", id: "discord-examples", text: "Discord Examples" },
      { type: "code", lang: "bash", code: "!raidshield auto\n!alt scan @user\n!audit match 42" },
      { type: "h2", id: "tips", text: "Tips" },
      { type: "ul", items: [
        "Keep raid shield on auto — it releases as soon as the spike drops.",
        "Audit 100% of finals; sample the rest.",
      ]},
      ...troubleshootBlocks([
        "False-positive alts — lower sensitivity to Medium.",
        "Missed raid — verify the join-log channel permission.",
      ]),
      ...faqBlocks([
        ["Does alt detection ban automatically?", "No — it flags. Bans are always manual."],
        ["Can I appeal a ban?", "Yes — see Tournaments → Appeals."],
      ]),
      ...summaryBlocks([
        "Shield the join surface.",
        "Score accounts, don't auto-ban.",
        "Audit finals 100%, sample the rest.",
      ]),
    ],
  },
];

export const DOC_CATEGORIES = Array.from(new Set(DOC_ARTICLES.map((a) => a.category)));
