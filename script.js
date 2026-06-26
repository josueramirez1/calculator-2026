const buttons = [...document.querySelectorAll("button")];
let answer = document.querySelector(".result");
let first = "";
let operator = "";
let second = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    //steps
    //1st number
    if (
      button.classList.contains("number") &&
      operator === "" &&
      second === ""
    ) {
      first += button.textContent;
      answer.textContent = "";
      answer.textContent = first;
    }
    //operator
    if (button.classList.contains("operator")) {
      operator = button.textContent;
    }
    //2nd number
    if (
      button.classList.contains("number") &&
      operator !== "" &&
      first !== ""
    ) {
      const num = convertToNum(button.textContent);
      second += button.textContent;
      answer.textContent = "";
      answer.textContent = second;
    }
    //solve problem
    if (button.classList.contains("equal")) {
      const result = operate(
        Number.parseInt(first, 10),
        Number.parseInt(second, 10),
        operator,
      );
      answer.textContent = result.toString();

      first = result;
      second = "";
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
