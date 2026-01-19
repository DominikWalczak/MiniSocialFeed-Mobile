import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { Pressable, Text, View } from 'react-native';

function HelloWorld() {

  // zmienne tekstowe zależne od wybranego języka przez użytkownika 
  const { t } = useTranslation();
  // definituję navigation aby umozliwić przejście do strony user
  const navigation = useNavigation();
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        {t('helloWorld')}
      </Text>
      {/* Przycisk do zmiany zakładki na user */}
      <Pressable className="m-3 bg-amber-300 py-2 px-4 rounded" onPress={() => navigation.navigate('User')}><Text className="text-black font-bold">User</Text></Pressable>
      <Pressable className="m-3 bg-amber-300 py-2 px-4 rounded" onPress={() => navigation.navigate('Login')}><Text className="text-black font-bold">Login</Text></Pressable>
      <Pressable className="m-3 bg-amber-300 py-2 px-4 rounded" onPress={() => navigation.navigate('Post')}><Text className="text-black font-bold">Post</Text></Pressable>
    </View>
  )
}

export default HelloWorld