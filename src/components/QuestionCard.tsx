import React from "react";
import { Card, Button, ProgressBar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Question, Answer } from "../data/types";

interface QuestionCardProps {
  question: Question;
  questionIndex: number;
  totalQuestions: number;
  onAnswer: (answer: Answer) => void;
  onPrevious: () => void;
  hasPrevious: boolean;
  selectedAnswer?: Answer; // NEW
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  questionIndex,
  totalQuestions,
  onAnswer,
  onPrevious,
  hasPrevious,
  selectedAnswer,
}) => {
  const progress = ((questionIndex + 1) / totalQuestions) * 100;

  return (
    <Card className="mb-4 shadow-lg border-0 rounded-4 animate__animated animate__fadeInRight">
      <Card.Header className="d-flex align-items-center bg-primary text-white rounded-top-4">
        <FontAwesomeIcon icon={faQuestionCircle} className="me-2" />
        <strong>
          Question {questionIndex + 1} of {totalQuestions}
        </strong>
      </Card.Header>

      <ProgressBar now={progress} variant="success" className="rounded-0" />

      <Card.Body>
        <Card.Title className="mb-4 fs-4 fw-bold text-center">
          {question.text}
        </Card.Title>

        <div className="d-grid gap-3 mb-3">
          {question.answers.map((answer) => {
            const isSelected = selectedAnswer?.id === answer.id;
            return (
              <Button
                key={answer.id}
                variant={isSelected ? "primary" : "outline-primary"}
                size="lg"
                className={`rounded-pill fw-semibold hover-glow ${
                  isSelected ? "active" : ""
                }`}
                onClick={() => onAnswer(answer)}
              >
                {answer.label}
              </Button>
            );
          })}
        </div>

        {hasPrevious && (
          <div className="text-center">
            <Button
              variant="outline-secondary"
              onClick={onPrevious}
              className="rounded-pill px-4"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
              Previous Question
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default QuestionCard;
