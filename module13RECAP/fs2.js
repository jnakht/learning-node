
const fs = require('fs')

console.log('task-1');

const text = 'amar sonar bangla'


let data2='hoynai';
const data = fs.readFile('./test1.txt', { encoding: 'utf-8'}, (err, data) => {
    if (err) {
        console.log('error: ', err);
        return;
    } 
    data2 = data;
    // console.log(data);



    fs.writeFile('./test2.txt', data, (err) => {
    if (err) {
        console.log('error: ', err);
        return;
    }
    console.log('Data written successfully');
})
});




console.log(data);//undefined, because the fs.readFile doesnt return anthing
console.log(data2);//still undefined, because assync readfile
console.log('task-3');
