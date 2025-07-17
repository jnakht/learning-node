
const fs = require('fs');

const readStream = fs.createReadStream('./streamInput.txt', { encoding : "utf-8"});

const writeStream = fs.createWriteStream('./streamOutput.txt', { encoding: 'utf-8'});

readStream.on("data", (chunk) => {
    console.log(chunk);

    writeStream.write(chunk, (err) => {
        if (err) {
            throw Error("Error", err);
        } 
    })
})

readStream.on("error", (err) => {
    if (err) {
        throw Error("Error", err);
    }
})
writeStream.on("error", (err) => {
    if (err) {
        throw Error("rror", err);
    }
})

readStream.on('end', () => {
    console.log('Data Reading FInished');
    writeStream.end()
})
writeStream.on('finish', () => {
    console.log('Data Writing FInished');
})