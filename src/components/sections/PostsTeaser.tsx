import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { PostCard } from "@/components/posts/PostCard";
import { latestByPlatform, posts } from "@/lib/posts";

export function PostsTeaser() {
  if (posts.length === 0) return null;

  const latestX = latestByPlatform("x");
  const latestLinkedin = latestByPlatform("linkedin");
  const teaser = [latestX, latestLinkedin].filter(
    (p): p is NonNullable<typeof p> => p !== null
  );

  if (teaser.length === 0) return null;

  return (
    <Section id="posts" label="08 // POSTS" title="Field notes, in real time.">
      <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <span className="mono text-xs uppercase tracking-[0.2em] text-white/50">
          [LATEST PER PLATFORM · REVALIDATES HOURLY]
        </span>
        <Link
          href="/posts"
          className="mono hairline group inline-flex w-fit items-center gap-3 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-white transition-colors hover:border-[color:var(--color-accent)] hover:bg-[color:var(--color-accent)] hover:text-black"
        >
          <span>[READ ALL POSTS]</span>
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        {teaser.map((post, i) => (
          <Reveal key={post.url} delay={i * 0.05}>
            <PostCard post={post} latest={i === 0} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
