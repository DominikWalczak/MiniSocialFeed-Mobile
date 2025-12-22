import { useStringKeys } from '@/src/i18n/i18nKeys';
import { validationMiddleware } from '@/src/middlewares/validation.middleware';
import { mutationFunction } from '@/src/utils/reactUseMutationFunc';
import { UseMutationSchema } from '@/src/utils/zodSchemas/UseMutationSchema';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Login() {

    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    const stringKeys = useStringKeys();

    function handleSubmit(){
        console.log(form.email, form.password);

        loginMutation.mutate();
        alert(form.email + form.password);
    }

    function handleChange(name: string, value: string){
        setForm((prev) => ({ ...prev, [name]: value }));
    }
  const loginMutation = useMutation({
        mutationFn: async () => {
          const result = validationMiddleware(UseMutationSchema, {
            url: `${process.env.EXPO_PUBLIC_API_URL}/auth/login`, 
              options: {
                method: "POST",
                headers: { "Content-Type": "application/json" }, 
                body: JSON.stringify({
                  email: form.email,
                  password: form.password
                })
              }
            }
          )

          return await mutationFunction(result);
        },
        
        onSuccess: (data) => {
          console.log(data);
        },
        onError: (error) => {
          console.log(error);
        }
    })


return (
    <View className="max-w-md mx-6 mt-10 p-6 bg-white rounded-lg shadow-md">
      <Text className="text-2xl font-bold mb-4 text-black">{stringKeys.login}</Text>

      <View className="space-y-4">
        {/* Email Field */}
        <View>
          <Text className="block text-sm font-medium mb-1 text-black">Email</Text>
          <TextInput
            className="w-full p-2 border border-gray-300 rounded shadow-sm text-black"
            value={form.email}
            onChangeText={(val) => handleChange('email', val)}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholder="email"
          />
        </View>

        {/* Password Field */}
        <View className="mt-4">
          <Text className="block text-sm font-medium mb-1 text-black">
            {stringKeys.password}
          </Text>
          <TextInput
            className="w-full p-2 border border-gray-300 rounded shadow-sm text-black"
            value={form.password}
            onChangeText={(val) => handleChange('password', val)}
            secureTextEntry
          />
        </View>

        {/* Submit Button */}
        <TouchableOpacity 
          onPress={handleSubmit}
          className="bg-blue-500 mt-6 py-2 px-4 rounded active:bg-blue-700"
        >
          <Text className="text-white font-bold text-center">
            {stringKeys.loginSubmit}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}