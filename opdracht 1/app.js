import { APP_TITLE } from "./consts.js";
import { fetchQuestions } from "./fetchQuestions.js";

const app = async () => {
  //1.fetch API data
  let out = [];
  for (let i = 0; i < 20; i++) {
    const questions = await fetchQuestions(20, "Hard");
    out.push(...questions);
  }
  const mySet = new Set(out.map((q) => q.category));
  const categories = [...mySet];
  console.log(out);
  console.log(categories);
  //   fetchQuestions(500).then((questions) => {
  //     console.log(questions);
  //   });

  //set the app title
  document.title = APP_TITLE;

  //TODO: Create your application
  const textContainer = document.createElement("div");
  textContainer.className = "text-container";
  textContainer.innerHTML = "A basic JS starter template";

  //add the app container
  const appContainer = document.getElementById("app");
  //appContainer.append(textContainer);
};

//start the app
app();
