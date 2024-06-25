const operator = prompt("Enter operator");

const num1 = parseFloat(prompt("Enter first number"));
const num2 = parseFloat(prompt("Enter first second"));

let result;
if (operator == "+") {
  result = num1 + num2;
} else if (operator == "-") {
  result = num1 - num2;
} else if (operator == "*") {
  result = num1 * num2;
} else {
  result = num1 / num2;
}

console.log(`${num1} ${operator} ${num2} = ${result}`);
