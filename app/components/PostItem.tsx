import React from 'react';
import { View, Text } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { useTranslation } from 'react-i18next';
import type { PostItemType } from '@/src/utils/zodSchemas/Schema';

interface Props {
  data: PostItemType[];
}

const PostItem = ({ data }: { data: PostItemType }) => {
  const { t } = useTranslation();

  return (
    <View className="flex-1 bg-[rgb(8,81,156)] w-full">
      <FlashList
        data={data}
        renderItem={({ item }) => {
            return(
                <View className="w-full bg-[rgb(33,113,181)] rounded-3xl p-6 mb-3 shadow-sm">
                    <View className="mb-1">
                        <Text className="text-[rgb(236,231,242)] font-bold">
                        {t('AuthorsId')}: <Text className="font-normal">{item.authorId}</Text>
                        </Text>
                    </View>

                    <View className="mb-1">
                        <Text className="text-[rgb(236,231,242)] font-bold">
                        {t('CreatedAt')}: <Text className="font-normal">{item.createdAt?.toString()}</Text>
                        </Text>
                    </View>

                    <View>
                        <Text className="text-[rgb(236,231,242)] font-bold">
                        {t('PostContent')}: <Text className="font-normal">{item.content}</Text>
                        </Text>
                    </View>
                </View>
                )
            }
        }
        estimatedItemSize={20}
        
        contentContainerStyle={{ padding: 40 }} 
        
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default PostItem;