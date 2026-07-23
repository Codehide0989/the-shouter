import {
  LayoutDashboard, BarChart3, Radio, Users, Shield, Palette, Server, Wrench,
  MessageCircle, Activity, TrendingUp, Globe, Eye, UserCheck, Vote, RefreshCw,
  Bot, UserCog, Users2, KeyRound, Building2, Trophy, ImageIcon, Swords, Upload,
  Flag, Gavel, ShieldAlert, Paintbrush, Image as ImagePic, Layout, Menu, PanelBottom,
  Sparkles, Zap, HardDrive, Database, Cloud, Cpu, Save, ScrollText, AlertOctagon,
  HeartPulse, Plug, Webhook, ListTree, Mail, MessageSquare, Bell, FileCode2,
  Search, Download, ArrowDownToLine, Hammer, Flag as Flag2, CalendarRange, Megaphone,
  Send, Radar, Clock, Workflow,
} from "lucide-react";

export interface AdminItem {
  slug: string;
  label: string;
  icon: typeof LayoutDashboard;
  group: string;
  tagline: string;
  hero: string;
}

const H = {
  admin: "admin-hero",
  bot: "bot-mascot",
  live: "notice-hero",
  team: "dash-team",
  security: "dash-security",
  rewards: "dash-rewards",
  overview: "dash-overview",
  tournament: "dash-tournament",
  artwork: "cover-artwork",
  community: "cover-community",
  settings: "settings-hero",
  calendar: "dash-calendar",
  drop: "notice-drop",
  reactions: "notice-reaction",
} as const;

export const ADMIN_SECTIONS: AdminItem[] = [
  // OVERVIEW
  { slug: "", label: "Overview", icon: LayoutDashboard, group: "Overview", tagline: "Everything at a glance.", hero: H.admin },

  // ANALYTICS
  { slug: "analytics/events", label: "Events Analytics", icon: BarChart3, group: "Analytics", tagline: "Registrations, drops, momentum.", hero: H.tournament },
  { slug: "analytics/discord", label: "Discord Analytics", icon: MessageCircle, group: "Analytics", tagline: "Reactions, presence, growth.", hero: H.bot },
  { slug: "analytics/users", label: "Users Analytics", icon: Users, group: "Analytics", tagline: "Signups, retention, cohorts.", hero: H.team },
  { slug: "analytics/traffic", label: "Traffic", icon: Globe, group: "Analytics", tagline: "Sources & top pages.", hero: H.overview },
  { slug: "analytics/growth", label: "Growth", icon: TrendingUp, group: "Analytics", tagline: "Week-over-week trend.", hero: H.rewards },

  // REALTIME
  { slug: "realtime/visitors", label: "Live Visitors", icon: Eye, group: "Realtime", tagline: "Who's on the site right now.", hero: H.live },
  { slug: "realtime/registrations", label: "Live Registrations", icon: UserCheck, group: "Realtime", tagline: "Fresh sign-ups streaming in.", hero: H.team },
  { slug: "realtime/votes", label: "Live Votes", icon: Vote, group: "Realtime", tagline: "Poll & battle vote feed.", hero: H.community },
  { slug: "realtime/reactions", label: "Live Reactions", icon: Radio, group: "Realtime", tagline: "Discord reaction stream.", hero: H.reactions },
  { slug: "realtime/sync", label: "Sync Status", icon: RefreshCw, group: "Realtime", tagline: "Bot ↔ site sync health.", hero: H.bot },
  { slug: "realtime/bot", label: "Bot Realtime", icon: Bot, group: "Realtime", tagline: "Commands & events flowing.", hero: H.bot },

  // MANAGE
  { slug: "manage/users", label: "Users", icon: Users, group: "Manage", tagline: "Every account.", hero: H.team },
  { slug: "manage/staff", label: "Staff", icon: UserCog, group: "Manage", tagline: "Mods & admins.", hero: H.security },
  { slug: "manage/roles", label: "Roles", icon: Users2, group: "Manage", tagline: "Ranks & tags.", hero: H.security },
  { slug: "manage/permissions", label: "Permissions", icon: KeyRound, group: "Manage", tagline: "Fine-grained access.", hero: H.security },
  { slug: "manage/teams", label: "Teams", icon: Building2, group: "Manage", tagline: "Squads on the platform.", hero: H.team },
  { slug: "manage/tournaments", label: "Tournaments", icon: Trophy, group: "Manage", tagline: "Brackets & seasons.", hero: H.tournament },
  { slug: "manage/artwork", label: "Artwork", icon: ImageIcon, group: "Manage", tagline: "Creative submissions.", hero: H.artwork },
  { slug: "manage/battles", label: "Picture Battles", icon: Swords, group: "Manage", tagline: "1v1 photo brackets.", hero: H.artwork },
  { slug: "manage/uploads", label: "Uploads", icon: Upload, group: "Manage", tagline: "All incoming files.", hero: H.artwork },
  { slug: "manage/reports", label: "Reports", icon: Flag, group: "Manage", tagline: "Community flags.", hero: H.security },
  { slug: "manage/appeals", label: "Appeals", icon: Gavel, group: "Manage", tagline: "Ban / warn appeals.", hero: H.security },
  { slug: "manage/moderation", label: "Moderation", icon: ShieldAlert, group: "Manage", tagline: "Trust & safety.", hero: H.security },

  // CMS
  { slug: "cms/themes", label: "Themes", icon: Palette, group: "CMS", tagline: "Seasonal palettes.", hero: H.settings },
  { slug: "cms/banners", label: "Banners", icon: Paintbrush, group: "CMS", tagline: "Announcement bars.", hero: H.settings },
  { slug: "cms/hero", label: "Hero Section", icon: ImagePic, group: "CMS", tagline: "Homepage headline.", hero: H.overview },
  { slug: "cms/homepage", label: "Homepage", icon: Layout, group: "CMS", tagline: "Sections & order.", hero: H.overview },
  { slug: "cms/nav", label: "Navigation", icon: Menu, group: "CMS", tagline: "Header links.", hero: H.settings },
  { slug: "cms/footer", label: "Footer", icon: PanelBottom, group: "CMS", tagline: "Footer content & socials.", hero: H.settings },

  // INFRA
  { slug: "infra/ai", label: "AI Providers", icon: Sparkles, group: "Infra", tagline: "Gemini, Groq, Lovable AI.", hero: H.settings },
  { slug: "infra/gemini", label: "Gemini", icon: Zap, group: "Infra", tagline: "Google AI keys & usage.", hero: H.settings },
  { slug: "infra/groq", label: "Groq", icon: Zap, group: "Infra", tagline: "Ultra-fast inference.", hero: H.settings },
  { slug: "infra/cdn", label: "CDN", icon: Cloud, group: "Infra", tagline: "Edge cache & routes.", hero: H.settings },
  { slug: "infra/storage", label: "Storage", icon: HardDrive, group: "Infra", tagline: "Files & buckets.", hero: H.settings },
  { slug: "infra/imagekit", label: "ImageKit", icon: ImagePic, group: "Infra", tagline: "Media pipeline.", hero: H.artwork },
  { slug: "infra/cloudflare", label: "Cloudflare", icon: Cloud, group: "Infra", tagline: "Workers, DNS, WAF.", hero: H.settings },
  { slug: "infra/redis", label: "Redis", icon: Cpu, group: "Infra", tagline: "Queues & cache.", hero: H.settings },
  { slug: "infra/database", label: "Database", icon: Database, group: "Infra", tagline: "Postgres primary.", hero: H.settings },
  { slug: "infra/backups", label: "Backups", icon: Save, group: "Infra", tagline: "Snapshots & restore.", hero: H.security },

  // OPS
  { slug: "ops/audit", label: "Audit Log", icon: ScrollText, group: "Ops", tagline: "Who did what.", hero: H.security },
  { slug: "ops/errors", label: "Errors", icon: AlertOctagon, group: "Ops", tagline: "Crashes & exceptions.", hero: H.security },
  { slug: "ops/health", label: "Health", icon: HeartPulse, group: "Ops", tagline: "Systems status.", hero: H.live },
  { slug: "ops/api", label: "API", icon: Plug, group: "Ops", tagline: "REST + RPC surface.", hero: H.settings },
  { slug: "ops/webhooks", label: "Webhooks", icon: Webhook, group: "Ops", tagline: "Outgoing hooks.", hero: H.bot },
  { slug: "ops/bot-logs", label: "Bot Logs", icon: Bot, group: "Ops", tagline: "Discord bot trace.", hero: H.bot },
  { slug: "ops/queues", label: "Queues", icon: ListTree, group: "Ops", tagline: "Jobs & retries.", hero: H.settings },

  // TEMPLATES
  { slug: "templates/email", label: "Email Templates", icon: Mail, group: "Templates", tagline: "Transactional mail.", hero: H.drop },
  { slug: "templates/discord", label: "Discord Templates", icon: MessageSquare, group: "Templates", tagline: "Embed messages.", hero: H.bot },
  { slug: "templates/canva", label: "Canva Templates", icon: ImagePic, group: "Templates", tagline: "Design starters.", hero: H.artwork },
  { slug: "templates/notifications", label: "Notification Templates", icon: Bell, group: "Templates", tagline: "In-app pushes.", hero: H.reactions },
  { slug: "templates/snippets", label: "Snippets", icon: FileCode2, group: "Templates", tagline: "Reusable blocks.", hero: H.settings },

  // TOOLS
  { slug: "tools/search", label: "Search Console", icon: Search, group: "Tools", tagline: "Query everything.", hero: H.overview },
  { slug: "tools/export", label: "Export", icon: Download, group: "Tools", tagline: "Bulk export data.", hero: H.settings },
  { slug: "tools/import", label: "Import", icon: ArrowDownToLine, group: "Tools", tagline: "Bring data in.", hero: H.settings },
  { slug: "tools/maintenance", label: "Maintenance", icon: Hammer, group: "Tools", tagline: "Downtime mode.", hero: H.security },
  { slug: "tools/flags", label: "Feature Flags", icon: Flag2, group: "Tools", tagline: "Toggle features.", hero: H.settings },
  { slug: "tools/season", label: "Season Controls", icon: CalendarRange, group: "Tools", tagline: "Rotate seasons.", hero: H.calendar },
  { slug: "tools/announcements", label: "Announcements", icon: Megaphone, group: "Tools", tagline: "Site-wide notices.", hero: H.drop },
  { slug: "tools/broadcast", label: "Broadcast", icon: Send, group: "Tools", tagline: "Push to everyone.", hero: H.reactions },
  { slug: "tools/ping", label: "Ping Tests", icon: Radar, group: "Tools", tagline: "Latency probes.", hero: H.bot },
  { slug: "tools/schedule", label: "Scheduler", icon: Clock, group: "Tools", tagline: "Cron & timers.", hero: H.calendar },
  { slug: "tools/automation", label: "Automation", icon: Workflow, group: "Tools", tagline: "If-this-then-that.", hero: H.settings },
  { slug: "tools/activity", label: "Live Activity", icon: Activity, group: "Tools", tagline: "Realtime firehose.", hero: H.live },
];

export const ADMIN_GROUPS = ["Overview", "Analytics", "Realtime", "Manage", "CMS", "Infra", "Ops", "Templates", "Tools"] as const;
