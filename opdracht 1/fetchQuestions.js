import { API_TOKEN } from "./consts.js";

const devApiUrlGenerator = ({ limit = 10, difficulty = "Easy" }) => {
  const validDifficulties = ["Easy", "Medium", "Hard"];

  if (!validDifficulties.includes(difficulty)) {
    throw new Error("Difficulty is not valid.");
  }

  return `https://quizapi.io/api/v1/questions?apiKey=${API_TOKEN}&limit=${limit}&difficulty=${difficulty}`;
};

export const fetchQuestions = async (limit = 10, difficulty = "Hard") => {
  const url = devApiUrlGenerator({ limit, difficulty });
  console.log(url);
  const data = await fetch(devApiUrlGenerator({ limit }));
  const jsonData = await data.json();
  return jsonData;
};
