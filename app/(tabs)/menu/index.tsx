import Container from "@/components/common/Container";
import MenuItem, { IMenuItem } from "@/components/MenuItem";
import { FlatList } from "react-native";
import { useT } from "@/i18n/useTranslation";
import { router } from "expo-router";
import useThemeStore from "@/stores/theme.store";
import capitalizeFirstLetter from "@/utils/capitalizeFirstLetter";
import { useMemo } from "react";
import i18n from "i18next";

const MenuScreen = () => {
  const { t } = useT("menu");
  const { hogwartsTheme, setRoundedHeader } = useThemeStore();

  const MenuItems: IMenuItem[] = useMemo(() => {
    if (!hogwartsTheme) return [];

    return [
      {
        bgColor: "bg-primary",
        icon: hogwartsTheme,
        label: t("houseQuiz.label"),
        title: t("menu:houseQuiz.title", {
          house: capitalizeFirstLetter(hogwartsTheme || ""),
        }),
        onPress: () => router.push("/menu/HouseQuiz"),
      },
    ];
  }, [hogwartsTheme, i18n.language]);

  return (
    <Container className={"pt-6"}>
      <FlatList
        data={MenuItems}
        renderItem={({ item }) => <MenuItem {...item} />}
      />
    </Container>
  );
};

export default MenuScreen;
