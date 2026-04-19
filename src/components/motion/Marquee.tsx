interface MarqueeProps {
  items: string[];
  separator?: string;
  className?: string;
}

export function Marquee({ items, separator = "—", className }: MarqueeProps) {
  const content = [...items, ...items];
  return (
    <div
      className={`overflow-hidden hairline-b hairline-t bg-black py-4 ${className ?? ""}`}
      aria-hidden
    >
      <div className="marquee-track flex gap-10 whitespace-nowrap">
        {content.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="mono text-sm uppercase tracking-[0.2em] text-white/80"
          >
            {item}
            <span className="mx-10 text-[color:var(--color-accent)]">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
