

const fs = require('fs');
console.log('tast - 1');
// let retData;
let retData = 'undefined dis na vai';



fs.writeFile('./text.txt', retData, {encoding: 'utf-8'}, (err) => {
    if (err) {
        console.log('something went wrong', err);
        return;
    }
    console.log('Writing Successful',);
})


fs.readFile('./text.txt', { encoding: 'utf-8'}, (error, data) => {
    if (error) {
        console.log('cannot read file: ', error);
        return;
    }
    console.log(data);
    retData = data;
    console.log('retData inside callback: ', retData);
})
// console.log(retData); undefined
console.log('retData outside callback: ', retData);


console.log('tast - 3');
