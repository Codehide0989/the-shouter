The reference maps to two big things: (1) a complete **Profile page** overhaul with header, actions, stats, sections tabs, inventory, gallery, activity, achievements, badges, analytics — and (2) a **Master Dashboard** where every section listed under Play, Progress, Squad, Activity, Account is fully functional with unique UI, real mock content, filters, search, sort, pagination, skeletons, and responsive layouts from 320px → 1440px.

Most of the 90+ dashboard routes and 40+ profile-related tabs already exist as scaffolds. This phase turns each scaffold into a real screen.

## Scope

### 1. Profile page (`/profile`) — full redesign
- Animated cover, avatar with glow frame, verification badge, country/language, Discord status, online indicator, username, bio, social links, website, joined date, last active, favorite games/team/category.
- Action bar: Follow, Message, Invite team, View inventory, Share profile, Report, Edit profile, Discord connect (with distinct button styles).
- Stats grid: Tournament wins, events joined, badges, achievements, XP, coins, reaction score, followers, following, friends, MVP count, gallery uploads, artwork, votes, comments.
- Sidebar tabs: About, Achievements, Badges, Gallery, Rewards, Inventory, Tournament history, Teams, Statistics, Activity, Friends, Following, Collections, Favorite games/events, Saved posts, Recent comments.
- Profile Inventory (grid: coins, tickets, frames, avatars, themes, titles, effects, pets, borders, cards).
- Profile Gallery (masonry with zoom/like/comment/share/fullscreen).
- Profile Activity feed (Discord-style entries with icons, timestamps, embeds).
- Profile Achievements cards with progress + reward preview.
- Profile Badges (premium artwork, rarity, unlock date, hover animation, glow).
- Profile Analytics (interactive charts, XP graph, activity heatmap, win rate, participation).

### 2. Master Dashboard sections
Group work per pillar; every page gets: hero card, real mock data, filters/search/sort where relevant, skeleton loading, empty state, pagination, responsive breakpoints, seasonal-aware artwork.

**Play (Overview + Upcoming + Registered + Live + Tournament Progress)**
- Overview, upcoming tournaments, recent activity, XP progress, current season, recommended events, latest rewards, quick join, continue registration, event calendar, notifications.
- Large event cards, countdown, registration status, join button, prize pool, participants, game, organizer, banner, filters, calendar view.
- All registered tournaments, registration date, team, status, match schedule, cancel registration, view details, download ticket.
- Live badge, viewer count, scoreboard, streaming links, bracket preview, watch button.
- Timeline, round progression, bracket, W/L, current opponent, match history, progress animation.

**Progress (Achievements, XP, Coins, Rewards, Badges, Season Rank)**
- Real achievement system, categories, locked/unlocked, progress, reward XP + image.
- Animated XP bar, weekly/monthly graph, history, level milestones.
- Wallet, income/spent, transactions, history.
- Inventory, claim rewards, history, redeem.
- Badge collection, rarity, progress, unlock requirements, beautiful artwork.
- Current rank, leaderboard position, season rewards, progress timeline.

**Squad (Team, Invites, Saved Teams)**
- Team profile, members, roles/captain, stats, invite, leave, transfer ownership.
- Accept/reject/view invitations, history (pending + accepted).
- Favorite teams, recently joined.

**Activity (Submissions, Notifications, Tickets, Downloads, Bookmarks, Favorites, Timeline, Calendar, Quick actions, Recent uploads)**
- Timeline/preview/status for submissions.
- Grouped notifications, read/unread, mark all read.
- Support tickets, replies, priority, status.
- Downloaded files, docs, assets.
- Saved articles/events/rewards.
- Cards, upcoming, completed favorites.
- Beautiful timeline with images/icons.
- Monthly calendar with upcoming reminders.
- Favorite shortcuts.
- Gallery/preview/delete recent uploads.

**Stats (Tournament stats, Match history, Win rate, Kills/Assists/MVP)**
- Charts, wins/losses, placement, KDA/accuracy, performance.
- Timeline, opponent, score, replay, download.
- Daily/Weekly/Monthly graphs.
- Charts, top matches, timeline + badges.

**Discord**
- Discord account: profile, avatar, connection status, roles, permissions, boost, badges.
- Connected servers with server cards, member count, roles, joined date, open server.
- Live presence: activity, current game, listening, streaming, voice channel.

**Account (Profile completion, Referral program, Invite friends, Security, Sessions, Appearance, Season selector, Privacy, API Keys)**
- Checklist, progress, suggestions.
- Invite link, rewards, history, leaderboard.
- QR code, Discord invite, copy link.
- Password, 2FA, backup codes, sessions.
- Logged devices, browser, location, logout remotely.
- Theme, accent, animation, card styles.
- Current + past seasons, preview.
- Visibility, blocked users, friend requests.
- Generate/revoke/copy, last used.

### 3. Global infrastructure
- Add pagination + search primitives to `@/components/neo` if not present.
- Add skeleton loaders.
- Ensure every card gets image/illustration where reference shows one (reuse `heroUrl` and existing generated art; add new assets only where a section truly lacks one).
- Verify with tsgo after batches.

## Technical Notes
- Style stays Neobrutalism (`NeoCard`, `neo-border`, `neo-shadow`, seasonal artwork).
- New shared primitives live under `src/components/`; per-tab data mocks under `src/lib/mock-data.ts` (extend) or new `src/lib/profile-data.ts`, `src/lib/dashboard-mocks.ts`.
- All routes stay client-only (no server functions needed).
- Batch work by pillar; run tsgo after each pillar to catch regressions.

## Delivery order
1. Profile page overhaul (single largest single-page win from the reference).
2. Shared primitives (`Skeleton`, `Pagination`, `SearchBar`, `EmptyState` reuse) + mock data.
3. Pillar batches: Play → Progress → Squad → Activity → Stats → Discord → Account.
4. Final pass: responsive check at 320/390/430/768/1024/1440, seasonal artwork verification, typecheck.

This is a large multi-turn build. Approve to start with **Profile page overhaul + shared primitives**, then I'll proceed pillar by pillar without further prompts.
