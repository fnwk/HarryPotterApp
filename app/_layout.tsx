import "../i18n/i18n";
import "../global.css";

import "react-native-reanimated";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import ThemeProvider from "@/components/common/ThemeProvider";
import { SafeAreaView } from "react-native-safe-area-context";
import useThemeStore from "@/stores/theme.store";
import cn from "@/utils/cn";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AsyncStorage from "@react-native-async-storage/async-storage";

SplashScreen.preventAutoHideAsync();
const queryClient = new QueryClient();

export default function RootLayout() {
  const { themedBoundaries, setHideUI } = useThemeStore((state) => state);

  useEffect(() => {
    setHideUI(false);
    SplashScreen.hideAsync();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <SafeAreaView
          edges={["top"]}
          className={cn(
            "flex-1",
            themedBoundaries ? "bg-primary" : "bg-background",
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
