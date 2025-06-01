

const { error } = require('console');
const fs = require('fs');

// fs.readFile('./text1.txt', {encoding: 'utf-8'}, (err, data) => {
//     if (err) {
//         console.log('Cannot read file: ', err);
//         return;
//     }
//     console.log('Inside Callback: ', data);

//     fs.writeFile('./text2.txt', data, {encoding: 'utf-8'}, (err) => {
//         if (err) {
//             console.log('Cannot write file: ', err);
//             return;
//         }
//         console.log('Writing Successful');
//     })
// })


const readStream = fs.createReadStream('./text1.txt', {encoding: 'utf-8'});
const writeStream = fs.createWriteStream('./text2.txt', {encoding: 'utf-8'});

readStream.on('data', (data) => {
    console.log(data);
    writeStream.write(data, (err) => {
        if (err) {
            throw Error("Error: ", err);
        }
    })
})

readStream.on('error', (err) => {
    if (err) {
            throw Error("Error: ", err);
        }
})

writeStream.on('error', (err) => {
    throw Error('Error: ', err);
})

readStream.on('end', () => {
    console.log('reading ended');
    writeStream.end()
})

writeStream.on('finish', () => {
    console.log('writing finished');
})