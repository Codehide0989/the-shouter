import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { NeoCard, NeoBadge, NeoButton, SectionHeader } from "@/components/neo";
import { heroUrl } from "@/components/dashboard-page";
import { DOC_ARTICLES, type DocBlock } from "@/lib/docs-data";
import { Clock, Copy, Check, ArrowLeft, ArrowRight, Share2, Info, Lightbulb, AlertTriangle, ThumbsUp, ThumbsDown } from "lucide-react";

export const Route = createFileRoute("/docs/$slug")({
  loader: ({ params }) => {
    const article = DOC_ARTICLES.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Article not found — The Shouter" }, { name: "robots", content: "noindex" }] };
    }
    const a = loaderData.article;
    return {
      meta: [
        { title: `${a.title} — Docs · The Shouter` },
        { name: "description", content: a.description },
        { property: "og:title", content: a.title },
        { property: "og:description", content: a.description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: Article,
  notFoundComponent: NotFound,
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-3xl px-4 py-16 text-center">
      <h1 className="font-display text-3xl">Something broke.</h1>
      <p className="text-sm text-muted-foreground mt-2">{String(error)}</p>
    </div>
  ),
});

function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 text-center space-y-4">
      <h1 className="font-display text-3xl">Article not found</h1>
      <p className="text-sm text-muted-foreground">That doc doesn't exist. Browse the library:</p>
      <Link to="/docs" className="inline-block"><NeoButton>Back to docs</NeoButton></Link>
    </div>
  );
}

function CodeBlock({ code, lang }: { code: string; lang: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="neo-border neo-shadow-sm rounded-md overflow-hidden bg-background">
      <div className="flex items-center justify-between px-3 py-1.5 border-b-2 border-border bg-muted/40">
        <span className="text-[10px] font-display uppercase tracking-widest text-muted-foreground">{lang}</span>
        <button
          onClick={() => { navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 1500); }}
          className="text-[10px] font-display uppercase tracking-widest inline-flex items-center gap-1 hover:text-primary"
        >
          {copied ? <><Check className="h-3 w-3" /> Copied</> : <><Copy className="h-3 w-3" /> Copy</>}
        </button>
      </div>
      <pre className="p-3 text-[12px] font-mono overflow-x-auto"><code>{code}</code></pre>
    </div>
  );
}

const CALLOUT: Record<string, { icon: typeof Info; cls: string; label: string }> = {
  note: { icon: Info, cls: "bg-secondary/15 border-secondary", label: "Note" },
  tip: { icon: Lightbulb, cls: "bg-[color:var(--success)]/15 border-[color:var(--success)]", label: "Tip" },
  warning: { icon: AlertTriangle, cls: "bg-destructive/15 border-destructive", label: "Warning" },
};

function Block({ block }: { block: DocBlock }) {
  switch (block.type) {
    case "p":
      return <p className="text-[15px] leading-relaxed text-foreground/90">{block.text}</p>;
    case "h2":
      return <h2 id={block.id} className="font-display text-2xl sm:text-3xl mt-8 scroll-mt-24">{block.text}</h2>;
    case "h3":
      return <h3 className="font-display text-xl mt-4">{block.text}</h3>;
    case "ul":
      return <ul className="list-disc pl-5 space-y-1.5 text-[15px]">{block.items.map((i, k) => <li key={k}>{i}</li>)}</ul>;
    case "ol":
      return <ol className="list-decimal pl-5 space-y-1.5 text-[15px]">{block.items.map((i, k) => <li key={k}>{i}</li>)}</ol>;
    case "code":
      return <CodeBlock code={block.code} lang={block.lang} />;
    case "callout": {
      const c = CALLOUT[block.kind];
      const Icon = c.icon;
      return (
        <div className={`neo-border neo-shadow-sm rounded-md p-4 flex gap-3 ${c.cls}`}>
          <Icon className="h-5 w-5 shrink-0 mt-0.5" />
          <div>
            <div className="font-display text-sm uppercase tracking-widest">{c.label} · {block.title}</div>
            <p className="text-sm mt-1">{block.text}</p>
          </div>
        </div>
      );
    }
    case "img":
      return (
        <figure className="neo-border neo-shadow-sm rounded-md overflow-hidden bg-card">
          <img src={heroUrl(block.heroKey)} alt={block.caption ?? ""} className="w-full aspect-[16/9] object-cover" />
          {block.caption && <figcaption className="text-[11px] text-muted-foreground p-2 border-t-2 border-border">{block.caption}</figcaption>}
        </figure>
      );
  }
}

function Article() {
  const { article } = Route.useLoaderData() as { article: (typeof DOC_ARTICLES)[number] };
  const [feedback, setFeedback] = useState<"up" | "down" | null>(null);
  const [shared, setShared] = useState(false);

  const idx = DOC_ARTICLES.findIndex((a) => a.slug === article.slug);
  const prev = idx > 0 ? DOC_ARTICLES[idx - 1] : null;
  const next = idx < DOC_ARTICLES.length - 1 ? DOC_ARTICLES[idx + 1] : null;
  const related = DOC_ARTICLES.filter((a) => a.slug !== article.slug && a.category === article.category).slice(0, 3);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Breadcrumb */}
      <div className="text-xs text-muted-foreground mb-4">
        <Link to="/docs" className="hover:text-foreground">Docs</Link>
        <span className="mx-2">/</span>
        <span>{article.category}</span>
      </div>

      {/* Hero */}
      <div className="relative neo-border neo-shadow-lg rounded-lg overflow-hidden bg-card mb-8">
        <img src={heroUrl(article.heroKey)} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/40" />
        <div className="relative p-6 sm:p-10">
          <div className="flex flex-wrap items-center gap-2">
            <NeoBadge variant="accent">{article.category}</NeoBadge>
            <NeoBadge variant="muted">{article.difficulty}</NeoBadge>
            <span className="text-[11px] text-muted-foreground inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {article.readMin} min · updated {article.updated}</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl mt-3 leading-tight max-w-3xl">{article.title}</h1>
          <p className="text-sm sm:text-base text-muted-foreground mt-2 max-w-2xl">{article.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {article.tags.map((t) => <NeoBadge key={t} variant="muted">#{t}</NeoBadge>)}
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_260px]">
        {/* Body */}
        <article className="min-w-0 space-y-4">
          {article.body.map((b, i) => <Block key={i} block={b} />)}

          {/* Feedback */}
          <NeoCard className="mt-10 p-5 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="font-display text-sm uppercase tracking-widest">Was this helpful?</div>
              <p className="text-xs text-muted-foreground mt-1">Feedback tunes what we write next.</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setFeedback("up")}
                className={`neo-border neo-shadow-sm rounded-md px-3 py-2 inline-flex items-center gap-1.5 text-xs font-display uppercase ${feedback === "up" ? "bg-[color:var(--success)] text-background" : "bg-card"}`}
              >
                <ThumbsUp className="h-3.5 w-3.5" /> Yes
              </button>
              <button
                onClick={() => setFeedback("down")}
                className={`neo-border neo-shadow-sm rounded-md px-3 py-2 inline-flex items-center gap-1.5 text-xs font-display uppercase ${feedback === "down" ? "bg-destructive text-destructive-foreground" : "bg-card"}`}
              >
                <ThumbsDown className="h-3.5 w-3.5" /> No
              </button>
              <button
                onClick={() => { navigator.clipboard.writeText(typeof window !== "undefined" ? window.location.href : ""); setShared(true); setTimeout(() => setShared(false), 1500); }}
                className="neo-border neo-shadow-sm rounded-md px-3 py-2 inline-flex items-center gap-1.5 text-xs font-display uppercase bg-card"
              >
                {shared ? <><Check className="h-3.5 w-3.5" /> Copied</> : <><Share2 className="h-3.5 w-3.5" /> Share</>}
              </button>
            </div>
          </NeoCard>

          {/* Prev / Next */}
          <div className="grid gap-3 sm:grid-cols-2 mt-6">
            {prev ? (
              <Link to="/docs/$slug" params={{ slug: prev.slug }} className="neo-border neo-shadow-sm rounded-md p-4 bg-card hover:-translate-y-0.5 transition-transform">
                <div className="text-[10px] font-display uppercase tracking-widest text-muted-foreground inline-flex items-center gap-1"><ArrowLeft className="h-3 w-3" /> Previous</div>
                <div className="font-display text-sm mt-1 line-clamp-1">{prev.title}</div>
              </Link>
            ) : <div />}
            {next ? (
              <Link to="/docs/$slug" params={{ slug: next.slug }} className="neo-border neo-shadow-sm rounded-md p-4 bg-card text-right hover:-translate-y-0.5 transition-transform">
                <div className="text-[10px] font-display uppercase tracking-widest text-muted-foreground inline-flex items-center gap-1 justify-end w-full">Next <ArrowRight className="h-3 w-3" /></div>
                <div className="font-display text-sm mt-1 line-clamp-1">{next.title}</div>
              </Link>
            ) : <div />}
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="pt-8">
              <SectionHeader eyebrow="More in this category" title="Related articles" />
              <div className="grid gap-4 sm:grid-cols-3">
                {related.map((r) => (
                  <Link key={r.slug} to="/docs/$slug" params={{ slug: r.slug }} className="neo-border neo-shadow-sm rounded-md overflow-hidden bg-card hover:-translate-y-0.5 transition-transform">
                    <div className="aspect-[16/9] relative">
                      <img src={heroUrl(r.heroKey)} alt="" className="absolute inset-0 h-full w-full object-cover" />
                    </div>
                    <div className="p-3">
                      <div className="font-display text-sm line-clamp-2">{r.title}</div>
                      <div className="text-[10px] text-muted-foreground mt-1">{r.readMin} min</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>

        {/* Sticky sidebar TOC */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <NeoCard className="p-4">
            <div className="text-[10px] font-display uppercase tracking-widest text-muted-foreground">On this page</div>
            <ul className="mt-3 space-y-1.5 text-sm">
              {article.toc.map((t) => (
                <li key={t.id}>
                  <a href={`#${t.id}`} className="text-muted-foreground hover:text-primary transition-colors line-clamp-1">
                    {t.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t-2 border-border text-[11px] text-muted-foreground">
              Updated {article.updated}
            </div>
          </NeoCard>
        </aside>
      </div>
    </div>
  );
}
