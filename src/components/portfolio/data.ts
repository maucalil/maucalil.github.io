import { useTranslation } from "react-i18next";

export type Skill = { name: string; icon: string };
export type SkillGroup = { title: string; skills: Skill[] };

const dv = (path: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}`;

export type TimelineItem = {
  title: string;
  org: string;
  date: string;
  location: string;
  bullets?: string[];
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
      title: t("stack.groups.Back-end"),
      skills: [
        { name: "Node.js", icon: dv("nodejs/nodejs-original.svg") },
        { name: "TypeScript", icon: dv("typescript/typescript-original.svg") },
        { name: "Fastify", icon: dv("fastify/fastify-plain.svg") },
        { name: "Express.js", icon: dv("express/express-original.svg") },
        { name: "NestJS", icon: dv("nestjs/nestjs-plain.svg") },
        { name: "Java (Spring Boot)", icon: dv("spring/spring-original.svg") },
      ],
    },
    {
      title: t("stack.groups.Tecnologias"),
      skills: [
        { name: "GCP", icon: dv("googlecloud/googlecloud-original.svg") },
        { name: "AWS", icon: dv("amazonwebservices/amazonwebservices-original-wordmark.svg") },
        { name: "Terraform", icon: dv("terraform/terraform-original.svg") },
        { name: "Pulumi", icon: dv("pulumi/pulumi-plain.svg") },
        { name: "PostgreSQL", icon: dv("postgresql/postgresql-original.svg") },
        { name: "GitHub Actions", icon: dv("github/github-original.svg") },
        { name: "Microservices", icon: dv("kubernetes/kubernetes-plain.svg") },
      ],
    },
    {
      title: t("stack.groups.Linguagens"),
      skills: [
        { name: "Python", icon: dv("python/python-original.svg") },
        { name: "C", icon: dv("c/c-original.svg") },
        { name: "C++", icon: dv("cplusplus/cplusplus-original.svg") },
      ],
    },
    {
      title: t("stack.groups.Front-end"),
      skills: [
        { name: "React", icon: dv("react/react-original.svg") },
        { name: "Next.js", icon: dv("nextjs/nextjs-original.svg") },
        { name: "Tailwind CSS", icon: dv("tailwindcss/tailwindcss-original.svg") },
        { name: "Figma", icon: dv("figma/figma-original.svg") },
      ],
    },
  ];

  const experience: TimelineItem[] = [
    {
      title: t("journey.experience.e1.title"),
      org: "Bemobi Wave",
      date: t("journey.experience.e1.date"),
      location: t("journey.experience.e1.location"),
      bullets: t("journey.experience.e1.bullets", { returnObjects: true }) as string[],
    },
    {
      title: t("journey.experience.e2.title"),
      org: "Bemobi Wave",
      date: t("journey.experience.e2.date"),
      location: t("journey.experience.e2.location"),
      bullets: t("journey.experience.e2.bullets", { returnObjects: true }) as string[],
    },
    {
      title: t("journey.experience.e3.title"),
      org: "Technische Universität Braunschweig",
      date: t("journey.experience.e3.date"),
      location: t("journey.experience.e3.location"),
      bullets: t("journey.experience.e3.bullets", { returnObjects: true }) as string[],
    },
    {
      title: t("journey.experience.e4.title"),
      org: "OctoBit Empresa Júnior USP",
      date: t("journey.experience.e4.date"),
      location: t("journey.experience.e4.location"),
      bullets: t("journey.experience.e4.bullets", { returnObjects: true }) as string[],
    },
    {
      title: t("journey.experience.e5.title"),
      org: "Tokenlab",
      date: t("journey.experience.e5.date"),
      location: t("journey.experience.e5.location"),
      bullets: t("journey.experience.e5.bullets", { returnObjects: true }) as string[],
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
      stack: ["Node.js", "TypeScript", "GCP Pub/Sub", "Microservices"],
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
      stack: ["C", "RIOT OS", "IPv6", "NDP"],
    },
    {
      index: "04",
      name: t("projects.items.p4.name"),
      summary: t("projects.items.p4.summary"),
      role: t("projects.items.p4.role"),
      year: "2023",
      stack: ["Gestão", "Requisitos", "Liderança"],
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
    { value: "DE / BR", label: t("stats.international") },
  ];

  return { skillGroups, experience, education, projects, differentiators, stats };
}
