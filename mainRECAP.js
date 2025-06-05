

// const {addNumbers} = require('./module12RECAP/utils/add');
// const {mulNumbers} = require('./module12RECAP/utils/mul');
// const {subNumbers} = require('./module12RECAP/utils/subtract');
// const {divNumbers} = require('./module12RECAP/utils/div');

const {addNumbers, subNumbers, mulNumbers, divNumbers} = require('./module12RECAP/utils'); //do not need to specify index.js

const res1 = addNumbers(45, 54);
const res2 = subNumbers(5, 3);
const res3 = mulNumbers(45, 54);
const res4 = divNumbers(5434, 5);

console.log(res1, res2, res3, res4);