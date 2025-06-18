import { defineCollection, z } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { string } from 'astro:schema';


const categories = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string()
  }),
});

const exerciseCollections = defineCollection({
  type: "data",
  schema:z.object({
    title: z.string(),
    slug: z.string(),
    category: z.string(),
    level: z.string(),
    description: z.string()
  }),
});

const exercises = defineCollection({
  type: "data",
  schema:z.object({
    index: z.number(),
    title: z.string(),
    slug: z.string(),
    category: z.string(),
    collection: z.string(),
    templateABC: z.string(),
    hintABC: z.string(),
    solutionABC: z.string()
  }),

});

const exerciseCollectionDocs = defineCollection({
  schema: z.object({
    title: z.string(),
    collectionSlug: z.string(), // important
  }),
});

export const collections = {
  categories,
  exerciseCollections,
  exercises,
  exerciseCollectionDocs,

};