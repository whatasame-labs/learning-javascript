const microtaskPromise1 = Promise.resolve();
const microtaskPromise2 = Promise.resolve();

// 1, 3, 2, 4
microtaskPromise1.then(() => console.log('[Microtask] 1')).then(() => console.log('[Microtask] 2'));
microtaskPromise2.then(() => console.log('[Microtask] 3')).then(() => console.log('[Microtask] 4'));

const macrotaskPromise1 = new Promise((res) => setTimeout(res, 1000));
const macrotaskPromise2 = new Promise((res) => setTimeout(res, 1000));

// 1, 2, 3, 4
macrotaskPromise1.then(() => console.log('[Macrotask] 1')).then(() => console.log('[Macrotask] 2'));
macrotaskPromise2.then(() => console.log('[Macrotask] 3')).then(() => console.log('[Macrotask] 4'));
