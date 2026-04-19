import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { bio, highlights } from "@/lib/content";

export function About() {
  return (
    <Section id="about" label="01 // ABOUT" title="An engineer who ships.">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-7 flex flex-col gap-6">
          {bio.map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p className="max-w-2xl text-xl leading-relaxed text-white/85 md:text-2xl">
                {p}
              </p>
            </Reveal>
          ))}
        </div>
        <div className="md:col-span-5 grid grid-cols-2 gap-px bg-white">
          {highlights.map((h, i) => (
            <Reveal key={h.label} delay={0.1 + i * 0.05} className="bg-black">
              <div className="flex h-full flex-col justify-between gap-4 p-6">
                <div className="text-5xl font-bold leading-none tracking-[-0.03em] text-white md:text-6xl">
                  {h.value}
                </div>
                <div className="flex flex-col gap-2">
                  <div className="mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
                    {h.label}
                  </div>
                  <div className="mono text-xs leading-relaxed text-white/60">
                    {h.detail}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
