import type { Metadata } from "next";
import Link from "next/link";
import { Marquee } from "@/components/motion/Marquee";
import { PostsGrid } from "@/components/posts/PostsGrid";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Posts",
  description:
    "Field notes from Raqib Muktadir — X and LinkedIn posts on building AI, test automation, and 555(STUDIOS).",
  openGraph: {
    title: "Posts · Raqib Muktadir",
    description:
      "Field notes from Raqib Muktadir — X and LinkedIn posts on building AI, test automation, and 555(STUDIOS).",
    url: "https://raqibmuktadir.com/posts",
  },
};

export const revalidate = 3600;

export default function PostsPage() {
  const xCount = posts.filter((p) => p.platform === "x").length;
  const linkedinCount = posts.filter((p) => p.platform === "linkedin").length;

  return (
    <main className="relative min-h-screen bg-black">
      <section className="relative w-full border-b border-white bg-black px-6 pb-16 pt-28 md:px-10 md:pb-20 md:pt-36">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-10">
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/"
              className="mono hairline inline-flex items-center gap-2 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white/70 transition-colors hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)]"
            >
              <span>←</span>
              <span>[HOME]</span>
            </Link>
            <span className="mono text-[10px] uppercase tracking-[0.3em] text-white/40">
              [POSTS]
            </span>
          </div>

          <div className="flex flex-col gap-5">
            <span className="mono text-xs uppercase tracking-[0.3em] text-[color:var(--color-accent)]">
              [FIELD_NOTES]
            </span>
            <h1 className="break-words text-5xl font-bold leading-[0.9] tracking-[-0.03em] text-white md:text-7xl lg:text-8xl">
              As they&apos;re written.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
              Build logs, half-formed ideas, and project updates — lifted
              straight from X and LinkedIn. No algorithm, no infinite scroll,
              no polish. Posts in reverse chronological order.
            </p>
          </div>

          <div className="mono flex flex-wrap items-center gap-5 text-[10px] uppercase tracking-[0.25em] text-white/50">
            <span>[TOTAL: {String(posts.length).padStart(2, "0")}]</span>
            <span>·</span>
            <span>X: {String(xCount).padStart(2, "0")}</span>
            <span>·</span>
            <span>LNKD: {String(linkedinCount).padStart(2, "0")}</span>
            <span>·</span>
            <span>REVALIDATES HOURLY</span>
          </div>
        </div>
      </section>

      <Marquee
        items={[
          "BUILD LOGS",
          "HALF-FORMED IDEAS",
          "PROJECT UPDATES",
          "555 STUDIOS",
          "X · LINKEDIN",
        ]}
        separator="·"
      />

      <section className="relative w-full bg-black px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto w-full max-w-[1600px]">
          <PostsGrid posts={posts} />
        </div>
      </section>

      <section className="relative w-full border-t border-white bg-black px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-3">
            <span className="mono text-xs uppercase tracking-[0.3em] text-[color:var(--color-accent)]">
              [END_OF_FEED]
            </span>
            <h2 className="text-4xl font-bold leading-[0.95] tracking-[-0.02em] text-white md:text-5xl">
              Back to the site.
            </h2>
          </div>
          <Link
            href="/"
            className="mono hairline inline-flex items-center gap-3 bg-white px-5 py-3 text-xs font-bold uppercase tracking-[0.25em] text-black transition-colors hover:bg-[color:var(--color-accent)] hover:text-black"
          >
            <span>←</span>
            <span>[RETURN TO PORTFOLIO]</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
