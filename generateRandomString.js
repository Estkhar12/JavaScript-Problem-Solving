const string ="kjwojhaohfoh";

function generateString(length) {
  let result = " ";
  const stringLength = string.length;
  for (let i = 0; i < length; i++) {
    result += string.charAt(Math.floor(Math.random() * stringLength));
  }

  return result;
}

console.log(generateString(5));
