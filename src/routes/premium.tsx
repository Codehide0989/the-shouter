import { createFileRoute } from "@tanstack/react-router";
import { NeoCard, NeoBadge, NeoButton, SectionHeader } from "@/components/neo";
import heroImg from "@/assets/premium-hero.jpg";

export const Route = createFileRoute("/premium")({
  head: () => ({
    meta: [
      { title: "Premium — The Shouter" },
      { name: "description", content: "Bigger events, more automations, and a shiny badge." },
      { property: "og:title", content: "Premium VIP — The Shouter" },
      { property: "og:description", content: "Luxury tier for creators, captains, and community leaders." },
      { property: "og:image", content: "/assets/premium-hero.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const PLANS = [
  { name: "Free", price: "$0", per: "forever", tag: "Get started", features: ["Public events", "1 team slot", "Standard badges", "Basic themes"], cta: "Current plan", disabled: true, tint: "bg-card" },
  { name: "Premium", price: "$9", per: "/ month", tag: "Most popular", features: ["Priority events", "5 team slots", "Premium badges", "All themes", "2× XP boost", "HD uploads"], cta: "Go Premium", featured: true, tint: "bg-accent text-accent-foreground" },
  { name: "Legendary", price: "$24", per: "/ month", tag: "For creators", features: ["Everything in Premium", "Unlimited teams", "Legendary frame", "Custom flair", "Priority support", "API access", "Season pass included"], cta: "Go Legendary", tint: "bg-secondary text-secondary-foreground" },
];

const BENEFITS = [
  { i: "👑", t: "Premium Badge", d: "A golden crown next to your name — everywhere." },
  { i: "🎨", t: "Exclusive Frames", d: "Animated profile frames and avatar borders." },
  { i: "🏆", t: "Priority Slots", d: "Get into full brackets ahead of the queue." },
  { i: "📤", t: "HD Uploads", d: "4K artwork, longer VODs, higher file caps." },
  { i: "🎭", t: "All Themes", d: "Every seasonal theme unlocked, plus Cyber Nights." },
  { i: "⚡", t: "2× XP Boost", d: "Double battle-pass and reward XP." },
  { i: "🎁", t: "Monthly Chest", d: "A guaranteed legendary drop each month." },
  { i: "💬", t: "Priority Support", d: "Skip the queue for tickets and appeals." },
];

const TESTIMONIALS = [
  { n: "Nova", h: "Team captain · S3 winner", q: "Priority slots got my squad into every bracket. Worth it for that alone." },
  { n: "Kite", h: "Featured artist", q: "HD uploads and the golden frame make my drops actually pop in the feed." },
  { n: "Blaze", h: "Community lead", q: "The monthly legendary chest is stupid generous. Every time." },
];

const FAQ = [
  ["Can I cancel any time?", "Yes — cancel from Settings and keep perks until the period ends."],
  ["Does Premium include the Season Pass?", "Legendary tier includes it. Premium gives a 50% discount."],
  ["Do I keep my badges if I downgrade?", "Any badge you've already earned is yours forever."],
  ["Refunds?", "Full refund within 14 days if you haven't used the monthly chest."],
];

function Page() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 space-y-12">
      {/* HERO */}
      <section className="relative neo-border neo-shadow rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 via-transparent to-accent/25">
        <img src={heroImg} alt="Premium VIP" className="absolute inset-0 h-full w-full object-cover opacity-90" width={1600} height={900} />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-transparent" />
        {/* Floating crystals */}
        {["💎","✨","👑","💜","⭐"].map((e, i) => (
          <span key={i} className="absolute text-2xl sm:text-3xl neo-border neo-shadow-sm bg-card rounded-full h-11 w-11 grid place-items-center animate-pulse"
            style={{ top: `${8 + i*15}%`, right: `${4 + (i%2)*10}%`, animationDelay: `${i*300}ms`, transform: `rotate(${i*20-30}deg)` }}>{e}</span>
        ))}
        <div className="relative min-h-[380px] sm:min-h-[460px] flex flex-col justify-end p-6 sm:p-10 max-w-2xl">
          <NeoBadge variant="accent" className="mb-3 w-fit">VIP · Members Only</NeoBadge>
          <h1 className="font-display text-4xl sm:text-6xl leading-none bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">Wear the Crown</h1>
          <p className="mt-3 text-sm sm:text-base text-foreground/90 max-w-lg">Bigger events, brighter badge, better everything. Support The Shouter and stand out.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <NeoButton variant="primary" size="lg">Upgrade — $9/mo</NeoButton>
            <NeoButton variant="ghost" size="lg">See benefits</NeoButton>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section>
        <SectionHeader eyebrow="Plans" title="Pick your tier" subtitle="Cancel anytime. Perks activate instantly." />
        <div className="grid gap-5 md:grid-cols-3">
          {PLANS.map((p) => (
            <NeoCard key={p.name} className={`p-6 relative overflow-hidden flex flex-col ${p.featured ? "md:-translate-y-3 md:neo-shadow-lg" : ""} ${p.tint}`}>
              {p.featured && (
                <div className="absolute top-3 right-3 rotate-6 neo-border neo-shadow-sm bg-background text-foreground rounded-md px-2 py-1 font-display text-[10px] uppercase">
                  Best value
                </div>
              )}
              <div className="text-[10px] uppercase tracking-widest opacity-80">{p.tag}</div>
              <div className="font-display text-3xl mt-1">{p.name}</div>
              <div className="mt-3 flex items-baseline gap-1">
                <div className="font-display text-5xl">{p.price}</div>
                <div className="text-xs opacity-80">{p.per}</div>
              </div>
              <ul className="mt-4 space-y-2 text-sm flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2 items-start">
                    <span className="mt-0.5">✓</span><span>{f}</span>
                  </li>
                ))}
              </ul>
              <NeoButton
                variant={p.featured ? "primary" : "ghost"}
                className="mt-5 w-full"
                disabled={p.disabled}
              >
                {p.cta}
              </NeoButton>
            </NeoCard>
          ))}
        </div>
      </section>

      {/* BENEFITS BENTO */}
      <section>
        <SectionHeader eyebrow="Perks" title="What you unlock" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b, i) => (
            <NeoCard key={b.t} className={`p-5 relative overflow-hidden group hover:-translate-y-1 transition-transform ${i === 0 ? "bg-accent text-accent-foreground shadow-[0_0_28px_hsl(var(--accent)/0.4)]" : ""}`}>
              <div className="text-4xl group-hover:scale-110 transition-transform">{b.i}</div>
              <div className="font-display text-lg mt-3">{b.t}</div>
              <p className="text-[11px] mt-1 opacity-80">{b.d}</p>
            </NeoCard>
          ))}
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section>
        <SectionHeader eyebrow="Compare" title="Free vs Premium vs Legendary" />
        <div className="neo-border neo-shadow rounded-lg overflow-x-auto">
          <table className="w-full text-sm min-w-[560px]">
            <thead>
              <tr className="bg-muted font-display uppercase text-xs">
                <th className="text-left p-3">Feature</th>
                <th className="p-3">Free</th>
                <th className="p-3 bg-accent text-accent-foreground">Premium</th>
                <th className="p-3 bg-secondary text-secondary-foreground">Legendary</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Team slots", "1", "5", "∞"],
                ["Tournament priority", "—", "✓", "✓"],
                ["XP multiplier", "1×", "2×", "3×"],
                ["Themes", "Basic", "All", "All + Cyber"],
                ["Upload quality", "1080p", "4K", "4K + RAW"],
                ["Monthly chest", "—", "Rare", "Legendary"],
                ["Season pass", "Buy", "50% off", "Included"],
                ["API access", "—", "—", "✓"],
              ].map((row) => (
                <tr key={row[0]} className="border-t-2 border-foreground/10">
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
            <NeoCard key={t.n} className="p-6 relative">
              <div className="text-5xl leading-none opacity-30 font-display">"</div>
              <p className="text-sm">{t.q}</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-10 w-10 neo-border neo-shadow-sm rounded-full bg-primary text-primary-foreground grid place-items-center font-display">
                  {t.n[0]}
                </div>
                <div>
                  <div className="font-display text-sm">{t.n}</div>
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
          <NeoCard className="p-5 bg-primary text-primary-foreground">
            <div className="font-display text-lg">Still deciding?</div>
            <p className="text-xs mt-2 opacity-90">Try Premium for a week. If it's not for you, we refund fully.</p>
            <NeoButton variant="ghost" className="mt-3 w-full">Start 7-day trial</NeoButton>
          </NeoCard>
        </div>
        <div className="space-y-3">
          {FAQ.map(([q, a]) => (
            <NeoCard key={q} className="p-4">
              <div className="font-display text-sm">{q}</div>
              <p className="text-[12px] text-muted-foreground mt-1">{a}</p>
            </NeoCard>
          ))}
        </div>
      </section>

      {/* CTA */}
      <NeoCard className="p-8 sm:p-10 bg-accent text-accent-foreground text-center relative overflow-hidden">
        <span className="absolute -top-6 -left-6 text-8xl opacity-20 rotate-12">👑</span>
        <span className="absolute -bottom-6 -right-6 text-8xl opacity-20 -rotate-12">💎</span>
        <NeoBadge variant="destructive">Limited</NeoBadge>
        <h3 className="font-display text-3xl sm:text-5xl mt-3">Ready to wear the crown?</h3>
        <p className="mt-3 max-w-xl mx-auto text-sm opacity-90">Upgrade now and grab this month's legendary chest before the timer runs out.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <NeoButton variant="primary" size="lg">Upgrade — $9/mo</NeoButton>
          <NeoButton variant="ghost" size="lg">Go Legendary — $24/mo</NeoButton>
        </div>
      </NeoCard>
    </div>
  );
}
