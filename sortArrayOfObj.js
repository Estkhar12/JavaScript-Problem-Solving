const students = [
  { name: "Jaid", age: 23 },
  { name: "sami", age: 21 },
  { name: "ibrahim", age: 34 },
];

let result = students.sort((a, b) => {
  return a.age - b.age;
});

console.log(result);
