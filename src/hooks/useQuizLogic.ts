import { useState } from 'react';
import { questions, Question, Option } from '../data/questions';

export interface QuizState {
  score: number;
  currentQuestion: Question | null;
  showFeedback: boolean;
  lastResult: {
    isCorrect: boolean;
    confirmationVerse: string;
  } | null;
}

export const useQuizLogic = () => {
  const [state, setState] = useState<QuizState>({
    score: 0,
    currentQuestion: null,
    showFeedback: false,
    lastResult: null,
  });

  const selectQuestion = (id: string) => {
    const question = questions.find((q) => q.id === id);
    if (question) {
      setState((prev) => ({
        ...prev,
        currentQuestion: question,
        showFeedback: false,
      }));
    }
  };

  const answerQuestion = (optionIndex: number) => {
    if (!state.currentQuestion) return;

    const selectedOption = state.currentQuestion.options[optionIndex];
    const isCorrect = selectedOption.isCorrect;

    setState((prev) => ({
      ...prev,
      score: isCorrect ? prev.score + 1 : prev.score,
      showFeedback: true,
      lastResult: {
        isCorrect,
        confirmationVerse: prev.currentQuestion!.confirmationVerse,
      },
    }));
  };

  const closeQuestion = () => {
    setState((prev) => ({
      ...prev,
      currentQuestion: null,
      showFeedback: false,
      lastResult: null,
    }));
  };

  return {
    ...state,
    selectQuestion,
    answerQuestion,
    closeQuestion,
  };
};
