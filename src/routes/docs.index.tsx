import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { NeoCard, NeoBadge, NeoButton, SectionHeader } from "@/components/neo";
import { heroUrl } from "@/components/dashboard-page";
import { DOC_ARTICLES, DOC_CATEGORIES } from "@/lib/docs-data";
import { Search, BookOpen, Clock, ArrowRight, Rocket, Terminal, Trophy, Users, MessagesSquare, Sparkles, Code2, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/docs/")({
  head: () => ({
    meta: [
      { title: "Documentation — The Shouter" },
      { name: "description", content: "Guides, references and deep-dives to run events, teams, and the bot end-to-end." },
      { property: "og:title", content: "Documentation — The Shouter" },
      { property: "og:description", content: "Guides, references and deep-dives to run events, teams, and the bot end-to-end." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/docs" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/docs" }],
  }),
  component: Page,
});

const CAT_ICON: Record<string, typeof Rocket> = {
  Rocket, Terminal, Trophy, Users, MessagesSquare, Sparkles, Code2, ShieldCheck, BookOpen,
};

const DIFF_STYLE: Record<string, { badge: "success" | "secondary" | "destructive"; label: string }> = {
  Beginner: { badge: "success", label: "Beginner" },
  Intermediate: { badge: "secondary", label: "Intermediate" },
  Advanced: { badge: "destructive", label: "Advanced" },
};

function Page() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<string>("All");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return DOC_ARTICLES.filter((a) => (cat === "All" || a.category === cat))
      .filter((a) =>
        !q ||
        a.title.toLowerCase().includes(q) ||
        a.description.toLowerCase().includes(q) ||
        a.tags.some((t) => t.includes(q))
      );
  }, [query, cat]);

  const featured = DOC_ARTICLES[0];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      {/* Hero */}
      <div className="relative neo-border neo-shadow-lg rounded-lg overflow-hidden bg-card">
        <img src={heroUrl("settings-hero")} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/30" />
        <div className="relative p-6 sm:p-10 lg:p-14 grid gap-6 lg:grid-cols-[2fr_1fr] items-end">
          <div>
            <NeoBadge variant="accent">Learn</NeoBadge>
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl mt-3 leading-tight">Documentation.</h1>
            <p className="text-sm sm:text-base text-muted-foreground mt-2 max-w-xl">
              Everything you need to run events, wire up the bot, manage teams, and ship season after season.
            </p>
            <div className="mt-6 flex items-center gap-2 neo-border neo-shadow-sm bg-background rounded-md pl-3 pr-1 py-1 max-w-md">
              <Search className="h-4 w-4 text-muted-foreground shrink-0" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles, commands, tags…"
                className="bg-transparent outline-none text-sm flex-1 py-1.5"
              />
              <NeoButton size="sm">Search</NeoButton>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            <NeoCard className="p-3">
              <div className="font-display text-2xl">{DOC_ARTICLES.length}</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Articles</div>
            </NeoCard>
            <NeoCard className="p-3">
              <div className="font-display text-2xl">{DOC_CATEGORIES.length}</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Categories</div>
            </NeoCard>
            <NeoCard className="p-3">
              <div className="font-display text-2xl">{DOC_ARTICLES.reduce((s, a) => s + a.readMin, 0)}m</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Reading</div>
            </NeoCard>
          </div>
        </div>
      </div>

      {/* Featured */}
      <div>
        <SectionHeader eyebrow="Featured" title="Start here" />
        <Link
          to="/docs/$slug"
          params={{ slug: featured.slug }}
          className="group block neo-border neo-shadow-lg rounded-lg overflow-hidden bg-card hover:-translate-y-1 transition-transform"
        >
          <div className="grid lg:grid-cols-2">
            <div className="relative aspect-[16/10] lg:aspect-auto">
              <img src={heroUrl(featured.heroKey)} alt="" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 flex gap-2">
                <NeoBadge variant="accent">{featured.category}</NeoBadge>
                <NeoBadge variant={DIFF_STYLE[featured.difficulty].badge}>{featured.difficulty}</NeoBadge>
              </div>
            </div>
            <div className="p-6 sm:p-8 flex flex-col justify-center gap-3">
              <div className="text-[11px] font-display uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                <Clock className="h-3 w-3" /> {featured.readMin} min · updated {featured.updated}
              </div>
              <div className="font-display text-2xl sm:text-3xl leading-tight">{featured.title}</div>
              <p className="text-sm text-muted-foreground">{featured.description}</p>
              <div className="inline-flex items-center gap-2 text-sm font-display uppercase tracking-widest">
                Read guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Category chips */}
      <div className="flex flex-wrap gap-2">
        {["All", ...DOC_CATEGORIES].map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`neo-border neo-shadow-sm rounded-md px-3 py-1.5 text-xs font-display uppercase tracking-widest transition ${
              cat === c ? "bg-primary text-primary-foreground" : "bg-card hover:bg-muted"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div>
        <SectionHeader eyebrow="Library" title={`${results.length} article${results.length === 1 ? "" : "s"}`} />
        {results.length === 0 ? (
          <NeoCard className="p-10 text-center text-sm text-muted-foreground">
            Nothing matched. Try a different keyword.
          </NeoCard>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((a) => {
              const Icon = CAT_ICON[a.categoryIcon] ?? BookOpen;
              const diff = DIFF_STYLE[a.difficulty];
              return (
                <Link
                  key={a.slug}
                  to="/docs/$slug"
                  params={{ slug: a.slug }}
                  className="group neo-border neo-shadow-lg rounded-lg overflow-hidden bg-card flex flex-col hover:-translate-y-1 transition-transform"
                >
                  <div className="relative aspect-[16/9]">
                    <img src={heroUrl(a.heroKey)} alt="" className="absolute inset-0 h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="neo-border neo-shadow-sm bg-background rounded-md h-9 w-9 grid place-items-center">
                        <Icon className="h-4 w-4" />
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 flex gap-1.5">
                      <NeoBadge variant={diff.badge}>{diff.label}</NeoBadge>
                    </div>
                    <div className="absolute bottom-3 left-3">
                      <NeoBadge variant="muted">{a.category}</NeoBadge>
                    </div>
                  </div>
                  <div className="p-4 flex-1 flex flex-col gap-2">
                    <div className="font-display text-lg leading-tight">{a.title}</div>
                    <p className="text-xs text-muted-foreground line-clamp-2">{a.description}</p>
                    <div className="mt-auto pt-2 flex items-center justify-between text-[11px] text-muted-foreground">
                      <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {a.readMin} min</span>
                      <span className="inline-flex items-center gap-1 font-display uppercase tracking-widest group-hover:text-foreground">
                        Read <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
