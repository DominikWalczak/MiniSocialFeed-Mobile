import type { PostItemType } from '@/src/utils/zodSchemas/Schema';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import Avatar from '../ui/Avatar';
import Button from '../ui/Button';

interface Props {
  data: PostItemType[];
}

const PostItem = ({ data }: { data: PostItemType }) => {
  const { t } = useTranslation();
  return (
        <View className="flex-col gap-3 w-full bg-primary-light rounded-3xl p-6 mb-3 shadow-sm">

          <View className="flex-row justify-between items-center ">
            <View className="flex-row justify-between items-center gap-2">
              <Avatar data={{size: "sm", name: data.user.name, vorname: data.user.vorname}} />
              <Text className="text-text-primary font-bold">
                {data.user.name} {data.user.vorname}
              </Text>
            </View>

            <View className="">
                <Text className="text-text-primary font-bold">
                  {new Date(data.createdAt).toLocaleDateString('pl-PL')}
                </Text>
            </View>
          </View>
          <View>
              <Text className="text-text-primary font-bold">
              {t('PostContent')}: <Text className="font-normal">{data.content}</Text>
              </Text>
          </View>
          <View className='flex-row justify-between border-t border-t-text-primary py-1'>
            <Button data={{variant: "primary", size: "sm", content: t('like'), isLoading: false, disabled: false,}}/>
            <Button data={{variant: "primary", size: "sm", content: t('comment'), isLoading: false, disabled: false,}}/>
          </View>
        </View>
          );
};

export default PostItem;