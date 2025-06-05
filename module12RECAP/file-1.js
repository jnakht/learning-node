// const var1 = require('./file-2');

const {a, b,  add} = require('./file-2')

const {a: a3, b : b3, add : add3} = require('./file-3');


const var1 = require('./file-2');
const var2 = require('./file-3');
// console.log(var1);
// console.log(var1.a);
// console.log(var1);
// console.log(var1.add(2, 3));

console.log(a);
console.log(add);
console.log(add(4, 3));
console.log(b);

console.log(a3, b3, add3(4, 34, 34));



const x = 109;

// module.exports = {x};
// console.log(module);


