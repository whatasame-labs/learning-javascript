new Promise(function () {
  setTimeout(() => {
    throw new Error('Whoops!');
  }, 1000);
}).catch(console.log); // this catch doesn't handle error in setTimeout()
