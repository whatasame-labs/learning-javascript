function copySorted(arr) {
  const copy = [...arr];

  return copy.sort();
}

const arr = ['HTML', 'JavaScript', 'CSS'];
const sorted = copySorted(arr);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS