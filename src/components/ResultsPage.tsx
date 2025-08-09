import React, { useMemo } from "react";
import { Card, ProgressBar, ListGroup, Button, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain, faMedal, faRedo } from "@fortawesome/free-solid-svg-icons";
import { TYPE_FUNCTIONS } from "../data/typeFunctions";
import { Answer, MBTIType, Func, sumWeights, scoreType } from "../data/types";
import FunctionDetails from "./FunctionDetails";

interface ResultsPageProps {
  answers: Answer[];
  onRestart: () => void;
}

type TypeScore = {
  type: MBTIType;
  score: number;
  functions: Func[];
};

const ResultsPage: React.FC<ResultsPageProps> = ({ answers, onRestart }) => {
  const results = useMemo(() => {
    const totals = sumWeights(answers);

    const scores: TypeScore[] = (Object.keys(TYPE_FUNCTIONS) as MBTIType[]).map(
      (type) => ({
        type,
        functions: TYPE_FUNCTIONS[type],
        score: scoreType(totals, TYPE_FUNCTIONS[type]),
      })
    );

    return scores.sort((a, b) => b.score - a.score).slice(0, 3);
  }, [answers]);

  const topMatch = results[0];

  const getFunctionPairs = (funcs: Func[]) => {
    const pairs: { pair: string; score: number }[] = [];
    for (let i = 0; i < funcs.length; i++) {
      for (let j = i + 1; j < funcs.length; j++) {
        // Example: Pair score = average of each function's weight
        const score1 = scoreType(sumWeights(answers), [funcs[i]]);
        const score2 = scoreType(sumWeights(answers), [funcs[j]]);
        const avgScore = (score1 + score2) / 2;

        pairs.push({
          pair: `${funcs[i]} + ${funcs[j]}`,
          score: avgScore,
        });
      }
    }
    return pairs.sort((a, b) => b.score - a.score);
  };

  const getFunctionPercentages = () => {
    const totals = sumWeights(answers);
    let maxPossible = 0;

    // Find max total possible score to normalize percentages
    for (const func of Object.keys(totals)) {
      if (totals[func as Func] > maxPossible) {
        maxPossible = totals[func as Func];
      }
    }

    return (Object.keys(totals) as Func[]).map((func) => ({
      func,
      percentage: maxPossible ? (totals[func] / maxPossible) * 100 : 0,
    }));
  };

  const getTopFunctions = () => {
    const totals = sumWeights(answers);
    let maxScore = 0;

    // Find max score to normalize percentages
    for (const func of Object.keys(totals)) {
      if (totals[func as Func] > maxScore) {
        maxScore = totals[func as Func];
      }
    }

    // Create array and sort by score
    return (Object.keys(totals) as Func[])
      .map((func) => ({
        func,
        percentage: maxScore ? (totals[func] / maxScore) * 100 : 0,
      }))
      .sort((a, b) => b.percentage - a.percentage)
      .slice(0, 3);
  };

  return (
    <div className="container py-4 animate__animated animate__fadeInUp">
      <Card className="shadow-sm mb-4 border-0 rounded-4">
        <Card.Header className="d-flex align-items-center bg-success text-white rounded-top-4">
          Top 3 Cognitive Functions
        </Card.Header>
        <ListGroup variant="flush">
          {getTopFunctions().map(({ func, percentage }) => (
            <ListGroup.Item key={func}>
              <div className="d-flex justify-content-between mb-1">
                <strong>{func}</strong>
                <span>{percentage.toFixed(1)}%</span>
              </div>
              <ProgressBar
                now={percentage}
                variant={
                  percentage > 75
                    ? "success"
                    : percentage > 50
                    ? "info"
                    : percentage > 25
                    ? "warning"
                    : "secondary"
                }
              />
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
      <Card className="shadow-sm mb-4 border-0 rounded-4">
        <Card.Header className="d-flex align-items-center bg-success text-white rounded-top-4">
          Cognitive Function Percentages
        </Card.Header>
        <ListGroup variant="flush">
          {getFunctionPercentages().map(({ func, percentage }) => (
            <ListGroup.Item key={func}>
              <div className="d-flex justify-content-between mb-1">
                <strong>{func}</strong>
                <span>{percentage.toFixed(1)}%</span>
              </div>
              <ProgressBar
                now={percentage}
                variant={
                  percentage > 75
                    ? "success"
                    : percentage > 50
                    ? "info"
                    : percentage > 25
                    ? "warning"
                    : "secondary"
                }
              />
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
      {topMatch && (
        <Card className="shadow-sm mb-4 border-0 rounded-4">
          <Card.Header className="d-flex align-items-center bg-success text-white rounded-top-4">
            Cognitive Function Pairs (by % Match)
          </Card.Header>
          <ListGroup variant="flush">
            {getFunctionPairs(topMatch.functions).map((p, idx) => (
              <ListGroup.Item
                key={idx}
                className="d-flex justify-content-between"
              >
                <span>{p.pair}</span>
                <strong>{(p.score * 100).toFixed(1)}%</strong>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
      )}
      <Card className="shadow-lg mb-4 border-0 rounded-4">
        <Card.Header className="d-flex align-items-center bg-success text-white rounded-top-4">
          <FontAwesomeIcon icon={faBrain} className="me-2" />
          <strong>Your Top Personality Matches</strong>
        </Card.Header>

        <ListGroup variant="flush">
          {results.map((res, idx) => (
            <ListGroup.Item
              key={res.type}
              className={`py-3 animate__animated animate__fadeInUp`}
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              <div className="d-flex align-items-center mb-1">
                <FontAwesomeIcon
                  icon={faMedal}
                  size="lg"
                  className={`me-2 ${
                    idx === 0
                      ? "text-warning"
                      : idx === 1
                      ? "text-secondary"
                      : "text-danger"
                  }`}
                />
                <strong className="me-2 fs-5">
                  {res.type}{" "}
                  {idx === 0 && (
                    <Badge bg="warning" text="dark">
                      Top Match
                    </Badge>
                  )}
                </strong>
                <small className="text-muted">
                  ({res.functions.join(" → ")})
                </small>
              </div>
              <ProgressBar
                now={res.score * 100}
                label={`${(res.score * 100).toFixed(1)}%`}
                variant={
                  idx === 0 ? "success" : idx === 1 ? "info" : "secondary"
                }
                className="rounded-pill"
              />
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
      {topMatch && (
        <Card className="shadow-sm mb-4 border-0 rounded-4">
          <Card.Header className="d-flex align-items-center bg-success text-white rounded-top-4">
            {topMatch.type} Function Stack Details
          </Card.Header>
          <Card.Body>
            {topMatch.functions.map((func) => (
              <FunctionDetails key={func} func={func} />
            ))}
          </Card.Body>
        </Card>
      )}
      <div className="text-center">
        <Button
          variant="outline-primary"
          onClick={onRestart}
          className="rounded-pill px-4 py-2 fw-semibold"
        >
          <FontAwesomeIcon icon={faRedo} className="me-2" />
          Retake Quiz
        </Button>
      </div>
    </div>
  );
};

export default ResultsPage;
