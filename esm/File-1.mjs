// const test_var = require('./File-2');

import {a, b} from "./File-2.mjs"
// import test_var from "./File-2.mjs"
// import ADD from './File-2.mjs';
// import jog_kora from './File-2.mjs';

import var_fun from './File-2.mjs'

// console.log(a, add, b);
// console.log(a, ADD, b);
// console.log(a, jog_kora, b);

// const {a, add, b} = test_var;
// const {a : a3, add : add3, b : b3} = require('./File-3');

// const {a, add, b} = require('./File-3');
import { a as a3, b as b3, add as add3} from './File-3.mjs'
console.log(a3, b3, add3);

console.log(var_fun.c, var_fun.add);



// import React, {authState} from 'react';







