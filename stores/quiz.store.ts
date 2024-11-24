import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface IQuizStore {
  usedQuestions: string[];
  addToUsedQuestions: (questions: string[]) => void;
}

const useQuizStore = create(
  persist<IQuizStore>(
    (set) => ({
      usedQuestions: [],
      addToUsedQuestions: (questions: string[]) =>
        set((state) => ({
          usedQuestions: [...state.usedQuestions, ...questions],
        })),
    }),
    {
      name: "quiz-storage",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export default useQuizStore;
