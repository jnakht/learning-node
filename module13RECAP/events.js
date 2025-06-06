

const EventEmitter = require('events');

// class SchoolBell extends EventEmitter {}

// const schoolBell = new SchoolBell();

// schoolBell.on('ring', () => {
//     console.log('Ahh, another class finished');
// })

// schoolBell.on('ring', () => {
//     console.log('Okay then, lets Bunk');
// })

// schoolBell.on('broken', () => {
//     console.log('When the class will finish. Its been a pretty much time');
// })

// schoolBell.emit('ring');
// schoolBell.emit('broken');



// schoolBell.emit('ring');
// schoolBell.emit('broken');


class ParamEvent extends EventEmitter{}
const paramEvent = new ParamEvent();
paramEvent.on('end', function(param1, param2){
    console.log(`This is our param1: ${param1} and param2: ${param2}`);
    // console.log(this);
    // console.log(this === paramEvent);

    // console.log(paramEvent);
})

paramEvent.on('begin', function(a, b) {
    setImmediate(() => {
        console.log('this happens asynchronously');
    })
})
paramEvent.emit('begin', 'jisan', 'Khan');
paramEvent.emit('end', 'Jisan', 'Khan');