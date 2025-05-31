
// const { add } = require('./utils/addition');
// const { sub } = require('./utils/subtraction');
const { add, sub } = require('./utils'); //no need to specify index.js, implicitly it looks for index.js, if found, boom, else error

console.log(add(2, 3));
console.log(sub(3, 2));