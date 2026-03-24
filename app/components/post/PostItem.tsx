import type { PostItemType } from '@/src/utils/zodSchemas/Schema';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import Avatar from '../ui/Avatar';

interface Props {
  data: PostItemType[];
}

const PostItem = ({ data }: { data: PostItemType }) => {
  const { t } = useTranslation();
  return (
        <View className="flex-col gap-3 w-full bg-[rgb(33,113,181)] rounded-3xl p-6 mb-3 shadow-sm">

          <View className="flex-row justify-between items-center ">
            <View className="flex-row justify-between items-center gap-2">
              <Avatar data={{size: "sm", name: "Jan", vorname: "Kowalski"}} />
              <Text className="text-[rgb(236,231,242)] font-bold">
                Jan Kowalski {/* {data.name} {data.vorname} */}
              </Text>
            </View>

            <View className="">
                <Text className="text-[rgb(236,231,242)] font-bold">
                  {new Date(data.createdAt).toLocaleDateString('pl-PL')}
                </Text>
            </View>
          </View>
          <View>
              <Text className="text-[rgb(236,231,242)] font-bold">
              {t('PostContent')}: <Text className="font-normal">{data.content}</Text>
              </Text>
          </View>
        </View>
          );
};

export default PostItem;