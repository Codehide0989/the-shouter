import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { NeoCard, NeoBadge, NeoButton, SectionHeader } from "@/components/neo";
import { heroUrl } from "@/components/dashboard-page";
import { SPONSOR_PACKAGES } from "@/lib/partners-data";
import { ArrowLeft, ArrowRight, CheckCircle2, Trophy, Star, Crown, Gem, Sparkles, Mail } from "lucide-react";

const PACKAGE_ICONS: Record<string, typeof Star> = { bronze: Star, silver: Trophy, gold: Crown, platinum: Gem, diamond: Sparkles };
const PACKAGE_ART: Record<string, string> = {
  bronze: "rank-bronze", silver: "rank-silver", gold: "rank-gold", platinum: "tier-platinum", diamond: "tier-diamond",
};

export const Route = createFileRoute("/sponsors/package/$slug")({
  loader: ({ params }) => {
    const pkg = SPONSOR_PACKAGES.find((p) => p.slug === params.slug);
    if (!pkg) throw notFound();
    return { pkg };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Package not found — The Shouter" }, { name: "robots", content: "noindex" }] };
    const p = loaderData.pkg;
    return {
      meta: [
        { title: `${p.name} sponsorship — ${p.price} · The Shouter` },
        { name: "description", content: p.tagline },
        { property: "og:title", content: `${p.name} sponsorship — The Shouter` },
        { property: "og:description", content: p.tagline },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: PackageDetail,
  notFoundComponent: NotFoundPkg,
});

function NotFoundPkg() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 text-center space-y-4">
      <h1 className="font-display text-3xl">Package not found</h1>
      <Link to="/sponsors"><NeoButton>Back to sponsors</NeoButton></Link>
    </div>
  );
}

function PackageDetail() {
  const { pkg } = Route.useLoaderData() as { pkg: (typeof SPONSOR_PACKAGES)[number] };
  const Icon = PACKAGE_ICONS[pkg.slug] ?? Star;
  const idx = SPONSOR_PACKAGES.findIndex((p) => p.slug === pkg.slug);
  const others = SPONSOR_PACKAGES.filter((p) => p.slug !== pkg.slug);
  const next = SPONSOR_PACKAGES[(idx + 1) % SPONSOR_PACKAGES.length];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      <div className="text-xs text-muted-foreground">
        <Link to="/sponsors" className="hover:text-foreground inline-flex items-center gap-1"><ArrowLeft className="h-3 w-3" /> Sponsors</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{pkg.name}</span>
      </div>

      {/* Hero */}
      <div className="relative neo-border neo-shadow-lg rounded-lg overflow-hidden bg-card">
        <img src={heroUrl(pkg.cover)} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className={`absolute inset-0 bg-gradient-to-br ${pkg.tint} to-background/90`} />
        {pkg.ribbon === "VIP" && (
          <div className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none"
            style={{ backgroundImage: "radial-gradient(circle at 20% 30%, white 1px, transparent 2px), radial-gradient(circle at 70% 70%, white 1px, transparent 2px)", backgroundSize: "60px 60px" }} />
        )}
        <div className="relative p-6 sm:p-12 grid gap-6 lg:grid-cols-[2fr_1fr] items-end">
          <div>
            <div className="flex flex-wrap gap-2 items-center">
              <NeoBadge variant="accent">{pkg.name}</NeoBadge>
              {pkg.ribbon && <NeoBadge variant="primary">{pkg.ribbon}</NeoBadge>}
            </div>
            <div className="flex items-center gap-4 mt-4">
              <div className="neo-border neo-shadow-sm bg-card rounded-md h-20 w-20 grid place-items-center shrink-0 overflow-hidden">
                <img src={heroUrl(PACKAGE_ART[pkg.slug] ?? pkg.cover)} alt={`${pkg.name} tier crest`} width={768} height={768} className="h-16 w-16 object-contain" />
              </div>
              <div className="min-w-0">
                <h1 className="font-display text-3xl sm:text-5xl leading-tight">{pkg.name} sponsorship</h1>
                <div className="font-display text-lg text-accent mt-1">{pkg.price}</div>
              </div>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground mt-4 max-w-xl">{pkg.tagline}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Link to="/contact"><NeoButton variant="primary"><Mail className="h-4 w-4" /> Apply for {pkg.name}</NeoButton></Link>
              <Link to="/sponsors"><NeoButton variant="ghost">Compare tiers <ArrowRight className="h-3.5 w-3.5" /></NeoButton></Link>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            {pkg.reach.map((r) => (
              <div key={r.l} className="neo-border neo-shadow-sm bg-background rounded-md p-3">
                <div className="font-display text-xl sm:text-2xl">{r.n}</div>
                <div className="text-[10px] uppercase text-muted-foreground tracking-widest">{r.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Perks grid */}
      <section>
        <SectionHeader eyebrow="Perks" title="Everything included" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {pkg.perks.map((k, i) => (
            <NeoCard key={k} className="p-4 flex gap-3 items-start">
              <span className="neo-border neo-shadow-sm bg-primary text-primary-foreground rounded-md h-8 w-8 grid place-items-center font-display text-xs shrink-0">{String(i + 1).padStart(2, "0")}</span>
              <div className="text-sm">{k}</div>
            </NeoCard>
          ))}
        </div>
      </section>

      {/* Case studies / gallery */}
      <section>
        <SectionHeader eyebrow="Case studies" title="Sponsors who ran this tier" />
        <div className="grid gap-4 sm:grid-cols-2">
          {pkg.cases.map((c) => (
            <NeoCard key={c.title} className="p-0 overflow-hidden">
              <div className="relative aspect-[16/9]">
                <img src={heroUrl(c.cover)} alt="" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/85 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <div className="font-display text-xl">{c.title}</div>
                </div>
              </div>
              <div className="p-4 text-sm text-muted-foreground">{c.desc}</div>
            </NeoCard>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section>
        <SectionHeader eyebrow="FAQ" title="Common questions" />
        <div className="space-y-3">
          {pkg.faq.map((f) => (
            <NeoCard key={f.q} className="p-5">
              <div className="font-display text-base">{f.q}</div>
              <p className="text-sm text-muted-foreground mt-2">{f.a}</p>
            </NeoCard>
          ))}
        </div>
      </section>

      {/* Compare with others */}
      <section>
        <SectionHeader eyebrow="Compare" title="Other tiers" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((o) => {
            const OIcon = PACKAGE_ICONS[o.slug] ?? Star;
            return (
              <Link key={o.slug} to="/sponsors/package/$slug" params={{ slug: o.slug }}
                className="neo-border neo-shadow-sm rounded-md p-4 bg-card hover:-translate-y-1 transition-transform block">
                <div className="flex items-center gap-2">
                  <OIcon className="h-4 w-4" />
                  <div className="font-display">{o.name}</div>
                </div>
                <div className="text-xs text-muted-foreground mt-1">{o.price}</div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA + next */}
      <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
        <NeoCard className="p-6 sm:p-8 bg-secondary text-secondary-foreground">
          <div className="font-display text-2xl">Ready to lock {pkg.name}?</div>
          <p className="text-sm opacity-90 mt-2">Reply within 48h. Category exclusivity is first-come.</p>
          <div className="mt-4"><Link to="/contact"><NeoButton variant="accent"><Mail className="h-4 w-4" /> Send application</NeoButton></Link></div>
        </NeoCard>
        <Link to="/sponsors/package/$slug" params={{ slug: next.slug }}
          className="neo-border neo-shadow-sm rounded-md p-6 bg-card hover:-translate-y-0.5 transition-transform block">
          <div className="text-[10px] font-display uppercase tracking-widest text-muted-foreground inline-flex items-center gap-1">
            Next tier <ArrowRight className="h-3 w-3" />
          </div>
          <div className="font-display text-lg mt-1">{next.name}</div>
          <div className="text-xs text-muted-foreground">{next.price}</div>
        </Link>
      </div>
    </div>
  );
}
