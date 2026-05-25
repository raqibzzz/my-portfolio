"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  type PanInfo,
  type Variants,
} from "motion/react";
import type { NewsItem } from "@/lib/rss";

function fmtTimeAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const m = Math.floor(diff / 60000);
  if (m < 1) return "just now";
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24);
  return `${d}d ago`;
}

interface NewsDeckProps {
  items: NewsItem[];
}

const STACK_DEPTH = 4; // 1 focused + 3 peeking behind
const DRAG_THRESHOLD = 90;

const stackVariants: Variants = {
  enter: (direction: number) => ({
    y: direction > 0 ? 140 : -240,
    rotateX: direction > 0 ? 18 : -24,
    scale: 0.85,
    opacity: 0,
  }),
  exit: (direction: number) => ({
    y: direction > 0 ? -260 : 200,
    rotateX: direction > 0 ? -28 : 22,
    scale: 0.88,
    opacity: 0,
  }),
};

export function NewsDeck({ items }: NewsDeckProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [reduceMotion, setReduceMotion] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const n = items.length;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const listener = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, []);

  const next = useCallback(() => {
    if (n === 0) return;
    setDirection(1);
    setIndex((i) => (i + 1) % n);
  }, [n]);

  const prev = useCallback(() => {
    if (n === 0) return;
    setDirection(-1);
    setIndex((i) => (i - 1 + n) % n);
  }, [n]);

  const goTo = useCallback(
    (target: number) => {
      if (n === 0) return;
      setDirection(target >= index ? 1 : -1);
      setIndex(target);
    },
    [n, index]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        next();
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        prev();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  if (n === 0) return null;

  const visible = Array.from(
    { length: Math.min(STACK_DEPTH, n) },
    (_, depth) => {
      const itemIdx = (index + depth) % n;
      return { item: items[itemIdx], depth };
    }
  );

  const current = items[index];

  const onDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const { offset, velocity } = info;
    const swipe = Math.abs(offset.y) * 0.5 + Math.abs(velocity.y) * 0.3;
    if (offset.y < -DRAG_THRESHOLD || (offset.y < 0 && swipe > 200)) {
      next();
    } else if (offset.y > DRAG_THRESHOLD || (offset.y > 0 && swipe > 200)) {
      prev();
    }
  };

  return (
    <div ref={containerRef} className="relative">
      {/* Meta row: counter + source + arrows */}
      <div className="mono mb-10 flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.2em]">
        <div className="flex items-center gap-4">
          <span className="text-[color:var(--color-accent)]">
            [{String(index + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}]
          </span>
          <span className="hidden text-white/40 sm:inline">·</span>
          <span className="text-white/60">
            SRC: {current.source.toUpperCase()}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous article"
            className="hairline mono flex h-11 w-11 items-center justify-center text-white transition-colors hover:bg-white hover:text-black"
          >
            ←
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next article"
            className="hairline mono flex h-11 w-11 items-center justify-center border-[color:var(--color-accent)] text-[color:var(--color-accent)] transition-colors hover:bg-[color:var(--color-accent)] hover:text-black"
          >
            →
          </button>
        </div>
      </div>

      {/* 3D stack */}
      <div
        className="relative mx-auto h-[560px] w-full max-w-3xl sm:h-[520px] md:h-[560px]"
        style={{ perspective: "1400px" }}
      >
        <AnimatePresence initial={false} custom={direction}>
          {visible.map(({ item, depth }) => {
            const isFocus = depth === 0;
            const targetY = reduceMotion ? 0 : depth * -22;
            const targetRotateX = reduceMotion ? 0 : depth * -5;
            const targetScale = reduceMotion ? 1 : 1 - depth * 0.045;
            const targetOpacity = isFocus
              ? 1
              : reduceMotion
              ? 0
              : 0.55 - depth * 0.15;

            return (
              <motion.article
                key={item.link}
                custom={direction}
                variants={stackVariants}
                initial="enter"
                animate={{
                  y: targetY,
                  rotateX: targetRotateX,
                  scale: targetScale,
                  opacity: targetOpacity,
                }}
                exit="exit"
                transition={{
                  duration: reduceMotion ? 0.2 : 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                drag={isFocus && !reduceMotion ? "y" : false}
                dragConstraints={{ top: 0, bottom: 0 }}
                dragElastic={0.35}
                onDragEnd={isFocus ? onDragEnd : undefined}
                whileDrag={{ cursor: "grabbing" }}
                style={{
                  zIndex: STACK_DEPTH - depth,
                  transformStyle: "preserve-3d",
                  transformOrigin: "center top",
                  pointerEvents: isFocus ? "auto" : "none",
                  cursor: isFocus && !reduceMotion ? "grab" : "default",
                }}
                className="absolute inset-0 flex flex-col justify-between gap-8 border border-white bg-black p-8 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.9)] md:p-12"
              >
                {/* Top strip */}
                <header className="flex items-center justify-between gap-4">
                  <span className="mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-accent)]">
                    [SRC: {item.source.toUpperCase()}]
                  </span>
                  <span className="mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                    {fmtTimeAgo(item.publishedAt)}
                  </span>
                </header>

                {/* Headline */}
                <div className="flex flex-1 flex-col justify-center gap-6">
                  <h3 className="break-words text-3xl font-bold leading-[1.05] tracking-[-0.02em] text-white md:text-5xl">
                    {item.title}
                  </h3>
                  {item.snippet ? (
                    <p className="line-clamp-4 max-w-2xl text-sm leading-relaxed text-white/60 md:text-base">
                      {item.snippet}
                    </p>
                  ) : null}
                </div>

                {/* Footer */}
                <footer className="flex items-end justify-between gap-4">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mono hairline group inline-flex items-center gap-3 px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:border-[color:var(--color-accent)] hover:bg-[color:var(--color-accent)] hover:text-black"
                  >
                    <span>[READ FULL]</span>
                    <span className="transition-transform group-hover:translate-x-1">
                      ↗
                    </span>
                  </a>
                  <span className="mono text-[10px] uppercase tracking-[0.3em] text-white/30">
                    {String((index + depth) % n + 1).padStart(2, "0")}/
                    {String(n).padStart(2, "0")}
                  </span>
                </footer>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Dot scrubber */}
      <div className="mt-10 flex items-center justify-center gap-1.5">
        {items.map((_, i) => {
          const active = i === index;
          return (
            <button
              key={i}
              type="button"
              aria-label={`Jump to article ${i + 1}`}
              aria-current={active ? "true" : undefined}
              onClick={() => goTo(i)}
              className={`h-[3px] transition-all duration-300 ${
                active
                  ? "w-10 bg-[color:var(--color-accent)]"
                  : "w-4 bg-white/20 hover:bg-white/50"
              }`}
            />
          );
        })}
      </div>

      {/* Hint line */}
      <p className="mono mt-6 text-center text-[10px] uppercase tracking-[0.3em] text-white/30">
        [DRAG · SWIPE · ← → KEYS · CLICK DOTS]
      </p>
    </div>
  );
}
