This request is enormous — hundreds of pages, dashboards, bot management, tournament systems, and integrations. Building it all in one turn would produce shallow, placeholder-heavy work, which you explicitly don't want. I'll extend the project in focused, high-quality phases so every page keeps the Neobrutalism polish, gets its own illustrations, and reuses the existing components (NeoCard, NeoButton, footer, nav, seasonal effects, themes including Cyber Nights).

Nothing existing will be removed or redesigned. Each phase ships complete, production-feeling pages with hero art, section illustrations, empty states, and full theme adaptation.

## Phase 1 — User Dashboard expansion (this turn)
Rebuild `/dashboard` as a shell with a persistent sidebar and add real sub-routes under `/dashboard/*`:
- overview, upcoming, registered, live, tournaments, artwork, picture-battles, voting, reactions, discord, achievements, xp-coins, rewards, badges, season-rank, team, invitations, stats, match-history, submissions, notifications, tickets, downloads, bookmarks, favorites, saved-teams, activity, calendar, quick-actions, uploads, profile, referrals, security, sessions, appearance, privacy, api-keys, linked-accounts, delete-account

Each page: hero illustration, themed cards, empty states, mock data from `mock-data.ts` (extended).

## Phase 2 — Admin panel expansion
`/admin/*` with sidebar: analytics (events/discord/users/traffic), realtime (visitors/registrations/votes/reactions/sync/bot), manage (users/staff/roles/permissions/teams/tournaments/artwork/battles/uploads/reports/appeals/moderation), CMS (themes/banners/hero/homepage/nav/footer), infra (AI/gemini/groq/cdn/storage/imagekit/cloudflare/redis/database/backups), ops (audit/errors/health/api/webhooks/bot-logs/queues), templates (email/discord/canva/notifications), tools (search/export/import/maintenance/flags/season/announcements/broadcast/ping/schedule/automation).

## Phase 3 — Events, Tournament, Team, Bot
- New event categories: photography, video, minecraft, logo, banner, meme, tournament, community, voice, movie-night, music, streaming, quiz, custom — each with unique artwork.
- Tournament formats pages: swiss, round-robin, double-elim, single-elim, battle-royale + bracket/schedule generator, match reporting, appeals, verification, anti-cheat.
- Team system: invitations, verification, captain transfer, kick/replace, reserves, chat, notes, ready-check, check-in.
- Bot page expansion: commands, permissions, prefixes, cooldowns, modules, logs, guild settings, auto roles/channels, temp channels/categories, cleanup, webhooks, all template types.

## Phase 4 — Public/marketing pages
FAQ, Help Center, Documentation, Developers, API Docs, Partners, Sponsors, Blog, Roadmap, Changelog, Status, Support, Contact, Pricing, Premium, Rewards, Store, Achievements, Badges, Leaderboard, Season Pass, Hall of Fame, Event Archive, Media Center, Gallery, Downloads — each with hero + section illustrations.

## Phase 5 — Polish
404/500/loading/success/error graphics, page transitions, confetti, skeleton loaders, season transition animation, live counters, more Cyber Nights refinements.

## Notes on scope & tech
- I'll keep everything frontend + mock data (matching current project). Real NestJS/Prisma/Discord.js/Socket.IO/Redis/ImageKit backends are outside a Lovable TanStack Start project — I'll simulate realtime with animated counters and mocked feeds so the UI looks production-ready. If you later want a real backend, we can wire Lovable Cloud (Postgres + auth + storage + functions) into it.
- Illustrations are generated per page in small batches to keep quality high.

**Starting with Phase 1 (User Dashboard) as soon as you approve.** Reply "go" (or tell me which phase to prioritize) and I'll ship it.