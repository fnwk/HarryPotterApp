export interface QuizQuestion {
  question: string;
  answers: string[];
  correct: number;
}

export type QuizQuestions = QuizQuestion[];
