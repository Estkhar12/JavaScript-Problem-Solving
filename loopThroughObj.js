const employee = {
    name: "shahid",
    age: 23,
    hobbies: ["Game", "travelling"]
}

for(let key in employee){
    let value;

    value = employee[key]

    console.log(key + " - " + value)
}