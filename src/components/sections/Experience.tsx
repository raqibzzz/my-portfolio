import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { experience } from "@/lib/content";

export function Experience() {
  return (
    <Section id="experience" label="03 // EXPERIENCE" title="Where I've built.">
      <ol className="flex flex-col">
        {experience.map((e, i) => (
          <Reveal key={`${e.company}-${i}`} delay={i * 0.05}>
            <li className="grid grid-cols-1 gap-6 border-t border-white py-10 md:grid-cols-12 md:py-14">
              <div className="md:col-span-4 flex flex-col gap-2">
                <span className="mono text-[10px] uppercase tracking-[0.25em] text-[color:var(--color-accent)]">
                  {e.period}
                </span>
                <h3 className="text-2xl font-bold leading-tight tracking-[-0.02em] md:text-3xl">
                  {e.company}
                </h3>
                <span className="mono text-xs uppercase tracking-wider text-white/60">
                  {e.role} · {e.location}
                </span>
              </div>
              <ul className="md:col-span-8 flex flex-col gap-3">
                {e.bullets.map((b, bi) => (
                  <li
                    key={bi}
                    className="flex gap-3 text-base leading-relaxed text-white/80"
                  >
                    <span className="mono mt-1 shrink-0 text-[color:var(--color-accent)]">
                      ▸
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </li>
          </Reveal>
        ))}
        <li className="border-t border-white" aria-hidden />
      </ol>
    </Section>
  );
}
