import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Phone } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/portfolio/Reveal";
import { Timeline } from "@/components/portfolio/Timeline";
import { usePortfolioData } from "@/components/portfolio/data";
import { LanguageToggle } from "@/components/ui/language-toggle";

function SectionHead({
  id,
  index,
  title,
  lead,
}: {
  id: string;
  index: string;
  title: string;
  lead?: string;
}) {
  return (
    <Reveal className="grid scroll-mt-28 gap-6 md:grid-cols-[13rem_minmax(0,1fr)] md:gap-10">
      <p id={id} className="eyebrow scroll-mt-28 pt-2">
        {index} — {title}
      </p>
      {lead && <p className="display max-w-2xl text-2xl text-foreground md:text-4xl">{lead}</p>}
    </Reveal>
  );
}

export default function Index() {
  const { t } = useTranslation();
  const { skillGroups, experience, education, projects, differentiators, stats } =
    usePortfolioData();

  const nav = [
    { label: t("nav.about"), href: "#sobre" },
    { label: t("nav.stack"), href: "#stack" },
    { label: t("nav.projects"), href: "#projetos" },
    { label: t("nav.journey"), href: "#trajetoria" },
    { label: t("nav.contact"), href: "#contato" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-hairline bg-background/80 backdrop-blur-xl">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-4 px-6 py-4 lg:px-10">
          <a href="#inicio" className="min-w-0 font-mono text-sm tracking-tight text-foreground">
            mauricio<span className="text-primary">.calil</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="link-underline text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <LanguageToggle />
            <a
              href="#contato"
              className="eyebrow shrink-0 text-foreground transition-colors hover:text-primary md:hidden"
            >
              {t("nav.contact")}
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section id="inicio" className="relative overflow-hidden border-b border-hairline">
          <div
            aria-hidden
            className="hairline-grid pointer-events-none absolute inset-0 opacity-40"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_20%_0%,transparent_35%,var(--background)_85%)]"
          />
          <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-40 lg:px-10 lg:pb-28 lg:pt-52">
            <Reveal>
              <p className="eyebrow">{t("hero.location")}</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="display mt-8 text-[clamp(2.5rem,9vw,7rem)] font-medium text-foreground">
                Maurício Calil
                <span className="block text-muted-foreground">Manfrim Lucera</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <div className="mt-12 grid gap-10 border-t border-hairline pt-10 md:grid-cols-[minmax(0,1fr)_24rem] md:gap-16">
                <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  <Trans
                    i18nKey="hero.description"
                    components={{ 1: <span className="text-foreground" /> }}
                  />
                </p>
                <div className="flex flex-col gap-8">
                  <div className="min-w-0">
                    <p className="font-mono text-base md:text-lg text-foreground">{t("hero.role")}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      TypeScript · Node.js · GCP
                    </p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap items-center gap-4">
                      <Button asChild className="rounded-none font-mono text-sm">
                        <a href="#projetos">
                          {t("hero.view_projects")} <ArrowDownRight className="ml-2 size-4" />
                        </a>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="rounded-none border-border bg-transparent font-mono text-sm hover:bg-secondary"
                      >
                        <a href="/cv-mauricio-calil.pdf" download>
                          {t("hero.resume")}
                        </a>
                      </Button>
                    </div>
                    <div className="flex items-center gap-2">
                      <a
                        href="https://www.linkedin.com/in/maucalil"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        className="p-2 text-muted-foreground transition-colors hover:text-primary"
                      >
                        <Linkedin className="size-6" />
                      </a>
                      <a
                        href="https://github.com/maucalil"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        className="p-2 text-muted-foreground transition-colors hover:text-primary"
                      >
                        <Github className="size-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b border-hairline">
          <div className="mx-auto grid max-w-6xl divide-y divide-border/60 px-6 lg:px-10 md:grid-cols-3 md:divide-x md:divide-y-0">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 70} className="py-8 md:px-8 md:first:pl-0">
                <p className="display text-3xl text-foreground md:text-4xl">{s.value}</p>
                <p className="eyebrow mt-3">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Sobre */}
        <section className="border-b border-hairline py-24 lg:py-32">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <SectionHead id="sobre" index="01" title={t("about.title")} lead={t("about.lead")} />
            <div className="mt-14 grid gap-10 md:grid-cols-[13rem_minmax(0,1fr)] md:gap-10">
              <div className="hidden md:block" />
              <div className="grid max-w-3xl gap-6 text-sm leading-relaxed text-muted-foreground md:text-base">
                <Reveal>
                  <p>{t("about.p1")}</p>
                </Reveal>
                <Reveal delay={80}>
                  <p>{t("about.p2")}</p>
                </Reveal>
                <Reveal delay={160}>
                  <p className="text-foreground">{t("about.p3")}</p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Stack */}
        <section className="border-b border-hairline py-24 lg:py-32">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <SectionHead id="stack" index="02" title={t("stack.title")} lead={t("stack.lead")} />
            <div className="mt-14 divide-y divide-border/60 border-y border-hairline">
              {skillGroups.map((group, i) => (
                <Reveal
                  key={group.title}
                  delay={i * 60}
                  className="grid gap-5 py-8 md:grid-cols-[13rem_minmax(0,1fr)] md:gap-10"
                >
                  <p className="eyebrow pt-1">{group.title}</p>
                  <ul className="flex flex-wrap gap-2.5">
                    {group.skills.map((skill) => (
                      <li
                        key={skill.name}
                        className="group flex items-center gap-2 border border-border bg-elevated px-3 py-2 transition-colors hover:border-primary/50 hover:bg-secondary"
                      >
                        <img
                          src={skill.icon}
                          alt=""
                          loading="lazy"
                          width={16}
                          height={16}
                          className={cn(
                            "size-4 opacity-80 transition-opacity group-hover:opacity-100",
                            skill.invertDark && "invert dark:invert",
                          )}
                        />
                        <span className="font-mono text-xs text-muted-foreground transition-colors group-hover:text-foreground">
                          {skill.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Projetos */}
        <section className="border-b border-hairline py-24 lg:py-32">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <SectionHead
              id="projetos"
              index="03"
              title={t("projects.title")}
              lead={t("projects.lead")}
            />
            <div className="mt-14 grid gap-px bg-border/60 md:grid-cols-2">
              {projects.map((project, i) => (
                <Reveal as="article" key={project.name} delay={i * 70}>
                  <div className="group flex h-full flex-col justify-between gap-8 bg-background p-7 transition-colors hover:bg-elevated lg:p-10">
                    <div>
                      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                        <p className="eyebrow">{project.index}</p>
                        <span className="eyebrow shrink-0">{project.year}</span>
                      </div>
                      <h3 className="display mt-6 text-xl text-foreground md:text-2xl">
                        {project.name}
                      </h3>
                      <p className="mt-2 font-mono text-xs text-primary">{project.role}</p>
                      <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                        {project.summary}
                      </p>
                    </div>
                    <ul className="flex flex-wrap gap-x-3 gap-y-2 border-t border-hairline pt-5">
                      {project.stack.map((tech) => (
                        <li key={tech} className="font-mono text-[11px] text-muted-foreground">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Trajetória */}
        <section className="border-b border-hairline py-24 lg:py-32">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <SectionHead
              id="trajetoria"
              index="04"
              title={t("journey.title")}
              lead={t("journey.lead")}
            />
            <Timeline items={experience} />
            <Reveal className="mt-20">
              <p className="eyebrow">{t("journey.education_title")}</p>
            </Reveal>
            <Timeline items={education} />
          </div>
        </section>

        {/* Diferenciais */}
        <section className="border-b border-hairline py-24 lg:py-32">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <SectionHead
              id="diferenciais"
              index="05"
              title={t("differentiators.title")}
              lead={t("differentiators.lead")}
            />
            <div className="mt-14 grid border-t border-hairline md:grid-cols-2">
              {differentiators.map((item, i) => (
                <Reveal
                  key={item.title}
                  delay={i * 60}
                  className="border-b border-hairline md:odd:border-r md:odd:pr-10 md:even:pl-10"
                >
                  <div className="h-full bg-background py-8 md:py-10">
                    <p className="eyebrow">0{i + 1}</p>
                    <h3 className="mt-4 font-display text-lg tracking-tight text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA / Contato */}
        <section id="contato" className="scroll-mt-24 py-28 lg:py-40">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <Reveal>
              <p className="eyebrow">06 — {t("contact.title")}</p>
              <h2 className="display mt-8 max-w-3xl text-[clamp(2rem,6vw,4.5rem)] text-foreground">
                <Trans
                  i18nKey="contact.lead"
                  components={{ 1: <span className="text-primary" /> }}
                />
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-14 grid gap-px border-y border-hairline bg-border/60 md:grid-cols-2">
                <a
                  href="mailto:mauricio.calil2@gmail.com"
                  className="group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 bg-background px-2 py-8 transition-colors hover:bg-elevated md:px-8"
                >
                  <span className="min-w-0">
                    <span className="eyebrow flex items-center gap-2">
                      <Mail className="size-3.5" /> {t("contact.email")}
                    </span>
                    <span className="mt-3 block truncate font-mono text-sm text-foreground md:text-base">
                      mauricio.calil2@gmail.com
                    </span>
                  </span>
                  <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </a>
                <a
                  href="tel:+5516993739688"
                  className="group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 bg-background px-2 py-8 transition-colors hover:bg-elevated md:px-8"
                >
                  <span className="min-w-0">
                    <span className="eyebrow flex items-center gap-2">
                      <Phone className="size-3.5" /> {t("contact.phone")}
                    </span>
                    <span className="mt-3 block truncate font-mono text-sm text-foreground md:text-base">
                      +55 (16) 99373-9688
                    </span>
                  </span>
                  <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-hairline">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-10 lg:px-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
          <p className="eyebrow">© {new Date().getFullYear()} Maurício Calil Manfrim Lucera</p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/maucalil"
              target="_blank"
              rel="noreferrer"
              className="link-underline font-mono text-xs text-muted-foreground hover:text-foreground"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/maucalil"
              target="_blank"
              rel="noreferrer"
              className="link-underline font-mono text-xs text-muted-foreground hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href="#inicio"
              className="link-underline font-mono text-xs text-muted-foreground hover:text-foreground"
            >
              {t("footer.back_to_top")}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
