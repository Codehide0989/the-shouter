import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { NeoCard, NeoBadge, NeoButton, SectionHeader } from "@/components/neo";
import { heroUrl } from "@/components/dashboard-page";
import { DOC_ARTICLES, DOC_CATEGORIES } from "@/lib/docs-data";
import { ArrowLeft, ArrowRight, BookOpen, Clock } from "lucide-react";

export const Route = createFileRoute("/docs/category/$slug")({
  loader: ({ params }) => {
    const category = DOC_CATEGORIES.find((c) => c.toLowerCase() === params.slug.toLowerCase());
    if (!category) throw notFound();
    const articles = DOC_ARTICLES.filter((a) => a.category === category);
    return { category, articles };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Category not found — Docs · The Shouter" }, { name: "robots", content: "noindex" }] };
    return {
      meta: [
        { title: `${loaderData.category} — Docs · The Shouter` },
        { name: "description", content: `${loaderData.articles.length} articles in ${loaderData.category}.` },
        { property: "og:title", content: `${loaderData.category} — Docs · The Shouter` },
        { property: "og:description", content: `${loaderData.articles.length} articles in ${loaderData.category}.` },
        { property: "og:type", content: "website" },
      ],
    };
  },
  component: CategoryPage,
  notFoundComponent: NotFoundCat,
});

function NotFoundCat() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 text-center space-y-4">
      <h1 className="font-display text-3xl">Category not found</h1>
      <Link to="/docs"><NeoButton>Back to docs</NeoButton></Link>
    </div>
  );
}

function CategoryPage() {
  const { category, articles } = Route.useLoaderData() as { category: string; articles: typeof DOC_ARTICLES };
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      <div className="text-xs text-muted-foreground">
        <Link to="/docs" className="hover:text-foreground inline-flex items-center gap-1"><ArrowLeft className="h-3 w-3" /> Docs</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{category}</span>
      </div>

      <div className="relative neo-border neo-shadow-lg rounded-lg overflow-hidden bg-card">
        <img src={heroUrl(articles[0]?.heroKey ?? "settings-hero")} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/40" />
        <div className="relative p-6 sm:p-10">
          <NeoBadge variant="accent">Category</NeoBadge>
          <h1 className="font-display text-3xl sm:text-5xl mt-3 leading-tight">{category}</h1>
          <p className="text-sm text-muted-foreground mt-2">{articles.length} article{articles.length === 1 ? "" : "s"} in this section.</p>
        </div>
      </div>

      <SectionHeader eyebrow="Library" title={`${articles.length} articles`} />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((a) => (
          <Link key={a.slug} to="/docs/$slug" params={{ slug: a.slug }}
            className="neo-border neo-shadow-lg rounded-lg overflow-hidden bg-card group hover:-translate-y-1 transition-transform">
            <div className="relative aspect-[16/9]">
              <img src={heroUrl(a.heroKey)} alt="" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute top-3 left-3"><NeoBadge variant="muted">{a.difficulty}</NeoBadge></div>
            </div>
            <div className="p-4">
              <div className="font-display text-lg leading-tight">{a.title}</div>
              <p className="text-xs text-muted-foreground mt-2 line-clamp-2">{a.description}</p>
              <div className="mt-3 flex items-center justify-between text-[10px] text-muted-foreground">
                <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {a.readMin} min</span>
                <span className="inline-flex items-center gap-1 font-display uppercase tracking-widest group-hover:text-foreground">Read <ArrowRight className="h-3 w-3" /></span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div>
        <SectionHeader eyebrow="Browse" title="All categories" />
        <div className="flex flex-wrap gap-2">
          {DOC_CATEGORIES.map((c) => (
            <Link key={c} to="/docs/category/$slug" params={{ slug: c.toLowerCase() }}
              className={`neo-border neo-shadow-sm rounded-md px-3 py-1.5 text-xs font-display uppercase tracking-widest bg-card hover:bg-muted inline-flex items-center gap-1 ${c === category ? "bg-primary text-primary-foreground" : ""}`}>
              <BookOpen className="h-3 w-3" /> {c}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
