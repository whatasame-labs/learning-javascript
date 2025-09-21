function filterRange(arr, a, b) {
  return arr.filter((x) => a <= x && x <= b);
}

const arr = [5, 3, 8, 1];

const filtered = filterRange(arr, 1, 4);

console.log(filtered); // 3,1
console.log(arr); // 5,3,8,1