"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { gallery, site } from "@/lib/content";

export function InstagramStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["8%", "-30%"]);

  const hasPhotos = gallery.length > 0;

  return (
    <section
      id="gallery"
      ref={ref}
      className="relative w-full overflow-hidden border-t border-white bg-black py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-[1600px] px-6 pb-10 md:px-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mono text-xs uppercase tracking-[0.3em] text-[color:var(--color-accent)]">
              [06 // FIELD NOTES]
            </span>
            <h2 className="mt-3 text-5xl font-bold leading-[0.9] tracking-[-0.03em] text-white md:text-7xl">
              From @raqibzzz.
            </h2>
          </div>
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noreferrer"
            className="mono hairline px-4 py-3 text-xs uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black"
          >
            [FOLLOW ON INSTAGRAM] →
          </a>
        </div>
      </div>

      {hasPhotos ? (
        <motion.div
          style={{ x }}
          className="flex gap-4 pl-[8vw] pr-[30vw] will-change-transform"
        >
          {gallery.map((photo, i) => (
            <a
              key={photo.src}
              href={photo.postUrl}
              target="_blank"
              rel="noreferrer"
              className="group relative block h-[55vh] w-[42vw] shrink-0 overflow-hidden border border-white md:h-[60vh] md:w-[28vw]"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 768px) 28vw, 42vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority={i < 2}
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/30" />
              <div className="mono absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-white opacity-0 transition-opacity group-hover:opacity-100">
                <span>[0{i + 1} / {gallery.length}]</span>
                <span>[VIEW ON INSTAGRAM] →</span>
              </div>
            </a>
          ))}
        </motion.div>
      ) : (
        <div className="mx-auto w-full max-w-[1600px] px-6 md:px-10">
          <div className="hairline flex flex-col gap-4 p-10">
            <span className="mono text-xs uppercase tracking-[0.3em] text-[color:var(--color-accent)]">
              [FEED_PENDING]
            </span>
            <p className="max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              Usually this is a horizontal scroll of Montréal nights, rooftops,
              and 555 after-parties. I&apos;ve been shipping instead of curating —
              they live on Instagram in the meantime.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
