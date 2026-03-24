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

export const UserSchema = z.array(z.object({
    id: z.number().min(1),
    name: z.string().min(1),
    email: z.string().email().min(5),
}))

export type UserType = z.infer<typeof UserSchema>

export const UserMeSchema = z.object({
    email: z.string(),
    name: z.string(),
    vorname: z.string(),
})

export type UserMeType = z.infer<typeof UserMeSchema>

export const LoginDataSchema = z.object({
    data: z.object({
        accessToken: z.string(),
        refreshToken: z.string(),
        user: z.object({
            id: z.number(),
            email: z.string(),
        }),
    }),
    message: z.string()
})

export type LoginDataType = z.infer<typeof LoginDataSchema>;

export const AvatarSchema = z.object({
    size: z.enum(["sm", "md", "lg"]),
    name: z.string(),
    vorname: z.string(),
});

export type AvatarType = z.infer<typeof AvatarSchema>;