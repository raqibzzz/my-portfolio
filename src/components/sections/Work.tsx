import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { projects } from "@/lib/content";

export function Work() {
  return (
    <Section id="work" label="02 // SELECTED WORK" title="Projects that shipped.">
      <div className="grid grid-cols-1 gap-px bg-white md:grid-cols-2">
        {projects.map((p, i) => (
          <div key={p.slug} className="min-w-0 overflow-hidden bg-black">
            <Reveal delay={i * 0.05} className="h-full">
            <article className="group flex h-full flex-col justify-between gap-8 p-8 transition-colors duration-150 hover:bg-[color:var(--color-accent)] hover:text-black md:p-10">
              <header className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <span className="mono text-[10px] uppercase tracking-[0.25em] text-white/60 group-hover:text-black/70">
                    [{p.year}] // #{String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="break-words text-3xl font-bold leading-tight tracking-[-0.02em] md:text-4xl">
                    {p.name}
                  </h3>
                </div>
                <span className="mono text-xl group-hover:translate-x-1 transition-transform">→</span>
              </header>
              <div className="flex flex-col gap-5">
                <p className="text-base leading-relaxed text-white/80 group-hover:text-black/90">
                  {p.summary}
                </p>
                <p className="mono text-xs uppercase tracking-wider text-white/50 group-hover:text-black/60">
                  ↳ {p.outcome}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="mono hairline px-2 py-1 text-[10px] uppercase tracking-[0.15em] group-hover:border-black"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
            </Reveal>
          </div>
        ))}
      </div>
    </Section>
  );
}
