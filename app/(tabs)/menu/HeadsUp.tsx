import cn from "@/utils/cn";
import { Pressable, Text, View } from "react-native";
import { useEffect, useState } from "react";
import ThemedText from "@/components/common/ThemedText";
import AppBtn from "@/components/common/AppBtn";
import { router } from "expo-router";
import { Accelerometer } from "expo-sensors";
import { useGetHeadsUpCharacter } from "@/api/queries/characters.queries";
import { useT } from "@/i18n/useTranslation";
import { useIsFocused } from "@react-navigation/core";
import useThemeStore from "@/stores/theme.store";
import useOrientation from "@/utils/hooks/useOrientation";
import {
  lockAsync,
  OrientationLock,
  unlockAsync,
} from "expo-screen-orientation";

const HeadsUpScreen = () => {
  useOrientation(OrientationLock.LANDSCAPE_LEFT);

  const { t } = useT("menu");
  const { data } = useGetHeadsUpCharacter();
  const { setHideUI } = useThemeStore();
  const isFocused = useIsFocused();

  const [text, setText] = useState(t("headsUp.start"));
  const [nextPerson, setNextPerson] = useState(false);
  const [fold, setFold] = useState(false);
  const [good, setGood] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    if (locked) return;

    const subscription = Accelerometer.addListener(({ x, y, z }) => {
      if (z > 0.6) {
        if (gameStarted) {
          setNextPerson(true);
          setGood(true);
          setFold(false);
          setText(t("headsUp.good"));
        }
      } else if (z < -0.6) {
        if (gameStarted) {
          setNextPerson(true);
          setFold(true);
          setGood(false);
          setText(t("headsUp.fold"));
        }
      } else {
        setGameStarted(true);
        setFold(false);
        setGood(false);
      }
    });

    Accelerometer.setUpdateInterval(100);

    return () => subscription.remove();
  }, [locked, gameStarted]);

  useEffect(() => {
    if (nextPerson && data?.data && !fold && !good && gameStarted) {
      setText(
        data?.data[Math.floor(Math.random() * data?.data?.length)].attributes
          .name,
      );
      setNextPerson(false);
    }
  }, [nextPerson, fold, good]);

  const handleBack = () => {
    const changeOrientation = async () => {
      await unlockAsync();
      await lockAsync(OrientationLock.PORTRAIT_UP);
    };
    changeOrientation();

    router.back();
  };

  const handleFold = () => {
    setLocked(true);
    setFold(true);
    setGood(false);
    setText(t("headsUp.fold"));

    setTimeout(() => {
      setNextPerson(true);
      setLocked(false);
    }, 1000);
  };

  const handleGood = () => {
    setLocked(true);
    setFold(false);
    setGood(true);
    setText(t("headsUp.good"));

    setTimeout(() => {
      setNextPerson(true);
      setLocked(false);
    }, 1000);
  };

  return (
    <View
      className={cn(
        "flex-1 p-8",
        fold ? "bg-red" : good ? "bg-green" : "bg-purple-800",
      )}
    >
      <View
        className={
          "w-full h-full justify-center items-center bg-background rounded-3xl overflow-hidden"
        }
      >
        <View className={"absolute top-[20px] left-[20px]"}>
          <AppBtn
            className={"rotate-180"}
            text={""}
            icon={"arrow2"}
            onPress={handleBack}
          />
        </View>

        <View className={"flex-1 w-full items-center justify-center"}>
          <ThemedText
            className={"absolute self-center text-3xl font-black text-center"}
          >
            {text}
          </ThemedText>
          <View className={"w-full justify-around flex-row mt-auto mb-4"}>
            <Pressable
              onPress={handleGood}
              className={
                "flex-row items-center justify-center w-[40%] h-16 bg-green p-3 rounded-3xl"
              }
            >
              <Text className={"text-white font-bold text-lg"}>
                {t("headsUp.good")}
              </Text>
            </Pressable>

            <Pressable
              onPress={handleFold}
              className={
                "flex-row items-center justify-center w-[40%] h-16 bg-red p-3 rounded-3xl"
              }
            >
              <Text className={"text-white font-bold text-lg"}>
                {t("headsUp.fold")}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HeadsUpScreen;
