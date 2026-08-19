import { Reveal } from "./Reveal";
import type { TimelineItem } from "./data";

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="mt-14 space-y-0">
      {items.map((item, i) => (
        <Reveal as="li" key={item.title} delay={i * 60}>
          <article className="group relative grid gap-4 border-t border-hairline py-8 transition-colors md:grid-cols-[13rem_minmax(0,1fr)] md:gap-10 md:py-10">
            <div className="min-w-0">
              <p className="eyebrow">{item.date}</p>
              <p className="mt-2 text-xs text-muted-foreground">{item.location}</p>
            </div>
            <div className="min-w-0">
              <h3 className="display text-xl text-foreground md:text-2xl">{item.title}</h3>
              <p className="mt-1.5 font-mono text-xs text-primary">{item.org}</p>
              {item.bullets && (
                <ul className="mt-5 space-y-2.5">
                  {item.bullets.map((b) => (
                    <li
                      key={b}
                      className="grid grid-cols-[auto_minmax(0,1fr)] gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-primary/60" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <span
              aria-hidden
              className="absolute -top-px left-0 h-px w-0 bg-primary transition-all duration-500 group-hover:w-full"
            />
          </article>
        </Reveal>
      ))}
    </ol>
  );
}
