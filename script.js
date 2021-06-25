let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let allQuestions = document.querySelectorAll(".question-group");

one.addEventListener("click", () => {
  handleClick(one);
});
two.addEventListener("click", () => {
  handleClick(two);
});
three.addEventListener("click", () => {
  handleClick(three);
});
four.addEventListener("click", () => {
  handleClick(four);
});
five.addEventListener("click", () => {
  handleClick(five);
});

const handleClick = (element) => {
  findShownElements(element);
  let question = element.children[0].children[0];
  let carrot = element.children[0].children[1];
  let answer = element.children[1];

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

const findShownElements = (element) => {
  allQuestions.forEach((question) => {
    if (question === element) return;

    let children = question.children;

    if (children[0].children[0].classList.contains("selected")) {
      children[0].children[0].classList.remove("selected");
      children[0].children[1].classList.remove("visible");
      children[1].classList.add("hidden");
    }
  });
};
