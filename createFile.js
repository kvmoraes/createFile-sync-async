const fs = require ('fs');

let fileNumber = 1;

while (fileNumber <= 5) {
    createFileAsync(fileNumber);
    fileNumber++;
}

function createFileAsync(fileNumber) {
    console.time(`time (async-file-${fileNumber})`);
    fs.writeFile(`async-test-${fileNumber}.txt`, 'Hello Node.js', (err) => {
        if (err) throw err;
        console.timeEnd(`time (async-file-${fileNumber})`);
    });
}


