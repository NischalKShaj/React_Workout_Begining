"use strict";
const form = document.querySelector(".calculator");
const number1 = document.querySelector("#firstNumber");
const number2 = document.querySelector("#secondNumber");
const operate = document.querySelector("#mathOperation");
const resultValue = document.querySelector("#result");
form.addEventListener("submit", (e) => {
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
