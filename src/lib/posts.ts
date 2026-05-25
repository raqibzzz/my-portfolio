import { z } from "zod";

export type Platform = "x" | "linkedin";

export interface Post {
  /** Canonical URL of the post (X status URL or LinkedIn post URL). */
  url: string;
  /** Platform inferred from URL. Stored for convenience. */
  platform: Platform;
  /** The post body. Line breaks preserved via whitespace-pre-wrap. */
  body: string;
  /** ISO 8601 timestamp of when the post was published. */
  publishedAt: string;
  /** Optional short tag rendered in the card header (e.g. "THREAD", "BUILD LOG"). */
  tag?: string;
}

const postSchema = z.object({
  url: z.url(),
  body: z.string().min(1),
  publishedAt: z.iso.datetime(),
  tag: z.string().optional(),
});

function detectPlatform(url: string): Platform {
  const host = new URL(url).hostname.replace(/^www\./, "");
  if (host === "x.com" || host === "twitter.com") return "x";
  if (host === "linkedin.com" || host.endsWith(".linkedin.com")) return "linkedin";
  throw new Error(`Unsupported post URL host: ${host}`);
}

/**
 * Seed posts. Replace these with your real post URLs + bodies.
 * Each entry is validated at module load — a bad URL or missing field
 * fails the build rather than silently rendering broken cards.
 *
 * To add a new post: append `{ url, body, publishedAt }` to this array.
 * Platform is auto-detected from the URL.
 */
const seed: Array<z.input<typeof postSchema>> = [
  {
    url: "https://x.com/raqibzzz/status/1900000000000000001",
    body: "just shipped a 3D rolodex for the news feed on raqibmuktadir.com. drag, swipe, arrow keys — brutalism refuses polish.",
    publishedAt: "2026-04-18T21:30:00.000Z",
    tag: "BUILD LOG",
  },
  {
    url: "https://www.linkedin.com/posts/raqibmuktadir_testautomation-playwright-jenkins-activity-0000000000000000000-xxxx",
    body: "Quick breakdown of how I automated 80% of target test coverage in two weeks at Matrox — on an initiative that had been stalled for over two years.\n\nStack: Robot Framework + Playwright + Jenkins. Full write-up linked.",
    publishedAt: "2026-04-10T14:12:00.000Z",
  },
  {
    url: "https://x.com/raqibzzz/status/1900000000000000002",
    body: "NewsFlow — 20+ RSS sources, 3-layer dedupe (hash → Levenshtein → cosine on word-frequency vectors), recency + corroboration ranking. the isolated GPT-4o-mini assistant queries both the article DB and live web without context contamination.",
    publishedAt: "2026-04-05T18:00:00.000Z",
    tag: "PROJECT",
  },
  {
    url: "https://x.com/raqibzzz/status/1900000000000000003",
    body: "555 Electra — audio-reactive Three.js scene, live cursor control from the booth, zero latency between the set and the visuals. the site for it runs on the same Three.js kit.",
    publishedAt: "2026-03-28T02:45:00.000Z",
  },
  {
    url: "https://www.linkedin.com/posts/raqibmuktadir_555studios-montreal-speakerseries-activity-0000000000000000001-xxxx",
    body: "555(STUDIOS) just wrapped our 10th event. 711+ registrations across the series, 100% venue fill rate. Partners: Shopify, ETS, HEC, Cansbridge.\n\nNext format coming — more soon.",
    publishedAt: "2026-03-15T16:20:00.000Z",
  },
  {
    url: "https://x.com/raqibzzz/status/1900000000000000004",
    body: "the whole portfolio is one long-scroll server component tree with tiny client islands for the rolodex, now-playing bars, and the hero particles. everything else is static HTML by the time it hits the browser.",
    publishedAt: "2026-03-02T11:10:00.000Z",
    tag: "TECH",
  },
];

function buildPosts(): Post[] {
  const validated = seed.map((raw) => {
    const parsed = postSchema.parse(raw);
    return {
      ...parsed,
      platform: detectPlatform(parsed.url),
    } satisfies Post;
  });

  return [...validated].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export const posts: Post[] = buildPosts();

export function fmtPostTimeAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const m = Math.floor(diff / 60_000);
  if (m < 1) return "JUST NOW";
  if (m < 60) return `${m}M AGO`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}H AGO`;
  const d = Math.floor(h / 24);
  if (d < 7) return `${d}D AGO`;
  const w = Math.floor(d / 7);
  if (w < 5) return `${w}W AGO`;
  const months = Math.floor(d / 30);
  if (months < 12) return `${months}MO AGO`;
  const y = Math.floor(d / 365);
  return `${y}Y AGO`;
}

export function latestByPlatform(platform: Platform): Post | null {
  return posts.find((p) => p.platform === platform) ?? null;
}

export const platformLabel: Record<Platform, string> = {
  x: "X",
  linkedin: "LINKEDIN",
};
