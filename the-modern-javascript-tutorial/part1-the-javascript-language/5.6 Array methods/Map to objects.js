let john = { name: 'John', surname: 'Smith', id: 1 };
let pete = { name: 'Pete', surname: 'Hunt', id: 2 };
let mary = { name: 'Mary', surname: 'Key', id: 3 };

let users = [john, pete, mary];

let usersMapped = users.map((user) => ({
  id: user.id,
  fullName: `${user.name} ${user.surname}`,
}));

console.log(usersMapped[0].id); // 1
console.log(usersMapped[0].fullName); // John Smith