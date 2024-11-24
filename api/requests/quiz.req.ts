import { openaiClient } from "@/api/api.config";
import { AppLanguage } from "@/i18n/language";
import { HogwartsHouse } from "@/models/theme.model";

export namespace QuizApi {
  export const getQuestions = async (
    lang: AppLanguage,
    usedQuestions: string[],
    house: HogwartsHouse,
  ) => {
    console.log("Wysyła");
    const res = await openaiClient.post("", {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `Give me 5 quiz questions in ${lang} language about ${house}. Dont translate names, last names and invented names, leave it in english. It should be in format: [{"question": string, "answers": string[], "correct": number (index from answers)}, ...] Remember that always there should be 5 questions and each question should have 4 answers with only one correct. In that array i store already used questions: ${usedQuestions}, do not repeat already used questions.  Dont say anything else then the result.`,
        },
      ],
    });

    console.log("wysłano");

    console.log(
      "Pytania ->",
      res.data.choices[0].message.content,
      "Użyte pytania ->",
      usedQuestions,
      res.data,
    );
    return res.data as { choices: { message: { content: string } }[] };
  };
}
