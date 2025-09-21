function sortByAge(users) {
  return users.sort((a, b) => a.age - b.age);
}

const john = { name: 'John', age: 25 };
const pete = { name: 'Pete', age: 30 };
const mary = { name: 'Mary', age: 28 };

const arr = [pete, john, mary];

sortByAge(arr);

// now: [john, mary, pete]
console.log(arr[0].name); // John
console.log(arr[1].name); // Mary
console.log(arr[2].name); // Pete