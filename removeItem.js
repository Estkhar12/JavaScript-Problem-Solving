function removeItem(array, n) {
  const index = array.indexOf(n);

  if (index > -1) {
    array.splice(index, 1);
  }
  return array;
}

const res = removeItem[(1, 3, 4, 5, 9)];

console.log(res);
