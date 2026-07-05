import { defineCollection, z } from 'astro:content';

const tratamentos = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    rotulo: z.string(), // ex: "FACETAS", "CLAREAMENTO"
    ordem: z.number().default(0),
  }),
});

const portfolio = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    imagem: z.string(), // caminho da imagem em /public/images/portfolio
    ordem: z.number().default(0),
  }),
});

export const collections = { tratamentos, portfolio };
