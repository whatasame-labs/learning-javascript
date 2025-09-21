function unique(arr) {
  const set = [];
  for (let i = 0; i < arr.length; i++) {
    if (!set.includes(arr[i])) {
      set.push(arr[i]);
    }
  }
  return set;
}

const strings = ['Hare', 'Krishna', 'Hare', 'Krishna', 'Krishna', 'Krishna', 'Hare', 'Hare', ':-O'];

console.log(unique(strings)); // Hare, Krishna, :-O

function uniqueWithSet(arr) {
  return [...new Set(arr)];
}

console.log(uniqueWithSet(strings));