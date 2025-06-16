import { defineCollection, z } from 'astro:content';

const exerciseCollectionDocs = defineCollection({
  schema: z.object({
    title: z.string(),
    collectionSlug: z.string(), // important
  }),
});

export const collections = {
  exerciseCollectionDocs,
};