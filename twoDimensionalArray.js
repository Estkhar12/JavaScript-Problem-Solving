let arr = [];
let row = 3;
let col = 3;
let h = 0;

for (let i = 0; i < row; i++) {
  arr[i] = [];
  for (let j = 0; j < col; j++) {
    arr[i][j] = h++;
  }
}
console.log(arr);
