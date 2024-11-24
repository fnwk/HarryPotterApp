import { View, Text, ScrollView } from "react-native";
import { useGetCharacterDetails } from "@/api/queries/characters.queries";
import { useLocalSearchParams } from "expo-router";
import ThemedText from "@/components/common/ThemedText";
import Container from "@/components/common/Container";
import SkeletonContainer from "@/components/SkeletonContainer";
import GoBackBtn from "@/components/common/GoBackBtn";
import { useMemo } from "react";
import AppImage from "@/components/common/AppImage";
import { useT } from "@/i18n/useTranslation";

const hiddenAttributes = ["name", "image", "slug", "wiki"];

const characterDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  const { t } = useT("character");
  const { data, isLoading, isPending } = useGetCharacterDetails(id as string);

  const attributes = data?.data.attributes;

  const details = useMemo(() => {
    if (data) {
      return Object.fromEntries(
        Object.entries(data?.data?.attributes).filter(
          ([key]) => !hiddenAttributes.includes(key),
        ),
      );
    }
  }, [data]);

  return (
    <Container>
      <ScrollView contentContainerStyle={{ paddingBottom: 150 }}>
        <SkeletonContainer loading={isLoading || isPending}>
          <View className={"flex-row my-8"}>
            <GoBackBtn />
          </View>

          <AppImage
            source={
              attributes?.image
                ? { uri: attributes.image }
                : require("@/assets/images/no-image.png")
            }
            className={"w-full h-[300px] rounded-3xl bg-white"}
          />
          <ThemedText
            className={"text-xl font-black mt-4 py-4 bg-background rounded-2xl"}
          >
            {attributes?.name ?? ""}
          </ThemedText>
          <View className={"flex-1 py-4 rounded-2xl"}>
            {Object.keys(details || {}).length > 0 &&
              Object.keys(details || {}).map((item, i) => {
                const value = details?.[item] || "";
                const shouldRender = Array.isArray(value)
                  ? value.length > 0
                  : !!value;

                return shouldRender ? (
                  <View key={i} className={"border-b border-input p-4"}>
                    <Text className={"font-semibold text-input mb-2"}>
                      {t(item)}
                    </Text>

                    <ThemedText className={"font-bold leading-8"}>
                      {Array.isArray(value)
                        ? value.join("\n")
                        : value.toString()}
                    </ThemedText>
                  </View>
                ) : null;
              })}
          </View>
        </SkeletonContainer>
      </ScrollView>
    </Container>
  );
};

export default characterDetailsScreen;
