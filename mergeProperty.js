const student1 = {
    name: "jaid",
    age: 23
}

const student2 = {
    gender: "male"
}

const newObj = Object.assign(student1, student2);
console.log(newObj)