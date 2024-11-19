import { create } from "zustand";
import { HogwartsHouse, ThemeModel } from "@/models/theme.model";

interface IThemeStore {
  theme: ThemeModel;
  hogwartsTheme: HogwartsHouse | undefined;
  setTheme: (theme: ThemeModel) => void;
  setHogwartsTheme: (hogwartsTheme: HogwartsHouse) => void;
}

const useThemeStore = create<IThemeStore>((set) => ({
  theme: "light",
  hogwartsTheme: undefined,
  setTheme: (theme: ThemeModel) => set({ theme }),
  setHogwartsTheme: (hogwartsTheme: HogwartsHouse) => set({ hogwartsTheme }),
}));

export default useThemeStore;
