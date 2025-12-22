import { UseMutationType } from "./zodSchemas/UseMutationSchema";

export async function mutationFunction(object: UseMutationType) {
    
    const result = await fetch(object.url, object.options);

    if (!result.ok) {
        const error = await result.json().catch(() => ({}));
        throw error;
    }

    return result.json();
}