const promise = new Promise(function (resolve) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(console.log); // 1
