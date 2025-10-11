function f1() {
  console.log('Running f1');
  throw new Error('Error in f1');
}

function f2(error) {
  console.log(`Error is ${error.message}`);
}

const promise = new Promise((resolve, _) => {
  resolve();
});

promise.then(f1).catch(f2);

promise.then(f1, f2);
