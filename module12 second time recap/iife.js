



((require, module, __dirname, __filename) => {
    
const a = 10;

(
    (name) => {
        
    console.log(`Learning ${name}`);
}
)('Node')

console.log(a);

console.log(module);


})(require, module, './utils/addition.js')