export type PartnerTier = "Featured" | "Technology" | "Gaming" | "Community" | "Media" | "Integration";

export interface Partner {
  slug: string;
  name: string;
  mark: string;
  tier: PartnerTier;
  blurb: string;
  since: string;
  featured?: boolean;
  cover: string; // heroUrl key
  tint: string; // tailwind gradient prefix, e.g. "from-primary/30"
  category: string;
  website: string;
  location: string;
  about: string;
  benefits: string[];
  gallery: string[]; // heroUrl keys
  stats: { n: string; l: string }[];
  timeline: { date: string; label: string }[];
  projects: { title: string; desc: string; cover: string }[];
}

export const PARTNERS: Partner[] = [
  {
    slug: "pixelforge-studio",
    name: "PixelForge Studio",
    mark: "PF",
    tier: "Featured",
    blurb: "Indie art collective — 2M followers, sponsors Art Battle Season 4.",
    since: "2024",
    featured: true,
    cover: "cover-artwork",
    tint: "from-accent/40",
    category: "Creator / Art",
    website: "pixelforge.studio",
    location: "Berlin, DE",
    about: "PixelForge is a 40-artist collective producing daily illustration challenges and running the biggest indie art bracket in Europe. Their Discord powers our seasonal Art Battle.",
    benefits: ["Season 4 Art Battle title sponsor", "Weekly artist takeover on The Shouter", "Co-branded merch drops", "Cross-promotion across 2M followers"],
    gallery: ["cover-artwork", "cover-picbattle", "dash-rewards", "notice-drop"],
    stats: [{ n: "2M", l: "Followers" }, { n: "40", l: "Artists" }, { n: "18", l: "Drops shipped" }],
    timeline: [
      { date: "Q1 '24", label: "Signed as Featured partner" },
      { date: "Q3 '24", label: "Launched Art Battle Season 1" },
      { date: "Q1 '26", label: "Renewed as Season 4 title sponsor" },
    ],
    projects: [
      { title: "Art Battle S4", desc: "Bracketed illustration tournament with 512 entrants.", cover: "cover-artwork" },
      { title: "Sticker Vault Drop", desc: "Limited-run sticker pack minted through The Shouter rewards.", cover: "dash-rewards" },
    ],
  },
  {
    slug: "neon-arena",
    name: "Neon Arena",
    mark: "NA",
    tier: "Featured",
    blurb: "LAN tournament chain across 14 cities.",
    since: "2025",
    featured: true,
    cover: "cover-tournament",
    tint: "from-primary/40",
    category: "Esports Venue",
    website: "neonarena.gg",
    location: "Los Angeles, US",
    about: "Neon Arena runs live LAN finals across 14 cities. They host our Grand Finals stage every season, powering on-site streams, casters and audience travel.",
    benefits: ["Grand Finals LAN venue partner", "Onstage co-branding at every major", "Ticket allocation for top squads", "Casting crew shared with our stream"],
    gallery: ["cover-tournament", "dash-tournament", "dash-team", "notice-hero"],
    stats: [{ n: "14", l: "Cities" }, { n: "820", l: "LANs run" }, { n: "12K", l: "Onsite seats" }],
    timeline: [
      { date: "Q2 '25", label: "First Grand Finals hosted at Neon LA" },
      { date: "Q4 '25", label: "Expanded to EU tour" },
      { date: "Q2 '26", label: "Locked in as multi-season venue" },
    ],
    projects: [
      { title: "Grand Finals LA", desc: "16-team single-elim LAN with a $50K prize pool.", cover: "cover-tournament" },
      { title: "EU Tour", desc: "5-city qualifier chain feeding the Grand Finals.", cover: "dash-tournament" },
    ],
  },
  {
    slug: "cloudflare",
    name: "Cloudflare",
    mark: "CF",
    tier: "Technology",
    blurb: "Global edge network and DDoS shield.",
    since: "2024",
    cover: "admin-hero",
    tint: "from-secondary/30",
    category: "Infrastructure",
    website: "cloudflare.com",
    location: "San Francisco, US",
    about: "Cloudflare powers our edge — every event page, embed and webhook rides the same network that handles ~20% of the internet. Zero downtime through finals.",
    benefits: ["Enterprise-grade DDoS protection", "Global anycast edge", "Workers for realtime sync", "SOC 2 compliant delivery"],
    gallery: ["admin-hero", "dash-security", "dash-overview"],
    stats: [{ n: "310+", l: "Cities" }, { n: "99.99%", l: "Uptime" }, { n: "0", l: "Finals dropped" }],
    timeline: [
      { date: "Q4 '24", label: "Migrated edge to Cloudflare Workers" },
      { date: "Q1 '26", label: "Enterprise plan + priority support" },
    ],
    projects: [
      { title: "Edge Realtime", desc: "Sub-100ms event sync across 22 countries.", cover: "dash-overview" },
    ],
  },
  {
    slug: "neon-postgres",
    name: "Neon Postgres",
    mark: "NP",
    tier: "Technology",
    blurb: "Serverless Postgres with branching.",
    since: "2024",
    cover: "dash-security",
    tint: "from-primary/30",
    category: "Database",
    website: "neon.tech",
    location: "Remote",
    about: "Every guild gets an isolated Postgres branch. Migrations preview safely, and PITR keeps six hours of point-in-time recovery.",
    benefits: ["Serverless scale-to-zero", "Branch-per-environment", "Point-in-time restore", "Priority migration support"],
    gallery: ["dash-security", "admin-hero"],
    stats: [{ n: "6h", l: "PITR window" }, { n: "480", l: "Branches" }],
    timeline: [{ date: "Q1 '24", label: "Primary DB migrated to Neon" }],
    projects: [{ title: "Branch-per-PR", desc: "Every pull request spins up an isolated Postgres branch.", cover: "dash-security" }],
  },
  {
    slug: "upstash",
    name: "Upstash Redis",
    mark: "UP",
    tier: "Technology",
    blurb: "Ultra-low latency KV + realtime pub/sub.",
    since: "2025",
    cover: "dash-overview",
    tint: "from-accent/30",
    category: "Realtime",
    website: "upstash.com",
    location: "Remote",
    about: "Upstash handles the live votes, presence and reactions layer. Every clap ships to every viewer in under 60ms.",
    benefits: ["Sub-60ms fan-out", "Global replication", "Serverless pricing"],
    gallery: ["dash-overview", "notice-reaction"],
    stats: [{ n: "60ms", l: "P99 fan-out" }, { n: "2.1M", l: "Msgs/mo" }],
    timeline: [{ date: "Q2 '25", label: "Realtime layer swapped to Upstash" }],
    projects: [{ title: "Live Reactions", desc: "Global pub/sub pipe for reactions and presence.", cover: "notice-reaction" }],
  },
  {
    slug: "riot-community",
    name: "Riot Community",
    mark: "R",
    tier: "Gaming",
    blurb: "Official partner for League community cups.",
    since: "2024",
    cover: "cover-tournament",
    tint: "from-primary/30",
    category: "Publisher Program",
    website: "riotgames.com",
    location: "Los Angeles, US",
    about: "Riot's Community Cup program lets us run officially-recognized brackets with API pull for player ranks, verified accounts and match validation.",
    benefits: ["Official Community Cup status", "Rank-verified rosters", "API access to match data"],
    gallery: ["cover-tournament", "dash-tournament"],
    stats: [{ n: "6", l: "Cups / year" }, { n: "512", l: "Teams peak" }],
    timeline: [{ date: "Q3 '24", label: "Community Cup approval" }],
    projects: [{ title: "Summer Split Cup", desc: "8-week Swiss format with a $10K prize.", cover: "dash-tournament" }],
  },
  {
    slug: "supercellhub",
    name: "SupercellHub",
    mark: "SH",
    tier: "Gaming",
    blurb: "Clash & Brawl bracket integrations.",
    since: "2025",
    cover: "cover-picbattle",
    tint: "from-secondary/30",
    category: "Publisher Community",
    website: "supercellhub.gg",
    location: "Helsinki, FI",
    about: "SupercellHub feeds live Clash and Brawl match data into our brackets. Teams register with their in-game tag and results sync automatically.",
    benefits: ["Live match ingest", "Tag-based verification", "Cross-title season pass"],
    gallery: ["cover-picbattle", "cover-tournament"],
    stats: [{ n: "3", l: "Titles" }, { n: "18K", l: "Verified players" }],
    timeline: [{ date: "Q1 '25", label: "Integration shipped" }],
    projects: [{ title: "Clash Global Cup", desc: "Double-elim across three regions.", cover: "cover-tournament" }],
  },
  {
    slug: "shouters-united",
    name: "Shouters United",
    mark: "SU",
    tier: "Community",
    blurb: "12K-member creator alliance.",
    since: "2024",
    cover: "cover-community",
    tint: "from-accent/30",
    category: "Creator Network",
    website: "shoutersunited.gg",
    location: "Distributed",
    about: "A 12K-member alliance of streamers, casters and organizers who co-host, cover and cast our events.",
    benefits: ["Casting pool for finals", "Cross-promotion across 400+ creators", "Guest AMA slots"],
    gallery: ["cover-community", "dash-team"],
    stats: [{ n: "12K", l: "Members" }, { n: "400+", l: "Creators" }],
    timeline: [{ date: "Q4 '24", label: "Alliance formalized" }],
    projects: [{ title: "Weekly Cast Pool", desc: "Rotating cast crew for every headline match.", cover: "cover-community" }],
  },
  {
    slug: "discord-devs",
    name: "Discord Devs",
    mark: "DD",
    tier: "Community",
    blurb: "Verified bot developer program.",
    since: "2024",
    cover: "bot-mascot",
    tint: "from-secondary/30",
    category: "Developer Program",
    website: "discord.com/developers",
    location: "San Francisco, US",
    about: "We're a verified bot developer, which means priority API access, invite scaling, and early access to new platform APIs.",
    benefits: ["Verified badge", "Priority API access", "Early beta APIs"],
    gallery: ["bot-mascot", "admin-hero"],
    stats: [{ n: "480", l: "Guilds" }, { n: "0", l: "Rate-limit incidents" }],
    timeline: [{ date: "Q2 '24", label: "Verified badge granted" }],
    projects: [{ title: "Bot Verification", desc: "Full Discord verification with elevated intents.", cover: "bot-mascot" }],
  },
  {
    slug: "twitchwaves",
    name: "TwitchWaves",
    mark: "TW",
    tier: "Media",
    blurb: "Weekly stream coverage of finals.",
    since: "2025",
    cover: "notice-hero",
    tint: "from-primary/30",
    category: "Broadcast",
    website: "twitchwaves.tv",
    location: "New York, US",
    about: "TwitchWaves streams the finals of every major event with a two-caster booth and clip-team ready to ship highlights within an hour.",
    benefits: ["Weekly finals stream", "Highlight clipping team", "Studio-quality overlays"],
    gallery: ["notice-hero", "cover-tournament"],
    stats: [{ n: "48", l: "Finals streamed" }, { n: "1.2M", l: "Hours watched" }],
    timeline: [{ date: "Q1 '25", label: "Coverage kicks off" }],
    projects: [{ title: "Finals Live", desc: "Weekly two-caster broadcast of championship matches.", cover: "notice-hero" }],
  },
  {
    slug: "the-shoutcast",
    name: "The Shoutcast",
    mark: "TS",
    tier: "Media",
    blurb: "Podcast network — 480K downloads/mo.",
    since: "2024",
    cover: "notice-drop",
    tint: "from-accent/40",
    category: "Podcast Network",
    website: "shoutcast.fm",
    location: "London, UK",
    about: "The Shoutcast podcast covers weekly recaps, deep-dives with organizers, and interviews with tournament winners.",
    benefits: ["Weekly recap episode", "Interview slot for winners", "Cross-post to our newsletter"],
    gallery: ["notice-drop", "notice-hero"],
    stats: [{ n: "480K", l: "Downloads / mo" }, { n: "120", l: "Episodes" }],
    timeline: [{ date: "Q3 '24", label: "Podcast partnership signed" }],
    projects: [{ title: "Season Recap Series", desc: "Weekly 30-minute deep-dive on the season storyline.", cover: "notice-drop" }],
  },
  {
    slug: "zapier",
    name: "Zapier",
    mark: "Z",
    tier: "Integration",
    blurb: "1000+ downstream automations.",
    since: "2025",
    cover: "dash-calendar",
    tint: "from-secondary/30",
    category: "Automation",
    website: "zapier.com",
    location: "Remote",
    about: "Zapier lets organizers pipe every Shouter event, registration and result into 6,000+ other apps without a single line of code.",
    benefits: ["6K+ downstream apps", "No-code triggers", "Instant webhooks"],
    gallery: ["dash-calendar", "admin-hero"],
    stats: [{ n: "6K+", l: "Downstream apps" }, { n: "120", l: "Prebuilt zaps" }],
    timeline: [{ date: "Q1 '25", label: "Public app on Zapier marketplace" }],
    projects: [{ title: "Registration → Sheets", desc: "Every new registration lands in an organizer's spreadsheet.", cover: "dash-calendar" }],
  },
  {
    slug: "notion",
    name: "Notion",
    mark: "N",
    tier: "Integration",
    blurb: "Auto-sync brackets to team wikis.",
    since: "2025",
    cover: "dash-team",
    tint: "from-primary/25",
    category: "Docs / Wiki",
    website: "notion.so",
    location: "San Francisco, US",
    about: "Teams sync brackets, rosters and match schedules directly into a Notion workspace, kept fresh every 60 seconds.",
    benefits: ["Bracket → Notion mirror", "Roster page auto-sync", "Custom database schema"],
    gallery: ["dash-team", "cover-community"],
    stats: [{ n: "60s", l: "Sync interval" }, { n: "180", l: "Team wikis" }],
    timeline: [{ date: "Q2 '25", label: "Notion integration shipped" }],
    projects: [{ title: "Team Wiki Sync", desc: "Bracket, matches and schedule mirrored into any Notion database.", cover: "dash-team" }],
  },
];

export const PARTNER_TIERS: PartnerTier[] = ["Featured", "Technology", "Gaming", "Community", "Media", "Integration"];

export interface PartnerBenefit {
  title: string;
  desc: string;
  icon: string; // lucide name (mapped in view)
  cover: string; // heroUrl key
  tint: string;
}

export const PARTNER_BENEFITS: PartnerBenefit[] = [
  { title: "Co-branded events", desc: "Custom banners, embeds and dashboards with your logo front and center at every touchpoint.", icon: "Sparkles", cover: "cover-tournament", tint: "from-accent/40" },
  { title: "Homepage spotlight", desc: "Rotating hero placement above the fold on our landing page — 48K monthly visitors.", icon: "Globe2", cover: "cover-artwork", tint: "from-primary/30" },
  { title: "Discord promotion", desc: "Native embeds, pinned messages and channel takeovers that don't feel like ads.", icon: "Radio", cover: "cover-community", tint: "from-secondary/30" },
  { title: "Dedicated tournament", desc: "Season-branded bracket with prize pool, casters and finals stream co-hosted with your team.", icon: "Trophy", cover: "dash-tournament", tint: "from-primary/40" },
  { title: "API + bot integration", desc: "Priority rate limits, custom bot commands, and outbound webhooks tailored to your stack.", icon: "Cpu", cover: "admin-hero", tint: "from-secondary/25" },
  { title: "Creator collaboration", desc: "Slots in weekly podcast, guest AMA and clips ready-made by our editorial crew.", icon: "Camera", cover: "notice-drop", tint: "from-accent/30" },
  { title: "Analytics dashboard", desc: "Live audience, engagement and conversion analytics per campaign — export anytime.", icon: "Zap", cover: "dash-overview", tint: "from-primary/25" },
  { title: "Premium support", desc: "Direct Slack channel, quarterly business review and priority incident response.", icon: "Handshake", cover: "dash-team", tint: "from-secondary/25" },
];

// ===== Sponsor packages =====

export interface SponsorPackage {
  slug: string;
  name: string;
  price: string;
  tint: string;
  cover: string;
  tagline: string;
  ribbon?: string;
  perks: string[];
  reach: { n: string; l: string }[];
  cases: { title: string; desc: string; cover: string }[];
  faq: { q: string; a: string }[];
}

export const SPONSOR_PACKAGES: SponsorPackage[] = [
  {
    slug: "bronze",
    name: "Bronze",
    price: "$500/mo",
    tint: "from-secondary/40",
    cover: "dash-rewards",
    tagline: "Start with a foothold — logo, shoutouts, and a permanent home on our sponsors page.",
    perks: ["Logo on /sponsors", "Monthly Discord shoutout", "Bronze badge on events", "Community channel access", "Quarterly performance snapshot"],
    reach: [{ n: "12K", l: "Monthly impressions" }, { n: "4", l: "Shoutouts / mo" }, { n: "1", l: "Featured post / qtr" }],
    cases: [{ title: "Byte Battles ramp", desc: "Onboarded at Bronze, climbed to Gold in 6 months.", cover: "dash-rewards" }],
    faq: [
      { q: "Can I upgrade mid-cycle?", a: "Yes — we prorate the difference and roll benefits over immediately." },
      { q: "Do I sign a contract?", a: "Monthly rolling. Cancel anytime with 30 days notice." },
    ],
  },
  {
    slug: "silver",
    name: "Silver",
    price: "$1,500/mo",
    tint: "from-accent/40",
    cover: "notice-hero",
    tagline: "Serious visibility — weekly pings, sponsored event slots and newsletter placement.",
    perks: ["Everything in Bronze", "Weekly Discord ping", "Sponsored event slot / quarter", "Newsletter mention", "Homepage sidebar placement"],
    reach: [{ n: "36K", l: "Monthly impressions" }, { n: "12", l: "Discord pings" }, { n: "1", l: "Sponsored event / qtr" }],
    cases: [{ title: "PixelCup relaunch", desc: "Silver tier drove a 3.2x lift in Discord joins during their event.", cover: "notice-hero" }],
    faq: [
      { q: "Is category exclusivity included?", a: "Not at Silver. Gold and above lock out direct competitors." },
    ],
  },
  {
    slug: "gold",
    name: "Gold",
    price: "$4,000/mo",
    tint: "from-primary/40",
    cover: "cover-tournament",
    ribbon: "Most popular",
    tagline: "The sponsor sweet-spot — branded tournament, podcast segment, homepage carousel.",
    perks: ["Everything in Silver", "Dedicated podcast segment", "Branded tournament", "Homepage carousel", "Category exclusivity (vertical)"],
    reach: [{ n: "120K", l: "Monthly impressions" }, { n: "1", l: "Branded tournament / qtr" }, { n: "480K", l: "Podcast downloads / mo" }],
    cases: [
      { title: "OldSchool GG cup", desc: "Gold-tier branded cup pulled 512 teams and 2.1M reactions.", cover: "cover-tournament" },
    ],
    faq: [
      { q: "How is exclusivity scoped?", a: "By vertical (e.g. cloud DB, energy drink). We pre-clear conflicts before signing." },
      { q: "Can I bring my own casters?", a: "Yes — Gold and above may nominate the finals casting crew." },
    ],
  },
  {
    slug: "platinum",
    name: "Platinum",
    price: "$10,000/mo",
    tint: "from-accent/50",
    cover: "dash-tournament",
    tagline: "Title co-branding on Grand Finals, custom bot skin, onstage LAN presence.",
    perks: ["Everything in Gold", "Grand Finals title co-brand", "Custom Discord bot skin", "Onstage LAN mention", "Executive quarterly review"],
    reach: [{ n: "480K", l: "Monthly impressions" }, { n: "12K", l: "LAN attendees" }, { n: "22", l: "Countries reached" }],
    cases: [
      { title: "Cratebox Grand Finals", desc: "Title co-brand on the season Grand Finals — 12K onsite, 220K streamed.", cover: "dash-tournament" },
    ],
    faq: [
      { q: "Is the bot skin custom to us?", a: "Yes — colors, mascot avatar and command replies all rebrandable." },
    ],
  },
  {
    slug: "diamond",
    name: "Diamond",
    price: "Talk to us",
    tint: "from-primary/50",
    cover: "cover-artwork",
    ribbon: "VIP",
    tagline: "Full-season title sponsor. Co-designed events. Executive Discord AMA. Custom everything.",
    perks: ["Everything in Platinum", "Season title sponsorship", "Co-designed events", "Executive Discord AMA", "Custom landing page", "Bespoke integration engineering"],
    reach: [{ n: "1.2M", l: "Monthly impressions" }, { n: "48K", l: "Discord actives" }, { n: "22", l: "Countries" }],
    cases: [
      { title: "Skirmish.gg season", desc: "Full season title sponsor — every event, dashboard and embed co-branded.", cover: "cover-artwork" },
    ],
    faq: [
      { q: "How long is a Diamond commitment?", a: "Full season (3 months minimum), with a locked category and roadmap sync." },
      { q: "Can we co-build an event format?", a: "Yes — every Diamond deal ships at least one bespoke event format." },
    ],
  },
];
