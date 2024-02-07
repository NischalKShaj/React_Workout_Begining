const form = document.querySelector(".calculator") as HTMLFormElement;
const number1 = document.querySelector("#firstNumber") as HTMLInputElement;
const number2 = document.querySelector("#secondNumber") as HTMLInputElement;
const operate = document.querySelector("#mathOperation") as HTMLSelectElement;
const resultValue = document.querySelector("#result") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let result;
  let num1 = parseFloat(number1.value);
  let num2 = parseFloat(number2.value);
  let operation = operate.value;
  switch (operation) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      console.log("invalid operator");
      return;
  }
  resultValue.value = result.toString();
});
