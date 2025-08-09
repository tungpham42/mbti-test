// 8 Jungian cognitive functions
export type Func = "Ni" | "Ne" | "Si" | "Se" | "Ti" | "Te" | "Fi" | "Fe";

export const ALL_FUNCTIONS: Func[] = [
  "Ni",
  "Ne",
  "Si",
  "Se",
  "Ti",
  "Te",
  "Fi",
  "Fe",
];

// A single answer option
export type Answer = {
  id: string;
  label: string;
  // Map function -> weight (can be negative or positive)
  weights: Partial<Record<Func, number>>;
};

// A quiz question
export type Question = {
  id: string;
  text: string;
  answers: Answer[];
};

// The 16 MBTI types
export type MBTIType =
  | "INTJ"
  | "INTP"
  | "ENTJ"
  | "ENTP"
  | "INFJ"
  | "INFP"
  | "ENFJ"
  | "ENFP"
  | "ISTJ"
  | "ISFJ"
  | "ESTJ"
  | "ESFJ"
  | "ISTP"
  | "ISFP"
  | "ESTP"
  | "ESFP";

// Canonical cognitive function order for each MBTI type
export const TYPE_FUNCTIONS: Record<MBTIType, Func[]> = {
  INTJ: ["Ni", "Te", "Fi", "Se"],
  INTP: ["Ti", "Ne", "Si", "Fe"],
  ENTJ: ["Te", "Ni", "Se", "Fi"],
  ENTP: ["Ne", "Ti", "Fe", "Si"],

  INFJ: ["Ni", "Fe", "Ti", "Se"],
  INFP: ["Fi", "Ne", "Si", "Te"],
  ENFJ: ["Fe", "Ni", "Se", "Ti"],
  ENFP: ["Ne", "Fi", "Te", "Si"],

  ISTJ: ["Si", "Te", "Fi", "Ne"],
  ISFJ: ["Si", "Fe", "Ti", "Ne"],
  ESTJ: ["Te", "Si", "Ne", "Fi"],
  ESFJ: ["Fe", "Si", "Ne", "Ti"],

  ISTP: ["Ti", "Se", "Ni", "Fe"],
  ISFP: ["Fi", "Se", "Ni", "Te"],
  ESTP: ["Se", "Ti", "Fe", "Ni"],
  ESFP: ["Se", "Fi", "Te", "Ni"],
};

// Sum all function weights from chosen answers
export function sumWeights(answers: Answer[]) {
  const totals: Record<Func, number> = {
    Ti: 0,
    Te: 0,
    Fi: 0,
    Fe: 0,
    Ni: 0,
    Ne: 0,
    Si: 0,
    Se: 0,
  };

  answers.forEach((a) => {
    Object.entries(a.weights || {}).forEach(([func, val]) => {
      totals[func as Func] += val ?? 0;
    });
  });

  return totals;
}

// Compare user's totals to an MBTI type's ideal function stack
export function scoreType(userTotals: Record<Func, number>, typeFuncs: Func[]) {
  // Weight: Primary=4, Auxiliary=3, Tertiary=2, Inferior=1
  const positionWeights = [4, 3, 2, 1];

  const ideal: Record<Func, number> = {
    Ti: 0,
    Te: 0,
    Fi: 0,
    Fe: 0,
    Ni: 0,
    Ne: 0,
    Si: 0,
    Se: 0,
  };

  typeFuncs.forEach((func, i) => {
    ideal[func] = positionWeights[i] ?? 0;
  });

  // Cosine similarity between user vector & ideal vector
  let dot = 0;
  let normIdeal = 0;
  let normUser = 0;

  (Object.keys(ideal) as Func[]).forEach((func) => {
    dot += (userTotals[func] || 0) * ideal[func];
    normIdeal += ideal[func] ** 2;
    normUser += (userTotals[func] || 0) ** 2;
  });

  return dot / (Math.sqrt(normIdeal) * (Math.sqrt(normUser) || 1));
}
