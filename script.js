const buttons = [...document.querySelectorAll("button")];
const answer = document.querySelector(".result");
let first = 0;
let operator = "";
let second = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    //steps
    //1st number
    if (
      button.classList.contains("number") &&
      operator === "" &&
      second === 0
    ) {
      const num = convertToNum(button.textContent);
      first = num;
      answer.textContent = num;
    }
    //operator
    if (button.classList.contains("operator")) {
      operator = button.textContent;
    }
    //2nd number
    if (button.classList.contains("number") && operator !== "" && first !== 0) {
      const num = convertToNum(button.textContent);
      second = num;
      answer.textContent = num;
    }
    //solve problem
    if (button.classList.contains("equal")) {
      const result = operate(first, second, operator);
      answer.textContent = result;

      first = result;
      second = 0;
      operator = "";
    }

    if (button.classList.contains("clear")) {
      first = 0;
      second = 0;
      operator = "";
      answer.textContent = 0;
    }
  });
});

function operate(first, second, operatorFunc) {
  if (operatorFunc === "+") return add(first, second);
  if (operatorFunc === "-") return subtract(first, second);
  if (operatorFunc === "x") return multiply(first, second);
  if (operatorFunc === "÷") return divide(first, second);
}

function add(first, second) {
  return first + second;
}
function subtract(first, second) {
  return first - second;
}
function multiply(first, second) {
  return first * second;
}
function divide(first, second) {
  return first / second;
}
function convertToNum(value) {
  return Number.parseInt(value, 10);
}
