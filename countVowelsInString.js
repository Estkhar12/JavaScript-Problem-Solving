function countVowel(str) {
  const count = str.match(/[aeiou]/gi).length;
  return count;
}
const string = "aiuopwq";

const result = countVowel(string);

console.log(result);
