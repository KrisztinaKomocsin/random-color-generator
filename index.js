import chalk from 'chalk';

let icon = '#'.repeat(31);
const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

console.log(icon);
console.log(icon);
console.log(icon);
console.log('#'.repeat(5) + ' '.repeat(21) + '#'.repeat(5));
console.log(`#####       ${randomColor}       #####`);
console.log('#'.repeat(5) + ' '.repeat(21) + '#'.repeat(5));
console.log(icon);
console.log(icon);
console.log(icon);
