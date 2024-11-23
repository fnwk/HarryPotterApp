import { ScrollView, Text, useWindowDimensions, View } from "react-native";
import useThemeStore from "@/stores/theme.store";
import { useEffect, useState } from "react";
import Container from "@/components/common/Container";
import { useT } from "@/i18n/useTranslation";
import cn from "@/utils/cn";
import AnswerBtn from "@/components/AnswerBtn";
import { useGetQuizQuestions } from "@/api/queries/quiz.queries";
import AppBtn from "@/components/common/AppBtn";
import capitalizeFirstLetter from "@/utils/capitalizeFirstLetter";
import { router } from "expo-router";
import { QuizQuestions } from "@/models/quiz.model";
import useQuizStore from "@/stores/quiz.store";

const houseQuiz = () => {
  const { t } = useT();
  const dimensions = useWindowDimensions();
  const { setRoundedHeader, hogwartsTheme } = useThemeStore((state) => state);
  const { addToUsedQuestions, changeId } = useQuizStore((state) => state);
  const { data, isLoading, isPending } = useGetQuizQuestions();

  const [questions, setQuestions] = useState<QuizQuestions>([]);
  const [questionNum, setQuestionNum] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState<number>();
  const [showAnswer, setShowAnswer] = useState(false);
  const [numOfCorrectAnswers, setNumOfCorrectAnswers] = useState(0);

  useEffect(() => {
    setRoundedHeader(false);
    changeId();

    return () => {
      setRoundedHeader(true);
    };
  }, []);

  useEffect(() => {
    if (data) {
      setQuestions(JSON.parse(data.choices[0].message.content));
    }
  }, [data]);

  const handleCheck = () => {
    setShowAnswer(true);
    if (selectedAnswer === questions[questionNum - 1].correct) {
      setNumOfCorrectAnswers((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    setShowAnswer(false);
    setSelectedAnswer(undefined);
    setQuestionNum((prev) => prev + 1);

    if (questionNum > 5) {
      setQuestionNum(1);
      setNumOfCorrectAnswers(0);
      addToUsedQuestions(questions.map((question) => question.question));
      changeId();
      router.back();
    }
  };

  return (
    <View
      style={{ height: dimensions.height - 275 }}
      className={"bg-primary rounded-b-3xl overflow-hidden"}
    >
      <Container className={"flex-1 bg-primary w-full"}>
        <Text className={"text-white text-md font-semibold"}>
          {t("menu:houseQuiz.title", {
            house: capitalizeFirstLetter(hogwartsTheme || ""),
          })}
        </Text>
        <View className={"flex-row justify-between mt-4"}>
          <Text className={"text-white"}>0{questionNum} Question</Text>
          <Text className={"text-white"}>
            {questionNum > 5 ? 5 : questionNum} of 5
          </Text>
        </View>
        <View className={"flex-row justify-between mt-3"}>
          {[...Array(5)].map((_, index) => (
            <View
              className={cn(
                "w-[18%] h-[10px] rounded-full border border-white",
                index + 1 <= questionNum && "bg-white",
              )}
            />
          ))}
        </View>
        {isLoading || isPending ? (
          <Text
            className={"text-lg text-white font-semibold text-center mt-20"}
          >
            {t("menu:houseQuiz.generatingQuiz")}
          </Text>
        ) : (
          <ScrollView>
            {!isLoading && !isPending && (
              <Text className={"text-white text-3xl font-medium my-10"}>
                {questions[questionNum - 1]?.question || ""}
              </Text>
            )}
            <View className={"mb-auto"}>
              {questionNum > 5 ? (
                <>
                  <Text
                    className={"text-lg text-white font-semibold text-center"}
                  >
                    {t("menu:houseQuiz.quizResults")}
                  </Text>
                  <Text
                    className={"text-[80px] text-white font-black text-center"}
                  >
                    {numOfCorrectAnswers} / 5
                  </Text>
                </>
              ) : (
                questions[questionNum - 1]?.answers?.map((answer, index) => (
                  <AnswerBtn
                    selected={selectedAnswer === index}
                    index={index}
                    answer={answer}
                    isGoodAnswer={
                      showAnswer
                        ? index === questions[questionNum - 1]?.correct
                        : undefined
                    }
                    onPress={() =>
                      showAnswer ? null : setSelectedAnswer(index)
                    }
                  />
                ))
              )}
            </View>
            <AppBtn
              className={"w-1/2 mt-8 mx-auto mb-8"}
              text={showAnswer || questionNum > 5 ? t("next") : t("check")}
              icon={showAnswer || questionNum > 5 ? "arrow2" : "check"}
              onPress={showAnswer || questionNum > 5 ? handleNext : handleCheck}
            />
          </ScrollView>
        )}
      </Container>
    </View>
  );
};

export default houseQuiz;
