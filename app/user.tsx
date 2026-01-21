import UserData from "@/app/components/UserData";
import { BACKEND_URL } from "@/env";
import { getAccessToken, QueryFetch } from '@/src/utils/extractedFunctions';
import { UserMeSchema } from "@/src/utils/zodSchemas/Schema";
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { Text } from 'react-native';

export default function User() {
  // do fetchu wykorzystuję funkcję QueryFetch  

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
        // pobieram token uzyskany w login.tsx
        const token = await getAccessToken(); 
        
        if (!token) {
          throw new Error("Brak tokena");
        }

        return QueryFetch(`${BACKEND_URL}/user/me/1`, { 
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}` 
          },
        }, UserMeSchema);
      },
      enabled: true,
    });
  // zmienne tekstowe zależne od wybranego języka przez użytkownika 
  const { t } = useTranslation();

  if (isLoading || !data) return <Text>{t('loading')}</Text>
  if (isError) return <Text>{t('errorOccurred')}</Text>

  return (
    <UserData data={data}/>
  )
}