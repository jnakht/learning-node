
const fs = require('fs')


console.log('task-1');


const text = "Learning Node";
fs.writeFileSync('./test1.txt', text); //task - 2

console.log('task -3');

const data = fs.readFileSync('./test1.txt', {encoding: 'utf-8'});//task-4
console.log(data);


console.log('task-5');