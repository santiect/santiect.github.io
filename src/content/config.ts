import { defineCollection, z } from "astro:content";

// Disciplinas: link para a página já publicada no GitHub do professor.
const courses = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    url: z.string().url(),
    order: z.number().default(0),
  }),
});

// Projetos de pesquisa/desenvolvimento.
const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    url: z.string().url().optional(),
    date: z.coerce.date(),
    order: z.number().default(0),
  }),
});

// Cursos, palestras, workshops (divulgação).
const talks = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    kind: z.enum(["curso", "palestra", "workshop", "evento"]),
    date: z.coerce.date(),
    location: z.string(),
    summary: z.string(),
    url: z.string().url().optional(),
  }),
});

// Posts do blog técnico (suporta LaTeX via remark-math/rehype-katex).
const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { courses, projects, talks, posts };
