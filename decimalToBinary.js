function decimalToBinary(num1) {
  if (num1 == 0) {
    return "0";
  }
  let arr = [];
  for (let num1 = 20; num1 > 0; num1 = Math.floor(num1 / 2)) {
    arr.unshift(num1 % 2);
  }
  return arr.join("");
}

let number = 10;
let result = decimalToBinary(number);
console.log(`The Decimal number is: ${result}`);
