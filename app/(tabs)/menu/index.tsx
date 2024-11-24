import Container from "@/components/common/Container";
import MenuItem, { IMenuItem } from "@/components/MenuItem";
import { FlatList } from "react-native";
import { useT } from "@/i18n/useTranslation";
import { router } from "expo-router";
import useThemeStore from "@/stores/theme.store";
import capitalizeFirstLetter from "@/utils/capitalizeFirstLetter";

const MenuScreen = () => {
  const { t } = useT("menu");
  const { hogwartsTheme } = useThemeStore();

  const MenuItems: IMenuItem[] = [
    {
      bgColor: "bg-primary",
      icon: hogwartsTheme || "rect",
      label: t("houseQuiz.label"),
      title: t("houseQuiz.title", {
        house: capitalizeFirstLetter(hogwartsTheme || ""),
      }),
      onPress: () => router.push("/menu/HouseQuiz"),
    },
    {
      bgColor: "bg-purple-500",
      icon: "head",
      label: t("headsUp.label"),
      title: t("headsUp.title", {
        house: capitalizeFirstLetter(hogwartsTheme || ""),
      }),
      onPress: () => router.push("/menu/HeadsUp"),
    },
  ];

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
