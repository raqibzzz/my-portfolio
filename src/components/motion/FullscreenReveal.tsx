"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";

interface FullscreenRevealProps {
  /** Path relative to /public (or remote URL allowlisted in next.config). */
  src: string;
  /** Accessible alt text for the image. */
  alt: string;
  /** Optional eyebrow tag (e.g. "555 · OPEN STUDIO · 2024"). Mono, accent color. */
  eyebrow?: string;
  /** Optional centered caption that fades in as the image reaches fullbleed. */
  caption?: string;
  /** Scroll track height. Defaults to 250vh → pinned phase spans ~150vh of scroll. */
  trackHeight?: string;
  /**
   * Size of the image at the start of the pinned scroll, as a transform scale.
   * 0.4 means the image starts at 40% of the viewport. Defaults to 0.4.
   */
  startScale?: number;
  /** Darken overlay opacity over the image (0-1). Defaults to 0.25. */
  overlayOpacity?: number;
  /** className forwarded to the outer container for margin tweaks. */
  className?: string;
}

/**
 * Pinned zoom reveal. The section is taller than the viewport; inside it a sticky
 * full-screen container holds the image, which scales from `startScale` up to 1
 * as the user scrolls through the pinned phase. Respects prefers-reduced-motion
 * by falling back to a simple full-bleed image block with no scroll transform.
 */
export function FullscreenReveal({
  src,
  alt,
  eyebrow,
  caption,
  trackHeight = "250vh",
  startScale = 0.4,
  overlayOpacity = 0.25,
  className,
}: FullscreenRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Scale 0.4 → 1 over first 60% of pinned scroll, then sits at 1 to the end.
  const scale = useTransform(
    scrollYProgress,
    [0, 0.6, 1],
    [startScale, 1, 1]
  );

  // Caption fades in mid-way, hangs at full, exits near the end.
  const captionOpacity = useTransform(
    scrollYProgress,
    [0.5, 0.65, 0.9, 1],
    [0, 1, 1, 0]
  );

  // Image holder opacity — subtle fade at the tail so the unpinning doesn't jolt.
  const imageOpacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.95, 1],
    [0, 1, 1, 0.85]
  );

  if (prefersReducedMotion) {
    return (
      <div className={className}>
        <div className="relative h-[60vh] w-full overflow-hidden bg-black md:h-[70vh]">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0 bg-black"
            style={{ opacity: overlayOpacity }}
          />
          {(eyebrow || caption) && (
            <div className="absolute inset-0 flex flex-col items-center justify-end gap-3 px-6 pb-10 text-center md:pb-16">
              {eyebrow && (
                <span className="mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-accent)]">
                  [{eyebrow}]
                </span>
              )}
              {caption && (
                <p className="mono text-base uppercase tracking-[0.15em] text-white md:text-xl">
                  {caption}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`relative w-full bg-black ${className ?? ""}`}
      style={{ height: trackHeight }}
    >
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        <motion.div
          style={{ scale, opacity: imageOpacity }}
          className="absolute inset-0 will-change-transform"
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes="100vw"
            className="object-cover"
            priority={false}
          />
          <div
            className="absolute inset-0 bg-black"
            style={{ opacity: overlayOpacity }}
          />
        </motion.div>

        {(eyebrow || caption) && (
          <motion.div
            style={{ opacity: captionOpacity }}
            className="pointer-events-none relative z-10 flex flex-col items-center gap-3 px-6 text-center md:gap-4 md:px-10"
          >
            {eyebrow && (
              <span className="mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-accent)] md:text-xs">
                [{eyebrow}]
              </span>
            )}
            {caption && (
              <p className="mono text-lg uppercase tracking-[0.15em] text-white md:text-3xl">
                {caption}
              </p>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}
