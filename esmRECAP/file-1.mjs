// const var1 = require('./file-2');

// const {a, b,  add} = require('./file-2')

// import var1 from './file-2.mjs' // default export kori nai, tai destructure kore nite hobe

import {a, add as Add, b} from './file-2.mjs'
console.log(a, Add, b);

import {a as a3, b as b3} from './file-3.mjs'
// import addddddd from './file-3.mjs' //we can change the var name if exported default

// import {add, x} from './file-3.mjs'

// console.log(a3, b3, addddddd.add);
// console.log(addddddd.x);
// console.log(add, x);

// console.log(var1);
// const {a: a3, b : b3, add : add3} = require('./file-3');


// const var1 = require('./file-2');
// const var2 = require('./file-3');
// console.log(var1);
// console.log(var1.a);
// console.log(var1);
// console.log(var1.add(2, 3));

// console.log(a);
// console.log(add);
// console.log(add(4, 3));
// console.log(b);

// console.log(a3, b3, add3(4, 34, 34));



// const x = 109;

// module.exports = {x};
// console.log(module);


