const array = [2, 4, 1, 45, 56, 6];
const chunk = 2;

function split(arr, chunk) {
  for (i = 0; i < arr.length; i += chunk) {
    let tempArr;
    tempArr = arr.splice(i, i + chunk);
    console.log(tempArr);
  }
}

split(array, chunk);
