

// console.log(process.argv);
const path = require('path');
const fs = require('fs');
const inputArgs = process.argv.slice(2);
const joindedWords = inputArgs.join(' ');
// console.log(joindedWords);
const timeStamp = new Date().toISOString();

const text = `${joindedWords} ${timeStamp} \n`;
if (!joindedWords) {
    console.log('X - Error');
    console.log('Example: node index.js hello world');
    process.exit(1);
}

const pathName = path.join(__dirname, 'log.txt');
console.log(pathName);
fs.appendFile(pathName, text, {encoding: 'utf-8'}, () => {
    console.log('Append File Is Successful');
})
