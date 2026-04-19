# raqibmuktadir.com

Personal portfolio — brutalist / high-contrast. Next.js 16 (App Router) + Tailwind v4 + Motion + Lenis + Three.js on Vercel.

## Quick start

```bash
pnpm install
cp .env.local.example .env.local   # fill in Spotify creds when ready
pnpm dev
```

Open http://localhost:3000.

## What's wired

- **Hero** — giant type + Three.js particle field + noise overlay.
- **About / Work / Experience / 555(STUDIOS)** — content-driven from `src/lib/content.ts`.
- **Now Playing** — pulls live from Spotify every 30s via `/api/spotify/now-playing` (graceful fallback when creds are absent).
- **AI News Feed** — server-side RSS aggregation across 7 sources (`src/lib/rss.ts`), deduped by title, revalidates hourly.
- **Instagram strip** — curated local photos from `/public/gallery/`, horizontal parallax driven by scroll.
- **Sticky nav** — appears after hero exits viewport.
- **Motion** — Lenis smooth scroll + Motion reveals + marquees + hover states. All fall back to opacity-only under `prefers-reduced-motion`.

## Required assets from Raqib

### 1. Instagram photos

Drop 8–12 @raqibzzz photos into `public/gallery/` (JPG or WebP, ideally ~1600px on the long edge).

Then register them in `src/lib/content.ts` → `gallery`:

```ts
export const gallery: GalleryPhoto[] = [
  { src: "/gallery/01.jpg", alt: "Montreal rooftop", postUrl: "https://www.instagram.com/p/CxxxXxxXxxx/" },
  // ...
];
```

### 2. Resume PDF

Export the latest resume as PDF and save to `public/resume.pdf`. The footer link already points there. (`public/resume.docx` is a stopgap copy of the source.)

### 3. Spotify credentials

The Now Playing section lights up as soon as you paste credentials into `.env.local`.

**One-time setup (~8 minutes):**

1. Go to https://developer.spotify.com/dashboard and create a new app.
   - Name: `raqibmuktadir.com`
   - Website: `https://raqibmuktadir.com`
   - Redirect URI: `https://raqibmuktadir.com/callback` (used only once during auth-code exchange — the page doesn't need to exist; you'll just copy the code from the address bar)
   - Scopes: `user-read-currently-playing`, `user-read-recently-played`, `user-top-read`
2. Copy the **Client ID** and **Client Secret** into `.env.local`.
3. Build the auth URL in a browser (replace `<CLIENT_ID>`):
   ```
   https://accounts.spotify.com/authorize?client_id=<CLIENT_ID>&response_type=code&redirect_uri=https://raqibmuktadir.com/callback&scope=user-read-currently-playing%20user-read-recently-played%20user-top-read
   ```
4. Approve. You'll be redirected to `https://raqibmuktadir.com/callback?code=...` — the page may show a 404 (expected). Copy the `code=` value from the address bar.
5. Exchange that code for a refresh token. In a terminal:
   ```bash
   curl -u "<CLIENT_ID>:<CLIENT_SECRET>" \
     -d grant_type=authorization_code \
     -d code=<CODE_FROM_STEP_4> \
     -d redirect_uri=https://raqibmuktadir.com/callback \
     https://accounts.spotify.com/api/token
   ```
6. Paste `refresh_token` from the JSON response into `.env.local` as `SPOTIFY_REFRESH_TOKEN`.
7. Restart `pnpm dev`. Now Playing should populate within 30s.

When deploying, mirror all three vars to Vercel via `vercel env add` (or the dashboard).

## File layout

```
src/
├── app/
│   ├── api/spotify/now-playing/route.ts
│   ├── api/spotify/top/route.ts
│   ├── globals.css         # brutalist tokens, noise, marquee, eq animations
│   ├── layout.tsx          # fonts, Lenis provider, metadata
│   └── page.tsx            # composed long-scroll
├── components/
│   ├── hero/{Hero, ParticleField}
│   ├── motion/{LenisProvider, Marquee, Reveal}
│   ├── nav/StickyNav
│   ├── sections/{About, Work, Experience, Studio555, NowPlaying, InstagramStrip, NewsFeed, Footer}
│   └── ui/Section
├── lib/
│   ├── cn.ts               # tailwind-merge helper
│   ├── content.ts          # all copy, projects, experience as typed data
│   ├── rss.ts              # news aggregator
│   └── spotify.ts          # refresh-token → access-token flow
└── types/spotify.ts
```

## Deploy

```bash
# one-time
vercel link

# environment
vercel env add SPOTIFY_CLIENT_ID
vercel env add SPOTIFY_CLIENT_SECRET
vercel env add SPOTIFY_REFRESH_TOKEN

# ship
vercel --prod
```

Domain `raqibmuktadir.com` is already attached — deploying to prod picks it up automatically.
