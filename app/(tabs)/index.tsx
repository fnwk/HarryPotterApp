import useThemeStore from "@/stores/theme";
import { Redirect } from "expo-router";
import Container from "@/components/common/Container";

export default function HomeScreen() {
  const hogwartsTheme = useThemeStore((state) => state.hogwartsTheme);

  if (!hogwartsTheme) {
    return <Redirect href={"/chooseHouse"} />;
  }

  return <Container></Container>;
}
