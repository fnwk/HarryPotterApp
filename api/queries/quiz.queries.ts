import i18n from "i18next";
import { useQuery } from "@tanstack/react-query";
import { QuizApi } from "@/api/requests/quiz.req";
import { AppLanguage } from "@/i18n/language";
import useQuizStore from "@/stores/quiz.store";
import useThemeStore from "@/stores/theme.store";

export const useGetQuizQuestions = () => {
  const lang = i18n.language as AppLanguage;
  const { id, usedQuestions } = useQuizStore((state) => state);
  const house = useThemeStore((state) => state.hogwartsTheme);

  return useQuery({
    queryKey: ["quiz-questions", lang, house, id],
    queryFn: () =>
      QuizApi.getQuestions(lang, usedQuestions, house || "gryffindor"),
  });
};
