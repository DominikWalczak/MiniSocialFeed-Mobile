import { mutationFunction } from '@/src/utils/reactUseMutationFunc';
import { UseMutationType } from '@/src/utils/zodSchemas/Schema';
import { useNavigation } from '@react-navigation/native';
import { useMutation } from '@tanstack/react-query';
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from 'react-i18next';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

type FormInput = {
  email: string, 
  password: string,
}
export default function Login() {

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });
  // zmienne tekstowe zależne od wybranego języka przez użytkownika 
  const { t } = useTranslation();
  const navigation = useNavigation();

  const loginMutation = useMutation({
    mutationFn: async (formData: FormInput) => {
      const result: UseMutationType = {
        url: `${process.env.EXPO_PUBLIC_API_URL}/auth/login`, 
          options: {
            method: "POST",
            headers: { "Content-Type": "application/json" }, 
            body: JSON.stringify({
              email: formData.email,
              password: formData.password
            })
          }
        }

      return await mutationFunction(result);
    },
    
    onSuccess: (data) => {
      console.log(data);
      // navigation.navigate('User');
    },
    onError: (error) => {
      console.log(error);
    }
  })

  const onSubmit = (data: FormInput) => loginMutation.mutate(data);
  return (
    <View className="max-w-md mx-6 mt-10 p-6 bg-white rounded-lg shadow-md">
      <Text className="text-2xl font-bold mb-4 text-black">{t('login')}</Text>

      <View className="space-y-4">
        {/* Email Field */}
        <View>
          <Text className="block text-sm font-medium mb-1 text-black">Email</Text>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                className="w-full p-2 border border-gray-300 rounded shadow-sm text-black"
                onBlur={onBlur}
                value={value}
                onChangeText={onChange}
                keyboardType="email-address"
                autoCapitalize="none"
                placeholder="email"
              />
            )}
            name="email"
          />
          {errors.email && <Text>This is required.</Text>}
        </View>

        {/* Password Field */}
        <View className="mt-4">
          <Text className="block text-sm font-medium mb-1 text-black">
            {t('password')}
          </Text>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
              className="w-full p-2 border border-gray-300 rounded shadow-sm text-black"
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              secureTextEntry
            />
            )}
            name="password"
          />
          {errors.password && <Text>This is required.</Text>}
        </View>

        {/* Submit Button */}
        <TouchableOpacity 
          onPress={handleSubmit(onSubmit)}
          className="bg-blue-500 mt-6 py-2 px-4 rounded active:bg-blue-700"
        >
          <Text className="text-white font-bold text-center">
            {t('loginSubmit')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}