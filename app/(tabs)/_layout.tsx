import { Redirect, Tabs } from "expo-router";
import React from "react";

import HouseHeader from "@/components/HouseHeader";
import useColor from "@/utils/hooks/useColor";
import { Icon } from "@/assets/Icon";
import { useWindowDimensions, View } from "react-native";
import useThemeStore from "@/stores/theme.store";

export default function TabLayout() {
  const dim = useWindowDimensions();
  const tabBarBackground = useColor("gamma");
  const { hideUI, hogwartsTheme } = useThemeStore((state) => state);

  if (!hogwartsTheme) {
    return <Redirect href={"/chooseHouse"} />;
  }
  return (
    <View className={"bg-background flex-1"}>
      {!hideUI && <HouseHeader />}
      <Tabs
        initialRouteName={"index"}
        backBehavior="history"
        screenOptions={{
          tabBarStyle: {
            position: "absolute",
            borderTopWidth: 0,
            width: 212,
            alignSelf: "center",
            backgroundColor: tabBarBackground,
            borderRadius: 1000,
            marginBottom: 40,
            paddingBottom: 28,
            paddingHorizontal: 10,
            height: 64,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: dim.width / 2 - 106,
            display: hideUI ? "none" : "flex",
          },
          tabBarActiveTintColor: "#000",
          headerShown: false,
          tabBarShowLabel: false,
        }}
      >
        <Tabs.Screen
          name="menu/index"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <View className={"w-[64px] h-[64px] items-center justify-center"}>
                <Icon name={"grid"} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <View
                className={
                  "bg-primary h-[64px] w-[64px] rounded-full items-center justify-center"
                }
              >
                <Icon name={"home"} />
              </View>
            ),
          }}
        />
        <Tabs.Screen name="character/[id]" options={{ href: null }} />
        <Tabs.Screen
          name="favorites"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <View className={"w-[64px] h-[64px] items-center justify-center"}>
                <Icon name={"heart"} />
              </View>
            ),
          }}
        />
        <Tabs.Screen name={"menu/HouseQuiz"} options={{ href: null }} />
        <Tabs.Screen name={"menu/HeadsUp"} options={{ href: null }} />
      </Tabs>
    </View>
  );
}
