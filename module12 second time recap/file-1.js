
// const var1 = require('./file-2')
// console.log(var1);
// console.log(var1.a);
// console.log(var1.add(2, 3));


const { a, add, b } = require('./file-2')
console.log(a);
console.log(add(2, 3));

console.log(b);