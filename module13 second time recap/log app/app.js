
const path = require('path');
const fs = require('fs');
// console.log(process.argv);

const text = process.argv.slice(2).join(" ");
if (!text) {
    console.log("Invalid input");
    console.log('Demo input: node app.js Hello World');
    // return;
    process.exit(1);
}
const timeStamp = new Date().toISOString();
// console.log(timeStamp);
const message = `${text} ${timeStamp}\n`;
// console.log( text);

// const pathName = __dirname + '\\log.txt';

const pathName = path.join(__dirname, 'log.txt')
// console.log(pathName);

fs.appendFile(pathName, message, { encoding : "utf-8"}, () => {
    console.log('File Write Successful');
})