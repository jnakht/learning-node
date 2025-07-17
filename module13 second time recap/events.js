

const EventEmitter = require("events");

class SchoolBell extends EventEmitter {}
class CollegeBell extends EventEmitter {}



const collegeBell = new CollegeBell();

collegeBell.on('ring', () => {
    console.log('Ohhoo, we are in university, we will bunk');
})

const schoolBell = new SchoolBell();
schoolBell.on('ring', () => {
    console.log('Yahoo! Class Time Finished');
})
schoolBell.on('ring', () => {
    console.log('Is there any class left?');
})
schoolBell.on('broken', () => {
    console.log('AAAH!, bell is broken, how we will know if the class is end');
})

schoolBell.emit('ring');
schoolBell.emit('broken');
collegeBell.emit('ring');

