import { create } from "zustand";
import { HogwartsHouse, ThemeModel } from "@/models/theme.model";

interface IThemeStore {
  theme: ThemeModel;
  themedBoundaries: boolean;
  hogwartsTheme: HogwartsHouse | undefined;
  setTheme: (theme: ThemeModel) => void;
  setThemedBoundaries: (themedBoundaries: boolean) => void;
  setHogwartsTheme: (hogwartsTheme: HogwartsHouse) => void;
}

const useThemeStore = create<IThemeStore>((set) => ({
  theme: "light",
  themedBoundaries: false,
  hogwartsTheme: undefined,
  setThemedBoundaries: (themedBoundaries: boolean) => set({ themedBoundaries }),
  setTheme: (theme: ThemeModel) => set({ theme }),
  setHogwartsTheme: (hogwartsTheme: HogwartsHouse) => set({ hogwartsTheme }),
}));

export default useThemeStore;
