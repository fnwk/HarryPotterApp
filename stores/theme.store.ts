import { create } from "zustand";
import { HogwartsHouse, ThemeModel } from "@/models/theme.model";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface IThemeStore {
  theme: ThemeModel;
  themedBoundaries: boolean;
  hogwartsTheme: HogwartsHouse | undefined;
  roundedHeader: boolean;
  hideUI: boolean;
  setTheme: (theme: ThemeModel) => void;
  setThemedBoundaries: (themedBoundaries: boolean) => void;
  setHogwartsTheme: (hogwartsTheme: HogwartsHouse) => void;
  setRoundedHeader: (roundedHeader: boolean) => void;
  setHideUI: (hideUI: boolean) => void;
}

const useThemeStore = create(
  persist<IThemeStore>(
    (set) => ({
      theme: "light",
      themedBoundaries: false,
      hogwartsTheme: undefined,
      roundedHeader: true,
      hideUI: false,
      setTheme: (theme: ThemeModel) => set({ theme }),
      setThemedBoundaries: (themedBoundaries: boolean) =>
        set({ themedBoundaries }),
      setHogwartsTheme: (hogwartsTheme: HogwartsHouse) =>
        set({ hogwartsTheme }),
      setRoundedHeader: (roundedHeader: boolean) => set({ roundedHeader }),
      setHideUI: (hideUI: boolean) => set({ hideUI }),
    }),
    {
      name: "theme-storage",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export default useThemeStore;
