# Production Polish Plan

Scope is very large. To ship quality (not shallow passes), I'll split into 6 focused phases. Each phase is committed and previewable before starting the next. Reply "go phase X" to advance, or "go all" and I'll run them back-to-back.

---

## Phase A — Global Responsive Audit + Remove Roadmap

**Responsive fixes (site-wide)**
- Tighten container padding scale: `px-4 sm:px-6 lg:px-8`, cap max-width, prevent overflow via `overflow-x-hidden` on body + `min-w-0` on flex/grid text cells.
- Typography scale: `text-2xl sm:text-3xl lg:text-5xl` for headings; body clamps.
- Grids: audit every `grid-cols-*` for a 1-col mobile base with `sm:` and `lg:` promotions.
- Cards: enforce `h-full` in every grid, uniform padding, min touch target 44px on all interactive elements.
- Header/nav: reduce mobile height, ensure logo + menu button don't collide at 320px.
- Footer: convert to `grid-cols-2 sm:grid-cols-3 lg:grid-cols-5` with balanced spacing.
- Hero images: `object-cover` with `aspect-*` per breakpoint; ultrawide caps.
- Landscape phone: reduce hero min-height when `@media (orientation:landscape) and (max-height:500px)`.

**Roadmap removal**
- Delete `src/routes/roadmap.tsx`, nav link, footer link, any references.

## Phase B — Bot Control Redesign + Command Detail Template

- Rewrite `/bot` cards: illustration, background artwork, icon, description, live status badge, command count, last-updated, hover lift, animated shine bg.
- Add 9 missing categories (Auto Threads, Moderation, Security, Announcements, Registration, Tournament, Leaderboard, Settings) — create route stubs.
- Build reusable `BotCategoryDetail` component: hero, search, filter chips, command list (syntax, usage, examples, permissions, cooldown, aliases, args, expected output, copy button, code block).
- Populate `/bot/commands` with 20+ realistic commands; other sections get category-appropriate detail content.

## Phase C — Docs Redesign + Article Template

- Rebuild `/docs` highlight cards: illustration, thumbnail, category icon, reading time, difficulty badge, hover.
- Create `src/routes/docs.$slug.tsx` article template: hero, TOC, sticky sidebar, prose, code blocks, callouts (note/tip/warning), related articles, prev/next, copy/share, feedback.
- Seed 8-10 articles.

## Phase D — Status Page Redesign

- Full rebuild `/status`: hero, animated heartbeat header, service grid (Discord API, Bot, DB, Redis, CDN, Storage, Socket.IO, Railway, Vercel, Neon, Upstash, ImageKit, Cloudflare, Gemini, Groq), uptime cards, response time sparkline SVGs, latency graph, incident + maintenance history, live log preview, deployment feed, region map, health score gauge, animated counters.
- Simulated realtime refresh (setInterval, deterministic).

## Phase E — Partners + Sponsors + Footer-Page Identity Pass

- **Partners**: hero, featured, tech/gaming/community/media/integration tiers, become-a-partner CTA, benefits, requirements, application form.
- **Sponsors**: hero, featured/current/past, packages (Bronze→Diamond), benefits, brand exposure, audience stats, showcase, application form.
- **FAQ / Help / Support / Docs / Status / Partners / Sponsors**: give each a unique hero silhouette, banner shape, section background pattern, accent color, and CTA style so they don't feel same-y (keeping the neobrutalist system).

## Phase F — Animations + Final Polish

- Add reveal-on-scroll utility (IntersectionObserver hook).
- Counter animation hook (`useCountUp`).
- Card hover: consistent `hover:-translate-y-1 hover:neo-shadow-lg` across all cards.
- Micro-interactions on buttons (active scale).
- Sticky nav shadow on scroll.
- Verify build + walk pages at 360/768/1440.

---

**Technical notes**
- Reuse existing `NeoCard`, `NeoBadge`, `NeoButton`, `heroUrl()` — no new design system.
- No new image gen unless a page has zero relevant asset; prefer remixing the existing 40+ illustrations we already have.
- No backend changes; all data mocked deterministically.
- Roadmap deletion is destructive but requested — will grep for stragglers.

Reply **go phase A** to start, or **go all** to run through end-to-end (longer single response, less checkpointing).