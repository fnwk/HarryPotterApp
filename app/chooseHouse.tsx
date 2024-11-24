import { useT } from "@/i18n/useTranslation";
import Container from "@/components/common/Container";
import { FlatList, View } from "react-native";
import OptionsDropdown from "@/components/common/OptionsDropdown";
import { changeLanguage } from "@/i18n/changeLanguage";
import useThemeStore from "@/stores/theme.store";
import ThemedText from "@/components/common/ThemedText";
import { AppLanguage } from "@/i18n/language";
import HouseBtn from "@/components/HouseBtn";
import { HogwartsHouse } from "@/models/theme.model";
import { useLayoutEffect } from "react";
import useOrientation from "@/utils/hooks/useOrientation";
import { OrientationLock } from "expo-screen-orientation";

const ChooseHouseScreen = () => {
  const { t, i18n } = useT();
  const { theme, setTheme, setThemedBoundaries } = useThemeStore(
    (state) => state,
  );

  useLayoutEffect(() => {
    setThemedBoundaries(false);
  }, []);

  const handleLanguageChange = (value: string) => {
    changeLanguage(value as AppLanguage);
  };

  const handleThemeChange = (value: string) => {
    setTheme(value as "light" | "dark");
  };

  return (
    <Container>
      <ThemedText className={"font-bold text-xl mt-4"}>
        {t("houses:hello")},
      </ThemedText>
      <ThemedText className={"font-medium text-xl"}>
        {t("houses:chooseHouse")}
      </ThemedText>
      <View className={"flex-row items-start z-20 mb-8"}>
        <OptionsDropdown
          options={[
            { label: t("common:english"), value: "en" },
            { label: t("common:polish"), value: "pl" },
          ]}
          iconName={"lang"}
          value={i18n.language}
          onChange={handleLanguageChange}
        />
        <OptionsDropdown
          options={[
            { label: t("common:dark"), value: "dark", iconName: "moon" },
            { label: t("common:light"), value: "light", iconName: "sun" },
          ]}
          value={theme}
          onChange={handleThemeChange}
        />
      </View>
      <FlatList
        data={t("houses:houses", { returnObjects: true }) as HogwartsHouse[]}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <HouseBtn name={item} />}
      />
    </Container>
  );
};

export default ChooseHouseScreen;
