import * as SecureStore from 'expo-secure-store';
import { ZodType } from "zod";
import { UseMutationType } from "./zodSchemas/Schema";

// funkcja zewnętrzna służąca do obsługiwania fetchu
export async function QueryFetch<T>(url: string, options: object, schema: ZodType<T>): Promise<T> {
  try {
    // weryfikacja czy zmienne oraz następnie response istnieją/mają wartość
    if(!url && !options) throw new Error("url/options don't exist");
    const response = await fetch(url, options);
    if (!response) throw new Error("fetch didn't get the response");

    // uzyskanie danych z response
    const json = await response.json();
    
    if (json.message) throw new Error(json.message);
    // weryfikacja czy pobrane dane są kompletne
    const data = schema.safeParse(json);
    if (!data.success){
      // Jeśli nie to rzucamy błąd który zostanie zcatchowany i odpowiednio zapisany w logach
      throw new Error(data.error.message);
    }
    // Jeśli wszystko się powiedzie to zwracamy dane lub pustą tablice do useQuery
    return data.data;
  } catch (error) {
    throw error;
  }
}
export async function saveAccessToken(token: string) {
  await SecureStore.setItemAsync('accessToken', token);
}
export async function saveRefreshToken(token: string) {
  await SecureStore.setItemAsync('refreshToken', token);
}
export async function getAccessToken() {
  return await SecureStore.getItemAsync('accessToken');
}
export async function getRefreshToken() {
  return await SecureStore.getItemAsync('refreshToken');
}

export async function mutationFunction(object: UseMutationType) {
    
    const result = await fetch(object.url, object.options);

    if (!result.ok) {
        const error = await result.json().catch(() => ({}));
        throw error;
    }

    return result.json();
}