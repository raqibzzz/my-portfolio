import { Reveal } from "@/components/motion/Reveal";
import { Marquee } from "@/components/motion/Marquee";
import { studio555 } from "@/lib/content";

export function Studio555() {
  return (
    <section
      id="555"
      className="relative w-full border-t border-white bg-[color:var(--color-accent)] text-black"
    >
      <Marquee
        items={[
          "555(STUDIOS)",
          "PRESENTATION NIGHT",
          "BUILDER SUNDAYS",
          "ELECTRA",
          "MONTREAL",
        ]}
        separator="×"
        className="border-black bg-[color:var(--color-accent)]"
      />
      <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-10 px-6 py-20 md:grid-cols-12 md:px-10 md:py-28">
        <div className="md:col-span-6 flex flex-col gap-4">
          <span className="mono text-xs uppercase tracking-[0.3em]">
            [04 // SIDE STUDIO]
          </span>
          <h2 className="break-words text-[14vw] font-bold leading-[0.85] tracking-[-0.04em] md:text-[clamp(3rem,7vw,7rem)]">
            {studio555.name}
          </h2>
          <p className="mono text-sm uppercase tracking-[0.2em]">
            {studio555.tagline}
          </p>
        </div>
        <div className="md:col-span-6 flex flex-col gap-6">
          {studio555.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p className="text-xl leading-relaxed md:text-2xl">{p}</p>
            </Reveal>
          ))}
          <Reveal delay={0.2}>
            <a
              href={studio555.href}
              target="_blank"
              rel="noreferrer"
              className="mono hairline mt-4 inline-flex w-fit border-black bg-black px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-black"
            >
              [VISIT 555-STUDIO.COM] →
            </a>
          </Reveal>
        </div>
      </div>
      <Marquee
        items={[
          "SHOPIFY",
          "ETS",
          "HEC",
          "CANSBRIDGE",
          "711+ REGISTRATIONS",
          "100% FILL RATE",
        ]}
        separator="/"
        className="border-black bg-[color:var(--color-accent)]"
      />
    </section>
  );
}
