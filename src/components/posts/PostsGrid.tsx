"use client";

import { useMemo, useState } from "react";
import { PostCard } from "@/components/posts/PostCard";
import type { Platform, Post } from "@/lib/posts";

type Filter = "all" | Platform;

const FILTERS: Array<{ id: Filter; label: string }> = [
  { id: "all", label: "ALL" },
  { id: "x", label: "X" },
  { id: "linkedin", label: "LINKEDIN" },
];

interface PostsGridProps {
  posts: Post[];
}

export function PostsGrid({ posts }: PostsGridProps) {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = useMemo(
    () =>
      filter === "all" ? posts : posts.filter((p) => p.platform === filter),
    [filter, posts]
  );

  const latestUrl = posts[0]?.url;

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-wrap items-center gap-2">
        {FILTERS.map((f) => {
          const active = filter === f.id;
          const count =
            f.id === "all"
              ? posts.length
              : posts.filter((p) => p.platform === f.id).length;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={`hairline mono inline-flex items-center gap-2 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] transition-colors ${
                active
                  ? "border-[color:var(--color-accent)] bg-[color:var(--color-accent)] text-black"
                  : "text-white/70 hover:border-white hover:text-white"
              }`}
            >
              <span>{f.label}</span>
              <span
                className={active ? "text-black/60" : "text-white/40"}
              >
                [{String(count).padStart(2, "0")}]
              </span>
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <div className="mono hairline p-10 text-sm uppercase tracking-[0.2em] text-white/60">
          [NO_POSTS] — nothing on this platform yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {filtered.map((post) => (
            <PostCard
              key={post.url}
              post={post}
              latest={post.url === latestUrl && filter === "all"}
            />
          ))}
        </div>
      )}
    </div>
  );
}
