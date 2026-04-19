"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import type { NowPlayingTrack, TopTrack } from "@/types/spotify";

function Equalizer({ active }: { active: boolean }) {
  return (
    <div className="flex h-5 items-end gap-[3px]" aria-hidden>
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          className={`w-[3px] bg-[color:var(--color-accent)] ${active ? "eq-bar" : "h-1"}`}
          style={active ? { animationDelay: `${i * 0.12}s`, height: "100%" } : {}}
        />
      ))}
    </div>
  );
}

function fmtTimeAgo(iso?: string): string {
  if (!iso) return "";
  const diff = Date.now() - new Date(iso).getTime();
  const m = Math.floor(diff / 60000);
  if (m < 1) return "just now";
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24);
  return `${d}d ago`;
}

export function NowPlaying() {
  const [now, setNow] = useState<NowPlayingTrack | null>(null);
  const [top, setTop] = useState<TopTrack[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const [nowRes, topRes] = await Promise.all([
          fetch("/api/spotify/now-playing", { cache: "no-store" }),
          fetch("/api/spotify/top", { cache: "no-store" }),
        ]);
        if (cancelled) return;
        if (nowRes.ok) {
          const j = (await nowRes.json()) as { data: NowPlayingTrack | null };
          setNow(j.data);
        }
        if (topRes.ok) {
          const j = (await topRes.json()) as { data: TopTrack[] };
          setTop(j.data ?? []);
        }
      } catch {
        // network failure — keep placeholder state
      } finally {
        if (!cancelled) setLoaded(true);
      }
    };

    load();
    const id = setInterval(load, 30_000);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, []);

  return (
    <Section id="now-playing" label="05 // SOUND" title="What I'm listening to.">
      <div className="grid gap-px bg-white md:grid-cols-12">
        {/* Now playing card */}
        <div className="min-w-0 overflow-hidden bg-black md:col-span-7">
          <Reveal className="h-full">
          <div className="flex h-full flex-col gap-6 p-8 md:p-10">
            <div className="mono flex items-center justify-between text-[10px] uppercase tracking-[0.25em]">
              <span className="flex items-center gap-3 text-[color:var(--color-accent)]">
                <Equalizer active={Boolean(now?.isPlaying)} />
                <span>
                  {now?.isPlaying
                    ? "[NOW_PLAYING]"
                    : now
                    ? "[LAST_PLAYED]"
                    : loaded
                    ? "[OFFLINE]"
                    : "[CONNECTING...]"}
                </span>
              </span>
              <span className="text-white/40">
                SRC: SPOTIFY · REFRESH 30s
              </span>
            </div>

            {now ? (
              <a
                href={now.songUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex min-w-0 gap-5"
              >
                {now.albumImageUrl ? (
                  <div className="relative h-24 w-24 shrink-0 border border-white md:h-36 md:w-36">
                    <Image
                      src={now.albumImageUrl}
                      alt={now.album}
                      fill
                      sizes="144px"
                      className="object-cover"
                    />
                  </div>
                ) : null}
                <div className="flex min-w-0 flex-1 flex-col justify-center gap-2">
                  <h3 className="break-words text-2xl font-bold leading-tight tracking-[-0.02em] text-white group-hover:text-[color:var(--color-accent)] md:text-4xl">
                    {now.title}
                  </h3>
                  <p className="truncate text-base text-white/70 md:text-lg">{now.artist}</p>
                  <p className="mono truncate text-xs uppercase tracking-wider text-white/40">
                    {now.album}
                    {now.playedAt ? ` · ${fmtTimeAgo(now.playedAt)}` : ""}
                  </p>
                </div>
              </a>
            ) : (
              <div className="flex flex-col gap-3">
                <h3 className="text-3xl font-bold leading-tight tracking-[-0.02em] text-white/70 md:text-4xl">
                  Signal lost.
                </h3>
                <p className="mono text-xs uppercase tracking-wider text-white/40">
                  Spotify&apos;s taking a nap. The soundtrack returns shortly.
                </p>
              </div>
            )}
          </div>
          </Reveal>
        </div>

        {/* Top tracks */}
        <div className="min-w-0 overflow-hidden bg-black md:col-span-5">
          <Reveal className="h-full" delay={0.1}>
          <div className="flex h-full flex-col gap-5 p-8 md:p-10">
            <div className="mono flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-[color:var(--color-accent)]">
              <span>[TOP_TRACKS · 30D]</span>
              <span className="text-white/40">RANKED</span>
            </div>
            <ol className="flex flex-col divide-y divide-white/20">
              {top.length > 0
                ? top.map((t) => (
                    <li key={`${t.rank}-${t.title}`}>
                      <a
                        href={t.songUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center gap-4 py-3"
                      >
                        <span className="mono w-6 text-xs text-white/40 group-hover:text-[color:var(--color-accent)]">
                          0{t.rank}
                        </span>
                        {t.albumImageUrl ? (
                          <div className="relative h-10 w-10 shrink-0">
                            <Image
                              src={t.albumImageUrl}
                              alt={t.title}
                              fill
                              sizes="40px"
                              className="object-cover"
                            />
                          </div>
                        ) : null}
                        <div className="flex min-w-0 flex-1 flex-col">
                          <span className="truncate text-sm font-medium text-white group-hover:text-[color:var(--color-accent)]">
                            {t.title}
                          </span>
                          <span className="truncate text-xs text-white/50">
                            {t.artist}
                          </span>
                        </div>
                      </a>
                    </li>
                  ))
                : Array.from({ length: 5 }).map((_, i) => (
                    <li
                      key={i}
                      className="mono flex items-center gap-4 py-3 text-xs text-white/30"
                    >
                      <span className="w-6">0{i + 1}</span>
                      <span>— awaiting Spotify credentials —</span>
                    </li>
                  ))}
            </ol>
          </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
