import { Tabs } from "expo-router";
import React from "react";

import HouseHeader from "@/components/HouseHeader";
import useColor from "@/utils/hooks/useColor";
import { Icon } from "@/assets/Icon";
import { View } from "react-native";

export default function TabLayout() {
  const tabBarBackground = useColor("gamma");

  return (
    <View className={"bg-background flex-1"}>
      <HouseHeader />
      <Tabs
        initialRouteName={"index"}
        backBehavior="history"
        screenOptions={{
          tabBarStyle: {
            position: "absolute",
            borderTopWidth: 0,
            width: 212,
            marginHorizontal: "auto",
            backgroundColor: tabBarBackground,
            borderRadius: 1000,
            marginBottom: 40,
            paddingBottom: 0,
            padding: 0,
            paddingHorizontal: 10,
            height: 64,
            flexDirection: "row",
            alignItems: "center",
            left: "50%",
            transform: [{ translateX: -106 }],
          },
          tabBarActiveTintColor: "#000",
          headerShown: false,
          tabBarShowLabel: false,
        }}
      >
        <Tabs.Screen
          name="games"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <View className={"w-[64]  h-[64] items-center justify-center"}>
                <Icon name={"rect"} />
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
                  "bg-primary h-[64] w-[64] rounded-full items-center justify-center"
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
              <View className={"w-[64]  h-[64] items-center justify-center"}>
                <Icon name={"heart"} />
              </View>
            ),
          }}
        />
      </Tabs>
    </View>
  );
}
