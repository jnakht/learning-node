

const fs = require('fs');

const readStream = fs.createReadStream('./Hello1.txt', {encoding: 'utf-8'});
const writeStream = fs.createWriteStream('./Hello2.txt', {encoding: 'utf-8'});



readStream.on('data', (chunk) => {
    console.log(chunk);

    writeStream.write(chunk, (err) => {
        if(err) {
            throw Error(err);
        }
    }) 
})

readStream.on('error', (err) => {
    if (err) {
        throw Error(err);
    }
}) 


writeStream.on('error', (err) => {
    if (err) {
        throw Error(err);
    }
})


readStream.on('end', () => {
    console.log('Reading Ended');
    writeStream.end();
})

writeStream.on('finish', () => {
    console.log('Writing Ended');
})