
// console.log(process.argv);

const fs = require('fs');
const path = require('path');
const inputArguments = process.argv.slice(2);
// console.log(inputArguments);
const timeStamp = new Date().toISOString();
const ttext = inputArguments.join(' ');
const text = `${ttext} ${timeStamp} ${'\n'}`;

if (!text) {
    console.log('X - Error');
    console.log("Example: node index.js hello world");
    process.exit(1);
}
console.log(text);

// console.log(__dirname);
// const fileName = `\\log.txt`;
// console.log(fileName);
// const pathName = `${__dirname}'\'log.txt`;

const pathName = path.join(__dirname, 'log.txt');
console.log(pathName);

fs.appendFile('./log.txt', text, {encoding: 'utf-8'}, () => {
    console.log('Append Successful');
})