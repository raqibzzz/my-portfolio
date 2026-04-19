import { site } from "@/lib/content";

const LINKS: Array<{ label: string; href: string; external?: boolean }> = [
  { label: "EMAIL", href: `mailto:${site.email}` },
  { label: "LINKEDIN", href: site.social.linkedin, external: true },
  { label: "GITHUB", href: site.social.github, external: true },
  { label: "INSTAGRAM", href: site.social.instagram, external: true },
  { label: "555(STUDIOS)", href: site.social.studio555, external: true },
  { label: "RESUME.PDF", href: "/resume.pdf", external: true },
];

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative w-full border-t border-white bg-black px-6 py-20 md:px-10 md:py-28"
    >
      <div className="mx-auto grid w-full max-w-[1600px] gap-12 md:grid-cols-12">
        <div className="md:col-span-7 flex flex-col gap-6">
          <span className="mono text-xs uppercase tracking-[0.3em] text-[color:var(--color-accent)]">
            [08 // CONTACT]
          </span>
          <h2 className="text-5xl font-bold leading-[0.9] tracking-[-0.03em] text-white md:text-7xl">
            Let&apos;s build
            <br />
            something.
          </h2>
          <a
            href={`mailto:${site.email}`}
            className="mono mt-2 w-fit text-xl font-medium text-white underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-8 hover:text-[color:var(--color-accent)] md:text-2xl"
          >
            {site.email}
          </a>
        </div>

        <div className="md:col-span-5 flex flex-col justify-between gap-10">
          <nav>
            <ul className="grid grid-cols-2 gap-px bg-white">
              {LINKS.map((l) => (
                <li key={l.label} className="bg-black">
                  <a
                    href={l.href}
                    target={l.external ? "_blank" : undefined}
                    rel={l.external ? "noreferrer" : undefined}
                    className="mono flex items-center justify-between p-4 text-[10px] uppercase tracking-[0.25em] text-white transition-colors hover:bg-[color:var(--color-accent)] hover:text-black"
                  >
                    <span>{l.label}</span>
                    <span>↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mono flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-white/40">
            <span>© 2026 · {site.name.toUpperCase()}</span>
            <span>{site.location.toUpperCase()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
