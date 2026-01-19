"use client";

import { useQuery } from "@tanstack/react-query";
import { QueryFetch } from "@/src/utils/extractedFunctions";
import { BACKEND_URL } from "@/env";
import { useTranslation } from "react-i18next";


import PostItem from "./components/PostItem";
import { PostItemSchema } from "@/src/utils/zodSchemas/Schema";
import { View, Text } from "react-native";


const PostSite = () => {
  const { data, isLoading, isError, refetch } = useQuery({ 
  queryKey: ['posts'],
  queryFn: () => QueryFetch(`${BACKEND_URL}/post/`, { method: "GET", 
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbm5hLm5vd2FrQHRlc3QucGwiLCJpYXQiOjE3Njg3NTIzOTgsImV4cCI6MTc2ODc1MjY5OH0.LfYku7P3YUR5Lgpjg_65RjfczR_yeYTKQwkveKzgyGU` 
    },
  }, PostItemSchema),
  enabled: true
  });
  const { t } = useTranslation();

  if (isLoading) return <View><Text>{t('loading')}</Text></View>
  if (isError && !data) return <View><Text>{t('errorOccurred')}</Text></View>
    
  if (data) {
    return (
      <View className="flex min-h-screen items-center justify-center">
          <PostItem data={data}/>
      </View>
    )
  }
}

export default PostSite