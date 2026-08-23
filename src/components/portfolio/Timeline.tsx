import { Reveal } from "./Reveal";
import type { TimelineItem } from "./data";

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="mt-14 space-y-0">
      {items.map((item, i) => {
        if (item.company && item.roles) {
          return (
            <Reveal as="li" key={item.company} delay={i * 60}>
              <article className="group relative grid gap-4 border-t border-hairline py-8 transition-colors md:grid-cols-[13rem_minmax(0,1fr)] md:gap-10 md:py-10">
                <div className="min-w-0">
                  <h3 className="display text-xl text-foreground md:text-2xl">{item.company}</h3>
                  <p className="mt-2 text-xs text-muted-foreground">{item.location}</p>
                </div>
                <div className="min-w-0 space-y-10">
                  {item.roles.map((role) => (
                    <div key={role.title}>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                        <h4 className="font-mono text-sm text-primary">{role.title}</h4>
                        <span className="text-xs text-muted-foreground">{role.date}</span>
                      </div>

                      {Array.isArray(role.skills) && role.skills.length > 0 && (
                        <ul className="mt-3 flex flex-wrap gap-2">
                          {role.skills.map((skill) => (
                            <li
                              key={skill}
                              className="rounded-sm border border-border/60 bg-elevated px-2 py-0.5 text-[10px] font-mono text-muted-foreground"
                            >
                              {skill}
                            </li>
                          ))}
                        </ul>
                      )}

                      {Array.isArray(role.bullets) && (
                        <ul className="mt-4 space-y-2.5">
                          {role.bullets.map((b) => (
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
                  ))}
                </div>
                <span
                  aria-hidden
                  className="absolute -top-px left-0 h-px w-0 bg-primary transition-all duration-500 group-hover:w-full"
                />
              </article>
            </Reveal>
          );
        }

        return (
          <Reveal as="li" key={item.title || i} delay={i * 60}>
            <article className="group relative grid gap-4 border-t border-hairline py-8 transition-colors md:grid-cols-[13rem_minmax(0,1fr)] md:gap-10 md:py-10">
              <div className="min-w-0">
                <p className="eyebrow">{item.date}</p>
                <p className="mt-2 text-xs text-muted-foreground">{item.location}</p>
              </div>
              <div className="min-w-0">
                <h3 className="display text-xl text-foreground md:text-2xl">{item.title}</h3>
                {item.org && <p className="mt-1.5 font-mono text-xs text-primary">{item.org}</p>}
                {Array.isArray(item.bullets) && (
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
        );
      })}
    </ol>
  );
}
