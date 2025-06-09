const fs = require('fs');
const path = require('path');

const data = process.argv.slice(2);

if (data.length === 0) {
    console.log('No input provided. Please pass text as arguments.');
    process.exit(1);
}

const pathName = path.join(__dirname, 'log.txt');
const text = data.join(' ');
if (!text) {
    console.log('No text provided. Please provide some text to log.');
    process.exit(1);
}
const TextToWrite = `${text} \n`;

console.log('Writing:', TextToWrite);

fs.appendFile(pathName, TextToWrite, { encoding: 'utf-8' }, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
        return;
    }
    console.log('Log added to file successfully');
});
