import { z } from 'zod'

export const CardSchema = z.object({
    category: z.string(),
    description: z.string(),
    id: z.number(),
    image: z.string(),
    price: z.number(),
    rating: z.object({
        count: z.number(),
        rate: z.number(),
    }),
    title: z.string(),
});

export const CardsSchema = z.array(CardSchema); 