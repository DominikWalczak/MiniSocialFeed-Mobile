"use client";
import { UserSchema } from "./zodSchemas";

// funkcja zewnętrzna służąca do obsługiwania fetchu
export async function QueryFetch(url: string, options: object) {
  try {
    // weryfikacja czy zmienne oraz następnie response istnieją/mają wartość
    if(!url && !options) return [];
    const response = await fetch(url, options);
    if (!response) return [];

    // uzyskanie danych z response
    const json = await response.json();

    // weryfikacja czy pobrane dane są kompletne
    const data = UserSchema.safeParse(json);
    if (!data.success){
      // Jeśli nie to rzucamy błąd który zostanie zcatchowany i odpowiednio zapisany w logach
      throw data.error.message;
    }
    // Jeśli wszystko się powiedzie to zwracamy dane lub pustą tablice do useQuery
    return data.data || [];
  } catch (error) {
    console.log("QueryFetch error: " + error);
    return [];
  }
}