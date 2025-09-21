function getAverageAge(people) {
  return people.reduce((a, b) => a + b.age, 0) / people.length;
}

const john = { name: 'John', age: 25 };
const pete = { name: 'Pete', age: 30 };
const mary = { name: 'Mary', age: 29 };

const arr = [john, pete, mary];

console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28