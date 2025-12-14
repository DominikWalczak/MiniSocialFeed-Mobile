import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack } from "expo-router";
import "../globals.css";
import "../src/i18n/i18n";

const queryClient = new QueryClient()

export default function RootLayout() {
  return (
    // Wrapuję aplikację QueryClientProvider, inaczej useQuery nie będzie działać
    <QueryClientProvider client={queryClient}>
      <Stack />
    </QueryClientProvider>
  )
}
