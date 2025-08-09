import React from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faGears,
  faHeart,
  faEye,
  faArrowRightArrowLeft,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";
import { Func } from "../data/types";

const functionIcons: Record<Func, any> = {
  Ni: faLightbulb,
  Ne: faArrowRightArrowLeft,
  Si: faBookOpen,
  Se: faEye,
  Ti: faGears,
  Te: faGears,
  Fi: faHeart,
  Fe: faHeart,
};

const functionDescriptions: Record<Func, string> = {
  Ni: "Introverted Intuition: Focuses on abstract patterns, long-term vision, and underlying meanings.",
  Ne: "Extraverted Intuition: Explores possibilities, connections, and generates creative ideas.",
  Si: "Introverted Sensing: Relies on past experiences, consistency, and attention to factual detail.",
  Se: "Extraverted Sensing: Lives in the moment, noticing details and reacting to the physical world.",
  Ti: "Introverted Thinking: Seeks internal logical consistency and precise definitions.",
  Te: "Extraverted Thinking: Organizes and structures external systems for efficiency.",
  Fi: "Introverted Feeling: Values personal ethics, authenticity, and individual emotional resonance.",
  Fe: "Extraverted Feeling: Reads social dynamics and fosters group harmony.",
};

interface FunctionDetailsProps {
  func: Func;
}

const FunctionDetails: React.FC<FunctionDetailsProps> = ({ func }) => {
  return (
    <Card className="mb-3 shadow-sm border-0 rounded-3 function-detail-card animate__animated animate__zoomIn">
      <Card.Body className="d-flex align-items-center">
        <FontAwesomeIcon
          icon={functionIcons[func]}
          className="me-3 fs-3 text-primary"
        />
        <div>
          <strong className="fs-5">{func}</strong>
          <p className="mb-0 text-muted">{functionDescriptions[func]}</p>
        </div>
      </Card.Body>
    </Card>
  );
};

export default FunctionDetails;
