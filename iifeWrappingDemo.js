
((require, module, __dirname, __filename) => {
    let a = 10;
((name) => {
    // let a = 10;
    console.log(`Learning ${name}`);
})('node')
console.log(require);
console.log(module);
console.log(a);
})(require, module, "./utils/addition.js")