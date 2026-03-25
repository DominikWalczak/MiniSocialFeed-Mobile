import { BACKEND_URL } from "@/env";
import { getAccessToken, QueryFetch } from "@/src/utils/extractedFunctions";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";


import { PostListSchema } from "@/src/utils/zodSchemas/Schema";
import { Text, View } from "react-native";
import PostList from "./components/post/PostList";


const PostSite = () => {
  const { data, isLoading, isError, refetch } = useQuery({ 
  queryKey: ['posts'],
  queryFn: async () => {
    // pobieram token uzyskany w login.tsx
    const token = await getAccessToken(); 
    
    if (!token) {
      throw new Error("Brak tokena");
    }

    return QueryFetch(`${BACKEND_URL}/post/`, { method: "GET", 
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}` 
      },
    }, PostListSchema)
  },
  });
  const { t } = useTranslation();

  if (isLoading) return <View><Text>{t('loading')}</Text></View>
  if (isError && !data) return <View><Text>{t('errorOccurred')}</Text></View>
    
  if (data) {
    return (
      <View className="flex min-h-screen items-center justify-center">
          <PostList data={data}/>
      </View>
    )
  }
}

export default PostSite