import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SectionProps {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, label, title, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full border-t border-white bg-black px-6 py-20 md:px-10 md:py-28",
        className
      )}
    >
      <div className="mx-auto w-full max-w-[1600px]">
        <header className="mb-12 flex flex-col gap-4 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-3">
            <span className="mono text-xs uppercase tracking-[0.3em] text-[color:var(--color-accent)]">
              [{label}]
            </span>
            <h2 className="text-5xl font-bold leading-[0.9] tracking-[-0.03em] text-white md:text-7xl">
              {title}
            </h2>
          </div>
        </header>
        {children}
      </div>
    </section>
  );
}
