

const EventEmitter = require('events');

class SchoolBell extends EventEmitter {}

const schoolBell = new SchoolBell();

schoolBell.on('ring', () => {
    console.log('Ahh, another class finished');
})

schoolBell.on('ring', () => {
    console.log('Okay then, lets Bunk');
})

schoolBell.on('broken', () => {
    console.log('When the class will finish. Its been a pretty much time');
})

// schoolBell.emit('ring');
// schoolBell.emit('broken');



// schoolBell.emit('ring');
// schoolBell.emit('broken');