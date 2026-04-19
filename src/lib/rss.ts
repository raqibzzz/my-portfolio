import Parser from "rss-parser";
import { newsSources } from "@/lib/content";

export interface NewsItem {
  title: string;
  link: string;
  source: string;
  publishedAt: string;
  snippet: string;
}

const parser = new Parser();

const UA =
  "Mozilla/5.0 (compatible; raqibmuktadir.com/1.0; +https://raqibmuktadir.com)";

function cleanSnippet(raw?: string): string {
  if (!raw) return "";
  const stripped = raw.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
  if (stripped.length <= 180) return stripped;
  return `${stripped.slice(0, 180).trim()}…`;
}

function hashTitle(t: string): string {
  return t.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

async function fetchOne(source: {
  id: string;
  label: string;
  feed: string;
}): Promise<NewsItem[]> {
  try {
    const res = await fetch(source.feed, {
      headers: {
        "User-Agent": UA,
        Accept: "application/rss+xml, application/xml, text/xml;q=0.9, */*;q=0.8",
      },
      next: { revalidate: 3600, tags: ["news"] },
      signal: AbortSignal.timeout(12_000),
    });
    if (!res.ok) return [];
    const xml = await res.text();
    const feed = await parser.parseString(xml);
    return (feed.items ?? [])
      .slice(0, 6)
      .map((item): NewsItem | null => {
        if (!item.title || !item.link) return null;
        return {
          title: item.title.trim(),
          link: item.link,
          source: source.label,
          publishedAt:
            item.isoDate ?? item.pubDate ?? new Date().toISOString(),
          snippet: cleanSnippet(
            item.contentSnippet ?? item.content ?? item.summary
          ),
        };
      })
      .filter((v): v is NewsItem => v !== null);
  } catch {
    return [];
  }
}

export async function getAiNews(limit = 12): Promise<NewsItem[]> {
  const batches = await Promise.all(newsSources.map(fetchOne));
  const flat = batches.flat();
  const seen = new Set<string>();
  const unique: NewsItem[] = [];
  for (const item of flat) {
    const key = hashTitle(item.title);
    if (seen.has(key)) continue;
    seen.add(key);
    unique.push(item);
  }
  unique.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  return unique.slice(0, limit);
}
