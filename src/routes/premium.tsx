import { createFileRoute } from "@tanstack/react-router";
import { NeoCard, NeoBadge, NeoButton, SectionHeader } from "@/components/neo";
import heroImg from "@/assets/premium-hero-v2.jpg";
import planFree from "@/assets/plan-free.jpg";
import planPremium from "@/assets/plan-premium.jpg";
import planLegendary from "@/assets/plan-legendary.jpg";

export const Route = createFileRoute("/premium")({
  head: () => ({
    meta: [
      { title: "Premium — The Shouter" },
      { name: "description", content: "Wear the crown. Golden perks, VIP slots, legendary chests." },
      { property: "og:title", content: "Premium VIP — The Shouter" },
      { property: "og:description", content: "Discord-Nitro-tier perks for creators, captains and communities." },
      { property: "og:image", content: "/assets/premium-hero-v2.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/assets/premium-hero-v2.jpg" },
    ],
  }),
  component: Page,
});

type Plan = {
  name: string;
  price: string;
  per: string;
  tag: string;
  ribbon?: string;
  mascot: string;
  art: string;
  bg: string;
  accent: string;
  chips: { i: string; t: string }[];
  features: string[];
  cta: string;
  disabled?: boolean;
  featured?: boolean;
};

const PLANS: Plan[] = [
  {
    name: "Free",
    price: "$0",
    per: "forever",
    tag: "Starter",
    mascot: "🎒",
    art: planFree,
    bg: "bg-card",
    accent: "text-muted-foreground",
    chips: [
      { i: "🎒", t: "Starter pack" },
      { i: "📛", t: "Basic badge" },
      { i: "📦", t: "Wooden chest" },
      { i: "🕹️", t: "Beginner" },
    ],
    features: ["Public events", "1 team slot", "Standard badges", "Basic themes", "Community access"],
    cta: "Current plan",
    disabled: true,
  },
  {
    name: "Premium",
    price: "$9",
    per: "/ month",
    tag: "Most popular",
    ribbon: "Best value",
    mascot: "👑",
    art: planPremium,
    bg: "bg-accent text-accent-foreground",
    accent: "opacity-90",
    chips: [
      { i: "👑", t: "Golden crown" },
      { i: "🏦", t: "Treasure vault" },
      { i: "💳", t: "VIP card" },
      { i: "💎", t: "Diamond" },
      { i: "🏆", t: "Gold trophy" },
      { i: "🦸", t: "Elite avatar" },
    ],
    features: ["Priority events", "5 team slots", "Premium badges", "All themes + Cyber", "2× XP boost", "HD 4K uploads", "Monthly rare chest"],
    cta: "Go Premium",
    featured: true,
  },
  {
    name: "Legendary",
    price: "$24",
    per: "/ month",
    tag: "For creators",
    mascot: "🐉",
    art: planLegendary,
    bg: "bg-secondary text-secondary-foreground",
    accent: "opacity-90",
    chips: [
      { i: "👑", t: "Royal throne" },
      { i: "🐲", t: "Dragon treasure" },
      { i: "⚔️", t: "Legendary sword" },
      { i: "💫", t: "Mythic crown" },
      { i: "🏰", t: "Golden castle" },
      { i: "✨", t: "Animated aura" },
    ],
    features: ["Everything in Premium", "Unlimited teams", "Legendary frame + aura", "Custom flair", "Priority support", "Full API access", "Season pass included", "Monthly legendary chest"],
    cta: "Go Legendary",
  },
];

const UNLOCKS = [
  { i: "🛡️", art: "bg-gradient-to-br from-primary/25 to-transparent", t: "Premium Badge", d: "A gold shield next to your name — everywhere.", tag: "Identity" },
  { i: "🖼️", art: "bg-gradient-to-br from-accent/30 to-transparent", t: "Exclusive Frames", d: "Animated profile frames only VIP members can equip.", tag: "Profile" },
  { i: "🎟️", art: "bg-gradient-to-br from-secondary/25 to-transparent", t: "Priority Slots", d: "Skip the queue into full brackets and premieres.", tag: "Access" },
  { i: "💎", art: "bg-gradient-to-br from-primary/30 to-transparent", t: "HD Uploads", d: "4K artwork, longer VODs, higher file caps.", tag: "Creator" },
  { i: "🎨", art: "bg-gradient-to-br from-accent/25 to-transparent", t: "Exclusive Themes", d: "Every seasonal palette + Cyber Nights unlocked.", tag: "Themes" },
  { i: "🖼️", art: "bg-gradient-to-br from-secondary/30 to-transparent", t: "Premium Gallery", d: "A luxury frame for your best artworks in the feed.", tag: "Gallery" },
  { i: "🔮", art: "bg-gradient-to-br from-primary/25 to-transparent", t: "AI Credits", d: "Monthly AI crystals for brackets, art & captions.", tag: "AI" },
  { i: "🤖", art: "bg-gradient-to-br from-accent/25 to-transparent", t: "Bot Features", d: "Advanced auto-roles, mod tools, and slash extensions.", tag: "Bot" },
  { i: "🏆", art: "bg-gradient-to-br from-secondary/25 to-transparent", t: "Tournament Slots", d: "Reserved brackets across every weekend cup.", tag: "Esports" },
  { i: "💳", art: "bg-gradient-to-br from-primary/30 to-transparent", t: "Premium Profile", d: "Luxury profile card with animated background.", tag: "Profile" },
  { i: "⚡", art: "bg-gradient-to-br from-accent/30 to-transparent", t: "2× XP Boost", d: "Double battle-pass and reward XP forever.", tag: "Progression" },
  { i: "🎁", art: "bg-gradient-to-br from-secondary/25 to-transparent", t: "Monthly Chest", d: "A guaranteed rare-plus drop, every single month.", tag: "Loot" },
];

const TESTIMONIALS = [
  { n: "Nova", h: "Team captain · S3 winner", q: "Priority slots got my squad into every bracket. Worth it for that alone." },
  { n: "Kite", h: "Featured artist", q: "HD uploads and the golden frame make my drops actually pop." },
  { n: "Blaze", h: "Community lead", q: "The monthly legendary chest is stupid generous. Every time." },
];

const FAQ = [
  ["Can I cancel any time?", "Yes — cancel from Settings and keep perks until the period ends."],
  ["Does Premium include the Season Pass?", "Legendary tier includes it. Premium gets a 50% discount."],
  ["Do I keep my badges if I downgrade?", "Any badge you've already earned is yours forever."],
  ["Refunds?", "Full refund within 14 days if you haven't opened the monthly chest."],
];

function Page() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 space-y-14">
      {/* HERO — split with premium artwork */}
      <section className="relative neo-border neo-shadow-lg rounded-lg overflow-hidden bg-gradient-to-br from-[#3b1f7a] via-[#2a1550] to-[#1a0f3d] text-white">
        <img src={heroImg} alt="Premium VIP hero" className="absolute inset-0 h-full w-full object-cover opacity-70" width={1600} height={900} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a0f3d]/95 via-[#2a1550]/70 to-transparent" />

        {/* Floating decorations */}
        <span className="absolute top-6 left-6 text-4xl sm:text-6xl animate-bounce" style={{ animationDuration: "3s" }}>👑</span>
        {["💎","💰","✨","🪙","💜","⭐","🌟"].map((e, i) => (
          <span
            key={i}
            className="absolute text-2xl sm:text-3xl neo-border neo-shadow-sm bg-card text-foreground rounded-full h-11 w-11 grid place-items-center animate-pulse"
            style={{
              top: `${10 + ((i * 12) % 70)}%`,
              right: `${4 + (i % 3) * 8}%`,
              animationDelay: `${i * 260}ms`,
              transform: `rotate(${i * 22 - 40}deg)`,
            }}
          >
            {e}
          </span>
        ))}

        <div className="relative min-h-[440px] sm:min-h-[520px] flex flex-col justify-end p-6 sm:p-12 max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="neo-border neo-shadow-sm bg-[#ffd23a] text-black rounded-md px-2 py-1 text-[10px] font-black uppercase tracking-widest animate-pulse">VIP · Members Only</span>
            <span className="neo-border neo-shadow-sm bg-white text-black rounded-md px-2 py-1 text-[10px] font-black uppercase tracking-widest">👑 Nitro-tier</span>
          </div>
          <h1 className="font-display text-4xl sm:text-7xl leading-[0.9] drop-shadow-[4px_4px_0_rgba(0,0,0,0.5)]">
            Wear the <span className="text-[#ffd23a]">Crown</span>
          </h1>
          <p className="mt-4 text-sm sm:text-lg text-white/90 max-w-lg">
            Golden badges, priority brackets, legendary chests, and a shine you can't fake. Support The Shouter and rule the feed.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <NeoButton variant="primary" size="lg" className="bg-[#ffd23a] text-black hover:scale-105 transition-transform">
              👑 Upgrade — $9/mo
            </NeoButton>
            <NeoButton variant="ghost" size="lg">See benefits ↓</NeoButton>
          </div>
          <div className="mt-6 flex flex-wrap gap-4 text-xs text-white/80">
            <span>⭐ 4.9/5 rated by 12k members</span>
            <span>·</span>
            <span>💳 Cancel anytime</span>
            <span>·</span>
            <span>🔒 14-day refund</span>
          </div>
        </div>
      </section>

      {/* PRICING — richly illustrated */}
      <section>
        <SectionHeader eyebrow="Plans" title="Pick your tier" subtitle="Every tier ships with its own artwork, mascot, and perks." />
        <div className="grid gap-6 md:grid-cols-3">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-lg neo-border overflow-hidden flex flex-col ${p.bg} ${p.featured ? "md:-translate-y-4 neo-shadow-lg ring-4 ring-[#ffd23a]/60 shadow-[0_0_36px_hsl(45_100%_58%/0.45)]" : "neo-shadow"}`}
            >
              {/* Ribbon */}
              {p.ribbon && (
                <div className="absolute -right-10 top-6 rotate-45 bg-[#ffd23a] text-black font-display text-[11px] uppercase tracking-widest px-12 py-1 neo-border z-20">
                  {p.ribbon}
                </div>
              )}

              {/* Plan Illustration */}
              <div className="relative h-48 overflow-hidden border-b-[3px] border-foreground">
                <img src={p.art} alt={`${p.name} plan`} loading="lazy" className="h-full w-full object-cover" width={1024} height={1024} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-3 left-3 h-14 w-14 grid place-items-center text-3xl neo-border neo-shadow-sm bg-card text-foreground rounded-full animate-bounce" style={{ animationDuration: "2.5s" }}>
                  {p.mascot}
                </div>
                <div className="absolute bottom-3 right-3 neo-border neo-shadow-sm bg-card text-foreground rounded-md px-2 py-1 text-[10px] font-black uppercase tracking-widest">
                  {p.tag}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="font-display text-3xl">{p.name}</div>
                <div className="mt-2 flex items-baseline gap-1">
                  <div className="font-display text-5xl">{p.price}</div>
                  <div className={`text-xs ${p.accent}`}>{p.per}</div>
                </div>

                {/* Chip cluster of themed illustrations */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.chips.map((c) => (
                    <span key={c.t} className="neo-border neo-shadow-sm bg-background text-foreground rounded-md px-2 py-1 text-[10px] font-display flex items-center gap-1">
                      <span className="text-sm">{c.i}</span>
                      {c.t}
                    </span>
                  ))}
                </div>

                <ul className="mt-5 space-y-2 text-sm flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2 items-start">
                      <span className={`mt-0.5 h-4 w-4 grid place-items-center rounded-full text-[10px] neo-border ${p.featured ? "bg-[#ffd23a] text-black" : "bg-primary text-primary-foreground"}`}>✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <NeoButton
                  variant={p.featured ? "primary" : "ghost"}
                  className={`mt-6 w-full ${p.featured ? "bg-[#ffd23a] text-black hover:scale-[1.02]" : ""} transition-transform`}
                  disabled={p.disabled}
                >
                  {p.cta}
                </NeoButton>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* UNLOCK BENTO — illustrated */}
      <section>
        <SectionHeader eyebrow="Perks" title="What you unlock" subtitle="Every perk ships with its own artwork, glow, and Learn More." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {UNLOCKS.map((b, i) => (
            <NeoCard
              key={b.t}
              className={`p-0 relative overflow-hidden group hover:-translate-y-1 transition-transform`}
            >
              {/* Mini background artwork */}
              <div className={`absolute inset-0 ${b.art}`} />
              <div className="absolute -top-6 -right-6 text-8xl opacity-10 rotate-12 group-hover:rotate-6 transition-transform">{b.i}</div>
              {/* Particles */}
              <span className="absolute top-3 right-3 text-xs opacity-60 animate-pulse" style={{ animationDelay: `${i*150}ms` }}>✨</span>

              <div className="relative p-5 flex flex-col h-full">
                <div className="flex items-start justify-between gap-2">
                  <div className={`h-14 w-14 grid place-items-center rounded-lg neo-border neo-shadow-sm text-3xl bg-card group-hover:scale-110 transition-transform shadow-[0_0_20px_hsl(var(--primary)/0.35)]`}>
                    {b.i}
                  </div>
                  <NeoBadge variant="muted">{b.tag}</NeoBadge>
                </div>
                <div className="font-display text-lg mt-4">{b.t}</div>
                <p className="text-[11px] mt-1 text-muted-foreground flex-1">{b.d}</p>
                <button className="mt-3 text-[10px] font-display uppercase tracking-widest underline underline-offset-2 self-start">Learn more →</button>
              </div>
            </NeoCard>
          ))}
        </div>
      </section>

      {/* COMPARISON */}
      <section>
        <SectionHeader eyebrow="Compare" title="Free vs Premium vs Legendary" />
        <div className="neo-border neo-shadow rounded-lg overflow-x-auto bg-card">
          <table className="w-full text-sm min-w-[640px]">
            <thead>
              <tr className="bg-muted font-display uppercase text-xs">
                <th className="text-left p-4">Feature</th>
                <th className="p-4">🎒 Free</th>
                <th className="p-4 bg-accent text-accent-foreground">👑 Premium</th>
                <th className="p-4 bg-secondary text-secondary-foreground">🐉 Legendary</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Team slots", "1", "5", "∞"],
                ["Tournament priority", "—", "✓", "✓✓"],
                ["XP multiplier", "1×", "2×", "3×"],
                ["Themes", "Basic", "All", "All + Cyber"],
                ["Upload quality", "1080p", "4K", "4K + RAW"],
                ["Monthly chest", "—", "Rare", "Legendary"],
                ["Profile frame", "Standard", "Golden", "Animated aura"],
                ["Season pass", "Buy", "50% off", "Included"],
                ["API access", "—", "—", "✓"],
                ["AI credits / mo", "50", "500", "2,000"],
              ].map((row) => (
                <tr key={row[0]} className="border-t-2 border-foreground/10 hover:bg-muted/40">
                  <td className="p-3 font-display">{row[0]}</td>
                  <td className="p-3 text-center text-muted-foreground">{row[1]}</td>
                  <td className="p-3 text-center bg-accent/10 font-display">{row[2]}</td>
                  <td className="p-3 text-center bg-secondary/10 font-display">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section>
        <SectionHeader eyebrow="Loud & clear" title="Members say" />
        <div className="grid gap-4 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <NeoCard key={t.n} className="p-6 relative overflow-hidden">
              <div className="absolute -top-4 -left-2 text-7xl leading-none opacity-15 font-display">"</div>
              <p className="text-sm relative">{t.q}</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-11 w-11 neo-border neo-shadow-sm rounded-full bg-primary text-primary-foreground grid place-items-center font-display text-lg">
                  {t.n[0]}
                </div>
                <div>
                  <div className="font-display text-sm flex items-center gap-1">{t.n} <span className="text-[#ffd23a]">👑</span></div>
                  <div className="text-[11px] text-muted-foreground">{t.h}</div>
                </div>
              </div>
            </NeoCard>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <SectionHeader eyebrow="Questions" title="FAQ" subtitle="Straight answers, no fine print." />
          <NeoCard className="p-6 bg-primary text-primary-foreground relative overflow-hidden">
            <span className="absolute -top-4 -right-4 text-7xl opacity-20 rotate-12">💜</span>
            <div className="font-display text-xl relative">Still deciding?</div>
            <p className="text-xs mt-2 opacity-90 relative">Try Premium for 7 days. Full refund if it's not for you.</p>
            <NeoButton variant="ghost" className="mt-4 w-full relative">Start 7-day trial</NeoButton>
          </NeoCard>
        </div>
        <div className="space-y-3">
          {FAQ.map(([q, a]) => (
            <NeoCard key={q} className="p-4 hover:-translate-y-0.5 transition-transform">
              <div className="font-display text-sm">Q · {q}</div>
              <p className="text-[12px] text-muted-foreground mt-1">{a}</p>
            </NeoCard>
          ))}
        </div>
      </section>

      {/* CTA */}
      <NeoCard className="p-8 sm:p-12 bg-gradient-to-br from-[#3b1f7a] via-[#5a2ea6] to-[#ffd23a] text-white text-center relative overflow-hidden neo-shadow-lg">
        {["👑","💎","🪙","✨","🏆","💜"].map((e, i) => (
          <span key={i} className="absolute text-6xl opacity-25 animate-pulse" style={{
            top: `${(i*17)%80}%`, left: `${(i*29)%85}%`,
            animationDelay: `${i*300}ms`, transform: `rotate(${i*35}deg)`
          }}>{e}</span>
        ))}
        <NeoBadge variant="destructive" className="relative">Limited · Ends this month</NeoBadge>
        <h3 className="font-display text-3xl sm:text-6xl mt-4 relative drop-shadow-[4px_4px_0_rgba(0,0,0,0.4)]">Ready to wear the crown?</h3>
        <p className="mt-3 max-w-xl mx-auto text-sm sm:text-base relative opacity-95">Upgrade now and grab this month's legendary chest before the timer runs out.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3 relative">
          <NeoButton variant="primary" size="lg" className="bg-[#ffd23a] text-black">👑 Upgrade — $9/mo</NeoButton>
          <NeoButton variant="ghost" size="lg">🐉 Go Legendary — $24/mo</NeoButton>
        </div>
      </NeoCard>
    </div>
  );
}
