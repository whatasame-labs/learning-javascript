function camelize(str) {
  return str
    .split('-')
    .map((word, index) => {
      return index > 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word;
    })
    .join('');
}

console.log(camelize('background-color') === 'backgroundColor');
console.log(camelize('list-style-image') === 'listStyleImage');
console.log(camelize('-webkit-transition') === 'WebkitTransition');