import { FlatList, Text, View } from 'react-native';
import { useStringKeys } from '../../src/i18n/i18nKeys';
import { UserType } from '../../src/utils/zodSchemas';

type UserDataProps = {
  data: UserType;
};
function UserData({ data }: UserDataProps) {
  
  // definiuję stringKeys aby uzyskać dostęp do określonych tłumaczeń językowych poprzez obiekt
  const stringKeys = useStringKeys(data?.length ?? 0);

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">{stringKeys.userCount}</Text>
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