import { z } from "zod";

export const UseMutationSchema = z.object({
  url: z.string().url("Niepoprawny format adresu URL").min(1, "URL jest wymagany"),
  
  options: z.object({
    method: z.enum(["GET", "POST", "PUT", "DELETE", "PATCH"]).optional(),
    headers: z.record(z.string(), z.string()).optional(),
    body: z.string().optional(),
  }).optional()
});

export type UseMutationType = z.infer<typeof UseMutationSchema>;

export const PostItemSchema = z.array(z.object({
    id: z.number(),
    authorId: z.number(),
    content: z.string(),
    createdAt: z.string().datetime(),
}))

export type PostItemType = z.infer<typeof PostItemSchema>;