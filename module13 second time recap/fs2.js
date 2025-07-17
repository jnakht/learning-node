
const fs = require('fs');
console.log('Task 1');
const data = fs.readFile('./input.txt', { encoding : "utf-8" }, (err, data) => {
    if (err) {
        console.log('Error Reading File', err);
    }
    console.log("The data is : ", data);

    fs.writeFile('./output.txt', data, "utf-8", (err) => {
        if (err) {
            console.log("Error writing file");
        }
    }); 
})

console.log(data);
console.log('Task 3');
