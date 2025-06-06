

const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
let m = 0;
let n = 0;
myEmitter.on('inc', () => {
    m++;
    console.log(m);
})

myEmitter.emit('inc');
myEmitter.emit('inc');

myEmitter.once('dec', () => {
    n--;
    console.log(n);
})

myEmitter.emit('dec');
myEmitter.emit('dec');//ignored