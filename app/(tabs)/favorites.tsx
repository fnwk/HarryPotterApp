import Container from "@/components/common/Container";
import { FlatList } from "react-native";
import CharacterCard from "@/components/CharacterCard";
import useFavoritesStore from "@/stores/favorites.store";
import ThemedText from "@/components/common/ThemedText";
import { useT } from "@/i18n/useTranslation";
import useOrientation from "@/utils/hooks/useOrientation";
import { OrientationLock } from "expo-screen-orientation";

const FavoritesScreen = () => {
  const { t } = useT("favorites");
  const favorites = useFavoritesStore((state) => state.favorites);

  return (
    <Container>
      <FlatList
        data={favorites}
        ListHeaderComponent={
          <ThemedText className={"text-3xl font-semibold my-8"}>
            {t("title")}
          </ThemedText>
        }
        renderItem={({ item }) => (
          <CharacterCard id={item.id} attributes={item.attributes} />
        )}
        keyExtractor={(item, idx) => (item ? item.id : idx.toString())}
        ListEmptyComponent={() => (
          <ThemedText className={"text-lg"}>{t("empty")}</ThemedText>
        )}
      />
    </Container>
  );
};

export default FavoritesScreen;
