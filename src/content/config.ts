import { defineCollection, z } from 'astro:content';

const recipes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    servings: z.number().optional(),
    prepTime: z.number().optional(),
    cookTime: z.number().optional(),
    categories: z.array(z.string()).optional(),
    difficulty: z.enum(['easy', 'medium', 'hard']).optional(),
    cuisine: z.string().optional(),
    diet: z.array(z.string()).optional(),
    image: z.string().optional(),
    published: z.boolean().default(true),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  }),
});

export const collections = {
  recipes,
};