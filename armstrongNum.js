let number = 15;
let noOfDigit = number.length;
let sum = 0;
let temp = number;
while (temp > 0) {
  let rem = temp % 10;
  sum += rem*rem*rem;

  temp = parseInt(temp/10); // convert float into integer
}
if (sum == number) {
  console.log(`${number} is an Armstrong number`);
} else {
  console.log(`${number} is not an Armstrong number`);
}
