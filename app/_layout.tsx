import "../i18n/i18n";
import "../global.css";

import "react-native-reanimated";
import { Stack } from "expo-router";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import ThemeProvider from "@/components/common/ThemeProvider";
import { SafeAreaView } from "react-native-safe-area-context";
import useThemeStore from "@/stores/theme";
import cn from "@/utils/cn";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

SplashScreen.preventAutoHideAsync();
const queryClient = new QueryClient();

export default function RootLayout() {
  const hogwartsTheme = useThemeStore((state) => state.hogwartsTheme);
  const [loaded] = useFonts({
    interRegular: Inter_400Regular,
    interMedium: Inter_500Medium,
    interSemiBold: Inter_600SemiBold,
    interBold: Inter_700Bold,
    interBlack: Inter_900Black,
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <SafeAreaView
          edges={["top"]}
          className={cn(
            "flex-1",
            hogwartsTheme ? "bg-primary" : "bg-background",
          )}
        >
          <Stack
            initialRouteName={"chooseHouse"}
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="(tabs)" />
            <Stack.Screen name="chooseHouse" />
            <Stack.Screen name="+not-found" />
          </Stack>
        </SafeAreaView>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
