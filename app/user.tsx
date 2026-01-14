import UserData from "@/app/components/UserData";
import { BACKEND_URL } from "@/env";
import { useTranslation } from 'react-i18next';
import { QueryFetch } from '@/src/utils/extractedFunctions';
import { useQuery } from '@tanstack/react-query';
import { Text } from 'react-native';

export default function User() {
  // do fetchu wykorzystuję funkcję QueryFetch 
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["user"],
    queryFn: () => QueryFetch(`${BACKEND_URL}/user/me`, { method: "GET"}),
    enabled: true,
  });

  // zmienne tekstowe zależne od wybranego języka przez użytkownika 
  const { t } = useTranslation();

  if (isLoading) return <Text>{t('loading')}</Text>
  if (isError) return <Text>{t('errorOccurred')}</Text>

  return (
    <UserData data={data ?? []}/>
  )
}