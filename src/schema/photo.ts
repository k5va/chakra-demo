import { z } from 'zod';

export const photoSchema = z.object({
  id: z.number(),
  title: z.string(),
  url: z.string(),
  thumbnailUrl: z.string(),
});
