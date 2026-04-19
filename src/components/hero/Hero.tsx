"use client";

import dynamic from "next/dynamic";
import { motion } from "motion/react";
import { site } from "@/lib/content";

const ParticleField = dynamic(
  () => import("./ParticleField").then((m) => m.ParticleField),
  { ssr: false }
);

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden bg-black pt-20"
    >
      <div className="absolute inset-0 grid-lines opacity-30" aria-hidden />
      <ParticleField />
      <div className="noise" aria-hidden />

      <div className="relative z-10 flex flex-1 flex-col justify-between px-6 py-10 md:px-10">
        {/* Top bar */}
        <div className="mono flex items-start justify-between text-xs uppercase tracking-[0.25em] text-white/70">
          <div className="flex flex-col gap-1">
            <span>[PORTFOLIO_v1.0]</span>
            <span className="text-white/40">EST. 2026 · {site.location.toUpperCase()}</span>
          </div>
          <div className="hidden flex-col items-end gap-1 md:flex">
            <span>{site.social.studio555.replace("https://www.", "")}</span>
            <span className="text-white/40">[CO-FOUNDER · 555(STUDIOS)]</span>
          </div>
        </div>

        {/* Middle: giant name */}
        <div className="flex flex-col gap-6 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col"
          >
            <span className="mono text-xs uppercase tracking-[0.3em] text-[color:var(--color-accent)]">
              [IDENTITY]
            </span>
            <h1 className="mt-3 text-[14vw] font-bold leading-[0.88] tracking-[-0.04em] text-white md:text-[11vw]">
              RAQIB
              <br />
              MUKTADIR<span className="text-[color:var(--color-accent)]">.</span>
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mono max-w-xl text-sm uppercase tracking-[0.18em] text-white/80 md:text-base"
          >
            {site.tagline}
          </motion.p>
        </div>

        {/* Bottom: CTA + status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div className="flex flex-wrap gap-3">
            <a
              href="#work"
              className="mono hairline bg-white px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-black transition-colors hover:bg-[color:var(--color-accent)] hover:text-black"
            >
              [VIEW_WORK] →
            </a>
            <a
              href="#contact"
              className="mono hairline px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-black"
            >
              [GET_IN_TOUCH]
            </a>
          </div>
          <div className="mono flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/70">
            <span className="relative inline-flex h-2 w-2 bg-[color:var(--color-accent)]">
              <span className="absolute inset-0 animate-ping bg-[color:var(--color-accent)] opacity-75" />
            </span>
            <span>AVAILABLE FOR 2026 OPPORTUNITIES</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
