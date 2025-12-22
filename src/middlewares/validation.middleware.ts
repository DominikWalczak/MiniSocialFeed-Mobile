import { z } from "zod";

// middleware wielokrotnego użytku służący do weryfikacji typów
export const validationMiddleware = <T>(schema: z.Schema<T>, item: unknown): T =>{
    const result = schema.safeParse(item);
    console.log(item)

    if (!result.success) {
        throw {
            error: "Invalid data",
                details: result.error.issues.map(i => ({
                    path: i.path.join('.'),
                    message: i.message,
                    code: i.code,
                })),
        }
    }

    return result.data;
}