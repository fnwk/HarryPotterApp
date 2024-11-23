import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface IQuizStore {
  id: number;
  usedQuestions: string[];
  addToUsedQuestions: (questions: string[]) => void;
  changeId: () => void;
}

const useQuizStore = create(
  persist<IQuizStore>(
    (set) => ({
      id: 0,
      usedQuestions: [],
      addToUsedQuestions: (questions: string[]) =>
        set((state) => ({
          usedQuestions: [...state.usedQuestions, ...questions],
        })),
      changeId: () => set((state) => ({ id: state.id + 1 })),
    }),
    {
      name: "quiz-storage",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export default useQuizStore;
