"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

const LINKS = [
  { href: "#about", label: "ABOUT" },
  { href: "#work", label: "WORK" },
  { href: "#experience", label: "EXPERIENCE" },
  { href: "#555", label: "555" },
  { href: "#now-playing", label: "SOUND" },
  { href: "#news", label: "NEWS" },
  { href: "#contact", label: "CONTACT" },
];

export function StickyNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-[transform,background] duration-300",
        scrolled
          ? "translate-y-0 bg-black/90 backdrop-blur-sm hairline-b"
          : "-translate-y-full"
      )}
    >
      <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#top"
          className="mono text-sm font-bold uppercase tracking-[0.25em] text-white"
        >
          R/M
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="mono text-xs uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-[color:var(--color-accent)]"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="mailto:raqibmuktadir2@gmail.com"
          className="mono hidden text-xs uppercase tracking-[0.2em] text-black hairline bg-white px-3 py-2 hover:bg-[color:var(--color-accent)] hover:text-black md:inline-block"
        >
          [GET_IN_TOUCH]
        </a>
      </div>
    </header>
  );
}
