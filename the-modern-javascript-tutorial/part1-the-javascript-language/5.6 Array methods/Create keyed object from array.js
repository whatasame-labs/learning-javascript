function groupById(array) {
  return array.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {});
}

const users = [
  { id: 'john', name: 'John Smith', age: 20 },
  { id: 'ann', name: 'Ann Smith', age: 24 },
  { id: 'pete', name: 'Pete Peterson', age: 31 },
];

const usersById = groupById(users);
console.log(usersById);
