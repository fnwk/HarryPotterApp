import i18n from "i18next";
import useThemeStore from "@/stores/theme.store";
import { Redirect } from "expo-router";
import Container from "@/components/common/Container";
import ThemedText from "@/components/common/ThemedText";
import { useT } from "@/i18n/useTranslation";
import { FlatList, ScrollView, View } from "react-native";
import OptionsDropdown, {
  DropdownOption,
} from "@/components/common/OptionsDropdown";
import { changeLanguage } from "@/i18n/changeLanguage";
import { AppLanguage } from "@/i18n/language";
import { useGetCharacters } from "@/api/queries/characters.queries";
import SkeletonContainer from "@/components/SkeletonContainer";
import CharacterCard from "@/components/CharacterCard";
import ThemedTextInput from "@/components/common/ThemedTextInput";
import { useEffect, useLayoutEffect, useState } from "react";
import capitalizeFirstLetter from "@/utils/capitalizeFirstLetter";
import { HogwartsHouse } from "@/models/theme.model";
import useOrientation from "@/utils/hooks/useOrientation";
import { OrientationLock } from "expo-screen-orientation";

export default function HomeScreen() {
  const { t } = useT();
  const houses = t("houses:houses", { returnObjects: true }) as HogwartsHouse[];
  const sortingOptions = t("home:sortingOptions", {
    returnObjects: true,
  }) as DropdownOption[];
  const { setThemedBoundaries } = useThemeStore((state) => state);

  const [searchQuery, setSearchQuery] = useState("");
  const [house, setHouse] = useState<HogwartsHouse | "">("");
  const [sorting, setSorting] = useState(sortingOptions[0].value);

  const { data, isFetchingNextPage, isLoading, fetchNextPage } =
    useGetCharacters({ searchQuery, house, sorting });

  useLayoutEffect(() => {
    setTimeout(() => {
      setThemedBoundaries(true);
    }, 0);
  }, []);

  const handleLanguageChange = (value: string) => {
    changeLanguage(value as AppLanguage);
  };

  const handleHouseChange = (value: string) => {
    setHouse(value as HogwartsHouse);
  };

  const handleSortingChange = (value: string) => {
    setSorting(value);
  };

  return (
    <Container>
      <FlatList
        data={data?.pages.flatMap((page) => page.data) ?? []}
        ListHeaderComponent={
          <View className={"bg-background pb-8 z-10"}>
            <View className={"flex-row items-center mt-8 z-20"}>
              <View className={"flex-1"}>
                <ThemedText className={"text-lg font-black"}>
                  {t("home:welcome")},
                </ThemedText>
                <ThemedText className={"text-lg font-semibold mt-1"}>
                  {t("home:toHarryPotter")}
                </ThemedText>
              </View>

              <OptionsDropdown
                onlyIcons
                options={[
                  { label: "EN", value: "en", iconName: "en" },
                  { label: "PL", value: "pl", iconName: "pl" },
                ]}
                value={i18n.language}
                onChange={handleLanguageChange}
              />
            </View>
            <ThemedTextInput
              iconName={"search"}
              placeholder={t("home:search")}
              className={"mt-8"}
              onChangeText={setSearchQuery}
            />

            <View
              className={"flex-row flex-wrap"}
              style={{ overflow: "visible" }}
            >
              <OptionsDropdown
                zIndex={60}
                showBg
                inputColor
                value={sorting}
                iconName={"sort"}
                options={sortingOptions}
                onChange={handleSortingChange}
              />
              <OptionsDropdown
                zIndex={50}
                showBg
                noIcons
                inputColor
                value={house}
                options={[
                  { label: t("home:allHouses"), value: "" },
                  ...houses.map((i) => ({
                    label: capitalizeFirstLetter(i),
                    value: i,
                  })),
                ]}
                onChange={handleHouseChange}
              />
            </View>
          </View>
        }
        CellRendererComponent={({ children }) => (
          <View className={"-z-10"}>{children}</View>
        )}
        renderItem={({ item }) => (
          <CharacterCard id={item.id} attributes={item.attributes} />
        )}
        onEndReached={() => fetchNextPage()}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          isFetchingNextPage || isLoading ? (
            <SkeletonContainer>
              {new Array(10).fill(null).map((_, idx) => (
                <View
                  key={idx}
                  className={
                    "w-full h-[200px] rounded-2xl bg-gamma my-8 overflow-hidden p-4"
                  }
                />
              ))}
            </SkeletonContainer>
          ) : null
        }
        keyExtractor={(item, idx) => (item ? item.id : idx.toString())}
      />
    </Container>
  );
}
