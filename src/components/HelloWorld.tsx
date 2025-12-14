import { useStringKeys } from "@/src/i18n/i18nKeys";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from 'react-native';

function HelloWorld() {

  // definiuję stringKeys aby uzyskać dostęp do określonych tłumaczeń językowych poprzez obiekt
  const stringKeys = useStringKeys();
  // definituję router aby umozliwić przejście do strony user
  const router = useRouter();
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        {stringKeys.helloWorld}
      </Text>
      {/* Przycisk do zmiany zakładki na user */}
      <Pressable className="m-3 bg-amber-300 py-2 px-4 rounded" onPress={() => {router.push("/user")}}><Text className="text-black font-bold">Users</Text></Pressable>
    </View>
  )
}

export default HelloWorld