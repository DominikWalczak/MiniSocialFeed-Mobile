import UserData from "@/app/components/UserData";
import { BACKEND_URL } from "@/env";
import { useStringKeys } from '@/src/i18n/i18nKeys';
import { QueryFetch } from '@/src/utils/extractedFuntions';
import { useQuery } from '@tanstack/react-query';
import { Text } from 'react-native';

export default function User() {
  // do fetchu wykorzystuję funkcję QueryFetch 
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["user"],
    queryFn: () => QueryFetch(`${BACKEND_URL}/user/me`, { method: "GET"}),
    enabled: true,
  });

  // definiuję stringKeys aby uzyskać dostęp do określonych tłumaczeń językowych poprzez obiekt
  const stringKeys = useStringKeys(data?.length ?? 0);

  if (isLoading) return <Text>{stringKeys.loading}</Text>
  if (isError) return <Text>{stringKeys.errorOccurred}</Text>

  return (
    <UserData data={data ?? []}/>
  )
}