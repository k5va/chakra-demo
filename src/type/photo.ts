import { z } from 'zod';
import { photoSchema } from '@/schema';

export type Photo = z.infer<typeof photoSchema>;
