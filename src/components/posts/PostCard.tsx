import { fmtPostTimeAgo, platformLabel, type Post } from "@/lib/posts";

interface PostCardProps {
  post: Post;
  /** When true, renders a small [LATEST] accent badge. */
  latest?: boolean;
}

const platformCta: Record<Post["platform"], string> = {
  x: "[VIEW ON X]",
  linkedin: "[VIEW ON LINKEDIN]",
};

export function PostCard({ post, latest }: PostCardProps) {
  return (
    <article className="hairline flex min-w-0 flex-col gap-6 overflow-hidden bg-black p-6 md:p-8">
      <header className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-[color:var(--color-accent)]">
            [{platformLabel[post.platform]}]
          </span>
          {post.tag ? (
            <span className="mono text-[10px] uppercase tracking-[0.25em] text-white/40">
              · {post.tag}
            </span>
          ) : null}
        </div>
        <span className="mono text-[10px] uppercase tracking-[0.25em] text-white/40">
          {fmtPostTimeAgo(post.publishedAt)}
        </span>
      </header>

      <p className="whitespace-pre-wrap break-words text-base leading-relaxed text-white/90 md:text-lg">
        {post.body}
      </p>

      <footer className="mt-auto flex items-center justify-between gap-4">
        <a
          href={post.url}
          target="_blank"
          rel="noreferrer"
          className="mono hairline group inline-flex items-center gap-2 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white transition-colors hover:border-[color:var(--color-accent)] hover:bg-[color:var(--color-accent)] hover:text-black"
        >
          <span>{platformCta[post.platform]}</span>
          <span className="transition-transform group-hover:translate-x-0.5">
            ↗
          </span>
        </a>
        {latest ? (
          <span className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-[color:var(--color-accent)]">
            [LATEST]
          </span>
        ) : null}
      </footer>
    </article>
  );
}
