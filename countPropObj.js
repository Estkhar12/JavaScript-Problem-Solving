const teacher = {
  name: "Sami",
  age: 29,
  hobbies: ["Teaching", "Games", "Reading"],
  address: "Patna"
};

let count = 0;

for (let key in teacher) {
  ++count;
}

console.log(count);
