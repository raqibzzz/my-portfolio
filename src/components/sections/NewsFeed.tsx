import { Section } from "@/components/ui/Section";
import { NewsDeck } from "@/components/sections/NewsDeck";
import { getAiNews } from "@/lib/rss";

export async function NewsFeed() {
  const items = await getAiNews(12);

  return (
    <Section id="news" label="07 // AI NEWS FEED" title="What the field is shipping.">
      <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <span className="mono text-xs uppercase tracking-[0.2em] text-white/50">
          [AGGREGATED · 7 SOURCES · REVALIDATES HOURLY]
        </span>
        <span className="mono text-xs uppercase tracking-[0.2em] text-white/40">
          LAST_PULL: {new Date().toUTCString().replace("GMT", "UTC")}
        </span>
      </div>

      {items.length === 0 ? (
        <div className="mono hairline p-10 text-sm uppercase tracking-[0.2em] text-white/60">
          [NO_FEEDS_REACHABLE] — network or source downtime. Will retry next
          revalidation window.
        </div>
      ) : (
        <NewsDeck items={items} />
      )}
    </Section>
  );
}

export const revalidate = 3600;
