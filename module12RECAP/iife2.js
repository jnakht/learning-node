

// how a file a wrapped using iife
((require, module, __dirname, __filename, ...) => {
    
const a = 109;
((name) => {
    // const a = 109;
    console.log(`Learning ${name}`);
})('node')

console.log(a);
console.log(module, require, __dirname, __filename);


})(require, module, 'c:...', './c/file.js', ...)