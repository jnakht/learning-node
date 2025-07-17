
const fs = require('fs');

console.log('Task 1');
const data = fs.readFileSync('./input.txt', { encoding : "utf-8" });

console.log(data);

console.log('Task 3');
fs.writeFileSync('./output.txt', data, { encoding : "utf-8" });
console.log('Task 5');
