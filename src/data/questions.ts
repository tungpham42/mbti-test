import { Question } from "./types";

export const QUESTIONS: Question[] = [
  {
    id: "q1",
    text: "I prefer to solve problems through careful internal analysis before speaking.",
    answers: [
      { id: "q1a1", label: "Strongly agree", weights: { Ti: 3 } },
      { id: "q1a2", label: "Agree", weights: { Ti: 2 } },
      { id: "q1a3", label: "Neutral", weights: {} },
      { id: "q1a4", label: "Disagree", weights: { Fe: 1 } },
      { id: "q1a5", label: "Strongly disagree", weights: { Fe: 2 } },
    ],
  },
  {
    id: "q2",
    text: "I act quickly to organize people and resources toward a clear goal.",
    answers: [
      { id: "q2a1", label: "Strongly agree", weights: { Te: 3 } },
      { id: "q2a2", label: "Agree", weights: { Te: 2 } },
      { id: "q2a3", label: "Neutral", weights: {} },
      { id: "q2a4", label: "Disagree", weights: { Fi: 1 } },
      { id: "q2a5", label: "Strongly disagree", weights: { Fi: 2 } },
    ],
  },
  {
    id: "q3",
    text: "I make decisions based on deeply-held personal values and authenticity.",
    answers: [
      { id: "q3a1", label: "Strongly agree", weights: { Fi: 3 } },
      { id: "q3a2", label: "Agree", weights: { Fi: 2 } },
      { id: "q3a3", label: "Neutral", weights: {} },
      { id: "q3a4", label: "Disagree", weights: { Te: 1 } },
      { id: "q3a5", label: "Strongly disagree", weights: { Te: 2 } },
    ],
  },
  {
    id: "q4",
    text: "I consider the emotional impact of my words and actions on others.",
    answers: [
      { id: "q4a1", label: "Strongly agree", weights: { Fe: 3 } },
      { id: "q4a2", label: "Agree", weights: { Fe: 2 } },
      { id: "q4a3", label: "Neutral", weights: {} },
      { id: "q4a4", label: "Disagree", weights: { Ti: 1 } },
      { id: "q4a5", label: "Strongly disagree", weights: { Ti: 2 } },
    ],
  },
  {
    id: "q5",
    text: "I focus on abstract patterns and future possibilities more than present details.",
    answers: [
      { id: "q5a1", label: "Strongly agree", weights: { Ni: 3 } },
      { id: "q5a2", label: "Agree", weights: { Ni: 2 } },
      { id: "q5a3", label: "Neutral", weights: {} },
      { id: "q5a4", label: "Disagree", weights: { Se: 1 } },
      { id: "q5a5", label: "Strongly disagree", weights: { Se: 2 } },
    ],
  },
  {
    id: "q6",
    text: "I enjoy exploring multiple new ideas and making spontaneous connections.",
    answers: [
      { id: "q6a1", label: "Strongly agree", weights: { Ne: 3 } },
      { id: "q6a2", label: "Agree", weights: { Ne: 2 } },
      { id: "q6a3", label: "Neutral", weights: {} },
      { id: "q6a4", label: "Disagree", weights: { Si: 1 } },
      { id: "q6a5", label: "Strongly disagree", weights: { Si: 2 } },
    ],
  },
  {
    id: "q7",
    text: "I notice and recall specific facts and details from the past accurately.",
    answers: [
      { id: "q7a1", label: "Strongly agree", weights: { Si: 3 } },
      { id: "q7a2", label: "Agree", weights: { Si: 2 } },
      { id: "q7a3", label: "Neutral", weights: {} },
      { id: "q7a4", label: "Disagree", weights: { Ne: 1 } },
      { id: "q7a5", label: "Strongly disagree", weights: { Ne: 2 } },
    ],
  },
  {
    id: "q8",
    text: "I pay close attention to my physical surroundings and act in the moment.",
    answers: [
      { id: "q8a1", label: "Strongly agree", weights: { Se: 3 } },
      { id: "q8a2", label: "Agree", weights: { Se: 2 } },
      { id: "q8a3", label: "Neutral", weights: {} },
      { id: "q8a4", label: "Disagree", weights: { Ni: 1 } },
      { id: "q8a5", label: "Strongly disagree", weights: { Ni: 2 } },
    ],
  },
  {
    id: "q9",
    text: "I enjoy systematizing processes to make them efficient.",
    answers: [
      { id: "q9a1", label: "Strongly agree", weights: { Te: 3 } },
      { id: "q9a2", label: "Agree", weights: { Te: 2 } },
      { id: "q9a3", label: "Neutral", weights: {} },
      { id: "q9a4", label: "Disagree", weights: { Fi: 1 } },
      { id: "q9a5", label: "Strongly disagree", weights: { Fi: 2 } },
    ],
  },
  {
    id: "q10",
    text: "I value harmony and maintaining positive group dynamics.",
    answers: [
      { id: "q10a1", label: "Strongly agree", weights: { Fe: 3 } },
      { id: "q10a2", label: "Agree", weights: { Fe: 2 } },
      { id: "q10a3", label: "Neutral", weights: {} },
      { id: "q10a4", label: "Disagree", weights: { Ti: 1 } },
      { id: "q10a5", label: "Strongly disagree", weights: { Ti: 2 } },
    ],
  },
  {
    id: "q11",
    text: "I am drawn to big-picture insights that feel almost like sudden revelations.",
    answers: [
      { id: "q11a1", label: "Strongly agree", weights: { Ni: 3 } },
      { id: "q11a2", label: "Agree", weights: { Ni: 2 } },
      { id: "q11a3", label: "Neutral", weights: {} },
      { id: "q11a4", label: "Disagree", weights: { Se: 1 } },
      { id: "q11a5", label: "Strongly disagree", weights: { Se: 2 } },
    ],
  },
  {
    id: "q12",
    text: "I quickly generate many possibilities and brainstorm freely.",
    answers: [
      { id: "q12a1", label: "Strongly agree", weights: { Ne: 3 } },
      { id: "q12a2", label: "Agree", weights: { Ne: 2 } },
      { id: "q12a3", label: "Neutral", weights: {} },
      { id: "q12a4", label: "Disagree", weights: { Si: 1 } },
      { id: "q12a5", label: "Strongly disagree", weights: { Si: 2 } },
    ],
  },
  {
    id: "q13",
    text: "I tend to keep detailed mental records of what has worked in the past.",
    answers: [
      { id: "q13a1", label: "Strongly agree", weights: { Si: 3 } },
      { id: "q13a2", label: "Agree", weights: { Si: 2 } },
      { id: "q13a3", label: "Neutral", weights: {} },
      { id: "q13a4", label: "Disagree", weights: { Ne: 1 } },
      { id: "q13a5", label: "Strongly disagree", weights: { Ne: 2 } },
    ],
  },
  {
    id: "q14",
    text: "I am energized by real-time, sensory-rich experiences.",
    answers: [
      { id: "q14a1", label: "Strongly agree", weights: { Se: 3 } },
      { id: "q14a2", label: "Agree", weights: { Se: 2 } },
      { id: "q14a3", label: "Neutral", weights: {} },
      { id: "q14a4", label: "Disagree", weights: { Ni: 1 } },
      { id: "q14a5", label: "Strongly disagree", weights: { Ni: 2 } },
    ],
  },
  {
    id: "q15",
    text: "I refine my inner logical models before making decisions.",
    answers: [
      { id: "q15a1", label: "Strongly agree", weights: { Ti: 3 } },
      { id: "q15a2", label: "Agree", weights: { Ti: 2 } },
      { id: "q15a3", label: "Neutral", weights: {} },
      { id: "q15a4", label: "Disagree", weights: { Fe: 1 } },
      { id: "q15a5", label: "Strongly disagree", weights: { Fe: 2 } },
    ],
  },
  {
    id: "q16",
    text: "I organize external systems to accomplish objectives efficiently.",
    answers: [
      { id: "q16a1", label: "Strongly agree", weights: { Te: 3 } },
      { id: "q16a2", label: "Agree", weights: { Te: 2 } },
      { id: "q16a3", label: "Neutral", weights: {} },
      { id: "q16a4", label: "Disagree", weights: { Fi: 1 } },
      { id: "q16a5", label: "Strongly disagree", weights: { Fi: 2 } },
    ],
  },
  {
    id: "q17",
    text: "I base my choices on how well they align with my values.",
    answers: [
      { id: "q17a1", label: "Strongly agree", weights: { Fi: 3 } },
      { id: "q17a2", label: "Agree", weights: { Fi: 2 } },
      { id: "q17a3", label: "Neutral", weights: {} },
      { id: "q17a4", label: "Disagree", weights: { Te: 1 } },
      { id: "q17a5", label: "Strongly disagree", weights: { Te: 2 } },
    ],
  },
  {
    id: "q18",
    text: "I notice and respond to the emotional needs of people around me.",
    answers: [
      { id: "q18a1", label: "Strongly agree", weights: { Fe: 3 } },
      { id: "q18a2", label: "Agree", weights: { Fe: 2 } },
      { id: "q18a3", label: "Neutral", weights: {} },
      { id: "q18a4", label: "Disagree", weights: { Ti: 1 } },
      { id: "q18a5", label: "Strongly disagree", weights: { Ti: 2 } },
    ],
  },
  {
    id: "q19",
    text: "I think in symbols and metaphors about what might happen in the future.",
    answers: [
      { id: "q19a1", label: "Strongly agree", weights: { Ni: 3 } },
      { id: "q19a2", label: "Agree", weights: { Ni: 2 } },
      { id: "q19a3", label: "Neutral", weights: {} },
      { id: "q19a4", label: "Disagree", weights: { Se: 1 } },
      { id: "q19a5", label: "Strongly disagree", weights: { Se: 2 } },
    ],
  },
  {
    id: "q20",
    text: "I get excited by novel experiences and unpredictable situations.",
    answers: [
      { id: "q20a1", label: "Strongly agree", weights: { Ne: 3 } },
      { id: "q20a2", label: "Agree", weights: { Ne: 2 } },
      { id: "q20a3", label: "Neutral", weights: {} },
      { id: "q20a4", label: "Disagree", weights: { Si: 1 } },
      { id: "q20a5", label: "Strongly disagree", weights: { Si: 2 } },
    ],
  },
];
