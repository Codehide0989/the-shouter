export type EventType = "artwork" | "picbattle" | "tournament" | "community";
export type EventStatus = "upcoming" | "live" | "ended";

export interface MockEvent {
  id: string;
  title: string;
  type: EventType;
  status: EventStatus;
  game?: string;
  server: string;
  registered: number;
  capacity: number;
  startsAt: string;
  prize: string;
  cover: string;
  description: string;
  teamSize?: number;
}

export const MOCK_EVENTS: MockEvent[] = [
  {
    id: "bgmi-clash-14",
    title: "BGMI Midnight Clash #14",
    type: "tournament",
    status: "live",
    game: "BGMI",
    server: "Shouters HQ",
    registered: 62,
    capacity: 64,
    startsAt: "2026-07-24T20:00:00Z",
    prize: "₹25,000",
    cover: "from-orange-500 to-rose-600",
    description: "Squad TDM knockouts. Bring your best 4. Chicken dinners only.",
    teamSize: 4,
  },
  {
    id: "artwork-neon",
    title: "Neon Dreams — Artwork Showcase",
    type: "artwork",
    status: "live",
    server: "Neon Ateliers",
    registered: 128,
    capacity: 200,
    startsAt: "2026-07-20T12:00:00Z",
    prize: "Featured spotlight",
    cover: "from-fuchsia-500 to-indigo-600",
    description: "Drop your neon-drenched pieces. Community votes via Discord reactions.",
  },
  {
    id: "picbattle-summer",
    title: "Summer Vibes Pic Battle",
    type: "picbattle",
    status: "upcoming",
    server: "Shouters HQ",
    registered: 41,
    capacity: 100,
    startsAt: "2026-07-30T18:00:00Z",
    prize: "Nitro × 3",
    cover: "from-amber-400 to-orange-600",
    description: "1v1 photo brackets. Best summer shot wins the round.",
  },
  {
    id: "freefire-arena",
    title: "Free Fire Arena Cup",
    type: "tournament",
    status: "upcoming",
    game: "Free Fire",
    server: "Blaze Squad",
    registered: 22,
    capacity: 48,
    startsAt: "2026-08-02T19:00:00Z",
    prize: "₹10,000",
    cover: "from-red-500 to-orange-500",
    description: "Duo bracket format, best-of-3 finals.",
    teamSize: 2,
  },
  {
    id: "minecraft-build",
    title: "Minecraft Build Battle",
    type: "community",
    status: "upcoming",
    game: "Minecraft",
    server: "Blocklab",
    registered: 88,
    capacity: 120,
    startsAt: "2026-08-05T17:00:00Z",
    prize: "Custom cape",
    cover: "from-emerald-500 to-teal-600",
    description: "60-minute themed build, judged live in VC.",
  },
  {
    id: "roblox-obby",
    title: "Roblox Speedrun Gauntlet",
    type: "tournament",
    status: "ended",
    game: "Roblox",
    server: "Speedrunners",
    registered: 96,
    capacity: 96,
    startsAt: "2026-07-10T20:00:00Z",
    prize: "₹5,000",
    cover: "from-sky-500 to-blue-600",
    description: "Solo speedruns, live-tracked splits.",
    teamSize: 1,
  },
];

export const eventById = (id: string) => MOCK_EVENTS.find((e) => e.id === id);

export const TYPE_LABEL: Record<EventType, string> = {
  artwork: "Artwork",
  picbattle: "Pic Battle",
  tournament: "Tournament",
  community: "Community",
};

export const STATUS_LABEL: Record<EventStatus, string> = {
  upcoming: "Upcoming",
  live: "Live",
  ended: "Ended",
};

export interface MockTeam {
  id: string;
  name: string;
  leader: string;
  members: { discord: string; verified: boolean; ign?: string }[];
  status: "pending" | "verified" | "eliminated";
}

export const MOCK_TEAMS: MockTeam[] = [
  {
    id: "t-1",
    name: "Ghost Recon",
    leader: "shadow#0001",
    members: [
      { discord: "shadow#0001", verified: true, ign: "SHDW" },
      { discord: "raven#4210", verified: true, ign: "RVN" },
      { discord: "kite#9910", verified: true, ign: "KT9" },
      { discord: "nova#7712", verified: false },
    ],
    status: "pending",
  },
  {
    id: "t-2",
    name: "Chicken Kings",
    leader: "boss#2020",
    members: [
      { discord: "boss#2020", verified: true, ign: "BOSS" },
      { discord: "ace#7301", verified: true, ign: "ACE" },
      { discord: "vex#1188", verified: true, ign: "VEX" },
      { discord: "rio#4402", verified: true, ign: "RIO" },
    ],
    status: "verified",
  },
];

export const MOCK_LEADERBOARD = [
  { rank: 1, name: "Chicken Kings", points: 2450, wins: 12 },
  { rank: 2, name: "Ghost Recon", points: 2100, wins: 10 },
  { rank: 3, name: "Neon Ninjas", points: 1980, wins: 9 },
  { rank: 4, name: "Blaze Squad", points: 1720, wins: 8 },
  { rank: 5, name: "Zero Cool", points: 1650, wins: 7 },
  { rank: 6, name: "Pixel Wolves", points: 1420, wins: 6 },
  { rank: 7, name: "Shadow Ops", points: 1380, wins: 6 },
  { rank: 8, name: "Rift Hunters", points: 1200, wins: 5 },
];

export const MOCK_GALLERY = Array.from({ length: 12 }, (_, i) => ({
  id: `art-${i + 1}`,
  author: `artist_${i + 1}#00${i + 1}`,
  title: ["Neon Dawn", "Solar Blaze", "Crimson Tide", "Storm Rider", "Void Walker", "Ember Sky"][
    i % 6
  ],
  reactions: 40 + Math.floor(Math.random() * 300),
  gradient: [
    "from-orange-400 to-red-600",
    "from-fuchsia-400 to-purple-700",
    "from-amber-300 to-orange-600",
    "from-teal-400 to-sky-600",
    "from-rose-400 to-pink-700",
    "from-lime-400 to-emerald-600",
  ][i % 6],
}));

export const MOCK_NOTIFICATIONS = [
  { id: 1, text: "Your team Ghost Recon is missing 1 player.", time: "2m ago", unread: true },
  { id: 2, text: "BGMI Midnight Clash #14 starts in 30 minutes.", time: "12m ago", unread: true },
  { id: 3, text: "You got 24 new reactions on your artwork.", time: "1h ago", unread: false },
  { id: 4, text: "New event posted in Shouters HQ: Summer Vibes Pic Battle.", time: "4h ago", unread: false },
];
