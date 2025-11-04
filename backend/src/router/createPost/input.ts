import { z } from "zod";

export const zCreatePostTrpcInput = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  text: z.string().min(100, 'Text shoud be at least 100 characters long'),
})