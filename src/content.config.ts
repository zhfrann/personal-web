import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projectStories = defineCollection({
  loader: glob({
    base: "./src/content/project-stories",
    pattern: "**/*.md",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    technologies: z.array(z.string()),
    coverImage: z.string().optional(),
    projectUrl: z.url().optional(),
    sourceUrl: z.url().optional(),
    order: z.number(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projectStories };
