import { useTranslation } from "react-i18next";

export type Skill = { name: string; icon: string; invertDark?: boolean };
export type SkillGroup = { title: string; skills: Skill[] };

const dv = (path: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}`;

export type TimelineRole = {
  title: string;
  date: string;
  skills: string[];
  bullets?: string[];
};

export type TimelineItem = {
  location: string;
  title?: string;
  org?: string;
  date?: string;
  bullets?: string[];
  company?: string;
  roles?: TimelineRole[];
};

export type Project = {
  index: string;
  name: string;
  summary: string;
  role: string;
  year: string;
  stack: string[];
  link?: string;
};

export function usePortfolioData() {
  const { t } = useTranslation();

  const skillGroups: SkillGroup[] = [
    {
      title: t("stack.groups.Back"),
      skills: [
        { name: "Node.js", icon: dv("nodejs/nodejs-original.svg") },
        { name: "Fastify", icon: dv("fastify/fastify-plain.svg"), invertDark: true },
        { name: "Express.js", icon: dv("express/express-original.svg"), invertDark: true },
        { name: "Java Spring Boot", icon: dv("spring/spring-original.svg") },
      ],
    },
    {
      title: t("stack.groups.Infrastructure"),
      skills: [
        { name: "GCP", icon: dv("googlecloud/googlecloud-original.svg") },
        { name: "Docker", icon: dv("docker/docker-original.svg") },
        { name: "PostgreSQL", icon: dv("postgresql/postgresql-original.svg") },
        { name: "Terraform", icon: dv("terraform/terraform-original.svg") },
        { name: "Pulumi", icon: dv("pulumi/pulumi-plain.svg") },
        { name: "GitHub Actions", icon: dv("github/github-original.svg"), invertDark: true },
      ],
    },
    {
      title: t("stack.groups.Front"),
      skills: [
        { name: "React", icon: dv("react/react-original.svg") },
        { name: "Next.js", icon: dv("nextjs/nextjs-original.svg") },
        { name: "Tailwind CSS", icon: dv("tailwindcss/tailwindcss-original.svg") },
        { name: "Figma", icon: dv("figma/figma-original.svg") },
      ],
    },
    {
      title: t("stack.groups.Languages"),
      skills: [
        { name: "TypeScript", icon: dv("typescript/typescript-original.svg") },
        { name: "Python", icon: dv("python/python-original.svg") },
        { name: "C", icon: dv("c/c-original.svg") },
        { name: "C++", icon: dv("cplusplus/cplusplus-original.svg") },
      ],
    },
  ];

  const experience: TimelineItem[] = [
    {
      company: t("journey.experience.c1.company"),
      location: t("journey.experience.c1.location"),
      roles: [
        {
          title: t("journey.experience.c1.roles.r1.title"),
          date: t("journey.experience.c1.roles.r1.date"),
          skills: t("journey.experience.c1.roles.r1.skills", { returnObjects: true }) as string[],
          bullets: t("journey.experience.c1.roles.r1.bullets", { returnObjects: true }) as string[],
        },
        {
          title: t("journey.experience.c1.roles.r2.title"),
          date: t("journey.experience.c1.roles.r2.date"),
          skills: t("journey.experience.c1.roles.r2.skills", { returnObjects: true }) as string[],
          bullets: t("journey.experience.c1.roles.r2.bullets", { returnObjects: true }) as string[],
        },
      ],
    },
    {
      company: t("journey.experience.c2.company"),
      location: t("journey.experience.c2.location"),
      roles: [
        {
          title: t("journey.experience.c2.roles.r1.title"),
          date: t("journey.experience.c2.roles.r1.date"),
          skills: t("journey.experience.c2.roles.r1.skills", { returnObjects: true }) as string[],
          bullets: t("journey.experience.c2.roles.r1.bullets", { returnObjects: true }) as string[],
        },
      ],
    },
    {
      company: t("journey.experience.c3.company"),
      location: t("journey.experience.c3.location"),
      roles: [
        {
          title: t("journey.experience.c3.roles.r1.title"),
          date: t("journey.experience.c3.roles.r1.date"),
          skills: t("journey.experience.c3.roles.r1.skills", { returnObjects: true }) as string[],
          bullets: t("journey.experience.c3.roles.r1.bullets", { returnObjects: true }) as string[],
        },
      ],
    },
    {
      company: t("journey.experience.c4.company"),
      location: t("journey.experience.c4.location"),
      roles: [
        {
          title: t("journey.experience.c4.roles.r1.title"),
          date: t("journey.experience.c4.roles.r1.date"),
          skills: t("journey.experience.c4.roles.r1.skills", { returnObjects: true }) as string[],
          bullets: t("journey.experience.c4.roles.r1.bullets", { returnObjects: true }) as string[],
        },
      ],
    },
  ];

  const education: TimelineItem[] = [
    {
      title: t("journey.education.ed1.title"),
      org: t("journey.education.ed1.org"),
      date: "Abr/2021 — Dez/2025",
      location: t("journey.education.ed1.location"),
    },
    {
      title: t("journey.education.ed2.title"),
      org: t("journey.education.ed2.org"),
      date: "Abr/2024 — Mar/2025",
      location: t("journey.education.ed2.location"),
    },
  ];

  const projects: Project[] = [
    {
      index: "01",
      name: t("projects.items.p1.name"),
      summary: t("projects.items.p1.summary"),
      role: t("projects.items.p1.role"),
      year: "2026",
      stack: ["Node.js", "TypeScript", "GCP", "Microservices"],
    },
    {
      index: "02",
      name: t("projects.items.p2.name"),
      summary: t("projects.items.p2.summary"),
      role: t("projects.items.p2.role"),
      year: "2025",
      stack: ["GCP", "Terraform", "Pulumi", "GitHub Actions"],
    },
    {
      index: "03",
      name: t("projects.items.p3.name"),
      summary: t("projects.items.p3.summary"),
      role: t("projects.items.p3.role"),
      year: "2024",
      stack: ["C", "IoT", "Network Protocols"],
    },
    {
      index: "04",
      name: t("projects.items.p4.name"),
      summary: t("projects.items.p4.summary"),
      role: t("projects.items.p4.role"),
      year: "2023",
      stack: ["Leadership", "Team Management"],
    },
  ];

  const differentiators = [
    {
      title: t("differentiators.items.d1.title"),
      body: t("differentiators.items.d1.body"),
    },
    {
      title: t("differentiators.items.d2.title"),
      body: t("differentiators.items.d2.body"),
    },
    {
      title: t("differentiators.items.d3.title"),
      body: t("differentiators.items.d3.body"),
    },
    {
      title: t("differentiators.items.d4.title"),
      body: t("differentiators.items.d4.body"),
    },
  ];

  const stats = [
    { value: "3+", label: t("stats.years") },
    { value: "USP", label: t("stats.degree") },
    { value: "BR / DE", label: t("stats.international") },
  ];

  return { skillGroups, experience, education, projects, differentiators, stats };
}
