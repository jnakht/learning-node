
// const var1 = require('./file-2')
// console.log(var1);
// console.log(var1.a);
// console.log(var1.add(2, 3));


// const { a : a2, add : add2, b : b2 } = require('./file-2')
const var1 = require('./file-2')
const { a : a3, add : add3, b : b3 } = require('./file-3')
console.log(a3);
console.log(add3(2, 3, 5));

// console.log(b3);
// console.log(a2);
// console.log(add2(3, 2));
// console.log(b2);


console.log(var1.a);
console.log(var1.add(3, 2));
console.log(var1.b);