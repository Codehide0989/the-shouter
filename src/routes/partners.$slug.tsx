import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { NeoCard, NeoBadge, NeoButton, SectionHeader } from "@/components/neo";
import { heroUrl } from "@/components/dashboard-page";
import { PARTNERS } from "@/lib/partners-data";
import { ArrowLeft, ArrowRight, Globe, MapPin, CheckCircle2, Calendar, Handshake, Mail } from "lucide-react";

export const Route = createFileRoute("/partners/$slug")({
  loader: ({ params }) => {
    const partner = PARTNERS.find((p) => p.slug === params.slug);
    if (!partner) throw notFound();
    return { partner };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Partner not found — The Shouter" }, { name: "robots", content: "noindex" }] };
    const p = loaderData.partner;
    return {
      meta: [
        { title: `${p.name} — Partners · The Shouter` },
        { name: "description", content: p.blurb },
        { property: "og:title", content: `${p.name} — Partners · The Shouter` },
        { property: "og:description", content: p.blurb },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: PartnerDetail,
  notFoundComponent: NotFoundPartner,
});

function NotFoundPartner() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 text-center space-y-4">
      <h1 className="font-display text-3xl">Partner not found</h1>
      <Link to="/partners"><NeoButton>Back to partners</NeoButton></Link>
    </div>
  );
}

function PartnerDetail() {
  const { partner } = Route.useLoaderData() as { partner: (typeof PARTNERS)[number] };
  const idx = PARTNERS.findIndex((p) => p.slug === partner.slug);
  const related = PARTNERS.filter((p) => p.tier === partner.tier && p.slug !== partner.slug).slice(0, 3);
  const next = PARTNERS[(idx + 1) % PARTNERS.length];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      {/* Breadcrumb */}
      <div className="text-xs text-muted-foreground">
        <Link to="/partners" className="hover:text-foreground inline-flex items-center gap-1"><ArrowLeft className="h-3 w-3" /> Partners</Link>
        <span className="mx-2">/</span><span>{partner.tier}</span>
        <span className="mx-2">/</span><span className="text-foreground">{partner.name}</span>
      </div>

      {/* Hero */}
      <div className="relative neo-border neo-shadow-lg rounded-lg overflow-hidden bg-card">
        <img src={heroUrl(partner.cover)} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className={`absolute inset-0 bg-gradient-to-br ${partner.tint} to-background/90`} />
        <div className="relative p-6 sm:p-10 grid gap-6 lg:grid-cols-[2fr_1fr] items-end">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <NeoBadge variant="accent">{partner.tier}</NeoBadge>
              <NeoBadge variant="muted">{partner.category}</NeoBadge>
              {partner.featured && <NeoBadge variant="primary">★ Featured</NeoBadge>}
            </div>
            <div className="flex items-center gap-3 mt-4">
              <div className="neo-border neo-shadow-sm bg-card rounded-md h-16 w-16 grid place-items-center font-display text-2xl shrink-0">{partner.mark}</div>
              <div className="min-w-0">
                <h1 className="font-display text-3xl sm:text-5xl leading-tight truncate">{partner.name}</h1>
                <p className="text-sm text-muted-foreground mt-1">{partner.blurb}</p>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-3 text-[11px] font-display uppercase tracking-widest text-muted-foreground">
              <span className="inline-flex items-center gap-1"><Globe className="h-3 w-3" /> {partner.website}</span>
              <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" /> {partner.location}</span>
              <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" /> Since {partner.since}</span>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              <NeoButton variant="primary"><Handshake className="h-4 w-4" /> Contact partner</NeoButton>
              <Link to="/contact"><NeoButton variant="ghost">Become a partner <ArrowRight className="h-3.5 w-3.5" /></NeoButton></Link>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            {partner.stats.map((s) => (
              <div key={s.l} className="neo-border neo-shadow-sm bg-background rounded-md p-3">
                <div className="font-display text-2xl">{s.n}</div>
                <div className="text-[10px] uppercase text-muted-foreground tracking-widest">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
        <div className="min-w-0 space-y-10">
          {/* About */}
          <section>
            <SectionHeader eyebrow="About" title={`Who is ${partner.name}?`} />
            <NeoCard className="p-6 text-[15px] leading-relaxed text-foreground/90">{partner.about}</NeoCard>
          </section>

          {/* Benefits */}
          <section>
            <SectionHeader eyebrow="Partnership benefits" title="What we ship together" />
            <div className="grid gap-3 sm:grid-cols-2">
              {partner.benefits.map((b) => (
                <NeoCard key={b} className="p-4 flex gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[color:var(--success)]" />
                  <div className="text-sm">{b}</div>
                </NeoCard>
              ))}
            </div>
          </section>

          {/* Featured projects */}
          <section>
            <SectionHeader eyebrow="Projects" title="Featured collaborations" />
            <div className="grid gap-4 sm:grid-cols-2">
              {partner.projects.map((pr) => (
                <NeoCard key={pr.title} className="p-0 overflow-hidden hover:-translate-y-1 transition-transform">
                  <div className="relative aspect-[16/9]">
                    <img src={heroUrl(pr.cover)} alt="" className="absolute inset-0 h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/85 to-transparent" />
                  </div>
                  <div className="p-4">
                    <div className="font-display text-lg">{pr.title}</div>
                    <p className="text-sm text-muted-foreground mt-1">{pr.desc}</p>
                  </div>
                </NeoCard>
              ))}
            </div>
          </section>

          {/* Gallery */}
          <section>
            <SectionHeader eyebrow="Gallery" title="Screenshots & artwork" />
            <div className="grid gap-3 grid-cols-2 sm:grid-cols-4">
              {partner.gallery.map((g, i) => (
                <div key={i} className="neo-border neo-shadow-sm rounded-md overflow-hidden aspect-square relative">
                  <img src={heroUrl(g)} alt="" className="absolute inset-0 h-full w-full object-cover" />
                </div>
              ))}
            </div>
          </section>

          {/* Related */}
          {related.length > 0 && (
            <section>
              <SectionHeader eyebrow="Also in this tier" title="Related partners" />
              <div className="grid gap-4 sm:grid-cols-3">
                {related.map((r) => (
                  <Link key={r.slug} to="/partners/$slug" params={{ slug: r.slug }}
                    className="neo-border neo-shadow-sm rounded-md overflow-hidden bg-card hover:-translate-y-1 transition-transform">
                    <div className="relative aspect-[16/9]">
                      <img src={heroUrl(r.cover)} alt="" className="absolute inset-0 h-full w-full object-cover" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${r.tint} to-background/70`} />
                    </div>
                    <div className="p-3">
                      <div className="font-display text-sm">{r.name}</div>
                      <div className="text-[10px] text-muted-foreground mt-0.5 line-clamp-1">{r.blurb}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Next */}
          <Link to="/partners/$slug" params={{ slug: next.slug }}
            className="neo-border neo-shadow-sm rounded-md p-4 bg-card hover:-translate-y-0.5 transition-transform block text-right">
            <div className="text-[10px] font-display uppercase tracking-widest text-muted-foreground inline-flex items-center gap-1 justify-end w-full">
              Next partner <ArrowRight className="h-3 w-3" />
            </div>
            <div className="font-display text-sm mt-1">{next.name}</div>
          </Link>
        </div>

        {/* Sidebar */}
        <aside className="lg:sticky lg:top-24 lg:self-start space-y-4">
          <NeoCard className="p-5">
            <div className="text-[10px] font-display uppercase tracking-widest text-muted-foreground">Partnership timeline</div>
            <ol className="mt-3 space-y-3">
              {partner.timeline.map((t) => (
                <li key={t.label} className="flex gap-3">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-primary neo-border" />
                  <div>
                    <div className="text-[10px] font-display uppercase tracking-widest text-muted-foreground">{t.date}</div>
                    <div className="text-sm">{t.label}</div>
                  </div>
                </li>
              ))}
            </ol>
          </NeoCard>
          <NeoCard className="p-5 bg-primary text-primary-foreground">
            <div className="font-display text-lg">Want to partner with us too?</div>
            <p className="text-xs opacity-90 mt-1">Same tier, same benefits. We reply in 3 days.</p>
            <Link to="/contact" className="block mt-3"><NeoButton variant="accent" className="w-full"><Mail className="h-4 w-4" /> Apply now</NeoButton></Link>
          </NeoCard>
        </aside>
      </div>
    </div>
  );
}
