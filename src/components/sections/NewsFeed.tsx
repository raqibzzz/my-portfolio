import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { getAiNews } from "@/lib/rss";

function fmtDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}

export async function NewsFeed() {
  const items = await getAiNews(12);

  return (
    <Section id="news" label="07 // AI NEWS FEED" title="What the field is shipping.">
      <div className="mb-8 flex items-center justify-between">
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
        <div className="grid gap-px bg-white md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal
              key={`${item.source}-${item.link}`}
              delay={i * 0.03}
              className="bg-black"
            >
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col justify-between gap-5 p-6 transition-colors hover:bg-white hover:text-black"
              >
                <div className="mono flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-[color:var(--color-accent)] group-hover:text-black">
                  <span>[SRC: {item.source.toUpperCase()}]</span>
                  <span className="text-white/40 group-hover:text-black/60">
                    {fmtDate(item.publishedAt)}
                  </span>
                </div>
                <h3 className="text-xl font-bold leading-tight tracking-[-0.01em]">
                  {item.title}
                </h3>
                {item.snippet ? (
                  <p className="text-sm leading-relaxed text-white/60 group-hover:text-black/70">
                    {item.snippet}
                  </p>
                ) : null}
                <span className="mono text-[10px] uppercase tracking-[0.25em] text-white/50 group-hover:text-black/70">
                  [READ] →
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      )}
    </Section>
  );
}

export const revalidate = 3600;
