let allQuestions = document.querySelectorAll(".question-group");

allQuestions.forEach((question_block) => {
  let question = question_block.children[0].children[0];
  let carrot = question_block.children[0].children[1];
  let answer = question_block.children[1];

  question_block.addEventListener("click", () => {
    handleClick(question_block, question, carrot, answer);
  });
});

const handleClick = (question_block, question, carrot, answer) => {
  findShownElements(question_block);
  if (answer.classList.contains("hidden")) {
    answer.classList.remove("hidden");
    carrot.classList.add("visible");
    question.classList.add("selected");
  } else {
    answer.classList.add("hidden");
    carrot.classList.remove("visible");
    question.classList.remove("selected");
  }
};

const findShownElements = (question_block) => {
  allQuestions.forEach((question) => {
    if (question === question_block) return;

    let children = question.children;

    if (children[0].children[0].classList.contains("selected")) {
      children[0].children[0].classList.remove("selected");
      children[0].children[1].classList.remove("visible");
      children[1].classList.add("hidden");
    }
  });
};
