const number = 20;

let a = 0,
  b = 1,
  nextTerm;

for (let i = 1; i <= number; i++) {
  let nextTerm = a + b;
  console.log(nextTerm);
  a = b;
  b = nextTerm;
}
