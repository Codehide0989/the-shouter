import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { NeoCard, NeoBadge, NeoButton, SectionHeader } from "@/components/neo";
import { heroUrl } from "@/components/dashboard-page";
import {
  Search, ChevronDown, ThumbsUp, Link2, Share2, HelpCircle, MessageCircle,
  Trophy, Palette, UserPlus, User, Gift, Bot, Crown, Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — The Shouter" },
      { name: "description", content: "Answers to the loudest questions in the server." },
      { property: "og:title", content: "FAQ — The Shouter" },
      { property: "og:description", content: "Search 40+ answers on Discord, tournaments, artwork, bot, premium and more." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/faq" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: Page,
});

type Cat =
  | "Popular" | "Discord" | "Tournaments" | "Artwork"
  | "Registration" | "Account" | "Rewards" | "Bot" | "Premium";

interface FAQ {
  q: string; a: string; cat: Cat; helpful: number;
  status?: "new" | "updated" | "hot"; related?: string[]; heroKey: string;
}

const CATS: { key: Cat | "All"; label: string; icon: typeof HelpCircle; tint: string }[] = [
  { key: "All", label: "All", icon: Sparkles, tint: "bg-card" },
  { key: "Popular", label: "Popular", icon: Crown, tint: "bg-accent text-accent-foreground" },
  { key: "Discord", label: "Discord", icon: MessageCircle, tint: "bg-secondary text-secondary-foreground" },
  { key: "Tournaments", label: "Tournaments", icon: Trophy, tint: "bg-primary text-primary-foreground" },
  { key: "Artwork", label: "Artwork", icon: Palette, tint: "bg-card" },
  { key: "Registration", label: "Registration", icon: UserPlus, tint: "bg-card" },
  { key: "Account", label: "Account", icon: User, tint: "bg-card" },
  { key: "Rewards", label: "Rewards", icon: Gift, tint: "bg-card" },
  { key: "Bot", label: "Bot", icon: Bot, tint: "bg-card" },
  { key: "Premium", label: "Premium", icon: Crown, tint: "bg-card" },
];

const FAQS: FAQ[] = [
  // Popular
  { q: "How do I register for an event?", a: "Head to /explore, pick an event, and hit Register. Solo events register you instantly. Team events open a captain flow.", cat: "Popular", helpful: 812, status: "hot", heroKey: "cover-tournament", related: ["Team registration", "Reserves"] },
  { q: "Is The Shouter free to use?", a: "Yes. Core features — event browsing, joining tournaments, reactions, the bot — are 100% free. Premium unlocks unlimited hosting and cosmetics.", cat: "Popular", helpful: 640, heroKey: "notice-hero" },
  { q: "How do seasonal themes work?", a: "Pick Summer, Halloween, Winter, Spring, or Cyber from the top bar. The whole site including illustrations and particles switches.", cat: "Popular", helpful: 501, status: "new", heroKey: "settings-hero" },
  { q: "Where do I see my past matches?", a: "Dashboard → Stats → Match History. Every clash is logged with score, MVP flag, and replay embed.", cat: "Popular", helpful: 388, heroKey: "dash-tournament" },

  // Discord
  { q: "How do I link my Discord account?", a: "Click Login → Continue with Discord. We only request identify + guilds — never DMs.", cat: "Discord", helpful: 720, heroKey: "bot-mascot" },
  { q: "Which servers can install the bot?", a: "Any server where you have Manage Server. Use the Add to Discord button on /bot-status.", cat: "Discord", helpful: 502, heroKey: "bot-mascot" },
  { q: "Does the bot read my messages?", a: "Only prefix commands starting with ! are parsed. Everything else is ignored server-side.", cat: "Discord", helpful: 445, heroKey: "notice-reaction" },
  { q: "Can I use the bot without a website account?", a: "Yes for read-only commands. Registrations and stats sync require a linked account.", cat: "Discord", helpful: 210, heroKey: "bot-mascot" },
  { q: "How do reactions sync to my profile?", a: "The bot mirrors reacts in event channels to your Dashboard → Reactions in real time.", cat: "Discord", helpful: 190, heroKey: "notice-reaction" },

  // Tournaments
  { q: "What bracket formats are supported?", a: "Single elim, double elim, Swiss, round robin, and battle royale. Pick from /tournaments.", cat: "Tournaments", helpful: 610, status: "updated", heroKey: "dash-tournament" },
  { q: "How is seeding decided?", a: "By season rank when available, otherwise registration order. Hosts can shuffle manually.", cat: "Tournaments", helpful: 372, heroKey: "dash-tournament" },
  { q: "What if my opponent no-shows?", a: "After 10 min the ready-check auto-awards the match. Submit a report from /teams/ready-check.", cat: "Tournaments", helpful: 298, heroKey: "cover-tournament" },
  { q: "How do I appeal a match result?", a: "Open /tournaments/appeals within 24h. Include VOD or screenshots.", cat: "Tournaments", helpful: 244, heroKey: "cover-tournament" },
  { q: "Can I host a private tournament?", a: "Premium plan required. Invite-only brackets are created from /admin.", cat: "Tournaments", helpful: 187, heroKey: "cover-tournament" },
  { q: "Are prize pools real money?", a: "Some are — sponsored events display cash prizes. Community events award coins & badges.", cat: "Tournaments", helpful: 158, heroKey: "dash-rewards" },

  // Artwork
  { q: "What file formats can I submit?", a: "PNG, JPG, WEBP up to 15MB. Animated PNG allowed for meme events.", cat: "Artwork", helpful: 431, heroKey: "cover-artwork" },
  { q: "Can I use AI-generated art?", a: "Only in AI-tagged categories. Regular art battles are AI-free — auto-flagged if detected.", cat: "Artwork", helpful: 380, status: "new", heroKey: "cover-artwork" },
  { q: "How does voting work?", a: "Any linked user gets 3 votes per battle. Weighted by season rank to reduce noise.", cat: "Artwork", helpful: 265, heroKey: "cover-picbattle" },
  { q: "Do I keep ownership of my art?", a: "Yes, always. We only get a display license for the event's duration.", cat: "Artwork", helpful: 210, heroKey: "cover-artwork" },

  // Registration
  { q: "Can I edit my registration?", a: "Yes until check-in opens. After that only the captain can swap reserves.", cat: "Registration", helpful: 189, heroKey: "cover-tournament" },
  { q: "How do team invites work?", a: "Captain sends invite → invitee gets a Discord DM + dashboard alert → one-click accept.", cat: "Registration", helpful: 172, heroKey: "dash-team" },
  { q: "What is check-in?", a: "A 15-min window before start where everyone confirms they're online. Miss it and reserves sub in.", cat: "Registration", helpful: 165, heroKey: "dash-calendar" },
  { q: "Can I unregister?", a: "Yes, up to 1 hour before start. Any XP boost cost is refunded.", cat: "Registration", helpful: 121, heroKey: "cover-tournament" },
  { q: "Is there a waitlist?", a: "Popular events open one automatically. You'll be promoted in order if slots free up.", cat: "Registration", helpful: 98, heroKey: "notice-hero" },

  // Account
  { q: "How do I change my username?", a: "Dashboard → Account → Profile. One free change per month.", cat: "Account", helpful: 143, heroKey: "dashboard-hero" },
  { q: "Where do I manage sessions?", a: "Dashboard → Security → Sessions. Revoke any device with one click.", cat: "Account", helpful: 118, heroKey: "dash-security" },
  { q: "How do I enable 2FA?", a: "Discord's 2FA is honored. Enable it in Discord and reconnect to auto-enforce here.", cat: "Account", helpful: 102, heroKey: "dash-security" },
  { q: "Can I delete my account?", a: "Yes, from Dashboard → Delete Account. All personal data is purged within 7 days.", cat: "Account", helpful: 76, heroKey: "dash-security" },
  { q: "How is my data used?", a: "Only to run the platform. Full breakdown on /privacy.", cat: "Account", helpful: 61, heroKey: "dash-security" },

  // Rewards
  { q: "How do I earn XP?", a: "Registering, competing, winning, voting, and daily server activity all award XP.", cat: "Rewards", helpful: 355, heroKey: "dash-rewards" },
  { q: "What are coins for?", a: "Cosmetic sticker packs, XP boosts, and entry to premium-tier community events.", cat: "Rewards", helpful: 302, heroKey: "dash-rewards" },
  { q: "Do rewards expire?", a: "Coins never expire. Seasonal badges lock to that season's showcase.", cat: "Rewards", helpful: 244, heroKey: "dash-rewards" },
  { q: "How do referrals work?", a: "Share your link. Each friend who registers + joins an event earns you 250 coins.", cat: "Rewards", helpful: 210, heroKey: "dash-rewards" },
  { q: "What's the Season Pass?", a: "A 90-day tiered track with 40 unlocks. Free + Premium lanes. Details on /season-pass.", cat: "Rewards", helpful: 189, status: "hot", heroKey: "dash-rewards" },

  // Bot
  { q: "What's the command prefix?", a: "Default is ! — configurable per server from /bot/prefixes.", cat: "Bot", helpful: 401, heroKey: "bot-mascot" },
  { q: "How do temp channels work?", a: "Users join a hub → bot spawns a private VC → deletes on empty. Configure from /bot/temp-channels.", cat: "Bot", helpful: 278, heroKey: "bot-mascot" },
  { q: "Can I auto-role new joins?", a: "Yes. /bot/auto-roles supports role stacks, level gates, and Discord verification requirements.", cat: "Bot", helpful: 232, heroKey: "bot-mascot" },
  { q: "How do webhooks trigger?", a: "Every event lifecycle emits a webhook. Wire endpoints in /bot/webhooks.", cat: "Bot", helpful: 187, heroKey: "bot-mascot" },
  { q: "Why is a command not firing?", a: "Check cooldowns, module toggle, and channel permissions. /bot/logs shows the last 100 attempts.", cat: "Bot", helpful: 165, heroKey: "bot-mascot" },

  // Premium
  { q: "What does Premium unlock?", a: "Unlimited event hosting, cosmetic themes, priority bot queue, and analytics exports.", cat: "Premium", helpful: 280, heroKey: "dash-rewards" },
  { q: "Can I try Premium?", a: "7-day free trial for new accounts. Cancel anytime from /pricing.", cat: "Premium", helpful: 198, heroKey: "dash-rewards" },
  { q: "How do team Premium licenses work?", a: "Buy seats from /pricing. Assign to teammates from admin.", cat: "Premium", helpful: 121, heroKey: "dash-rewards" },
  { q: "Do sponsors get Premium?", a: "Yes — sponsor tier includes 5 Premium seats and a branded event slot.", cat: "Premium", helpful: 84, heroKey: "dash-rewards" },
];

const CAT_ICON: Record<Cat, typeof HelpCircle> = {
  Popular: Crown, Discord: MessageCircle, Tournaments: Trophy, Artwork: Palette,
  Registration: UserPlus, Account: User, Rewards: Gift, Bot: Bot, Premium: Crown,
};

function FAQItem({ item, index }: { item: FAQ; index: number }) {
  const [open, setOpen] = useState(false);
  const [helped, setHelped] = useState(false);
  const Icon = CAT_ICON[item.cat];
  return (
    <NeoCard className="p-0 overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:neo-shadow-lg">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left flex items-stretch gap-3 p-3 sm:p-4"
      >
        {/* Illustration */}
        <div className="relative shrink-0 h-16 w-16 sm:h-20 sm:w-20 neo-border rounded-md overflow-hidden">
          <img src={heroUrl(item.heroKey)} alt="" className="h-full w-full object-cover" loading="lazy" />
          <span className="absolute bottom-0 right-0 h-6 w-6 grid place-items-center bg-accent text-accent-foreground neo-border rounded-tl-md">
            <Icon className="h-3 w-3" />
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-display uppercase tracking-widest text-muted-foreground">#{String(index + 1).padStart(2, "0")}</span>
            <NeoBadge variant="muted">{item.cat}</NeoBadge>
            {item.status === "new" && <NeoBadge variant="success">New</NeoBadge>}
            {item.status === "hot" && <NeoBadge variant="destructive">Hot</NeoBadge>}
            {item.status === "updated" && <NeoBadge variant="secondary">Updated</NeoBadge>}
          </div>
          <div className="font-display text-sm sm:text-base mt-1 leading-snug">{item.q}</div>
          <div className="text-[11px] text-muted-foreground mt-1 flex items-center gap-3">
            <span className="inline-flex items-center gap-1"><ThumbsUp className="h-3 w-3" />{item.helpful}</span>
            <span className="hidden sm:inline">Tap to {open ? "collapse" : "expand"}</span>
          </div>
        </div>
        <ChevronDown className={cn("h-5 w-5 shrink-0 self-center transition-transform", open && "rotate-180")} />
      </button>
      <div
        className={cn(
          "grid transition-all duration-300",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <div className="px-3 sm:px-4 pb-4 pt-1 border-t-2 border-border/60 bg-muted/30">
            <p className="text-sm mt-3">{item.a}</p>
            {item.related?.length ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {item.related.map((r) => (
                  <NeoBadge key={r} variant="accent">{r}</NeoBadge>
                ))}
              </div>
            ) : null}
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <NeoButton
                size="sm"
                variant={helped ? "accent" : "ghost"}
                onClick={(e) => { e.stopPropagation(); setHelped(true); }}
              >
                <ThumbsUp className="h-3.5 w-3.5" /> {helped ? "Thanks!" : "Helpful"}
              </NeoButton>
              <NeoButton
                size="sm"
                variant="ghost"
                onClick={(e) => {
                  e.stopPropagation();
                  const url = `${window.location.origin}/faq#q-${index}`;
                  navigator.clipboard?.writeText(url).catch(() => {});
                }}
              >
                <Link2 className="h-3.5 w-3.5" /> Copy link
              </NeoButton>
              <NeoButton
                size="sm"
                variant="ghost"
                onClick={(e) => {
                  e.stopPropagation();
                  const url = `${window.location.origin}/faq#q-${index}`;
                  if (navigator.share) navigator.share({ title: item.q, url }).catch(() => {});
                  else navigator.clipboard?.writeText(url).catch(() => {});
                }}
              >
                <Share2 className="h-3.5 w-3.5" /> Share
              </NeoButton>
            </div>
          </div>
        </div>
      </div>
    </NeoCard>
  );
}

function Page() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<Cat | "All">("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return FAQS.filter((f) =>
      (active === "All" || f.cat === active) &&
      (!q || f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q)),
    );
  }, [query, active]);

  const popular = useMemo(() => [...FAQS].sort((a, b) => b.helpful - a.helpful).slice(0, 4), []);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-12 space-y-10">
      {/* Hero */}
      <div className="relative neo-border neo-shadow-lg rounded-lg overflow-hidden bg-card">
        <img src={heroUrl("cover-community")} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/40" />
        <span className="absolute top-4 right-4 rotate-6 neo-border neo-shadow-sm bg-accent text-accent-foreground rounded-full h-16 w-16 grid place-items-center font-display text-[10px] uppercase text-center leading-none">
          Help<br />Center
        </span>
        <div className="relative p-6 sm:p-10 max-w-2xl">
          <NeoBadge variant="accent">FAQ</NeoBadge>
          <h1 className="font-display text-3xl sm:text-5xl mt-3 leading-tight">Answers, fast.</h1>
          <p className="text-sm sm:text-base text-muted-foreground mt-2 max-w-lg">
            {FAQS.length}+ answers on Discord, tournaments, artwork, bot, rewards and premium — searchable and copy-linkable.
          </p>
          {/* Search */}
          <div className="mt-5 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search questions..."
              className="w-full neo-border neo-shadow-sm bg-background rounded-md py-3 pl-10 pr-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
        {CATS.map((c) => {
          const I = c.icon;
          const on = active === c.key;
          return (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={cn(
                "shrink-0 neo-border neo-shadow-sm rounded-md px-3 py-2 inline-flex items-center gap-2 text-xs font-display uppercase tracking-wide transition-transform hover:-translate-y-0.5",
                on ? "bg-primary text-primary-foreground" : c.tint,
              )}
            >
              <I className="h-3.5 w-3.5" /> {c.label}
            </button>
          );
        })}
      </div>

      {/* Popular */}
      {active === "All" && !query && (
        <div>
          <SectionHeader eyebrow="Trending" title="Popular questions" />
          <div className="grid gap-3 sm:grid-cols-2">
            {popular.map((f, i) => <FAQItem key={f.q} item={f} index={i} />)}
          </div>
        </div>
      )}

      {/* All */}
      <div>
        <SectionHeader
          eyebrow={active === "All" ? "Everything" : active}
          title={query ? `Results (${filtered.length})` : `${active === "All" ? "All questions" : active + " questions"} (${filtered.length})`}
        />
        {filtered.length === 0 ? (
          <NeoCard className="p-8 text-center">
            <HelpCircle className="mx-auto h-10 w-10 text-muted-foreground" />
            <div className="font-display text-lg mt-3">Nothing matched.</div>
            <p className="text-xs text-muted-foreground mt-1">Try a different keyword or open a ticket from Support.</p>
            <div className="mt-4"><Link to="/support"><NeoButton size="sm" variant="accent">Contact support</NeoButton></Link></div>
          </NeoCard>
        ) : (
          <div className="grid gap-3 sm:grid-cols-2">
            {filtered.map((f, i) => <FAQItem key={f.q + i} item={f} index={i} />)}
          </div>
        )}
      </div>

      {/* CTA */}
      <NeoCard className="p-6 sm:p-8 bg-secondary text-secondary-foreground relative overflow-hidden">
        <div className="pointer-events-none absolute -right-8 -bottom-8 h-40 w-40 rounded-full bg-accent/40 neo-border" />
        <div className="relative grid gap-4 sm:grid-cols-[1fr_auto] items-center">
          <div>
            <div className="text-[10px] uppercase tracking-widest opacity-80">Still stuck?</div>
            <div className="font-display text-2xl sm:text-3xl mt-1">The crew replies within an hour.</div>
            <p className="text-sm opacity-90 mt-1">Open a ticket, jump into Discord, or read the full Help Center.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link to="/help"><NeoButton variant="primary">Help Center</NeoButton></Link>
            <Link to="/support"><NeoButton variant="accent">Open ticket</NeoButton></Link>
          </div>
        </div>
      </NeoCard>
    </div>
  );
}
