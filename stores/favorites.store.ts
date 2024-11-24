import { create } from "zustand";
import { Character } from "@/models/characters.model";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface IFavorites {
  favorites: Character[];
  addFavorite: (favorite: Character) => void;
  removeFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

const useFavoritesStore = create(
  persist<IFavorites>(
    (set, get) => ({
      favorites: [],
      addFavorite: (favorite) =>
        set((state) => ({ favorites: [...state.favorites, favorite] })),
      removeFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.filter((favorite) => favorite.id !== id),
        })),
      isFavorite: (id) => {
        return get().favorites.some((favorite) => favorite.id === id);
      },
    }),
    {
      name: "favorites-storage",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export default useFavoritesStore;
