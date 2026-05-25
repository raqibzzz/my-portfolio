import { Suspense } from "react";
import { StickyNav } from "@/components/nav/StickyNav";
import { Hero } from "@/components/hero/Hero";
import { Marquee } from "@/components/motion/Marquee";
import { About } from "@/components/sections/About";
import { Work } from "@/components/sections/Work";
import { Experience } from "@/components/sections/Experience";
import { Studio555 } from "@/components/sections/Studio555";
import { NowPlaying } from "@/components/sections/NowPlaying";
import { PostsTeaser } from "@/components/sections/PostsTeaser";
import { NewsFeed } from "@/components/sections/NewsFeed";
import { Footer } from "@/components/sections/Footer";

export const revalidate = 3600;

export default function Home() {
  return (
    <main className="relative bg-black">
      <StickyNav />
      <Hero />
      <Marquee
        items={[
          "AI DEVELOPER",
          "TEST AUTOMATION",
          "FULL-STACK BUILDER",
          "555 STUDIOS",
          "MONTRÉAL",
          "2026",
        ]}
      />
      <About />
      <Work />
      <Experience />
      <Studio555 />
      <NowPlaying />
      <PostsTeaser />
      <Suspense
        fallback={
          <div className="mono hairline mx-auto my-20 max-w-[1600px] px-6 py-20 text-sm uppercase tracking-[0.2em] text-white/50 md:px-10">
            [LOADING_FEEDS...]
          </div>
        }
      >
        <NewsFeed />
      </Suspense>
      <Footer />
    </main>
  );
}
