import type { PostListType } from '@/src/utils/zodSchemas/Schema';
import { FlashList } from '@shopify/flash-list';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import PostItem from './PostItem';

interface Props {
  data: PostListType;
}

const PostList = ({ data }: { data: PostListType }) => {
  const { t } = useTranslation();

  return (
    <View className="flex-1 bg-[rgb(8,81,156)] w-full">
      <FlashList
        data={data}
        renderItem={({ item }) => {
            return(
                <PostItem data={item} />
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

export default PostList;