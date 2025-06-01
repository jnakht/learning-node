
const a = 10;

const add = (param1, param2) => param1 + param2;
const b = 30;
const c = 500;
// module.exports = a;
// module.exports = add;

export {
    a, 
    // add,
    b,
}
// export default add;
export default {
    add,
    c
}
// console.log(module); //esm global e module ekdom e nai