import {
  LayoutDashboard, Calendar, CheckSquare, Radio, Trophy, Palette, Image as ImageIcon,
  Vote, Heart, MessageCircle, Server, Award, Zap, Coins, Gift, Medal, Crown,
  Users, MailPlus, MailCheck, BarChart3, Swords, Target, Sparkles, Bell,
  LifeBuoy, Download, Bookmark, Star, UsersRound, Activity, CalendarDays,
  Rocket, Upload, UserCog, UserPlus, Shield, Monitor, Paintbrush, Palette as PaletteIcon,
  Sun, Lock, KeyRound, Link as LinkIcon, Trash2,
} from "lucide-react";

export interface DashItem {
  slug: string;
  label: string;
  icon: typeof LayoutDashboard;
  group: string;
  tagline: string;
  hero: string; // asset key
}

// Hero image slots — reuse existing assets across the platform
export const HERO_KEYS = {
  overview: "dash-overview",
  calendar: "dash-calendar",
  rewards: "dash-rewards",
  security: "dash-security",
  team: "dash-team",
  tournament: "dash-tournament",
  bot: "bot-mascot",
  events: "cover-tournament",
  artwork: "cover-artwork",
  picbattle: "cover-picbattle",
  community: "cover-community",
  notifs: "notice-hero",
  reactions: "notice-reaction",
  drop: "notice-drop",
  admin: "admin-hero",
  profile: "dashboard-hero",
  settings: "settings-hero",
} as const;

export const DASH_SECTIONS: DashItem[] = [
  // ── PLAY ─────────────────────────────────────────────────────
  { slug: "", label: "Overview", icon: LayoutDashboard, group: "Play", tagline: "Everything at a glance.", hero: HERO_KEYS.overview },
  { slug: "upcoming", label: "Upcoming Events", icon: Calendar, group: "Play", tagline: "What's on the horizon.", hero: HERO_KEYS.calendar },
  { slug: "registered", label: "Registered Events", icon: CheckSquare, group: "Play", tagline: "Events you're locked into.", hero: HERO_KEYS.events },
  { slug: "live", label: "Live Events", icon: Radio, group: "Play", tagline: "Happening right now.", hero: HERO_KEYS.events },
  { slug: "tournaments", label: "Tournament Progress", icon: Trophy, group: "Play", tagline: "Your bracket runs.", hero: HERO_KEYS.tournament },
  { slug: "artwork", label: "Artwork Submissions", icon: Palette, group: "Play", tagline: "Your creative drops.", hero: HERO_KEYS.artwork },
  { slug: "picture-battles", label: "Picture Battles", icon: ImageIcon, group: "Play", tagline: "1v1 photo brackets.", hero: HERO_KEYS.picbattle },
  { slug: "voting", label: "Voting History", icon: Vote, group: "Play", tagline: "Every vote you cast.", hero: HERO_KEYS.community },
  { slug: "reactions", label: "Reaction History", icon: Heart, group: "Play", tagline: "All your reacts on Discord.", hero: HERO_KEYS.reactions },

  // ── DISCORD ──────────────────────────────────────────────────
  { slug: "discord", label: "Discord Account", icon: MessageCircle, group: "Discord", tagline: "Your linked identity.", hero: HERO_KEYS.bot },
  { slug: "servers", label: "Connected Servers", icon: Server, group: "Discord", tagline: "Guilds you're in.", hero: HERO_KEYS.bot },
  { slug: "discord-presence", label: "Discord Presence", icon: Activity, group: "Discord", tagline: "Current status & rich presence.", hero: HERO_KEYS.bot },

  // ── PROGRESS ─────────────────────────────────────────────────
  { slug: "achievements", label: "Achievements", icon: Award, group: "Progress", tagline: "Unlocked feats.", hero: HERO_KEYS.rewards },
  { slug: "xp", label: "XP", icon: Zap, group: "Progress", tagline: "Level & experience.", hero: HERO_KEYS.rewards },
  { slug: "coins", label: "Coins", icon: Coins, group: "Progress", tagline: "Your wallet.", hero: HERO_KEYS.rewards },
  { slug: "rewards", label: "Rewards", icon: Gift, group: "Progress", tagline: "Claim your loot.", hero: HERO_KEYS.rewards },
  { slug: "badges", label: "Badges", icon: Medal, group: "Progress", tagline: "Collectibles earned.", hero: HERO_KEYS.rewards },
  { slug: "season-rank", label: "Season Rank", icon: Crown, group: "Progress", tagline: "Ladder standing.", hero: HERO_KEYS.tournament },

  // ── SQUAD ────────────────────────────────────────────────────
  { slug: "team", label: "Current Team", icon: Users, group: "Squad", tagline: "Your active roster.", hero: HERO_KEYS.team },
  { slug: "invitations-pending", label: "Pending Invitations", icon: MailPlus, group: "Squad", tagline: "Awaiting your call.", hero: HERO_KEYS.team },
  { slug: "invitations-accepted", label: "Accepted Invitations", icon: MailCheck, group: "Squad", tagline: "Teams you joined.", hero: HERO_KEYS.team },
  { slug: "saved-teams", label: "Saved Teams", icon: UsersRound, group: "Squad", tagline: "Loadouts of squads.", hero: HERO_KEYS.team },

  // ── STATS ────────────────────────────────────────────────────
  { slug: "stats", label: "Tournament Stats", icon: BarChart3, group: "Stats", tagline: "Numbers don't lie.", hero: HERO_KEYS.tournament },
  { slug: "match-history", label: "Match History", icon: Swords, group: "Stats", tagline: "Every clash logged.", hero: HERO_KEYS.tournament },
  { slug: "win-rate", label: "Win Rate", icon: Target, group: "Stats", tagline: "How often you close it.", hero: HERO_KEYS.tournament },
  { slug: "kills", label: "Kills", icon: Swords, group: "Stats", tagline: "Elimination totals.", hero: HERO_KEYS.tournament },
  { slug: "assists", label: "Assists", icon: Users, group: "Stats", tagline: "Team plays counted.", hero: HERO_KEYS.tournament },
  { slug: "mvp", label: "MVP Count", icon: Sparkles, group: "Stats", tagline: "Times you carried.", hero: HERO_KEYS.tournament },

  // ── ACTIVITY ─────────────────────────────────────────────────
  { slug: "submissions", label: "Submission History", icon: Upload, group: "Activity", tagline: "All your uploads.", hero: HERO_KEYS.artwork },
  { slug: "notifications", label: "Notifications", icon: Bell, group: "Activity", tagline: "Everything the bot sent.", hero: HERO_KEYS.notifs },
  { slug: "tickets", label: "Support Tickets", icon: LifeBuoy, group: "Activity", tagline: "Your help requests.", hero: HERO_KEYS.notifs },
  { slug: "downloads", label: "Downloads", icon: Download, group: "Activity", tagline: "Files & receipts.", hero: HERO_KEYS.drop },
  { slug: "bookmarks", label: "Bookmarks", icon: Bookmark, group: "Activity", tagline: "Saved for later.", hero: HERO_KEYS.artwork },
  { slug: "favorites", label: "Favorite Events", icon: Star, group: "Activity", tagline: "Ones you love.", hero: HERO_KEYS.events },
  { slug: "activity", label: "Activity Timeline", icon: Activity, group: "Activity", tagline: "Your full story.", hero: HERO_KEYS.overview },
  { slug: "calendar", label: "Calendar", icon: CalendarDays, group: "Activity", tagline: "Month view of the grind.", hero: HERO_KEYS.calendar },
  { slug: "quick-actions", label: "Quick Actions", icon: Rocket, group: "Activity", tagline: "Do it fast.", hero: HERO_KEYS.overview },
  { slug: "recent-uploads", label: "Recent Uploads", icon: Upload, group: "Activity", tagline: "Latest drops.", hero: HERO_KEYS.artwork },

  // ── ACCOUNT ──────────────────────────────────────────────────
  { slug: "profile", label: "Profile Completion", icon: UserCog, group: "Account", tagline: "Fill it out.", hero: HERO_KEYS.profile },
  { slug: "referrals", label: "Referral Program", icon: UserPlus, group: "Account", tagline: "Earn for invites.", hero: HERO_KEYS.rewards },
  { slug: "invite-friends", label: "Invite Friends", icon: UserPlus, group: "Account", tagline: "Bring the squad.", hero: HERO_KEYS.team },
  { slug: "security", label: "Security", icon: Shield, group: "Account", tagline: "Lock it down.", hero: HERO_KEYS.security },
  { slug: "sessions", label: "Sessions", icon: Monitor, group: "Account", tagline: "Where you're signed in.", hero: HERO_KEYS.security },
  { slug: "appearance", label: "Appearance", icon: Paintbrush, group: "Account", tagline: "Look & feel.", hero: HERO_KEYS.settings },
  { slug: "theme", label: "Theme Selector", icon: PaletteIcon, group: "Account", tagline: "Pick your palette.", hero: HERO_KEYS.settings },
  { slug: "season", label: "Season Selector", icon: Sun, group: "Account", tagline: "Change the vibe.", hero: HERO_KEYS.settings },
  { slug: "privacy", label: "Privacy", icon: Lock, group: "Account", tagline: "What we do with data.", hero: HERO_KEYS.security },
  { slug: "api-keys", label: "API Keys", icon: KeyRound, group: "Account", tagline: "Developer tokens.", hero: HERO_KEYS.security },
  { slug: "linked-accounts", label: "Linked Accounts", icon: LinkIcon, group: "Account", tagline: "Connected services.", hero: HERO_KEYS.security },
  { slug: "delete-account", label: "Delete Account", icon: Trash2, group: "Account", tagline: "Nuke everything.", hero: HERO_KEYS.security },
];

export const DASH_GROUPS = ["Play", "Discord", "Progress", "Squad", "Stats", "Activity", "Account"] as const;
