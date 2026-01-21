import { Text, View } from 'react-native';
import { UserMeType } from '../../src/utils/zodSchemas/Schema';

type UserDataProps = {
  data: UserMeType;
};
function UserData({ data }: UserDataProps) {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      {/* Wczytuję wszystkie elementy przekazanych danych */}
      <View>
        <Text>{data.name}, {data.email}</Text>
      </View>
    </View>
  )
}

export default UserData