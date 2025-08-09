import React, { useState, useEffect } from "react";
import QuestionCard from "./QuestionCard";
import ResultsPage from "./ResultsPage";
import { QUESTIONS } from "../data/questions";
import { Answer, Question } from "../data/types";

// Fisher-Yates Shuffle
const shuffleArray = (array: Question[]) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const Quiz: React.FC = () => {
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);

  useEffect(() => {
    setShuffledQuestions(shuffleArray(QUESTIONS));
  }, []);

  const handleAnswer = (answer: Answer) => {
    setAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[current] = answer;
      return newAnswers;
    });
    setCurrent((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
    }
  };

  const handleRestart = () => {
    setAnswers([]);
    setCurrent(0);
    setShuffledQuestions(shuffleArray(QUESTIONS)); // re-randomize
  };

  return (
    <div className="container py-4">
      {shuffledQuestions.length > 0 && current < shuffledQuestions.length ? (
        <QuestionCard
          question={shuffledQuestions[current]}
          questionIndex={current}
          totalQuestions={shuffledQuestions.length}
          onAnswer={handleAnswer}
          onPrevious={handlePrevious}
          hasPrevious={current > 0}
          selectedAnswer={answers[current]} // NEW
        />
      ) : (
        shuffledQuestions.length > 0 && (
          <ResultsPage answers={answers} onRestart={handleRestart} />
        )
      )}
    </div>
  );
};

export default Quiz;
