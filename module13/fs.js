
// synchronous

const fs = require('fs');
console.log('task - 1');
const text = 'Learning File System';
fs.writeFileSync('text.txt', text);
console.log('task - 3');


const data = fs.readFileSync('./text.txt', { encoding: "utf-8"});
console.log('task - 5');

console.log(data);