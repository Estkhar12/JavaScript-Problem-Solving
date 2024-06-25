const arr1 = [3, 4, 2, 6, 9];
const arr2 = [3, 5, 0, 6, 12];

const newArray = [...arr1, ...arr2];

const mergeArray = [...new Set(newArray)];

console.log(mergeArray);
