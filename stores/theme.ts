import { create } from "zustand";
import { HogwartsHouse, Theme } from "@/models/theme";

interface IThemeStore {
  theme: Theme;
  hogwartsTheme: HogwartsHouse | undefined;
  setTheme: (theme: Theme) => void;
  setHogwartsTheme: (hogwartsTheme: HogwartsHouse) => void;
}

const useThemeStore = create<IThemeStore>((set) => ({
  theme: "light",
  hogwartsTheme: undefined,
  setTheme: (theme: Theme) => set({ theme }),
  setHogwartsTheme: (hogwartsTheme: HogwartsHouse) => set({ hogwartsTheme }),
}));

export default useThemeStore;
