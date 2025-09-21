const arr = ['a', 'b'];

arr.push(function () {
  console.log(this);
});

arr[2](); // this: arr
