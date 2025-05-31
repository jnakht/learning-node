const test_var = require('./File-2');

const {a, add, b} = test_var;
const {a : a3, add : add3, b : b3} = require('./File-3');

// console.log(test_var.a);
// console.log(test_var.add(3, 5));
// console.log(b);
// console.log(a);
// console.log(add(7, 7));
// console.log(test_var);


console.log(add3(3, 4, 4));



