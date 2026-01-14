import { FlatList, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { UserType } from '../../src/utils/zodSchemas';

type UserDataProps = {
  data: UserType;
};
function UserData({ data }: UserDataProps) {
  
  // zmienne tekstowe zależne od wybranego języka przez użytkownika 
  const { t } = useTranslation();

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">{t('userCount', { count: data?.length ?? 0 })}</Text>
      {/* Wczytuję wszystkie elementy przekazanych danych */}
      <FlatList
          className="flex-1" 
          data={data}
          renderItem={({item}) => {  
            return(
              <View>
                <Text>{item.name}, {item.email}</Text>
              </View>
            );
          }}
          keyExtractor={item => item.id.toString()}
        />
    </View>
  )
}

export default UserData