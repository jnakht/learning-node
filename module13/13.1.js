
const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter{};
class TestEmitter extends EventEmitter{};

const myEmitter = new MyEmitter();
const testEmitter = new TestEmitter();

myEmitter.on('ringbell', () => {
    console.log('yes!! class is finished now');
})
myEmitter.on('ringbell', () => {
    console.log('i think one more class is left');
})
testEmitter.on('test1', () => {
    console.log('test1 is responding');
})
myEmitter.on('broken', () => {
    console.log('aaah! when the classes will finish');
})

myEmitter.emit('ringbell');
testEmitter.emit('test1');
myEmitter.emit('broken');
