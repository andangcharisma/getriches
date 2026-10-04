import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Posts live in src/content/blog/{id,en}/<slug>.md — same filename in both locales.
const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			date: z.coerce.date(),
			tag: z.string(),
			excerpt: z.string(),
			cover: z.optional(image()),
		}),
});

export const collections = { blog };
