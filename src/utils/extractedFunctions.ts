import { z, ZodType} from "zod";

// funkcja zewnętrzna służąca do obsługiwania fetchu
export async function QueryFetch<T>(url: string, options: object, schema: ZodType<T>): Promise<T> {
  try {
    // weryfikacja czy zmienne oraz następnie response istnieją/mają wartość
    if(!url && !options) throw "url/options don't exist";
    const response = await fetch(url, options);
    if (!response) throw "fetch didn't get the response";

    // uzyskanie danych z response
    const json = await response.json();
    
    if (json.message) throw json.message
    // weryfikacja czy pobrane dane są kompletne
    const data = schema.safeParse(json);
    if (!data.success){
      // Jeśli nie to rzucamy błąd który zostanie zcatchowany i odpowiednio zapisany w logach
      throw data.error.message;
    }
    // Jeśli wszystko się powiedzie to zwracamy dane lub pustą tablice do useQuery
    return data.data;
  } catch (error) {
    console.log("QueryFetch error: " + error);
    throw error;
  }
}