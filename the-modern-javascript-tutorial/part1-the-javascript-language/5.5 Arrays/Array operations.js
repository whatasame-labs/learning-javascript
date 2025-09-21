const styles = ['Jazz', 'Blues'];
console.log(styles);

styles.push('Rock-n-Roll');
console.log(styles);

const middleIndex = Math.floor((styles.length - 1) / 2);
styles[middleIndex] = 'Classics';
console.log(styles);

styles.shift();
console.log(styles);

styles.unshift('Rap');
styles.unshift('Reggae');
console.log(styles);
