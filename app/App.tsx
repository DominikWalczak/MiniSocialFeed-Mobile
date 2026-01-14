import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

import '@/src/i18n/i18n';

import '../globals.css';

import HelloWorld from './components/HelloWorld';
import Login from './login';
import User from './user';

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();

export default function App() {
  const { t } = useTranslation();
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HelloWorld}
            options={{ title: t('helloWorld') }}
          />
          <Stack.Screen
            name="User"
            component={User}
            options={{ title: "Users" }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: t('login') }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}